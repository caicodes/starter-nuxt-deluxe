/**
 *
 * 🍍 pinia 🍍
 *      state management
 *
 */
import { defineStore } from "pinia";

export const useTodosStore = defineStore({
  id: "todos",
  state: () => ({
    todos: [
      { id: 1, name: "first todo", completed: false },
      { id: 2, name: "second todo", completed: true },
      { id: 3, name: "third todo", completed: false },
      { id: 4, name: "fourth todo", completed: false },
      { id: 5, name: "fifth todo", completed: false },
    ],
  }),
});

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    title: "yo pinia yo",
  }),

  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return "even";
      return "odd";
    },
  },
  actions: {
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      this.count--;
    },
    increaseCounter(amount) {
      this.count += amount;
    },
    decreaseCounter(amount) {
      this.count -= amount;
    },
  },
});
