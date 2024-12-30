import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import dayjs from "dayjs";

import {
  ArrowDownNarrowWideIcon,
  ArrowDownWideNarrowIcon,
  CircleCheckIcon,
  CircleIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Appointment, getSchedules } from "@/interview-scheduling";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

type SortOrder = "asc" | "desc";

const SortToggle = ({
  order,
  onClick,
}: {
  order: SortOrder;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-row items-center space-x-2 cursor-pointer select-none"
    >
      <div className="text-sm text-gray-500">Sort by:</div>
      <div className="flex flex-row items-center space-x-2">
        <div className="text-sm text-gray-900">Date</div>
        {order === "asc" ? (
          <ArrowDownNarrowWideIcon />
        ) : (
          <ArrowDownWideNarrowIcon />
        )}
      </div>
    </div>
  );
};

const WorkerFilter = ({
  onSelect,
}: {
  onSelect: (workerId: string) => void;
}) => {
  return (
    <div className="flex flex-row items-center space-x-2 cursor-pointer select-none">
      <div className="text-sm text-gray-500">Filter by:</div>
      <Select onValueChange={onSelect}>
        <SelectTrigger>
          <SelectValue placeholder="None" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="None">None</SelectItem>
          <SelectItem value="666666">666666</SelectItem>
          <SelectItem value="777777">777777</SelectItem>
          <SelectItem value="888888">888888</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

const AppointmentCard = ({
  appointment,
  isCompleted,
  onClick,
}: {
  appointment: Appointment;
  isCompleted: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "transition-colors duration-200 ease-in-out",
        "max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 w-72 select-none cursor-pointer",
        isCompleted ? "bg-gray-300" : "bg-white",
      )}
    >
      <div className="p-4">
        <div className="flex flex-row justify-between my-4">
          <div className="flex flex-col items-start">
            <div>
              Time: {dayjs(appointment.start).format("YYYY-MM-DD HH:00")}
            </div>
          </div>
          <div>{isCompleted ? <CircleCheckIcon /> : <CircleIcon />}</div>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-lg font-semibold text-gray-800">
            Worker ID: {appointment.workerId}
          </div>
          <div className="flex flex-col items-start">
            <div className="text-gray-600 mt-2 font-semibold">
              Customer Name:
            </div>
            <div>{appointment.customerName}</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-gray-600 mt-2 font-semibold">
              Customer Address:
            </div>
            <div>{appointment.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const IncompleteAppointmentsCounter = ({ count }: { count: number }) => {
  return (
    <div className="text-2xl font-semibold text-gray-500">
      {count} Incomplete Appointment{count === 1 ? "" : "s"}
    </div>
  );
};

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
        <WorkerFilter
          onSelect={(workerFilterSelection) =>
            console.log(workerFilterSelection)
          }
        />
        <SortToggle order={"desc"} />
      </div>
      <div className="flex flex-col mx-4">
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {data?.map((appointment) => (
            <AppointmentCard
              key={`appointment-card-${appointment.workerId}-${appointment.start}`}
              isCompleted={false}
              appointment={appointment}
              onClick={() => console.log(appointment)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
