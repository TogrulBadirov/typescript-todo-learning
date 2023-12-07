import { useState } from "react";
import { todos } from "../../type/type";
import uuid from "react-uuid";
type Props = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  todoArr: todos[];
  setTodoArr: React.Dispatch<React.SetStateAction<todos[]>>;
};

const Counter: React.FC<Props> = ({
  inputValue,
  setInputValue,
  todoArr,
  setTodoArr,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editId, setEditId] = useState<string | null>(null);
  function handleRemove(id: string) {
    setTodoArr(todoArr.filter((x) => x.id !== id));
  }
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {!isEdit ? (
        <button
          onClick={() =>
            setTodoArr([...todoArr, { id: uuid(), text: inputValue }])
          }
        >
          Add
        </button>
      ) : (
        <button
          onClick={() => {
            setIsEdit(false);
            let editedItem = todoArr.find((x) => x.id === editId);
            if (editedItem) {
              editedItem.text = inputValue;
            }
            setTodoArr(todoArr);
            setEditId(null);
          }}
        >
          Save
        </button>
      )}
      {todoArr &&
        todoArr.map((item) => (
          <li>
            {item.id}-----
            {item.text}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
            <button
              onClick={() => {
                setIsEdit(true);
                setInputValue(item.text);
                setEditId(item.id);
              }}
            >
              Edit
            </button>
          </li>
        ))}
    </div>
  );
};

export default Counter;
