import { useEffect, useState } from "react";
//import { tasks } from "./data/tasks.js";
import { FormCreateTask } from "./form/FormCreateTask.jsx";
import { ListActions } from "./list-actions/ListActions.jsx";
import { TaskList } from "./task-list/TaskList.jsx";


export function ThirdPage () {
  const storageDataKey = 'todo-data';
  const storageIdKey = 'todo-last-id';
  const [taskList, setTaskList] = useState(readLocalData());
  const [id, setId] = useState(readLocalId());
  const [sortingAlgo, setSortingAlgo] = useState('timeAsc');

  function sortData(){

    const algorithmes = {
      timeAsc: (a, b) => a.id - b.id,
      timeDes: (a, b) => b.id - a.id,
      colorAsc: (a, b) => a.color < b.color ? -1 : a.color === b.color ? 0 : 1,
      colorDes: (a, b) => b.color < a.color ? -1 : a.color === b.color ? 0 : 1,
      titleAsc: (a, b) => a.text < b.text ? -1 : a.text === b.text ? 0 : 1,
      titleDes: (a, b) => b.text < a.text ? -1 : a.text === b.text ? 0 : 1,
      };
      return sortingAlgo in algorithmes
      ?taskList.sort(algorithmes[sortingAlgo]) : taskList.sort(algorithmes.timeAsc);
    
  }
 function updateSorting(newAlgoName) {
  setSortingAlgo(newAlgoName);
 }
  useEffect(() => {
    console.log('Pasileidi "APP" komponentas...');
  });

  useEffect(() => {
    console.log('"APP" - tuscias masyvas');
  }, []);

  useEffect(() => {
    localStorage.setItem(storageDataKey, JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem(storageIdKey, JSON.stringify(id));
  }, [id]);

  function readLocalData() {
    const localData = localStorage.getItem(storageDataKey);

    if (localData) {
      return JSON.parse(localData);
    }

    return [];
  }

  function readLocalId() {
    const localData = localStorage.getItem(storageIdKey);

    if (localData) {
      return JSON.parse(localData);
    }

    return 0;
  }

  function addTask(taskText, taskColor) {
    setTaskList(prev => [
      ...prev,
      {
        id: id + 1,
        text: taskText,
        color: taskColor,
        state: 'todo',
      },
    ]);
    setId(prev => prev + 1);
  }

  function updateTaskText(id, newText) {
    setTaskList(prev => prev.map(task => ({
      ...task,
      text: task.id === id ? newText : task.text,
    })));
  }

  function updateTaskColor(id, newColor) {
    setTaskList(prev => prev.map(task => ({
      ...task,
      color: task.id === id ? newColor : task.color,
    })));
  }

  function updateTaskState(id) {
    setTaskList(prev => prev.map(task => ({
      ...task,
      state: task.id === id ? 'done' : task.state,
    })));
  }

  function removeTask(id) {
    setTaskList(prev => prev.filter(task => task.id !== id));
  }

  window.addEventListener('keyup', (e) => {
    console.log(e.key);
  });

  return (
    <main>
      <h1>Todo</h1>
      <div>
        <p>Viso Paslaugų: {taskList.length}</p>
    
      </div>
      <FormCreateTask addTaskCallback={addTask} />
      <ListActions updateSorting={updateSorting} />
      <TaskList data={sortData()}
        updateTaskText={updateTaskText}
        updateTaskColor={updateTaskColor}
        updateTaskState={updateTaskState}
        removeTask={removeTask} />
    </main>
  );
}

