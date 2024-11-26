import { BaseEntity } from "./api.types";

type Status = 'accepted' | 'cancelled' | 'pending';
export type DayOfWeek = 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes';

export interface Schedule {
    day: DayOfWeek;
    hour: string;
}

export interface Log extends BaseEntity {
    student_name: string;
    student_group: string;
    tutor_id: number;
    subject_id: number;
    status: Status;
    schedule: Schedule;
}