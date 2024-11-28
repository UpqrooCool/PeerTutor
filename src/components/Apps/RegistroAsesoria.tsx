import { Tutor } from "../../shared/models/tutor.types";
import LoadingSpinner from "./LoadingSpinner";
import { CircleCheck } from "lucide-react";
import React, { useMemo, useState } from "react";
import Select, { SingleValue } from "react-select";
import makeAnimated from "react-select/animated";
import { validateGroup, validateName } from "../../shared/helpers/validators";
import { DayOfWeek, Log } from "../../shared/models/log.types";
import { formatTime } from "../../shared/helpers/formatTime";

interface FormRegistroProps {
  tutors: Tutor[];
  isLoadingTutors: boolean;
  isCreating: boolean;
  onCreate: (log: Partial<Log>) => void;
}

interface tutorOption {
  value: number;
  label: string;
}
interface subjectOption {
  value: number;
  label: string;
}

const MORNING_HOURS = [
  "7:00 a.m.",
  "8:00 a.m.",
  "9:00 a.m.",
  "10:00 a.m.",
  "11:00 a.m.",
  "12:00 p.m.",
  "1:00 p.m.",
];
const EVENING_HOURS = [
  "2:00 p.m.",
  "3:00 p.m.",
  "4:00 p.m.",
  "5:00 p.m.",
  "6:00 p.m.",
  "7:00 p.m.",
  "8:00 p.m.",
  "9:00 p.m.",
];

const DAYS: DayOfWeek[] = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

