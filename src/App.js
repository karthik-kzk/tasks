import "./App.css";
import Taskmodel from "./components/Taskmodel";

function App() {
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
            <li className="list-group-item">
              <div className="form-check">
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
                  task one
                </label>
              </div>
            </li>
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
                  task two
                </label>
              </div>
            </li>
          </ul>
        </div>

        <Taskmodel />
      </div>
    </div>
  );
}

export default App;
