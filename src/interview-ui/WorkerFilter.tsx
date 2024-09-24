import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export const WorkerFilter = () => {
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
