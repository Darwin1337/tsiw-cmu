import { useState } from "react";

export default function RegisterTaskForm(props) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.add((current) => [...current, { id: current.length > 0 ? (current.sort((a, b) => (a.id < b.id) ? -1 : ((a.id > b.id) ? 1 : 0))[current.length - 1].id + 1) : 1, task: task, isDone: false }]);
    }

    return (
        <fieldset className="w-full border border-solid rounded-lg border-gray-300 p-3 mx-auto">
            <legend className="text-sm font-medium px-2">Add a task!</legend>
            <form onSubmit={ handleSubmit }>
                <div className="mb-3">
                    <label htmlFor="task" className="mb-2 text-sm font-medium text-gray-900">Task name:</label>
                    <input type="text" id="task" value={ task } onChange={ (e) => setTask(e.target.value) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Add task</button>
            </form>
        </fieldset>
    )
}
