import { useRecoilValue } from "recoil";
import { toDoAtom, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";



function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
 
  return (
    <div style={{width: "400px", margin: "50px auto"}}>
        <h1 style={{textAlign: "center", fontSize: "20px", textTransform:"uppercase"}}>HJP Trello</h1>
        <hr />
        <CreateToDo />
        <div style={{marginTop:"20px"}}>
          <h2>할 일</h2>
          <ul style={{marginTop: "30px"}}>
            {toDo.map((todo) => <ToDo key={todo.id} {...todo}  />)}
          </ul>
          <hr/>
          <h2>진행 중</h2>
          <ul style={{marginTop: "30px"}}>
            {doing.map((doing) => <ToDo key={doing.id} {...doing}  />)}
          </ul>
          <hr/>
          <h2>완료</h2>
          <ul style={{marginTop: "30px"}}>
            {done.map((done) => <ToDo key={done.id} {...done}  />)}
          </ul>
        </div>

    </div>
  )
}

export default ToDoList;