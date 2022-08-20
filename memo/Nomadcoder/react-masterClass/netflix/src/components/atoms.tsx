import { atom, selector } from "recoil";

export const MinuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(MinuteState);
    return minutes / 60;
  },
});
