import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([
    { id: uuidv4(), content: "react를 배워봅시다." },
  ]);

  const handleChanageContent = (e) => {
    setContent(e.target.value);
  };

  const getError = (error) => {
    if (error === "1") {
      return alert(`내용을 입력해주세요.`);
    } else {
      return `404 ERROR
        페이지를 찾을 수 없습니다.
      `;
    }
  };

  const handleAddBtnClick = () => {
    const newTodo = {
      id: uuidv4(),
      content,
    };

    if (!content) {
      return getError("1", { content });
    }

    setTodos([...todos, newTodo]);
    setContent("");
  };

  return (
    <>
      <header className="text-center py-4">
        <div>
          <input
            type="text"
            placeholder="입력칸"
            value={content}
            onChange={handleChanageContent}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddBtnClick();
              }
            }}
            className="border border-solid border-gray-400 rounded"
          ></input>
          <button
            onClick={handleAddBtnClick}
            className="border border-solid border-gray-400 px-2 rounded"
          >
            추가하기
          </button>
        </div>
        <p className="text-4xl font-bold mb-4 mt-10">Todo List</p>
      </header>
      <section className="mt-8">
        <div className="grid grid-cols-5 gap-4">
          {todos.map((item) => (
            <div
              key={item.id}
              className="border-2 border-green-500 p-4 mb-4 rounded-xl h-44"
            >
              {item.content}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
