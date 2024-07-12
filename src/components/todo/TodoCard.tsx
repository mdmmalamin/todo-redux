// import { useAppDispatch } from "@/redux/hook";
import Edit from "../svg/Edit";
import Trash from "../svg/Trash";
import { Button } from "../ui/button";
// import { removeTodo, toggleCompleted } from "@/redux/features/todoSlice";
import { useRemoveTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";

export type TTodoCardProps = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({
  _id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  // const dispatch = useAppDispatch();
  const [removeTodo, { data, isLoading, isError, isSuccess }] =
    useRemoveTodoMutation();

  const [updateTodo] = useUpdateTodoMutation();

  const toggleState = () => {
    const updateTaskData = {
      title,
      description,
      priority,
      isCompleted: !isCompleted,
    };

    const options = {
      id: _id,
      data: updateTaskData,
    };

    updateTodo(options);

    // dispatch(toggleCompleted(id));
  };
  return (
    <div
      className={`bg-slate-100 rounded-md flex justify-between items-center p-2.5 ${
        isCompleted && "line-through"
      } transform duration-700`}
    >
      <input
        className="mx-2.5"
        onChange={toggleState}
        type="checkbox"
        name="complete"
        id="complete"
        defaultChecked={isCompleted}
      />
      <p className="font-semibold flex-1">{title}</p>
      <div className="flex-1 flex gap-2.5 items-center">
        <div
          className={`size-2.5 rounded-full ${
            (priority === "high" && "bg-red-500") ||
            (priority === "medium" && "bg-yellow-500") ||
            (priority === "low" && "bg-green-500")
          }`}
        ></div>
        <p className="capitalize text-xs font-semibold">{priority}</p>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-600">Done</p>
        ) : (
          <p className="text-red-600">Pending</p>
        )}
      </div>
      <p className="flex-[2]">{description}</p>
      <div className="space-x-5">
        <Button onClick={() => removeTodo(_id)} className="bg-red-500">
          <Trash />
        </Button>
        <Button className="bg-purple-500">
          <Edit />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
