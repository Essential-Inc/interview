# Essential Interview

You are writing a scheduling app that schedules workers and customers based on the workers' and customers' availability.

**You are welcome to use any tools at your disposal to solve this problem set**

## Tasks

### Appointments UI

> Located in **`src/interview-ui/*.tsx`**

We will be working with the following `Appointment` struct:

```typescript
export type Appointment = {
  workerId: string;
  customerId: string;
  customerName?: string;
  address: string;
  start: Date;
  end: Date;
};
```

The data contained in the `Appointment` struct will be displayed in a simple scheduling app.

The app must have the following capabilities:

1. `SortToggle` should allow the user to sort the appointments by the `start` date, toggling between ascending and descending order.
2. `WorkerFilter` should allow the user to select a particular worker they'd like to filter the schedule by.
3. `AppointmentCard`s are togglable onClick. When clicked, they toggle their `isCompleted` status.
4. `IncompleteAppointmentsCounter` should give a count of all the appointments that are incomplete. The count should respect the `WorkerFilter` and the `isCompleted` status of the `AppointmentCard`. Meaning, if the worker filter removes some appointments from the display, then the `IncompleteAppointmentsCounter` will decrease and if an `AppointmentCard` is toggled as `isCompleted`, then the `IncompleteAppointmentsCounter` will also decrease.

### Scheduling Appointments

Located in **`src/interview-scheduling/query.ts`**

The first task to complete is the scheduling of workers and customers.

The data structure describing availability is a list of
`TimeRange` structs,
which describes the start and end of a range of time that
an individual is available.

If there is at least a 1 hour overlap between any time ranges
for a worker and a customer,
then an appointment can be scheduled for that overlap period.

All appointments are exactly 1 hour long.
Customers need to be visited only one time by any worker and a
single worker can not visit multiple customers at the same time.

```
Example: If a worker's availability is from 10:00 - 12:00
         it means the worker is available for 2 appointments
         from 10:00 to 11:00 and 11:00 to 12:00
         If a customer's availability is from 10:00 - 11:00
         then we can book the worker's time for 10:00 - 11:00
         and the customer is considered visited.
```

Please create a pseudo code solution that would generate a list of
the appointments that have been scheduled between
the workers and customers, based on the time availabilities.
