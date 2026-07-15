import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { getDatabase, ref, set, onValue, push, update, remove} from "firebase/database";
import { HiTrash } from "react-icons/hi";
import { MdOutlineModeEdit } from "react-icons/md";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";


function App(){ 
const notify = () => { 
  task == "" ?
 toast.error('Please enter your task', {
position: "bottom-center",
autoClose: 4984,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Zoom,
}):
  toast.success ('<IoCheckmarkDoneCircleSharp /> Add completted!',{
position: "bottom-center",
autoClose: 4984,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Zoom,
});

}
const deletetask = () => 
  toast.warn('it has been deleted successfully!', {
position: "bottom-center",
autoClose: 4984,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Zoom,
});


  const [task, setTask] = useState("")
  const [AllTask, setAllTask] = useState([])
  
  const handleClick =  (e) => {
    e.preventDefault()
    if(task == ""){
      notify("Enter your task")
    }else{
    
        const db = getDatabase();
    set(push(ref(db,'TodoName')), {
      todoname: task
    }).then(() => setTask(""), notify()
  )
       }
    }

  useEffect(() => {
    const db = getDatabase();
    const getDataref = ref(db, 'TodoName');
    onValue(getDataref, (snapshot) => {
      let Arr = [];
      snapshot.forEach((item) => {
        Arr.push({todoname: item.val().todoname, id: item.key})
      });
      setAllTask(Arr);
    });
  }, [])
   const handleDelete = (id) => {
    const db = getDatabase();
    remove(ref(db, 'TodoName/' + id)).then(() => {
      setTask("")
      deletetask()
    })
  }

  const handleEdit =  (id) => {
    const db = getDatabase();
    update(ref(db, 'TodoName/' + id), { todoname: task }).then(() => setTask(""));
  }


  return (
    <>
    <ToastContainer />
      <h1 className='text-4xl py-10 mb-30 bg-amber-400 text-white text-center '>Todo Application</h1>
      <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
        <fieldset className="fieldset">
          <label className="text-3xl mb-4">Enter your task here!</label>
          <input value={task} onChange={(e) => setTask(e.target.value)} type="text" className="input validator" placeholder="Email" required />
          <p className="validator-hint hidden">Required</p>
        </fieldset>
 
        <button onClick={handleClick} className="btn btn-neutral hover:bg-blue-100 hover:text-black
         mt-4" type="submit">submit</button>
        <ul className = "bg-black text-white p-4">
          {AllTask.map((item) => (
            <li className = "text-lg flex justify-between">{item.todoname}
             <div className = "flex gap-3">
            <HiTrash onClick = {() => handleDelete(item.id)} className="text-red-500 hover:text-red-700 cursor-pointer" /> 
            <MdOutlineModeEdit onClick = {() => handleEdit(item.id)} className = "text-green-500 hover:text-green-700 cursor-pointer"/>
            </div>
            </li>
          ))}
        </ul>
      </form>
    </>
  )
}

export default App
