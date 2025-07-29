'use client'
import React, { useState } from 'react'
import { Button } from './button'
import { Pen, Trash, Trash2 } from 'lucide-react'
import Spinner from '../Spinner'
import { deleteTodoAction } from '@/actions/todo.actions'
import EditTodoForm from '../EdittodoForm'
import { ITodo } from '@/Interface'

const Todoactions = ({ todo }: { todo: ITodo }) => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <EditTodoForm todo={todo} />
            <Button size={'icon'} variant="destructive"
                onClick={
                    async () => {
                        setLoading(true)
                        await deleteTodoAction({id: todo.id})
                        setLoading(false)
                    }
                }>
                {loading ? <Spinner /> : <Trash2 size={16} />}
            </Button>
        </>
    )
}
export default Todoactions
