import { atom } from "recoil";

export interface IToDo {
    id: number;
    text: string;
    category: "To_Do" | "Doing" | "Done";
}

export const toDoAtom = atom<IToDo[]>({
    key: "toDo",
    default: [],
});