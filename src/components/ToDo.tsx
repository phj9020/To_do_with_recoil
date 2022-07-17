import { IToDo } from '../atoms';

function ToDo({text, id, category}: IToDo) {
    return (
        <li>
            <span>{text}</span> 
            <button>Done</button>
            <button>Doing</button>
            <button>To Do</button>
        </li>
    )
}

export default ToDo