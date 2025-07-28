'use server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getTodosAction = async () => {
    return await prisma.user.findMany();

};

export const createTodoAction = async () => {

};

export const updateTodoAction = async () => {

};

export const deleteTodoAction = async () => {}
