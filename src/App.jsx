import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  const buttonRef = useRef();
  const buttonDivRef = useRef();
  const buttonTextRef = useRef();
  const subDivRef = useRef();
  const tskDivRef = useRef();
  const hrRef = useRef();
  const listItemRef = useRef([]);
  const imagesRef = useRef([]);
  const [tasks, setTasks] = useState([]);
  const handleAdd = (e) => {
    if (e.target.previousElementSibling.value.trim() === "") {
      alert("Seems like you haven't written anything!");
      e.target.previousElementSibling.value = "";
      return;
    }
    let taskObj = {
      id: Math.ceil(Math.random() * 10000),
      text: e.target.previousElementSibling.value.trim(),
      isChecked: false,
    };
    e.target.previousElementSibling.value = "";
    setTasks([taskObj].concat(tasks)?.filter((e) => e !== null));
  };
  const handleCheck = (e, elem) => {
    let updatedObj = tasks.map((taskElem) => {
      if (e.id === taskElem.id) {
        return {
          ...taskElem,
          text: elem.target.previousElementSibling.innerText,
        };
      }
      return taskElem;
    });
    setTasks(updatedObj);
    elem.target.classList.add("hidden");
    elem.target.previousElementSibling.style.border = "1px solid transparent";
    elem.target.previousElementSibling.contentEditable = false;
  };
  const handleDelete = (e) => {
    let updatedObj = tasks.filter((elem) => e !== elem.id);
    if (updatedObj.length == 0)
      localStorage.setItem("tasks", JSON.stringify(updatedObj));
    setTasks(updatedObj);
  };
  const handleinputChange = (e) => {
    let updatedObj = tasks.map((elem) => {
      if (e.id === elem.id) {
        return { ...elem, isChecked: !e.isChecked };
      }
      return elem;
    });
    setTasks(updatedObj);
  };
  useEffect(() => {
    let retrievedData = JSON.parse(localStorage.getItem("tasks"));
    if (retrievedData != "") setTasks(retrievedData);
  }, []);
  useEffect(() => {
    tasks?.length ? localStorage.setItem("tasks", JSON.stringify(tasks)) : null;
  }, [tasks]);
  return (
    <>
      <div ref={subDivRef} className="container sub-body">
        <button
          ref={buttonRef}
          onClick={() => {
            buttonRef.current.classList.toggle("move");
            buttonDivRef.current.classList.toggle("move2");
            buttonTextRef.current.classList.toggle("move3");
            setValue((prev) => prev + 1);
            subDivRef.current.classList.toggle("moveSubdiv");
            document.body.classList.toggle("moveall");
            buttonTextRef.current.innerText =
              value % 2 === 0 ? "Dark" : "Light";
            tskDivRef.current.classList.toggle("moveTaskDiv");
            hrRef.current.classList.toggle("hr");
            imagesRef.current.map((e) => {
              e.classList.toggle("imagesDark");
              e.nextElementSibling.classList.toggle("imagesDark");
              e.previousElementSibling.lastElementChild.classList.toggle(
                "imagesDark"
              );
            });
          }}
          className="toggle"
        >
          <div ref={buttonDivRef} className="toggleDiv"></div>
          <div ref={buttonTextRef} className="toggleText">
            Dark
          </div>
        </button>
        <div className="header py-4">
          <h1 className="text-center heading">Drop Your TODOs Here</h1>
        </div>
        <hr ref={hrRef} />
        <div className="d-flex-column justify-content-center align-items-center todo-body">
          <div className="task-input justify-content-between my-3 d-flex py-3">
            <input type="text" className="input px-2" name="inputtask" id="" />
            <button
              className={`btn-outline-${
                value % 2 === 0 ? "dark" : "light"
              } btn`}
              onClick={(e) => {
                handleAdd(e);
              }}
            >
              ADD
            </button>
          </div>
          <div
            ref={tskDivRef}
            className="py-2 d-flex-column justify-content-between align-items-center px-2 task-list-bg"
          >
            <ul>
              {tasks?.length ? (
                tasks.map((e, index) => {
                  return (
                    <li
                      key={e?.id}
                      ref={(value) => (listItemRef.current[index] = value)}
                      className="my-3 d-flex align-items-center listItem"
                    >
                      <input
                        type="checkbox"
                        name=""
                        className="checkbox"
                        onChange={() => {
                          handleinputChange(e);
                        }}
                        checked={e?.isChecked}
                      />
                      <p className="listText d-flex align-items-center justify-content-between">
                        <p
                          style={{
                            textDecoration: e?.isChecked
                              ? "line-through"
                              : "none",
                          }}
                        >
                          {e?.text}
                        </p>
                        <img
                          className="check hidden"
                          onClick={(elem) => {
                            handleCheck(e, elem);
                          }}
                          src="./check.svg"
                          alt="Ok"
                        />
                      </p>
                      <img
                        src="./edit.svg"
                        alt="Edit"
                        onClick={(elem) => {
                          Array.from(
                            document.getElementsByClassName("listItem")
                          ).forEach((element) => {
                            if (element.key !== e.id) {
                              if (
                                element.firstElementChild.nextElementSibling
                                  .firstElementChild.contentEditable
                              ) {
                                element.firstElementChild.nextElementSibling.firstElementChild.contentEditable = false;
                                element.firstElementChild.nextElementSibling.firstElementChild.style.border =
                                  "1px solid transparent";
                                element.firstElementChild.nextElementSibling.lastElementChild.classList.add(
                                  "hidden"
                                );
                              }
                            }
                          });
                          elem.target.previousElementSibling.firstElementChild.contentEditable = true;
                          elem.target.previousElementSibling.firstElementChild.style.border = `1px solid ${
                            value % 2 === 0 ? "black" : "white"
                          }`;
                          elem.target.previousElementSibling.lastElementChild.classList.remove(
                            "hidden"
                          );
                        }}
                        ref={(value) => (imagesRef.current[index] = value)}
                        className="edit"
                      />
                      <img
                        src="./trash.svg"
                        alt="Delete"
                        onClick={() => {
                          handleDelete(e.id);
                        }}
                        className="trash"
                      />
                    </li>
                  );
                })
              ) : (
                <li className="text-center">Add items to see them here</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
