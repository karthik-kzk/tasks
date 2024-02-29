import { useState, useEffect } from "react";

// to do
// local storage -half done
// add catogories - half done
// add color by categories
// click and drag || move categories with drop drown

function groupBy(array) {
  const result={}
  for (let i = 0; i < array.length; i++) {
    result[array[i].tags] = [];

    for (let j = 0; j < array.length; j++) {
      if (array[i].tags == array[j].tags)
        result[array[i].tags].push(array[j].title);
    }
  }
  return result
}

const mockData = [
  {
    title: "one",
    tags: "#eat",
  },
];

export const AddTask = () => {
  const [addTask, setAddTask] = useState("");
  const [list, setList] = useState(mockData);
  const [editId, setEditId] = useState(-1);

  const onSubmit = (e) => {
    console.log("email", addTask, editId);
    e.preventDefault();
    const strArray = addTask.split("#");
    const task = {};
    task.title = strArray[0];
    task.tags = "#" + strArray[1] || "default";

    if (editId !== -1) {
      const editedList = list;
      editedList[editId] = task;
      setList(editedList);
    } else {
      // category #

      setList([...list, task]);
    }
    console.log(list);
    setAddTask("");
    setEditId(-1);
  };

  const onChange = (event) => {
    setAddTask(event.target.value);
  };

  const onEdit = (e) => {
    const id = e.target.id;

    setEditId(id);
    if (id) {
      const str = `${list[id].title}  ${list[id].tags}`;
      setAddTask(str);
    }
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("list"));
    if (list) setList(list);
  }, []);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <div className="card mx-auto mt-3" style={{ width: "26rem" }}>
        <form className="card-body">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
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

          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </div>
      <ul class="list-group">
        {list?.map((v, i) => {
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
        })}
      </ul>
    </div>
  );
};
