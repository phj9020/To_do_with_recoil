import { atom, selector } from "recoil";

export interface IToDo {
    id: number;
    text: string;
    category: "To_Do" | "Doing" | "Done";
}

export const categoryAtom = atom({
    key: "category",
    default: "To_Do"
})

export const toDoAtom = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

// Selector는 atom의 output을 변형시키는 도구이다
// toDoAtom에 변하면 selector도 함께변함
export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        // selector 가 toDos와 category를 받아서 category에 따라 toDos를 분류한다. 
        const toDos = get(toDoAtom);
        const category = get(categoryAtom);
        return toDos.filter((todo) => todo.category === category);
    }, 
})
