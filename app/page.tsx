import AddTodoForm from "@/components/AddTodoForm";

export default function Home() {

// const formSchema = z.object({
//   title: z.string().min(2, {
//     message: "Title must be at least 2 characters.",
//   })
//   .max(50, {
//     message: "Title must not be longer than 50 characters.",
//   }),
//   body: z.string()
//   .max(80, {
//     message: "Body must not be longer than 80 characters.",
//   })
//   .optional(),
  
// })


//     function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values)
//   }

//   // 1. Define your form.
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       title: "",
//       body: "",
//     },
//     mode: "onChange"

//   }
// )


  // const todos = await getTodosAction();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddTodoForm/> 
    </main>
  );
}
