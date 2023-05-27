import create from "zustand";
// import { v4 as uuidv4 } from "uuid";
import {v4 as uuidv4} from 'uuid';
import { ItemModel } from "./model/itemModel";
import {GetApi} from "../../service/get-api";
import {UrlUnit} from "../../service/url";

interface TodoState {
  todos: ItemModel[];
  data: Array<any>;
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  toggleCompletedState: (id: string) => void;
  getData: () => void;

}

//const uuidv4 = require('uuid/v4')
const getData = () => {
  GetApi(UrlUnit,'').then((data) => {return data})
}

export const ItemStore = create<TodoState>((set, get) => ({
    //uuid : require('uuid/v4'),
  // initial state
  todos: [],
  data:[],

  getData: async () => {
    const response = await GetApi(UrlUnit,"")
    set({ data: await response.data.data})
  },

  // methods for manipulating state
  addTodo: (description: string) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: uuidv4(),
          description,
          completed: false,
        } as ItemModel,
      ],
    }));
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  toggleCompletedState: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? ({ ...todo, completed: !todo.completed } as ItemModel)
          : todo
      ),
    }));
  },
}));
