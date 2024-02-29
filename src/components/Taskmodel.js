import { useState,useContext } from "react";
import { DataContext } from "../App";

const Taskmodel = () => {
  const {data,setData,selectedIndex,setSelectedIndex} = useContext(DataContext);

  const [titleInputToggle, setTitleInputToggle] = useState(false);
  const [modalData,setModalData] =useState(data[data.selectedIndex]);
  const onClose=()=>{
    const updatedArray= data
    updatedArray[selectedIndex]=modalData
    setData(updatedArray);
  }
  const onChange=(e)=>{
    setModalData({...modalData,title:e.target.value})
  }
  console.log(data[selectedIndex]?.title,data);
  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <input
                  type="email"
                  className="form-control modal-title"
                  id="exampleFormControlInput1"
                  placeholder="task title"
                  value={data[selectedIndex]?.title}
                  onChange={onChange}
                />
              </h5>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              
              <input
                type="email"
                className="form-control modal-title"
                id="exampleFormControlInput1"
                placeholder="sub task"
                // value={""}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskmodel;
