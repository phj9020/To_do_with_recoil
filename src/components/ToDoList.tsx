import { useRecoilValue } from "recoil";
import { toDoAtom } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";



function ToDoList() {
  // get only stateValue in recoil
  const toDos = useRecoilValue(toDoAtom);
  console.log(toDos);
  return (
    <div style={{width: "400px", margin: "50px auto"}}>
        <h1 style={{textAlign: "center", fontSize: "20px", textTransform:"uppercase"}}>HJP Trello</h1>
        <hr />
        <CreateToDo />
        <ul style={{marginTop: "30px"}}>
          {toDos.map((todo) => <ToDo key={todo.id} {...todo}  />)}
        </ul>
    </div>
  )
}

export default ToDoList;