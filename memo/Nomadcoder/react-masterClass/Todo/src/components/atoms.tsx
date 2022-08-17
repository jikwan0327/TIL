import { atom } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "Done" | "DOING" | "TO_DO";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
