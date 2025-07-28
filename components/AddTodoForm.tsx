'use client'
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
import { createTodoAction } from "@/actions/todo.actions";
import { useState } from "react";



const AddTodoForm = () => {
    const [isOpen, setIsOpen] = useState(false)


  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
    await createTodoAction({
      title: data.title,
      body: data.body,
    });
    setIsOpen(false)
    form.reset()
  }

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
    },
    mode: "onChange"

  }
)



  return (
       <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <form>
          <DialogTrigger asChild>
            <Button variant="default"> <Plus />Add To Do</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">

                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Body</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us a little bit about yourself"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          You can <span>@mention</span> other users and organizations.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                    <Button type="submit">Save changes</Button>
                </form>
              </Form>
            </div>
          </DialogContent>
        </form>
      </Dialog>
  )
}

export default AddTodoForm
