export const IncompleteAppointmentsCounter = ({ count }: { count: number }) => {
  return (
    <div className="text-2xl font-semibold text-gray-500">
      {count} Incomplete Appointment{count === 1 ? "" : "s"}
    </div>
  );
};
