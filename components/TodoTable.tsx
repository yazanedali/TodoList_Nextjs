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
    <div className="rounded-lg border shadow-sm overflow-hidden dark:border-gray-800">
      <div className="overflow-x-auto">
        <Table className="min-w-full">
          <TableCaption className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {todos.length ? `Showing ${todos.length} task(s)` : 'No tasks available'}
          </TableCaption>
          
          <TableHeader className="bg-gray-50 dark:bg-gray-800">
            <TableRow>
              <TableHead className="w-[100px] sm:w-[80px] py-3 px-2 sm:px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                ID
              </TableHead>
              <TableHead className="py-3 px-2 sm:px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Title
              </TableHead>
              <TableHead className="py-3 px-2 sm:px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </TableHead>
              <TableHead className="w-[130px] sm:w-[120px] py-3 px-2 sm:px-4 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          
          <TableBody className="divide-y divide-gray-200 dark:divide-gray-700">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <TableRow key={todo.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <TableCell className="py-3 px-2 sm:px-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                    <div className="truncate max-w-[80px] sm:max-w-none" title={todo.id}>
                      {todo.id}
                    </div>
                  </TableCell>
                  <TableCell className="py-3 px-2 sm:px-4 text-sm text-gray-700 dark:text-gray-300">
                    <div className="line-clamp-1" title={todo.title}>
                      {todo.title}
                    </div>
                  </TableCell>
                  <TableCell className="py-3 px-2 sm:px-4">
                    {todo.completed ? (
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs">
                        Done
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 text-xs">
                        Pending
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="py-3 px-2 sm:px-4 flex justify-center space-x-1 sm:space-x-2">
                    <Todoactions todo={todo} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
                  You don&apos;t have any tasks yet. Start by adding one!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          
          {todos.length > 0 && (
            <TableFooter className="bg-gray-50 dark:bg-gray-800">
              <TableRow>
                <TableCell colSpan={3} className="py-2 px-2 sm:px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Total Tasks
                </TableCell>
                <TableCell className="py-2 px-2 sm:px-4 text-right text-sm font-medium text-gray-900 dark:text-gray-100">
                  {todos.length}
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </div>
    </div>
  )
}