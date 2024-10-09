import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import {
  AppointmentCard,
  IncompleteAppointmentsCounter,
  SortToggle,
  WorkerFilter,
} from ".";
import { getSchedules } from "../interview-scheduling";

export const App = () => {
  const { data } = useQuery({
    queryKey: ["schedules"],
    queryFn: getSchedules,
  });

  useEffect(() => {
    if (data) {
      console.log("interview-scheduling/query.ts: getSchedules()", data);
    }
  }, [data]);

  return (
    <div className="min-h-svh">
      <div className="flex flex-row items-center p-4">
        <div className="text-xl text-gray-900">Essential Interview</div>
      </div>
      <div className="flex flex-row justify-end gap-10 mx-10">
        <IncompleteAppointmentsCounter count={0} />
        <div className="flex flex-grow" />
        <WorkerFilter />
        <SortToggle />
      </div>
      <div className="flex flex-col mx-4">
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {data?.map((d) => (
            <AppointmentCard
              key={`appointment-card-${d.workerId}-${d.start}`}
              workerId={d.workerId}
              customerId={d.customerId}
              customerName={d.customerName}
              address={d.address}
              start={d.start}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
