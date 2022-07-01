import React from "react";
import { TodoContext, useContext } from "../context";
export default function TodoList() {
    const { todo, SetTodo } = useContext(TodoContext);

    function changeAttributeTrue(id) {
        console.log(id);
        //let obj = todo.find(todoo => todoo.id === id)
        const updateState = todo.map((obj) => {
            if (obj.id === id) {
                return { ...obj, completed: true };
            }
            return obj;
        });
        SetTodo(updateState);
    }

    function changeAttributeFalse(id) {
        console.log(id);
        //let obj = todo.find(todoo => todoo.id === id)
        const updateState = todo.map((obj) => {
            if (obj.id === id) {
                return { ...obj, completed: false };
            }
            return obj;
        });
        SetTodo(updateState);
    }

    function handleRemove() {
        const filterState = todo.filter((task) => task.completed === false);
        console.log("filterState ", filterState);
        SetTodo(filterState);
    }
    return (
        <div className="flex flex-col justify-center items-center text-center">
            <div>
                <h3 className="my-2">Todo's</h3>
                {todo ? (
                    <ul className="w-auto  font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
                        {todo
                            .filter((todo) =>  {return todo.completed === false})
                            .map((todo) => {
                                return (
                                    <li
                                        key={todo.id}
                                        className="w-full px-4 py-2 border-b border-gray-200  dark:border-gray-600"
                                        onClick={() => changeAttributeTrue(todo.id)}
                                    >
                                        Todo: {todo.title} Completed: (
                                        {todo.completed === false ? "Not" : "Yes"})
                                    </li>
                                );
                            })}
                    </ul>
                ) : (
                    <ul className="w-auto  font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
                        <li
                            key={todo.id}
                            className="w-full px-4 py-2 border-b border-gray-200  dark:border-gray-600"
                        >Nothing</li>
                    </ul>
                )}

                <h3 className="my-1">Completed Todo's</h3>
                    
                {(todo.filter((task) => task.completed === true)) ? 
                    <ul className="w-auto  font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
                        {todo
                            .filter((todo) =>  {return todo.completed === true})
                            .map((todo) => {
                                return (
                                    <li
                                        key={todo.id}
                                        className="w-full px-4 py-2 border-b border-gray-200  dark:border-gray-600 line-through"
                                        onClick={() => changeAttributeFalse(todo.id)}
                                    >
                                        Todo:{todo.title} Completed: (
                                        {todo.completed === false ? "Not" : "Yes"})
                                    </li>
                                );
                            })}
                    </ul>
                 : 
                <ul className="w-auto  font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
                        <li
                            key={todo.id}
                            className="w-full px-4 py-2 border-b border-gray-200  dark:border-gray-600 "
                        >
                            Nothing
                        </li>
                    </ul>
                }
                <hr />
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => handleRemove()}
                >
                    Delete all completed todo's
                </button>
            </div>
            {console.log(todo)}
        </div>
    );
}
