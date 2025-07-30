'use client'
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "@/schema";
import { updateTodoAction } from "@/actions/todo.actions";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import Spinner from "./Spinner";
import { ITodo } from "@/Interface";

const EditTodoForm = ({ todo }: { todo: ITodo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: todo.title,
      body: todo.body as string,
      completed: todo.completed
    },
    mode: "onChange"
  });

  async function onSubmit({title, body, completed}: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      await updateTodoAction({
        id: todo.id,
        title,
        body,
        completed
      });
      setIsOpen(false);
    } catch (error) {
      console.error("Failed to update todo:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size="icon" 
          variant="ghost"
          className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          aria-label="Edit task"
        >
          <Pen size={16} />
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px] md:max-w-[500px] lg:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-white">
            Edit Task
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300">
            Update your task details below
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
            <div className="grid gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      Task Title *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="What needs to be done?" 
                        {...field} 
                        className="text-lg py-2 px-4 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </FormControl>
                    <FormDescription className="text-sm text-gray-500 dark:text-gray-400">
                      Keep it short and descriptive.
                    </FormDescription>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      Details
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Add more details about the task..."
                        className="min-h-[120px] resize-none text-base py-2 px-4 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-sm text-gray-500 dark:text-gray-400">
                      Optional details to help you remember.
                    </FormDescription>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="completed"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-medium text-gray-700 dark:text-gray-200">
                        Mark as completed
                      </FormLabel>
                      <FormDescription className="text-sm text-gray-500 dark:text-gray-400">
                        Check this if you've already finished this task.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-end space-x-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading || !form.formState.isValid}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-2 text-white transition-colors disabled:opacity-70"
              >
                {loading ? (
                  <span className="flex items-center">
                    <Spinner className="mr-2" />
                    Updating...
                  </span>
                ) : "Update Task"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default EditTodoForm