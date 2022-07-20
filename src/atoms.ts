import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export enum Categories {
    "To_Do" = "To_Do",
    "Doing" = "Doing",
    "Done" = "Done",
    "Delete" = "Delete"
} 
export interface IToDo {
    id: number;
    text: string;
    category: Categories;
}
// local storage save using recoil-persist
const { persistAtom } = recoilPersist({
    key: "recoil-persist",
    storage: localStorage,
});
    

export const categoryAtom = atom<Categories>({
    key: "category",
    default: Categories.To_Do
})

export const toDoAtom = atom<IToDo[]>({
    key: "toDo",
    default: [],
    effects_UNSTABLE: [persistAtom],
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


