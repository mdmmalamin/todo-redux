// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard, { TTodoCardProps } from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // const { todos } = useAppSelector((state) => state.todos); //! From Local State

  const [priority, setPriority] = useState("");

  const { data: todos, isLoading, isError } = useGetTodosQuery(priority); //* , { pollingInterval: 5000 }

  isLoading && <p>Loading...</p>;
  isError && <p>Something is wrong...</p>;
  return (
    <div>
      <div className="flex justify-between">
        <AddTodoModal />

        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>

      <div className="bg-primary-gradient w-full h-full rounded-xl p-1.5 space-y-2.5">
        <div className="bg-slate-200 w-full h-full p-5 space-y-2.5 rounded-lg">
          {!todos?.data?.length && (
            <div className="bg-slate-100 rounded-md text-xl font-bold flex justify-center items-center p-2.5">
              <p>There is no task pending</p>
            </div>
          )}
          {todos?.data?.map((todo: TTodoCardProps) => (
            <TodoCard {...todo} key={todo._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
