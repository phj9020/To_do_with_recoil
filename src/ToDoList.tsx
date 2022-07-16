import { useForm } from "react-hook-form";

interface IForm {
  toDo : string;
  firstName : string;
  password: string;
  confirmPassword: string;
  extraError?: string;
}

function ToDoList() {
  const {register, handleSubmit, formState : {errors}, setError} = useForm<IForm>();
  console.log(errors)
  const onValid = (data : IForm) => {
    if(data.password !== data.confirmPassword) {
      setError("confirmPassword", { message : "비밀번호가 일치하지 않습니다"}, {shouldFocus:true})
    };
    // setError("extraError", { message: "서버 에러"})
  };
  
  return (
    <div style={{width: "400px", margin: "0 auto"}}>
        <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
          <span>할 일</span>
          <input {...register("toDo", { required: "필수 입력값입니다", minLength: {value:4, message:"4자 이상 할 일을 입력해주세요"} })} placeholder="Write a to do" />
            <span style={{color:"red"}}>{errors?.toDo?.message}</span>
          <span>이름</span>
          {/* han 입력 불가로 */}
          <input {...register("firstName", { required: "필수 입력값입니다", validate: (value)=> value.includes("han") ? "han입력 불가" : true })} placeholder="이름 입력" />
            <span style={{color:"red"}}>{errors?.firstName?.message}</span>
          <span>비밀번호</span>
          <input {...register("password", { required: "필수 입력값입니다", minLength: {value:4, message:"비밀번호를 입력해주세요"} })} placeholder="비밀번호 입력" />
            <span style={{color:"red"}}>{errors?.password?.message}</span>
          <span>비밀번호 재입력</span>
          <input {...register("confirmPassword", { required: "필수 입력값입니다", minLength: {value:4, message:"비밀번호를 재입력해주세요"} })} placeholder="비밀번호 재확인" />
            <span style={{color:"red"}}>{errors?.confirmPassword?.message}</span>
          <div>{errors?.extraError?.message}</div>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default ToDoList;