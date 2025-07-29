'use server'
import { PrismaClient } from '@prisma/client'
import { error } from 'console';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient()

export const getTodosAction = async ({user_id}: {user_id: string | null}) => {
      if (!user_id) {
    return [];
  }
    return await prisma.todo.findMany({
        where: {
            user_id: user_id as string
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

};

export const createTodoAction = async ({ title, body, completed, user_id }: { title: string; body?: string | undefined; completed: boolean; user_id: string}) => {
    await prisma.todo.create({
        data: {
            title,
            body,
            completed,
            user_id: user_id as string
        },
    });
    revalidatePath("/")
};

export const updateTodoAction = async ({ id, title, body, completed }: { id: string; title: string; body?: string | undefined; completed: boolean }) => {
    await prisma.todo.update({
        where: {
            id,
        },
        data: {
            body,
            title,
            completed
        }
    });
        revalidatePath("/")
};

export const deleteTodoAction = async ({ id }: { id: string }) => {
    await prisma.todo.delete({
        where: {
            id
        }
    });
    revalidatePath("/")
}
