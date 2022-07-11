import { useForm } from "react-hook-form";

interface IForm {
  toDo : string;
}

function ToDoList() {
  const {register, handleSubmit, formState : {errors}} = useForm<IForm>();
  
  const onValid = (data : any) => {console.log(data)};
  console.log(errors)
  return (
    <div>
        <form onSubmit={handleSubmit(onValid)}>
          <input {...register("toDo", { required: "필수 입력값입니다", minLength: {value:4, message:"4자 이상 할 일을 입력해주세요"} })} placeholder="Write a to do" />
            <span style={{color:"red"}}>{errors?.toDo?.message}</span>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default ToDoList;