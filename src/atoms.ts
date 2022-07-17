import { atom, selector } from "recoil";

export interface IToDo {
    id: number;
    text: string;
    category: "To_Do" | "Doing" | "Done";
}

export const toDoAtom = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

// Selector는 atom의 output을 변형시키는 도구이다
// toDoAtom에 변하면 selector도 함께변함
export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoAtom);
        return [
            toDos.filter(category => category.category === "To_Do"),
            toDos.filter(category => category.category === "Doing"),
            toDos.filter(category => category.category === "Done"),
        ]
    }, 
})
