import { v4 as uuid } from "uuid";

import { Todo } from "./types";

export const defaultTodos: Todo[] = [
  {
    id: uuid(),
    content: "把冰箱發霉的檸檬拿去丟",
    isFinished: false,
  },
  {
    id: uuid(),
    content: "打電話叫媽媽匯款給我",
    isFinished: false,
  },
  {
    id: uuid(),
    content: "約 Vicky 禮拜三泡溫泉",
    isFinished: false,
  },
  {
    id: uuid(),
    content: "約 Ada 禮拜四吃晚餐",
    isFinished: false,
  },
  {
    id: uuid(),
    content: "禮拜五自己吃饗食天堂",
    isFinished: false,
  },
];
