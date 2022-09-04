import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Box, Tabs, Tab } from "@mui/material";

import { Todo } from "../utils/types";
import { defaultTodos } from "../utils/constant";
import ListItem from "../component/ListItem";

const TodoList: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const [renderedTodos, setRenderedTodos] = useState<Todo[]>(defaultTodos);
  const [todoStatus, setTodoStatus] = useState<
    "all" | "unfinished" | "finished"
  >("all");

  const addNewTodo = () => {
    if (!newTodo.trim()) return;

    const todoObj: Todo = {
      id: uuid(),
      content: newTodo,
      isFinished: false,
    };

    setRenderedTodos([...renderedTodos, todoObj]);
    setNewTodo("");
  };

  const handleCheckboxChecked = (todo: Todo) => {
    todo.isFinished = !todo.isFinished;
    const newRenderedTodos = [...renderedTodos];
    setRenderedTodos(newRenderedTodos);
  };

  const handleTodoDeleted = (id: string) => {
    setRenderedTodos(renderedTodos.filter((todo) => todo.id !== id));
  };

  const clearFinishedTodo = () => {
    setRenderedTodos(renderedTodos.filter((todo) => !todo.isFinished));
  };

  const unfinishedNum = renderedTodos.filter((todo) => !todo.isFinished).length;

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
            <div
              className="flex text-3xl items-center justify-center text-white leading-[36px]"
              onClick={addNewTodo}
            >
              +
            </div>
          </button>
        </div>
        {renderedTodos.length >= 1 ? (
          <div className="w-[40%] bg-white drop-shadow-md mb-4 rounded-[10px]">
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
              {todoStatus === "all" && (
                <div className="flex flex-col">
                  {renderedTodos.map((todo) => {
                    return (
                      <div key={todo.id}>
                        <ListItem
                          listItem={todo}
                          setCheckboxChecked={(todo) =>
                            handleCheckboxChecked(todo)
                          }
                          setDeleted={(id) => handleTodoDeleted(id)}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
              {todoStatus === "unfinished" && (
                <div className="flex flex-col">
                  {renderedTodos.map((todo) => {
                    return (
                      !todo.isFinished && (
                        <div key={todo.id}>
                          <ListItem
                            listItem={todo}
                            setCheckboxChecked={(todo) =>
                              handleCheckboxChecked(todo)
                            }
                            setDeleted={(id) => handleTodoDeleted(id)}
                          />
                        </div>
                      )
                    );
                  })}
                </div>
              )}
              {todoStatus === "finished" && (
                <div className="flex flex-col">
                  {renderedTodos.map((todo) => {
                    return (
                      todo.isFinished && (
                        <div key={todo.id}>
                          <ListItem
                            listItem={todo}
                            setCheckboxChecked={(todo) =>
                              handleCheckboxChecked(todo)
                            }
                            setDeleted={(id) => handleTodoDeleted(id)}
                          />
                        </div>
                      )
                    );
                  })}
                </div>
              )}
            </Box>
            <div className="flex items-center justify-between p-4">
              <div className="text-sm font-noto">
                {unfinishedNum} 個待完成項目
              </div>
              <div
                className="text-sm font-noto text-gray-400 hover:cursor-pointer"
                onClick={clearFinishedTodo}
              >
                清除已完成項目
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="font-noto font-bold">目前尚無待辦事項</div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoList;
