import { atom, selector } from "recoil";

export const counterAtom = atom({
  default: 0,
  key: "counter",
});

export const evenSelector = selector({
  key: "isEvenSelector",
  get: ({ get }) => {
    const currentCounter = get(counterAtom);
    const isEven = currentCounter % 2 === 0;
    return isEven;
  },
});
