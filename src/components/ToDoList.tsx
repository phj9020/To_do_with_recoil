import { useRecoilState, useRecoilValue } from "recoil";
import { categoryAtom, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";



function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryAtom);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    const {currentTarget : {value}} = e;
    setCategory(value);
  }
  return (
    <div style={{width: "400px", margin: "50px auto"}}>
        <h1 style={{textAlign: "center", fontSize: "20px", textTransform:"uppercase"}}>HJP Trello</h1>
        <hr />
        <select value={category} onInput={onInput}>
          <option value="To_Do">할 일</option>
          <option value="Doing">진행 중</option>
          <option value="Done">완료</option>
        </select>
        <CreateToDo />
        <ul style={{marginTop: "30px"}}>
          {toDos?.map((todo) => <ToDo key={todo.id} {...todo}  />)}
        </ul>
    </div>
  )
}

export default ToDoList;