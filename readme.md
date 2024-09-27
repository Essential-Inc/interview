# Essential Interview

You are writing a scheduling app that schedules workers and customers based on the workers' and customers' availability.

**You are welcome to use any tools at your disposal to solve this problem set**

## Tasks

### Scheduling Appointments

Located in **`src/interview-scheduling/query.ts`**

The first task to complete is the scheduling of workers and customers.

The data structure describing availability is a list of `TimeRange` structs, which describes the start and end of a range of time that an individual is available.

If there is at least a 1 hour overlap between any time ranges for a worker and a customer, then an appointment can be scheduled for that overlap period.

All appointments are exactly 1 hour long.

Customers need to be visited only one time by any worker and a single worker can not visit multiple customers at the same time.

Please generate a list of `Appointment` structs that indicate all the appointments that have been scheduled between the workers and customers.

#### Validating Output

Output can be seen inside of the Javascript Debug Console inside of your browser when you run the React project.

```
npm run dev
```

### Appointments UI

Located in **`src/interview-ui/*.tsx`**

For the `Appointment` struct, we would like to display it in a simple scheduling app.

The app must have the following capabilities:

1. `AppointmentCard`s are togglable onClick. When clicked, they toggle their `isCompleted` status.
2. `IncompleteAppointmentsCount` should give a count of all the appointments that are incomplete.
3. `SortToggle` should allow the user to sort the appointments by the `start` date, toggling between ascending and descending order.
4. `WorkerFilter` should allow the user to select a particular worker they'd like to filter the schedule by.
