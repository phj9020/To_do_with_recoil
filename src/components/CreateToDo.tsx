import React from 'react';
import { useForm } from 'react-hook-form';
import { IForm } from '../interface';
import { toDoAtom } from '../atoms';
import { useSetRecoilState } from 'recoil';

function CreateToDo() {
    // method 1 : recoil [getState, modifyFn] = useRecoilState(Atom)
    // method 2 : recoil const modifyFn = useSetRecoilState(Atom)
    // method 2 : recoil const getState = useRecoilValue(Atom)
    const setToDos = useSetRecoilState(toDoAtom);  
    // react-hook-form fn  
    const {register, handleSubmit, setValue, formState : {errors}} = useForm<IForm>();
  
    const onValid = (data: IForm) => {
        setToDos((oldToDos) => [{
            id: Date.now(),
            text: data.toDo,
            category: "To_Do"
        }, ...oldToDos]);
        // input 초기화 react-hook-form
        setValue("toDo","")
    }

    return (
        <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
        <h1 style={{margin:"20px 0px"}}>할 일을 작성해주세요</h1>
        <input style={{padding:"10px"} }{...register("toDo", { required: "필수 입력값입니다", minLength: {value:4, message:"4자 이상 할 일을 입력해주세요"} })} placeholder="Write a to do" />
        <span style={{color:"red", fontSize:"12px", marginTop:"5px"}}>{errors?.toDo?.message}</span>
        <button style={{marginTop:"20px", padding:"10px", cursor: "pointer", backgroundColor:"skyblue", border:"none", color:"white", fontWeight:"bold"}} type="submit">Add</button>
    </form>
    )
}

export default CreateToDo;