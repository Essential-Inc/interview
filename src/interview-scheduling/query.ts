import { appointmentMocks, sample } from "@/interview-scheduling/data";
import { Appointment } from "./types";

// export type TimeRange = {
//   // Inclusive of start
//   // Exclusive of end
//   start: Date;
//   end: Date;
// };
//
// export type WorkerAvailability = {
//   workerId: string;
//   workerName: string;
//   availabilities: TimeRange[];
// };
//
// export type CustomerPreference = {
//   customerId: string;
//   customerName: string;
//   address: string;
//   availabilities: TimeRange[];
// };
//
// export type Database = {
//   workers: WorkerAvailability[];
//   customers: CustomerPreference[];
// };
//
// export type Appointment = {
//   workerId: string;
//   customerId: string;
//   customerName?: string;
//   address: string;
//   start: Date;
//   end: Date;
// };

export const getSchedules = (): Appointment[] => {
  // TODO: Implement this function
  const {worker, customer} = sample;

  return appointmentMocks;
};
