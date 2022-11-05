import { useState } from "react";
import { Modal } from "flowbite-react";
import { HiOutlineExclamationCircle, HiCheckCircle, HiXCircle } from "react-icons/hi";

export default function ManageTasks(props) {
    const [editedTask, setEditedTask] = useState("");
    const [removeModal, setRemoveModal] = useState(-1);
    const [editModal, setEditModal] = useState(-1);

    const completeTask = (id) => props.changeTasks((cur) => cur.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task));

    const removeTask = (id) => {
        props.changeTasks((cur) => cur.filter(task => task.id !== id));
        setRemoveModal(-1);
    };

    const editTask = (e) => {
        e.preventDefault();
        props.changeTasks((cur) => cur.map((curTask) => curTask.id === editModal ? { ...curTask, task: editedTask } : curTask));
        setEditModal(-1);
    };

    return (
        <>
            <fieldset className="border border-solid rounded-lg border-gray-300 p-3 mx-auto">
                <legend className="text-sm font-medium px-2">Manage your tasks!</legend>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3 px-6">Task</th>
                                <th scope="col" className="py-3 px-6">Finished</th>
                                <th><span className="sr-only">Toggle complete</span></th>
                                <th><span className="sr-only">Edit</span></th>
                                <th><span className="sr-only">Remove</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.taskList.length > 0 ? props.taskList.map((task) =>
                                <tr key={ task.id } className="bg-white border-b dark:bg-gray-800">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">{ task.task }</th>
                                    <td className="py-4 px-6">{ task.isDone ? <HiCheckCircle color="blue" className="h-6 w-6" /> : <HiXCircle className="h-6 w-6" /> }</td>
                                    <td className="py-4 px-6"><p onClick={ () => completeTask(task.id) } className="font-medium text-blue-600 cursor-pointer">{ task.isDone ? "Uncomplete" : "Complete" }</p></td>
                                    <td className="py-4 px-6">
                                        <p onClick={ () => {
                                            setEditModal(task.id);
                                            setEditedTask(task.task);
                                        }} className="font-medium text-green-500 cursor-pointer">Edit</p>
                                    </td>
                                    <td className="py-4 px-6"><p onClick={ () => setRemoveModal(task.id) } className="font-medium text-red-600 cursor-pointer">Remove</p></td>
                                </tr>
                            ) : <tr><th scope="row" className="py-4 px-6" colSpan="5">No tasks have been added!</th></tr>}
                        </tbody>
                    </table>
                </div>
            </fieldset>

            <Modal show={ removeModal > -1 ? true : false } size="md" popup={ true } onClose={() => setRemoveModal(-1)}>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to remove this task?</h3>
                        <div className="flex justify-center gap-4">
                            <button type="button" onClick={() => removeTask(removeModal)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Yes, I'm sure</button>
                            <button type="button" onClick={() => setRemoveModal(-1)} className="focus:outline-none text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">No, cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={ editModal > -1 ? true : false } size="md" popup={ true } onClose={() => setEditModal(-1)}>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                        <h3 className="text-xl font-medium text-gray-900">Edit task</h3>
                        <form onSubmit={ editTask }>
                            <div className="mb-3">
                                <label htmlFor="task" className="mb-2 text-sm font-medium text-gray-900">Task name:</label>
                                <input type="text" id="task" value={ editedTask } onChange={ (e) => setEditedTask(e.target.value) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <button type="submit" className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Edit task</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
