import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ITodo } from "@/Interface"
import { Badge } from "./ui/badge"
import Todoactions from "./ui/Todoactions";


export default function TodoTable({ todos }: { todos: ITodo[] }) {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead >Id</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="flex items-center justify-center">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>{todo.completed ?
              <Badge>Completed</Badge> :
              <Badge variant={'secondary'}>Incompleted</Badge>
            }</TableCell>
            <TableCell className="flex items-center space-x-2 justify-center">
              <Todoactions id={todo.id}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}