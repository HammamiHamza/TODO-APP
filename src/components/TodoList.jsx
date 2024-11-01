import React, { useState } from 'react';
 function TodoList() {
const [task, setTask] = useState('');
 const [tasks, setTasks] = useState([]);
 const handleAddTask = () => {
 if (task.trim()) {
 setTasks([...tasks, task]);
 setTask(''); // Clear the input field
 }
 };
 const handleDeleteTask = (index) => {
 const newTasks = tasks.filter((_, i) => i !== index);
 setTasks(newTasks);
 };
 return (
 <div className="p-6 bg-white rounded-lg shadow-md">
 <h1 className="text-2xl font-bold mb-2">Liste des tâches</h1>
 <input
 type="text"
 value={task}
 onChange={(e) => setTask(e.target.value)}
 placeholder="Ajouter une tâche"
 />
 <button onClick={handleAddTask}  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ajouter</button>
 <ul>
 {tasks.map((task, index) => (
 <li key={index}  className="space-y-2">

 {task}
 <button onClick={() =>
 handleDeleteTask(index)}  class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Supprimer</button>
 </li>
 ))}
 </ul>
 </div>
 );
 }
 export default TodoList;