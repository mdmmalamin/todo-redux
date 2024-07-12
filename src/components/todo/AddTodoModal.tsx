import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
// import { useAppDispatch } from "@/redux/hook";
// import { addTodo } from "@/redux/features/todoSlice";
import { useAddTodoMutation } from "@/redux/api/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  // const dispatch = useAppDispatch(); //! For Local State

  const [addTodo, { data, isLoading, isError, isSuccess }] =
    useAddTodoMutation(); //* For Server
  //? [actualFnForPost, {data, isLoading, isError}]
  console.log({ data, isLoading, isError, isSuccess });

  const onSubmitTask = (e: FormEvent) => {
    e.preventDefault();

    // const randomID = Math.random().toString(36).substring(2, 10);

    const taskDetails = {
      // id: randomID,
      title: task,
      description: description,
      isCompleted: false,
      priority: priority,
    };
    // dispatch(addTodo(taskDetails)); //! For Local State

    //* For Server
    addTodo(taskDetails);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold my-5">
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your tasks that you want to finish.{" "}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmitTask} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input
              onBlur={(e) => setTask(e.target.value)}
              id="task"
              placeholder="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              onBlur={(e) => setDescription(e.target.value)}
              className="col-span-3"
              placeholder="Type your message here."
              id="description"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Priority
            </Label>
            <Select onValueChange={(value) => setPriority(value)}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select task priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Create Task</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
