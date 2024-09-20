import { CircleCheckIcon, CircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ScheduleCardProps = {
  workerId: string;
  customerAddress: string;
  customerName: string;
  startTime: string;
};

export const ScheduleCard = ({
  workerId,
  customerAddress,
  customerName,
  startTime,
}: ScheduleCardProps) => {
  const isCompleted = false;

  return (
    <div
      className={cn(
        "transition-colors duration-200 ease-in-out",
        "max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 w-72 select-none cursor-pointer",
        isCompleted ? "bg-gray-300" : "bg-white",
      )}
    >
      <div className="p-4">
        <div className="flex flex-row justify-between my-4">
          <div className="flex flex-col items-start">
            <div>{startTime}</div>
          </div>
          <button>{isCompleted ? <CircleCheckIcon /> : <CircleIcon />}</button>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-lg font-semibold text-gray-800">
            Worker ID: {workerId}
          </div>
          <div className="flex flex-col items-start">
            <div className="text-gray-600 mt-2 font-semibold">
              Customer Name:
            </div>
            <div>{customerName}</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-gray-600 mt-2 font-semibold">
              Customer Address:
            </div>
            <div>{customerAddress}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
