import { ArrowDownNarrowWideIcon, ArrowDownWideNarrowIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { ScheduleCard, ScheduleCardProps } from "./ScheduleCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import dayjs from "dayjs";
import { useEffect } from "react";

type SortOrder = "asc" | "desc";

const SortToggle = () => {
  const order: SortOrder = "asc";
  return (
    <div className="flex flex-row items-center space-x-2 cursor-pointer select-none">
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

const WorkerFilter = () => {
  return (
    <div className="flex flex-row items-center space-x-2 cursor-pointer select-none">
      <div className="text-sm text-gray-500">Filter by:</div>
      <Select onValueChange={(p) => console.log(p)}>
        <SelectTrigger>
          <SelectValue placeholder="Select Worker" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="one">Worker 1</SelectItem>
          <SelectItem value="two">Worker 2</SelectItem>
          <SelectItem value="three">Worker 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

const TodoCount = () => {
  const count = 1;
  return (
    <div className="text-2xl font-semibold text-gray-500">
      {count} {count === 1 ? "Task" : "Tasks"} To Do
    </div>
  );
};

const App = () => {
  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => (await fetch("http://localhost:9999/mocks")).json(),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="min-h-svh">
      <div className="sticky top-0 z-50 flex flex-row items-center p-4">
        <div className="text-xl text-gray-900">Essential Interview</div>
      </div>
      <div className="flex flex-row justify-end gap-10 mx-10">
        <TodoCount />
        <div className="flex flex-grow" />
        <WorkerFilter />
        <SortToggle />
      </div>
      <div className="flex flex-col mx-4">
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {data?.map((d: ScheduleCardProps) => <ScheduleCard {...d} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