const RegistroAsesorias: React.FC<FormRegistroProps> = ({
  tutors,
  isLoadingTutors,
  onCreate,
  isCreating,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [SelectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [subjects, setSubjects] = useState<subjectOption[]>([]);

  const [formData, setFormData] = useState({
    student_name: "",
    student_group: "",
    tutor_id: 0,
    subject_id: 0,
    status: "pending" as const,
    schedules: {
      day: null as DayOfWeek | null,
      hour: null as string | null,
    },
  });


  const [errors, setErrors] = useState({
    student_name: "",
    student_group: "",
    tutor_id: "",
    subject_id: "",
    schedule: "",
  });

  const optionsTutor = useMemo<tutorOption[]>(() => {
    return tutors.map((tutor) => ({
      value: tutor.id,
      label: tutor.tutor_name,
    }));
  }, [tutors]);

  const getScheduleHours = () => {
    if (!SelectedTutor) return [];
    return SelectedTutor.shift === "matutino" ? MORNING_HOURS : EVENING_HOURS;
  };


  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      student_name: value,
    }));
    setErrors((prev) => ({
      ...prev,
      student_name: validateName(value) ? "" : "Nombre inválido",
    }));
  };

  const handleGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      student_group: value,
    }));
    setErrors((prev) => ({
      ...prev,
      student_group: validateGroup(value) ? "" : "Grupo inválido",
    }));
  };

  const handleTutorChange = (
    selected: SingleValue<{ value: number; label: string }>
  ) => {
    const selectedTutor = tutors.find((t) => t.id === selected!.value) || null;
    setSelectedTutor(selectedTutor);
    setFormData((prev) => ({
      ...prev,
      tutor_id: selected!.value,
      schedules: {day: null, hour: null}
    }));

    if (selectedTutor) {
      const subjectsForTutor = selectedTutor.subjectIds
        .filter(
          (subject) =>
            subject.id !== undefined && subject.subject_name !== undefined
        )
        .map((subject) => ({
          value: subject.id!,
          label: subject.subject_name!,
        }));
      setSubjects(subjectsForTutor);
    } else {
      setSubjects([]);
    }
  };

  const handleSubjectChange = (
    selected: SingleValue<{ value: number; label: string }>
  ) => {
    setFormData((prev) => ({
      ...prev,
      subject_id: selected!.value,
    }));
  };

  const handleScheduleSelect = (day: DayOfWeek, hour: string) => {
    const cellId = `${day}-${hour}`;
    const newTime = formatTime(hour);
    setSelectedCell((prevSelected) =>
      prevSelected === cellId ? null : cellId
    );
    setFormData((prev) => ({
      ...prev,
      schedules: {
        day: selectedCell === cellId ? null : day,
        hour: selectedCell === cellId ? null : newTime,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.schedules.day || !formData.schedules.hour) {
      setErrors((prev) => ({
        ...prev,
        schedule: "Por favor seleccione un horario",
      }));
      return;
    }

    setIsSubmitting(true);
    try {
      await onCreate(formData);
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
    <div className="flex w-full items-center justify-center p-6">
      <div className="bg-[#ffa22b] rounded-3xl p-12 w-full max-w-4xl shadow-xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-2xl font-bold text-[#500000] mb-4">
              Nombre Completo
            </label>
            <input
              value={formData.student_name}
              onChange={handleNameChange}
              type="text"
              placeholder="Ej. Patricio Hernández de la Rosa"
              className="w-full p-3 rounded-xl bg-white border-2 border-orange-300 focus:border-orange-500  outline-none transition"
            />
          </div>
          {errors.student_name && (
            <span className="mt-4 text-red-500 text-lg">
              {errors.student_name}
            </span>
          )}
          <div>
            <label className="block text-2xl font-bold text-[#500000] mb-4">
              Grupo
            </label>
            <input
              value={formData.student_group}
              onChange={handleGroupChange}
              type="text"
              placeholder="Ej. 23HM"
              className="w-full p-3 rounded-xl bg-white border-2 border-orange-300 focus:border-orange-500 outline-none transition"
            />
          </div>
          {errors.student_group && (
            <span className="text-red-500 text-lg">{errors.student_group}</span>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-2xl font-bold text-[#500000] mb-2">
                Tutor
              </label>
              <Select<tutorOption>
                options={optionsTutor}
                onChange={handleTutorChange}
                isLoading={isLoadingTutors || isCreating}
                isDisabled={isLoadingTutors || isCreating}
                loadingMessage={() => "Cargando..."}
                noOptionsMessage={() => "No hay tutores disponibles"}
                placeholder={
                  isLoadingTutors
                    ? "Cargando tutores..."
                    : "Selecciona un tutor"
                }
                className={`mt-4 ${
                  isLoadingTutors || isCreating ? "opacity-80" : ""
                }`}
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
                    width: "80%",
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
            </div>

            <div>
              <label className="block text-2xl font-bold text-[#500000] mb-2">
                Materia
              </label>
              <Select<subjectOption>
                options={subjects}
                onChange={handleSubjectChange}
                isLoading={isLoadingTutors || isCreating || !SelectedTutor}
                isDisabled={isLoadingTutors || isCreating || !SelectedTutor}
                noOptionsMessage={() => "No hay materias disponibles"}
                loadingMessage={() => "Cargando..."}
                placeholder={
                  isLoadingTutors || !SelectedTutor
                    ? "Selecciona un tutor primero"
                    : "Selecciona una materia"
                }
                className={`mt-4 ${
                  isLoadingTutors || !SelectedTutor || isCreating
                    ? "opacity-80"
                    : ""
                }`}
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
                    width: "80%",
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
            </div>
          </div>

          <div>
            <label className="block text-2xl font-bold text-[#500000] mb-4">
              Horarios
            </label>
            {SelectedTutor ? (
              <div className="bg-white rounded-xl p-8 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-2 text-left">Inicio</th>
                      {DAYS.map((day) => (
                        <th key={day} className="p-8 text-center">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {getScheduleHours().map((hour) => (
                      <tr key={hour}>
                        <td className="p-1">{hour}</td>
                        {DAYS.map((day) => (
                          <td
                            key={`${day}-${hour}`}
                            className="p-2 text-center"
                          >
                            <button
                              type="button"
                              onClick={() => handleScheduleSelect(day, hour)}
                              className={`w-8 h-8 transition-colors ${
                                selectedCell === `${day}-${hour}`
                                  ? "bg-orange-500 text-white"
                                  : "bg-gray-200 hover:bg-orange-500"
                              }`}
                            >
                              <span className="sr-only">
                                Seleccionar {day} {hour}
                              </span>
                            </button>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center p-4 bg-gray-100 rounded-xl">
                Selecciona un tutor para ver los horarios disponibles
              </div>
            )}
          </div>
          <div className="flex flex-row items-center justify-between">
            <hr className="w-[14%] border-4 border-[#5C0000]" />
            <p className="text-base">
              Esta accion te añadira a una lista de asistencia
            </p>
            <hr className="w-[14%] border-4 border-[#5C0000]" />

            <button
              type="submit"
              className={`bg-[#5C0000] text-white py-3 px-6 rounded-xl
              font-semibold hover:bg-[#4A0000] transition-all duration-500 flex items-center justify-center cursor-pointer
              ${isSuccess ? "w-[13%]" : "w-auto"}`}
              disabled={isSubmitting || isSuccess}
            >
              {isSubmitting ? (
                <LoadingSpinner size="lg" />
              ) : isSuccess ? (
                <CircleCheck className="animate-slide-in" size={32} />
              ) : (
                "Registrarme"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistroAsesorias;
