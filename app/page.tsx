import { getTodosAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import  TableTodo from "@/components/TodoTable";
export default async function Home() {
  const todos = await getTodosAction();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <AddTodoForm />
      <TableTodo todos={todos} />


    </main>
  );
}