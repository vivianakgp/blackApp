import { defineStore } from "pinia";

interface CounterState {
  count: number;
}

export const useCounterStore = defineStore("counterStore", {
  state: (): CounterState => {
    return {
      count: 0,
    };
  },
  getters: {
    double(state: CounterState): number {
      return state.count * 2;
    },
  },
  actions: {
    increment(): void {
      this.count++;
    },
    decrement(): void {
      this.count--;
    },
  },
});
