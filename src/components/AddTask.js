import { useState, useEffect } from "react";
import "./AddTask.css";

// to-do
// local storage -half done
// add color by categories -pending
// click and drag || move categories with drop drown
// fix alignment margin padding of list group
// add complete status checkbox
// add top margin
// add drop status
// add anchor tab for tags
// add count for tags section
// update add button 



const mockData = [
  {
    id: 1,
    title: "one",
    tags: "#eat",
    status:"completed",//pending|completed|dropped
  },
  {
    id: 2,
    title: "two",
    tags: "#work",
    status: "pending",
  },
];

function groupBy(array) {
  const result = {};
  for (let i = 0; i < array.length; i++) {
    result[array[i].tags] = [];

    for (let j = 0; j < array.length; j++) {
      if (array[i].tags == array[j].tags) result[array[i].tags].push(array[j]);
    }
  }
  return result;
}

function renderList(array, onEdit, onComplete, onDrop) {
  const obj = groupBy(array);
  const rows = [];
  for (const variable in obj) {
    console.log(variable);

    rows.push(
      <>
        <ul class="list-group ">
          <li className="list-group-item list-group-item-primary" key={variable}>
            {variable}
            <span class="badge badge-light">{obj[variable].length}</span>
          </li>
          {obj[variable].map((val, index) => {
            return (
              <li class="list-group-item " >
                <div class="form-check" >
                  <input class="form-check-input" type="checkbox" id={val.id} onChange={onComplete}  checked={val.status==='completed'}/>
                  <label class="form-check-label" for="flexCheckChecked" id={val.id} onClick={onEdit}>
                    {val.title}
                    </label>
                  <button
                    type="submit"
                    className="btn btn-outline-primary"
                    id={val.id}
                    onClick={onDrop}
                  >
                    Drop
                  </button>
                </div>
                
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  return rows;
}



function submitCard() {}

export const AddTask = () => {
  const [addTask, setAddTask] = useState("");
  const [list, setList] = useState(mockData);
  const [editId, setEditId] = useState(-1);
  const [addTaskToggle, setAddTaskToggle] = useState(false);

  const onSubmit = (e) => {
    console.log("email", addTask, editId);
    e.preventDefault();
    const strArray = addTask.split("#");
    const task = {
      status:"pending"
    };

    task.title = strArray[0];
    task.tags = strArray[1] != undefined ? "#" + strArray[1] : "#default";

    if (editId !== -1) {
      const editedList = list;
      editedList[editId] = task;
      setList(editedList);
    } else {
      // category #
      task.id = list.length + 1;
      setList([...list, task]);
    }
    console.log(list);
    setAddTask("");
    setEditId(-1);
    setAddTaskToggle(false);
  };

  const onChange = (event) => {
    setAddTask(event.target.value);
  };

  const onEdit = (e) => {
    const id = e.target.id;
    const index = list.findIndex((v) => v.id === parseInt(id));
   
    if (index!==-1) {
      setEditId(index);
      setAddTaskToggle(true);
      const str = `${list[index].title}  ${list[index].tags}`;
      setAddTask(str);
    }
  };

  function onComplete(e){

    const id = e.target.id;
    e.preventDefault();
    const index = list.findIndex((v) => v.id === parseInt(id));
    const updatedList=list
    updatedList[index].status='completed';
    setList(updatedList);
  }

  function onAddTaskClose() {
    setAddTaskToggle(false);
    setAddTask("");
    setEditId(-1);
  }

  function onDrop(e){
    const id = e.target.id;
    e.preventDefault();
    const index = list.findIndex((v) => v.id === parseInt(id));
    const updatedList = list
    updatedList[index].status = 'dropped';
    setList(updatedList);
  }

  // useEffect(() => {
  //   const list = JSON.parse(localStorage.getItem("list"));
  //   if (list) setList(list);
  // }, []);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
    // renderList(list,onEdit,onComplete);
  }, [list]);

  return (
    <div>
      <div className="fixed">
        <button onClick={() => setAddTaskToggle(true)}>ADD</button>
      </div>
      {addTaskToggle && (
        <div className="card mx-auto mt-3 addCard" style={{ width: "26rem" }}>
          <form className="card-body">
            <div className="mb-3">
              <label htmlfor="exampleInputEmail1" className="form-label">
                {editId === -1 ? "add task" : "edit task"}
              </label>
              <input
                type="addTask"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={addTask}
                onChange={onChange}
              />
            </div>

            <button
              type="submit"
              className="btn  btn-primary mr-1"
              onClick={onSubmit}
            >
              Submit
            </button>
            <button
              type="submit"
              className="btn  btn-neutral"
              onClick={onAddTaskClose}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
      <ul className="list-group">
        {renderList(list, onEdit, onComplete, onDrop)}
        {/* {list?.map((v, i) => {
          return (
            <>
              <li class="list-group-item" id={i} onClick={onEdit}>
                {v.tags}
              </li>
              <ul class="list-group">
                <li class="list-group-item bg-info">{v.title}</li>
              </ul>
            </>
          );
        })} */}
      </ul>
    </div>
  );
};
