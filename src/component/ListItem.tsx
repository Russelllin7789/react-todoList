import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import ClearIcon from "@mui/icons-material/Clear";

import { Todo } from "../utils/types";

interface PropTypes {
  listItem: Todo;
  setCheckboxChecked: (listItem: Todo) => void;
  setDeleted: (id: string) => void;
}

const ListItem: React.FC<PropTypes> = ({
  listItem,
  setCheckboxChecked,
  setDeleted,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center justify-between mx-4 py-2 border-b border-gray-200`}
      onClick={(e) => {
        e.stopPropagation();
        setCheckboxChecked(listItem);
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center">
        <Checkbox
          checked={listItem.isFinished}
          inputProps={{ "aria-label": "controlled" }}
        />
        <div
          className={`font-noto ${
            listItem.isFinished ? "line-through text-gray-400" : ""
          }`}
        >
          {listItem.content}
        </div>
      </div>
      {isHovered && (
        <ClearIcon
          fontSize="small"
          className={`hover:cursor-pointer`}
          onClick={(e) => {
            e.stopPropagation();
            setDeleted(listItem.id);
          }}
        />
      )}
    </div>
  );
};

export default ListItem;
