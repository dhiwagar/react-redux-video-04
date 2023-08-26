import React,{useState} from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from './UpdateTask';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTask } from "../slices/tasksSlice";
import { removeTaskFromList } from "../slices/tasksSlice";
const TasksList = () => {
  const {tasksList}=useSelector((state)=>state.tasks)
  const dispatch=useDispatch()
  const updateTask = (task) => {
    console.log("update Task");
    setModalShow(true)
    dispatch(setSelectedTask(task))
  };

  const deleteTask = (task) => {
   dispatch(removeTaskFromList(task))
    console.log("delete task");
  };

  const [modalShow,setModalShow] = useState(false)
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasksList && tasksList.map((task,index)=>(
   <tr className="text-center">
   <td>{index+1}</td>
   <td>{task.title}</td>
   <td>{task.description}</td>
   <td>
     <Button
       variant="success"
       className="mx-3"
       onClick={() => updateTask(task)}
     >
       <i className="bi bi-pencil-square"></i>
     </Button>
     <Button variant="success">
       <i className="bi bi-trash3" onClick={() => deleteTask(task)}></i>
     </Button>
   </td>
 </tr>

          ))}
       
        </tbody>
      </Table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TasksList;
