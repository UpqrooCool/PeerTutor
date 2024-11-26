import Select, { SingleValue } from "react-select";
import makeAnimated from "react-select/animated";
import { Tutor } from "../../shared/models/tutor.types";
import { useMemo, useState } from "react";

interface TableProps {
  tutors: Tutor[];
  isLoadingTutors: boolean;
}

interface TutorOptions {
  value: number;
  label: string;
}

const SelectTutor: React.FC<TableProps> = ({ tutors, isLoadingTutors }) => {

  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);

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

  return (
    <Select<TutorOptions>
      options={optionsTutor}
      onChange={handleTutorChange}
      isLoading={isLoadingTutors}
      isDisabled={isLoadingTutors}
      loadingMessage={() => "Cargando..."}
      noOptionsMessage={() => "No hay tutores disponibles"}
      placeholder={
        isLoadingTutors ? "Cargando tutores..." : "Selecciona un tutor"
      }
      className={`mt-4 ${isLoadingTutors ? "opacity-80" : ""}`}
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
  );
};

export default SelectTutor;