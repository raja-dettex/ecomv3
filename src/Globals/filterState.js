import { atom } from "recoil";

export const globals = {
  isRoadster: atom({
    key: "Roadster",
    default: false
  }),
  isGucci: atom({
    key: "Gucci",
    default: false
  }),
  isNike: atom({
    key: "Nike",
    default: false
  })
};

// export const isRoadster = atom({
//   key: "Roadster",
//   default: false
// });
// export const isGucci = atom({
//   key: "Gucci",
//   default: false
// });
// export const isNike = atom({
//   key: "Nike",
//   default: false
// });
