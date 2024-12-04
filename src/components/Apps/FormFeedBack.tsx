import Select, { SingleValue } from "react-select";
import makeAnimated from "react-select/animated";
import { feedbackForm, Tutor } from "../../shared/models/tutor.types";
import { Fragment, useMemo, useState } from "react";
import { ApiService } from "../../services/api.services";
import { useApi } from "../../shared/hooks/useApi";
import LoadingSpinner from "./LoadingSpinner";
import { CircleCheck } from "lucide-react";

interface TableProps {
  tutors: Tutor[];
  isLoadingTutors: boolean;
}

interface TutorOptions {
  value: number;
  label: string;
}

const FormFeedBack: React.FC<TableProps> = ({ tutors, isLoadingTutors }) => {
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const apiService = useMemo(
    () => new ApiService("http://localhost:3000/api/public"),
    []
  );

  const { sendFeedback, loading } = useApi<feedbackForm>(apiService, "/tutors");

  const [formData, setFormData] = useState({
    feedback: "",
  });
  console.log(formData);

  const optionsTutor = useMemo<TutorOptions[]>(() => {
    return tutors.map((tutor) => ({
      value: tutor.id,
      label: tutor.tutor_name,
    }));
  }, [tutors]);

  const handleTutorChange = (
    selected: SingleValue<{ value: number; label: string }>
  ) => {
    const selectedTutor = tutors.find((t) => t.id === selected!.value) || null;
    setSelectedTutor(selectedTutor);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedTutor) {
      return;
    }
    setIsSubmitting(true);
    try {
      await sendFeedback(selectedTutor.id, formData);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Select<TutorOptions>
          options={optionsTutor}
          onChange={handleTutorChange}
          isLoading={isLoadingTutors || loading}
          isDisabled={isLoadingTutors || loading}
          loadingMessage={() => "Cargando..."}
          noOptionsMessage={() => "No hay tutores disponibles"}
          placeholder={
            isLoadingTutors ? "Cargando tutores..." : "Selecciona un tutor"
          }
          className={`mt-4 ${isLoadingTutors || loading ? "opacity-80" : ""}`}
          classNamePrefix="select"
          components={makeAnimated()}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: "#5C0000",
              primary25: "#f8e5e5",
            },
          })}
          styles={{
            container: (provided) => ({
              ...provided,
              width: "30%",
            }),
            control: (provided) => ({
              ...provided,
              height: "3rem",
              borderRadius: "3px",
              border: "1px solid #e0e0e0",
              ":hover": {
                borderColor: "#5C0000",
              },
            }),
            menu: (provided) => ({
              ...provided,
              maxHeight: "15rem",
              overflowY: "auto",
              borderRadius: "3px",
              backgroundColor: "#f0f0f0",
              border: "1px solid #e0e0e0",
            }),
            valueContainer: (provided) => ({
              ...provided,
              overflow: "auto",
              maxHeight: "3rem",
            }),
            clearIndicator: (provided) => ({
              ...provided,
              color: "#000",
              ":hover": {
                color: "#8C4C4C",
                cursor: "pointer",
              },
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              color: "#000",
              ":hover": {
                color: "#8C4C4C",
                cursor: "pointer",
              },
            }),
          }}
        />
        <textarea
          name="Comentario"
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              feedback: e.target.value,
            }))
          }
          disabled={isLoadingTutors || loading || !selectedTutor}
          placeholder={`${
            !selectedTutor
              ? "Selecciona un tutor"
              : `Escribe tu comentario para  ${selectedTutor?.tutor_name}`
          }`}
          className={` ${
            isLoadingTutors || loading || !selectedTutor
              ? "opacity-80 cursor-not-allowed"
              : ""
          }`}
        />
        <button
          type="submit"
          className={`bg-[#5C0000] text-white py-3 px-12 rounded-xl
              font-semibold hover:bg-[#4A0000] transition-all duration-500 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-65
              ${isSuccess ? "w-[13%]" : "w-auto"}`}
          disabled={isSubmitting || isSuccess || !selectedTutor}
        >
          {isSubmitting ? (
            <LoadingSpinner size="lg" />
          ) : isSuccess ? (
            <CircleCheck className="animate-slide-in" size={32} />
          ) : (
            "Enviar"
          )}
        </button>
      </form>
    </Fragment>
  );
};

export default FormFeedBack;
