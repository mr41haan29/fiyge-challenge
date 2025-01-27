import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

function Item({ id, label, index, onLabelUpdate }) {
  let inputType = "";
  let isInput = false;
  let isTextArea = false;
  let isDropdown = false;

  if (label === "textInput") {
    isInput = true;
    inputType = "text";
  } else if (label === "checkbox") {
    isInput = true;
    inputType = "checkbox";
  } else if (label === "radioButton") {
    isInput = true;
    inputType = "radio";
  } else if (label === "datePicker") {
    isInput = true;
    inputType = "date";
  } else if (label === "fileUpload") {
    isInput = true;
    inputType = "file";
  } else if (label === "textArea") {
    isTextArea = true;
  } else if (label === "dropdown") {
    isDropdown = true;
  }

  const [isEditing, setIsEditing] = useState(false);
  const [currentLabel, setCurrentLabel] = useState(label);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleLabelChange = (e) => {
    setCurrentLabel(e.target.value);
  };

  const handleLabelBlur = () => {
    setIsEditing(false);
    if (currentLabel.trim()) {
      onLabelUpdate(id, currentLabel);
    } else {
      setCurrentLabel(label);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLabelBlur();
    }
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {isEditing ? (
            <input
              type="text"
              value={currentLabel}
              onChange={handleLabelChange}
              onBlur={handleLabelBlur}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          ) : (
            <label onClick={handleEdit} style={{ cursor: "pointer" }}>
              {currentLabel}
            </label>
          )}

          {isTextArea && <textarea name={currentLabel} />}
          {isDropdown && (
            <select name={currentLabel}>
              <option value="A">ABC</option>
              <option value="B">DEF</option>
              <option value="C">HIJ</option>
            </select>
          )}
          {isInput && <input type={inputType} name={currentLabel} />}
        </div>
      )}
    </Draggable>
  );
}

export default Item;
