import { appointmentMocks, sample, large } from "@/interview-scheduling/data";
import { Appointment } from "./types";

//// --------------
//// NOTE: Type Reference for your Convenience
//// export type TimeRange = {
////   // Inclusive of start
////   // Exclusive of end
////   start: Date;
////   end: Date;
//// };
////
//// export type Worker = {
////   workerId: string;
////   workerName: string;
////   availabilities: TimeRange[];
//// };
////
//// export type Customer = {
////   customerId: string;
////   customerName: string;
////   address: string;
////   availabilities: TimeRange[];
//// };
////
//// export type Database = {
////   workers: Worker[];
////   customers: Customer[];
//// };
////
//// export type Appointment = {
////   workerId: string;
////   customerId: string;
////   customerName?: string;
////   address: string;
////   start: Date;
////   end: Date;
//// };
//// --------------

export const getSchedules = (): Appointment[] => {
  //// --------------
  //// TODO: Implement this function
  //// The data structure describing availability is a list of
  //// `TimeRange` structs,
  //// which describes the start and end of a range of time that
  //// an individual is available.

  //// If there is at least a 1 hour overlap between any time ranges
  //// for a worker and a customer,
  //// then an appointment can be scheduled for that overlap period.

  //// All appointments are exactly 1 hour long.
  //// Customers need to be visited only one time by any worker and a
  //// single worker can not visit multiple customers at the same time.

  //// Please generate a list of `Appointment` structs that indicate all
  //// the appointments that have been scheduled between
  //// the workers and customers.

  //// Output can be seen inside of the Javascript Debug Console
  //// inside of your browser when you run the React project.

  //// `npm run dev`
  //// --------------

  // Large data to test on a full solution
  // const {workers, customers} = large;

  // Sample data to develop an initial solution
  const { workers, customers } = sample;

  return appointmentMocks;
};
