import "./App.css";
import Taskmodel from "./components/Taskmodel";

function App() {
  return (
    <div className="App container">
      {/* make this symbol */}
      <div className="row w-50 d-flex justify-content-center text-center">
        <div className="col-md-6">
          <label for="Add New Tasks" className="form-label">
            List Name
          </label>
        </div>      
        <div className="col-md-6">
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
      <div className="row">
        <div className="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault"></label>
        </div>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <Taskmodel />
      </div>
    </div>
  );
}

export default App;
