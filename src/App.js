import './App.css';

function App() {
  return (
    <div className="App">
      {/* make this symbol */}
      <div class="mb-3 w-50 p-2">
        <label for="Add Tasks" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="New task" />

      </div>

      <button type="button" class="btn btn-primary">Add</button>
      <button type="button" class="btn btn-light">edit</button>
      <button type="button" class="btn btn-danger">delete</button>

    </div>
  );
}

export default App;
