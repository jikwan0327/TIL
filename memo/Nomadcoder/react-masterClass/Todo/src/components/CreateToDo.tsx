import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "./atoms";

interface IForm {
  toDo: string;
}

function CreateToDO() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [{ text: toDo, category: "TO_DO", id: Date.now() }, ...oldToDos]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register("toDo", { required: "need require" })} placeholder="email" />
      <button>Add</button>
    </form>
  );
}

export default CreateToDO;
