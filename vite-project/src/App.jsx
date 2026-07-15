import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { getDatabase, ref, set, onValue, push } from "firebase/database";



function App() {
  const [task, setTask] = useState("")
  const [AllTask, setAllTask] = useState([])
  console.log(AllTask)
  const handleClick = (e) => {
    e.preventDefault()

    const db = getDatabase();
    set(push(ref(db,'TodoName')), {
      todoname: task

    });
  }
  useEffect(() => {
    const db = getDatabase();
    const getDataref = ref(db, 'TodoName');
    onValue(getDataref, (snapshot) => {
      let Arr = [];
      snapshot.forEach((item) => {
        Arr.push(item.val())
      });
      setAllTask(Arr);
    });
  }, [])



  return (
    <>
      <h1 className='text-4xl py-10 mb-30 bg-amber-400 text-white text-center '>Todo Application</h1>
      <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
        <fieldset className="fieldset">
          <label className="text-3xl mb-4">Enter your task here!</label>
          <input onChange={(e) => setTask(e.target.value)} type="text" className="input validator" placeholder="Email" required />
          <p className="validator-hint hidden">Required</p>
        </fieldset>
        <button onClick={handleClick} className="btn btn-neutral mt-4" type="submit">submit</button>
        <ul className = "bg-black text-white p-4">
          {AllTask.map((item) => (
            <li className = "text-lg">{item.todoname}</li>
            
          ))}
        </ul>
      </form>
    </>
  )
}

export default App
