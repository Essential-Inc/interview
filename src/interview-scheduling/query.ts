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

  //// Example: If a worker's availability is from 10:00 - 12:00
  ////          it means the worker is available for 2 appointments
  ////          from 10:00 to 11:00 and 11:00 to 12:00
  ////          If a customer's availability is from 10:00 - 11:00
  ////          then we can book the worker's time for 10:00 - 11:00
  ////          and the customer is considered visited.

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
  // const { workers, customers } = sample;

  return appointmentMocks;
};
