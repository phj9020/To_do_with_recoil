import { useSetRecoilState } from 'recoil';
import { IToDo, toDoAtom } from '../atoms';

function ToDo({text, id, category}: IToDo) {
    const setToDos = useSetRecoilState(toDoAtom);
    const onClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget : {name}} = e;
        setToDos((oldToDos)=> {
            // Step1 : find target's index number
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            // Step2 : set newToDo with updated category("Doing", "To_Do", "Done") 
            const newToDo = {id, text, category: name as any}
            // Step4 : replace old oldToDo with newToDo
            const first = oldToDos.slice(0, targetIndex);
            const back = oldToDos.slice(targetIndex+1);
            
            return [...first, newToDo, ...back];
        })
    }
    return (
        <li style={{width:"100%", marginBottom:"20px", borderRadius:"5px", backgroundColor:"#cbb3ef", display: "flex", justifyContent: "space-between", padding:"20px"}}>
            <h3 style={{marginBottom:"10px", width:"60%", wordBreak: "break-word"}}>{text}</h3>
            <div style={{display:"flex", flexDirection: "column"}}>
                {category !== "Doing" && <button style={{outline: "none", border:"none", marginBottom:"5px"}} name="Doing" onClick={onClick}>진행중</button>}
                {category !== "To_Do" && <button style={{outline: "none", border:"none", marginBottom:"5px"}} name="To_Do" onClick={onClick}>할 일</button>}
                {category !== "Done" && <button style={{outline: "none", border:"none", marginBottom:"5px"}} name="Done" onClick={onClick}>완료</button>}
            </div>
        </li>
    )
}

export default ToDo