'use client'
import React, { useState } from 'react'
import { Button } from './button'
import { Pen, Trash } from 'lucide-react'
import Spinner from '../Spinner'
import { deleteTodoAction } from '@/actions/todo.actions'

const Todoactions = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Button size={'icon'} >
                <Pen size={16} />
            </Button>
            <Button size={'icon'} variant="destructive"
                onClick={
                    async () => {
                        setLoading(true)
                        await deleteTodoAction(id)
                        setLoading(false)

                    }
                    
                }>
                {loading ? <Spinner /> : <Trash size={16} />}

            </Button>
        </>
    )
}

export default Todoactions
