import { useState } from "react";

export function FormCreateTask(params) {
    const {addTaskCallback} =params;
    const [task, setTask] = useState('');
    const [about, setAbout] = useState('');
    const [price, setPrice] = useState(0);
    const [color, setColor] = useState('#ff0000');

    function handleFormSubmit(e) {
        e.preventDefault();

        if (task.trim() === "") {
            return;
        }
        addTaskCallback(task,about,price,color);
    }
   

    return (
        <form onSubmit={handleFormSubmit}>
            <input onChange={e=>setTask(e.target.value)} value={task} type="text"/>
            <input onChange={e=>setAbout(e.target.value)} value={about} type="about"/>
            <input onChange={e=>setPrice(e.target.value)} value={price} type="sum"/>
            <input onChange={e=>setColor(e.target.value)} value={color} type="color" />
            <button type="submit">Create task</button>
        </form>
    );
}