import { getTodosAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TableTodo from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";
export default async function Home() {

  const { userId } = await auth()
  const todos = await getTodosAction({ user_id: userId });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddTodoForm userId={userId} />
      <TableTodo todos={todos} />
    </main>
  );
}