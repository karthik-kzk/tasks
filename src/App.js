import './App.css';

function App() {
  return (
    <div className="App container">
      {/* make this symbol */}
      <div className="row w-50 d-flex justify-content-center">
        <div className="col-md-12">
          <label for="Add New Tasks" className="form-label">Add New Tasks</label></div>
        <div className="col-md-12"><input type="email" className="form-control" id="exampleFormControlInput1" placeholder="New task" /></div>
        <div className="col-md-12 text-center"> <button type="button" className="btn btn-primary">Add</button></div>
      </div>
      <div className="row">

        <button type="button" class="btn btn-light">edit</button>
        <button type="button" class="btn btn-danger">delete</button>
      </div>
    </div>
  );
}

export default App;
