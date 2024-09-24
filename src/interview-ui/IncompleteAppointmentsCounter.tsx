export const IncompleteAppointmentsCounter = () => {
  const count = 1;
  return (
    <div className="text-2xl font-semibold text-gray-500">
      {count} Incomplete Appointment{count === 1 ? "" : "s"}
    </div>
  );
};
