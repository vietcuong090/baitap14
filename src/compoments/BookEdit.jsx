import { useState } from "react";
import "./bookedit.css";

const BookEdit = ({ book, onEdit }) => {
  const [title, setTitle] = useState(book.title);
  const [des, setDes] = useState(book.des);
  const [originalTitle] = useState(book.title);
  const [originalDes] = useState(book.des);
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDes = (e) => {
    setDes(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    onEdit(book.id, {
      title,
      des,
    });
  };
  const handleCancel = (e) => {
    // Đặt lại trạng thái của title và des về giá trị ban đầu
    setTitle(originalTitle);
    setDes(originalDes);
  };

  return (
    <div className="edit-input">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">TITLE: </label>
        <input
          className="input1"
          onChange={handleChangeTitle}
          type="text"
          id="title"
          name="title"
          value={title}
        />
        <input
          className="input1"
          onChange={handleChangeDes}
          type="text"
          id="des"
          name="des"
          value={des}
        />
        <button onClick={handleCancel} className="input2">
          CANCEL
        </button>
        <input className="input2" type="submit" value="SAVE" />
      </form>
    </div>
  );
};

export default BookEdit;
