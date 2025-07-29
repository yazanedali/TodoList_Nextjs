'use client'
import { Button } from "@/components/ui/button";
import { Pen, Plus } from "lucide-react";
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
import { createTodoAction, updateTodoAction } from "@/actions/todo.actions";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import Spinner from "./Spinner";
import { ITodo } from "@/Interface";



const EditTodoForm = ({ todo }: { todo: ITodo }) => {
    const [isOpen, setIsOpen] = useState(false)


    async function onSubmit({ title, body, completed }: z.infer<typeof formSchema>) {
        setLoading(true)
        await updateTodoAction({id: todo.id, title, body, completed})
        setIsOpen(false)
        setLoading(false)

        form.reset()
    }

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: todo.title,
            body: todo.body as string,
            completed: todo.completed
        },
        mode: "onChange"

    }
    )

    const [loading, setLoading] = useState(false);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button size={'icon'} >
                        <Pen size={16} />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Todo</DialogTitle>
                        <DialogDescription>
                            description about add title todo
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Todo Title" {...field} />
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

                                <FormField
                                    control={form.control}
                                    name="completed"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel>
                                                    Completed
                                                </FormLabel>
                                                <FormDescription>
                                                    Mark the task as completed.
                                                </FormDescription>
                                            </div>
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" disabled={loading}
                                >
                                    {loading ? (<><Spinner />Saving</>)
                                        :
                                        "Save"

                                    }
                                </Button>
                            </form>
                        </Form>
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default EditTodoForm
