import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Box, Tabs, Tab } from "@mui/material";

import { Todo } from "../utils/types";
import { defaultTodos } from "../utils/constant";

const TodoList: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const [renderedTodos, setRenderedTodos] = useState<Todo[]>(defaultTodos);
  const [todoStatus, setTodoStatus] = useState<
    "all" | "unfinished" | "finished"
  >("all");

  return (
    <div className="flex flex-col h-[100vh] App-half">
      <div className="mt-[18px] ml-8 mb-4 max-w-[250px]">
        <img src="/images/logo.png" alt="website-logo" className="w-full" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[40%] relative drop-shadow-md mb-4">
          <input
            className="border-none rounded-[10px] w-full h-[48px] text-base pl-4 font-noto font-semibold"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="請輸入待辦事項"
          />
          <button className="absolute w-[36px] h-[36px] bg-black rounded-[10px] right-[6px] top-[6px]">
            <div className="flex text-3xl items-center justify-center text-white leading-[36px]">
              +
            </div>
          </button>
        </div>
        <div className="w-[40%] bg-white drop-shadow-md mb-4 min-h-[150px] rounded-[10px]">
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={todoStatus}
              variant="fullWidth"
              onChange={(_, newValue: "all" | "unfinished" | "finished") =>
                setTodoStatus(newValue)
              }
            >
              <Tab label="全部" value="all" />
              <Tab label="待完成" value="unfinished" />
              <Tab label="已完成" value="finished" />
            </Tabs>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
