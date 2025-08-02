# 📝 ToDo App (Next.js + Clerk + Prisma + MongoDB)

A simple and secure full-stack ToDo application built using **Next.js**, **Clerk** for authentication, **Prisma ORM**, and **MongoDB**.  
Create, manage, and complete your personal todos with a clean and responsive UI that supports both **light** and **dark** themes.

---

## 🚀 Features

- 🔐 **User Authentication** using [Clerk](https://clerk.dev/)
- 📄 **Create / Edit / Delete** todos
- ✅ Mark todos as **complete** or **incomplete**
- 🖼️ Display todos in a **responsive table**
- 💡 Support for **Light / Dark / System** themes
- 🗃️ **MongoDB + Prisma** for modern database handling
- ⚡ Built with the power of **Next.js App Router**

---

## 🧪 Tech Stack

| Technology | Description |
|------------|-------------|
| [Next.js](https://nextjs.org/) | React Framework with SSR and routing |
| [Clerk](https://clerk.dev/) | Authentication (sign-up, sign-in, session management) |
| [Prisma](https://prisma.io/) | ORM for database handling |
| [MongoDB](https://www.mongodb.com/) | NoSQL Database |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [TypeScript](https://www.typescriptlang.org/) | Static type checking |


---

## 🛠️ Getting Started

First, clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

Install dependencies:

```bash
npm install
# or
yarn
```

Set up your environment variables:  
Create a `.env` file in the root with the following:

```env
DATABASE_URL=your_mongodb_connection_url
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

Run Prisma to generate the client:

```bash
npx prisma generate
```

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Prisma Schema Example

```prisma
model Todo {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  title     String
  body      String?
  completed Boolean  @default(false)
  userId    String
  createdAt DateTime @default(now())
}
```

---

## 📦 Deployment

You can easily deploy this app on [Vercel](https://vercel.com/) (recommended by Next.js):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Connect your repo and set the environment variables
4. Deploy with one click 🚀

---

## 🙌 Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.dev/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [MongoDB Docs](https://www.mongodb.com/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---
