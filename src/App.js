import { useEffect, useState } from "react";
import "./App.css";
import Taskmodel from "./components/Taskmodel.js";
import mockData from "./components/data";

function App() {
  const [data, setData] = useState(mockData);
  const [selected, setSelected] = useState("");

  const onClick = (e) => {
    const selected=data.filter((v)=>v.id==e.target.id)
    
    setSelected(selected[0]);
  };

  useEffect(() => {
    console.log(mockData);
    // setData(mockData)
    console.log(data);
  }, []);
  return (
    <div className="container">
      {/* make this symbol */}
      <div className="row w-50">
        <div className="col   ">
          <label htmlFor="Add New Tasks" className="form-label ">
            List Name
          </label>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Add
          </button>
        </div>
      </div>
      <div className="row ">
        <div className="card" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            {data.map((x) => {
              return (
                <li className="list-group-item" key={x.id}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={x.title}
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label "
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={onClick}
                      id={x.id}
                    >
                      {x.title}
                    </label>
                  </div>
                </li>
              );
            })}

            <li className="list-group-item">
              <div className="form-check   ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label "
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  dummy
                </label>
              </div>
            </li>
          </ul>
        </div>

        <Taskmodel title={selected} />
      </div>
    </div>
  );
}

export default App;
