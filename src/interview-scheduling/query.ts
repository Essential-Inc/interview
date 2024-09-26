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

  // The first task to complete is the scheduling of employees and customers.
  // The data structure describing availability is a list of `TimeRange` structs,
  // which describes the start and end of a range of time that an individual is available.

  // If there is at least a 1 hour overlap between any time ranges for an employee and a customer,
  // then an appointment can be scheduled for that overlap period.

  // All appointments are exactly 1 hour long.
  // Customers need to be visited only one time by any employee and a
  // single employee can not visit multiple customers at the same time.

  // Please generate a list of `Appointment` structs that indicate all
  // the appointments that have been scheduled between the employees and customers.

  const {worker, customer} = sample;

  return appointmentMocks;
};
