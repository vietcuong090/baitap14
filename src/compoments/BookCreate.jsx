import React, { useState } from "react";
import "./bookcreate.css";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("title");
  const [des, setDes] = useState("des");

  const handleChangeDes = (e) => {
    setDes(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, des };
    setTitle("");
    setDes("");
    // console.log(book);
    onCreate(book);
  };

  return (
    <div className="container-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChangeTitle}
          type="text"
          id="title"
          value={title}
          placeholder="Title"
        />

        <input
          onChange={handleChangeDes}
          type="text"
          id="des"
          value={des}
          placeholder="Description"
        />
        <p className="input-test1">
          <input type="submit" value="Create!" />
        </p>
      </form>
    </div>
  );
};

export default BookCreate;
