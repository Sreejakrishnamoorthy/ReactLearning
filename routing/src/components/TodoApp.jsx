import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { FaRegAddressBook } from "react-icons/fa";

const Content = () => {
  let [items, setItems] = useState([
    { id: 1, label: "HTML & CSS", checked: true },
    { id: 2, label: "javascript", checked: true },
    { id: 3, label: "react", checked: false },
  ]);
  let [newItem, setNewItem] = useState("");
  let handleChecked = (id) => {
    let newListItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(newListItems);
  };
  let [isEditing, setIsEditing] = useState(false);
  let handleUpdate = (id) => {
    let listItem = items.find((item) => item.id === id);
    setNewItem(listItem.label);
    setIsEditing(true);
    setcurrentEleID(id);
  };
  let handleDelete = (id) => {
    let newItems = items
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });
    setItems(newItems);
  };

  let handleAddOrSaveItem = () => {
    if (isEditing) {
      let newListItems = items.map((item) => {
        return item.id === currentEleID ? { ...item, label: newItem } : item;
      });
      setItems(newListItems);
      setcurrentEleID(null);
      setNewItem("")
      setIsEditing(false)
    } else {
      setItems([
        ...items,
        { id: items.length + 1, label: newItem, checked: false },
      ]);
      setNewItem("");
    }
  };
  let [currentEleID, setcurrentEleID] = useState(null);

  return (
    <main>
      <div>
        <input
          type="text"
          value={newItem}
          placeholder="add item"
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button onClick={handleAddOrSaveItem}>
          {isEditing ? <IoIosSave color="green"/> : <FaRegAddressBook color="blue" />}
        </button>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className="item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChecked(item.id)}
              />
              <label>{item.label}</label>
              <FaEdit
              id="edit"
                role="button"
                tabIndex={0}
                onClick={() => handleUpdate(item.id)}
              />
              <FaTrashAlt
              id="delete"
                role="button"
                tabIndex={0}
                onClick={() => handleDelete(item.id)}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Content;
