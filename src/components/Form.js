import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TodoContext, useContext } from '../context'
export default function Form() {



    const [tempTitle, setTempTitle] = useState("")

    function handleChange(e) {
        setTempTitle(e.target.value)
    }

    //const [todo, SetTodo] = useState([{title:"Default Todo",id:"bf18b78f-4f06-48e7-8ff9-fe231252481f",completed:false},])
    const {todo,SetTodo} = useContext(TodoContext)
    function handleSubmit(e) {
        e.preventDefault()
        SetTodo([...todo,{
            title: tempTitle,
            id: uuidv4(),
            completed: false
        }])
        setTempTitle("")
    }

   
    return (
        <div className='flex flex-col justify-center items-center gap-1 '>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row justify-center items-center gap-1 ">
                    <div>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add todo" required  value={tempTitle} onChange={handleChange} />
                    </div>
                    <div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
