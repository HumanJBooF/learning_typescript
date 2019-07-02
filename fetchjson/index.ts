import axios from 'axios';
// using ts-node for compiling
// this is just a simple example of type checking with typescript

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const fetch = (url: string) =>
    axios.get(url)
        .then(res => {
            const { id, title, completed } = res.data as Todo;
            logTodo(id, title, completed)
        }).catch(err => console.log(err));


const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
            The Todo with ID: ${id}
            Has a title of: ${title}
            Is it finished? ${completed}
        `)
}

fetch(url);