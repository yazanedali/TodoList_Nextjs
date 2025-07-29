export interface ITodo {
    
    body: string | null;
    title: string;
    id: string;
    completed: boolean;
    user_id: string
    createdAt?: Date;

}