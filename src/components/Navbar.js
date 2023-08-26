import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {tasksList}=useSelector((state)=>state.tasks)
  return (
    <>
      <h1 className="text-center my-4 text-success">REACT_REDUX_CRUD</h1>
      {/* <p className="text-center lead">{`Currently ${tasksList.length} task(s) pending`}</p> */}
    </>
  );
};

export default Navbar;
