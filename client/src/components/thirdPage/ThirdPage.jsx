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

  return ( <main>
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
)}

    // // <main>
    // //  <main className="framer-11yezan" data-framer-name="Main" name="Main">
    // //   {/* <section className="framer-dewjtt" data-framer-name="Hero Section" name="Hero Section"> */}
    // //   <div className="framer-qymg3e" data-framer-name="Hero Scroll Section" id="home" name="Hero Scroll Section">
    // //  </div>
    // //  <div className="framer-1tu7b0v" data-framer-name="Top Section" name="Top Section">
    // //  <div className="framer-7pinbo" data-framer-name="Profile" name="Profile">
    // //   <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    // //  <div className="framer-1b59nf9" data-framer-name="Clients" name="Clients">
    // //  <div className="framer-1y0u9zb-container">
    // //   <div className="framer-Rl6bU framer-19okerg framer-v-19okerg" data-framer-name="Variant 1" tabindex="0" >
    // //  <div className="framer-1esthy9" >
    // //  <div data-framer-background-image-wrapper="true" >
    // //  <img decoding="async" sizes="32px" src="https://framerusercontent.com/images/um3bxT2WVFF4kr6enjXB8pntPlo.svg" alt="Person 1" />
    // //  </div>
    // //  </div>
    // //  </div>
    // //  </div>
    // //  {/* <div className="framer-46ck4z-container">
    // //  <div className="framer-Rl6bU framer-19okerg framer-v-19okerg" data-framer-name="Variant 1" tabindex="0" style="background-color: rgb(255, 255, 255); border-radius: 96px; opacity: 1;">
    // //  <div className="framer-1esthy9" style="border-radius: 96px; opacity: 1;">
    // //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    // //  <img decoding="async" sizes="32px" src="https://framerusercontent.com/images/lWoxjUfzID4I2CJ2EAGpp1BxXk.svg" alt="Person 2" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    // //  </div>
    // //  </div>
    // //  </div>
    // //  </div> */}
    //  {/* <div className="framer-id6fne-container">
    //   <div className="framer-Rl6bU framer-19okerg framer-v-19okerg" data-framer-name="Variant 1" tabindex="0" style="background-color: rgb(255, 255, 255); border-radius: 96px; opacity: 1;">
    //  <div className="framer-1esthy9" style="border-radius: 96px; opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="32px" src="https://framerusercontent.com/images/LtSGTHttO0ZpuCVLNu4mPIpOuk.svg" alt="Person 3" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;" />
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-f99up4" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT">80+ Happy Clients</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-njno9a" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; opacity: 1; transform: translateX(-50%);">
    //  <h1 className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtNTAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 38px; --framer-font-weight: 500; --framer-text-color: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0));">Hi, I'm <span className="framer-text" style="--font-selector: R0Y7UFQgU2VyaWYtNzAwaXRhbGlj; --framer-font-family: &quot;PT Serif&quot;, &quot;PT Serif Placeholder&quot;, serif; --framer-font-style: italic; --framer-font-weight: 700;">Larry</span>!</h1>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-13cm7vp-container" style="opacity: 1; transform: translateX(-50%);">
    //  <div className="framer-Qk9V0 framer-1sxvlsi framer-v-1b1x25h" data-framer-name="Variant 2" data-highlight="true" tabindex="0" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); width: 100%; border-radius: 24px; opacity: 1;">
    //  <div className="framer-stvqs4" style="transform: none; transform-origin: 50% 50% 0px;">
    //  <div className="framer-1q3fgtw-container" data-framer-name="UX/UI Expertise" name="UX/UI Expertise" style="transform: none; transform-origin: 50% 50% 0px;">
    //  <div name="UX/UI Expertise" className="framer-AMx4a framer-Ds1Ep framer-1pu9ulj framer-v-1pu9ulj" data-framer-name="Variant 1" tabindex="0" style="height: 100%; width: 100%; transform: none; transform-origin: 50% 50% 0px;">
    //  <div className="framer-7n36g7" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; transform-origin: 50% 50% 0px;">
    //  <p className="framer-text framer-styles-preset-1k9uixy" data-styles-preset="A7YTVQYta">UX/UI Expertise</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-gtbp3e-container" data-framer-name="HTML5/CSS3 Mastery" name="HTML5/CSS3 Mastery" style="transform: none; transform-origin: 50% 50% 0px;">
    //  <div name="HTML5/CSS3 Mastery" className="framer-AMx4a framer-Ds1Ep framer-1pu9ulj framer-v-1pu9ulj" data-framer-name="Variant 1" tabindex="0" style="height: 100%; width: 100%; transform: none; transform-origin: 50% 50% 0px;">
    //  <div className="framer-7n36g7" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; transform-origin: 50% 50% 0px;">
    //  <p className="framer-text framer-styles-preset-1k9uixy" data-styles-preset="A7YTVQYta">HTML5/CSS3 Mastery</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1m2pwun-container" data-framer-name="Product Design" name="Product Design" style="transform: none; transform-origin: 50% 50% 0px;">
    //  <div name="Product Design" className="framer-AMx4a framer-Ds1Ep framer-1pu9ulj framer-v-1pu9ulj" data-framer-name="Variant 1" tabindex="0" style="height: 100%; width: 100%; transform: none; transform-origin: 50% 50% 0px;">
    //  <div className="framer-7n36g7" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; transform-origin: 50% 50% 0px;">
    //  <p className="framer-text framer-styles-preset-1k9uixy" data-styles-preset="A7YTVQYta">Product Design</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-15dl5gr-container" data-framer-name="Branding" name="Branding" style="transform: none; transform-origin: 50% 50% 0px;">
    //  <div name="Branding" className="framer-AMx4a framer-Ds1Ep framer-1pu9ulj framer-v-1pu9ulj" data-framer-name="Variant 1" tabindex="0" style="height: 100%; width: 100%; transform: none; transform-origin: 50% 50% 0px;">
    //  <div className="framer-7n36g7" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; transform-origin: 50% 50% 0px;">
    //  <p className="framer-text framer-styles-preset-1k9uixy" data-styles-preset="A7YTVQYta">Branding</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-y6x0pk-container" data-framer-name="Collaborative Team Player" name="Collaborative Team Player" style="transform: none; transform-origin: 50% 50% 0px;">
    //  <div name="Collaborative Team Player" className="framer-AMx4a framer-Ds1Ep framer-1pu9ulj framer-v-1pu9ulj" data-framer-name="Variant 1" tabindex="0" style="height: 100%; width: 100%; transform: none; transform-origin: 50% 50% 0px;">
    //  <div className="framer-7n36g7" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; transform-origin: 50% 50% 0px;">
    //  <p className="framer-text framer-styles-preset-1k9uixy" data-styles-preset="A7YTVQYta">Collaborative Team Player</p>
    //  </div>
    // //  </div>
    // //  </div> */}
    // // //  </div>
    // // //  </div>
    // // //  </div>
    // // //  </div>
    // //  {/* <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-1x8uxzw-container" style="opacity: 1; transform: perspective(1200px); transform-origin: 50% 0% 0px;">
    //  <div className="framer-YL913 framer-1wlt1e2 framer-v-138hg4u" data-framer-name="Mobile" style="height: 100%; width: 100%; opacity: 1;">
    //  <div className="framer-pc6wc8" data-framer-name="Back Photo" style="backdrop-filter: none; background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 48px; box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 20px 0px; transform: translateY(-50%) perspective(500px); opacity: 1;">
    //  <div className="framer-9fj8ys" data-border="true" data-framer-name="Circle - Big" style="--border-bottom-width: 1px; --border-color: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-radius: 120px; transform: translate(-50%, -50%); opacity: 1;">
    //  </div>
    //  <div className="framer-ehm4kp" data-border="true" data-framer-name="Circle - Small" style="--border-bottom-width: 1px; --border-color: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; border-radius: 120px; transform: translate(-50%, -50%); opacity: 1;">
    //  </div>
    //  <div className="framer-1u6q9uj-container">
    //  <div draggable="false" style="width: 100%; height: 100%; position: relative;">
    //  <svg className="transform-origin-center-center" viewBox="0 0 100 100" overflow="visible" style="width: 100%; height: 100%; position: absolute; inset: 0px; transform-origin: center center; will-change: transform; transform: rotate(360deg);">
    //  <path id="curve-wnxkz4" d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50" stroke-width="none" fill="transparent">
    //  </path>
    //  <text>
    //  <textPath href="#curve-wnxkz4" startOffset="0" dominant-baseline="Hanging" style="font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; letter-spacing: 0em; line-height: 1em; word-spacing: 7px; fill: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0));">✦  SCROLL DOWN  ✦ AND KNOW ME BETTER<animate attributeName="startOffset" from="0%" to="0%" begin="0s" dur="20s" repeatCount="indefinite">
    //  </animate>
    //  </textPath>
    //  </text>
    //  </svg>
    //  </div>
    //  </div>
    //  <div className="framer-1q31q8y-container" style="opacity: 1; transform: translateY(8.016px);">
    //  <div style="display: contents;">
    //  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0))" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); color: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); flex-shrink: 0;">
    //  <g color="var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0))" weight="thin">
    //  <path d="M202.83,146.83l-72,72a4,4,0,0,1-5.66,0l-72-72a4,4,0,0,1,5.66-5.66L124,206.34V40a4,4,0,0,1,8,0V206.34l65.17-65.17a4,4,0,0,1,5.66,5.66Z">
    //  </path>
    //  </g>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1twc9fk" data-framer-name="Photo" style="background-color: var(--token-63e45272-007b-437e-b2a8-9f4d1433e3e9, rgb(102, 112, 255)); border-radius: 48px; box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 20px 0px; transform: perspective(500px); opacity: 1;">
    //  <div className="framer-1wo7n7w" data-framer-name="Lary_Bronx" style="opacity: 1; transform: perspective(1200px);">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="280px" srcset="https://framerusercontent.com/images/CVICQI4s8tTiJBrNEN8nOXCzdK0.png?scale-down-to=1024 682w,https://framerusercontent.com/images/CVICQI4s8tTiJBrNEN8nOXCzdK0.png 896w" src="https://framerusercontent.com/images/CVICQI4s8tTiJBrNEN8nOXCzdK0.png" alt="Profile Picture" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: 47.9% 24.1%; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-savbv9-container" style="opacity: 1; transform: translateX(-50%);">
    //  <a className="framer-Dotj9 framer-5UinU framer-1krwpc6 framer-v-1krwpc6 framer-1jvgwp4" data-framer-name="Desktop" data-highlight="true" href="./#pricing" tabindex="0" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.1); border-radius: 96px; box-shadow: none; opacity: 1;">
    //  <div className="framer-91ex9m" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-zmfqcu" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--variable-reference-E3sMJqdyg-GjHZzzxwD); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --variable-reference-E3sMJqdyg-GjHZzzxwD: rgb(0, 0, 0); transform: none; opacity: 1;">
    //  <p className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtNzAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 24px; --framer-font-weight: 700; --framer-line-height: 1.4em; --framer-text-color: var(--extracted-r6o4lv, var(--variable-reference-E3sMJqdyg-GjHZzzxwD));">Contact Me</p>
    //  </div>
    //  <div className="framer-o3hmp0" data-framer-name="Icon" style="background-color: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); border-radius: 48px; transform: translateY(-50%) rotate(180deg); opacity: 1;">
    //  <div className="framer-qib4ye-container" style="opacity: 1;">
    //  <div style="display: contents;">
    //  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255))" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); flex-shrink: 0;">
    //  <g color="var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255))" weight="regular">
    //  <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z">
    //  </path>
    //  </g>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </a>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1chkqma" data-framer-name="3D-elements" name="3D-elements">
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-1rbiqmn" data-framer-name="orange pyramid" name="orange pyramid" style="opacity: 1; transform: perspective(1200px) translateY(1.965px) rotate(10deg);">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="140px" srcset="https://framerusercontent.com/images/0f09LEy6qZK1Y9gL9T6AG622ZZ8.png?scale-down-to=512 512w,https://framerusercontent.com/images/0f09LEy6qZK1Y9gL9T6AG622ZZ8.png 1024w" src="https://framerusercontent.com/images/0f09LEy6qZK1Y9gL9T6AG622ZZ8.png" alt="Orange Pyramid" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-2qne85" data-framer-name="purple sphere" name="purple sphere" style="opacity: 1; transform: translateX(-50%) perspective(1200px) translateY(7.626px);">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="140px" srcset="https://framerusercontent.com/images/m3YA9HpmQG8c9ThSe5XusCzYw.png?scale-down-to=512 512w,https://framerusercontent.com/images/m3YA9HpmQG8c9ThSe5XusCzYw.png 1024w" src="https://framerusercontent.com/images/m3YA9HpmQG8c9ThSe5XusCzYw.png" alt="Purple Sphere" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-cwtr1j" data-framer-name="blue cylinder" name="blue cylinder" style="opacity: 1; transform: perspective(1200px) translateY(0.385714px) rotate(-55deg);">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="140px" srcset="https://framerusercontent.com/images/lZLqIoLGAjMHHOlhOwugYSASrjc.png?scale-down-to=512 512w,https://framerusercontent.com/images/lZLqIoLGAjMHHOlhOwugYSASrjc.png 1024w" src="https://framerusercontent.com/images/lZLqIoLGAjMHHOlhOwugYSASrjc.png" alt="Blue Cylinder" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-gfruwm" data-framer-name="turquoise star" name="turquoise star" style="opacity: 1; transform: perspective(1200px) translateY(0.39px);">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="140px" srcset="https://framerusercontent.com/images/l1KkpEI9tJzqQPgJDNKytRuxgeI.png?scale-down-to=512 512w,https://framerusercontent.com/images/l1KkpEI9tJzqQPgJDNKytRuxgeI.png 1024w" src="https://framerusercontent.com/images/l1KkpEI9tJzqQPgJDNKytRuxgeI.png" alt="Turquoise Star" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-z3ohu7" data-framer-name="green element" name="green element" style="opacity: 1; transform: translateX(-50%) perspective(1200px) translateY(7.626px);">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="140px" srcset="https://framerusercontent.com/images/LUkmo3gFVQOfp5kvltA05Mc6K4.png?scale-down-to=512 512w,https://framerusercontent.com/images/LUkmo3gFVQOfp5kvltA05Mc6K4.png 1024w" src="https://framerusercontent.com/images/LUkmo3gFVQOfp5kvltA05Mc6K4.png" alt="Lime Green Object" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-13k02wq" data-framer-name="yellow cube" name="yellow cube" style="opacity: 1; transform: perspective(1200px) translateY(1.975px);">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="140px" srcset="https://framerusercontent.com/images/jaVohrUAKzleX6rjxEEOPrqeysw.png?scale-down-to=512 512w,https://framerusercontent.com/images/jaVohrUAKzleX6rjxEEOPrqeysw.png 1024w" src="https://framerusercontent.com/images/jaVohrUAKzleX6rjxEEOPrqeysw.png" alt="Yellow Cube" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </section>
    //  <section className="framer-1t98zrv" data-framer-name="About Section" name="About Section">
    //  <div className="framer-j9yo38" data-framer-name="About Scroll Stack" name="About Scroll Stack">
    //  <div className="framer-1y5qqoz" data-framer-name="About Scroll Section-01" id="about" name="About Scroll Section-01">
    //  </div>
    //  <div className="framer-1vaeyyw" data-framer-name="About Scroll Section-02" id="about-scroll-section-02" name="About Scroll Section-02">
    //  </div>
    //  <div className="framer-mvibsp" data-framer-name="About Scroll Section-03" id="about-scroll-section-03" name="About Scroll Section-03">
    //  </div>
    //  </div>
    //  <div className="framer-m276ll" data-framer-name="Content" name="Content">
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-5t5cko" data-framer-name="purple-cube" name="purple-cube" style="opacity: 1; transform: perspective(1200px) translateY(3.96px) scale(0.8);">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" loading="lazy" sizes="calc(100vw - 32px)" srcset="https://framerusercontent.com/images/53osOsH2OP7bAyFNQKbXOVwk.png?scale-down-to=512 512w,https://framerusercontent.com/images/53osOsH2OP7bAyFNQKbXOVwk.png 1024w" src="https://framerusercontent.com/images/53osOsH2OP7bAyFNQKbXOVwk.png" alt="Purple Cube" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-3dcuce" data-framer-name="blue-pyramid" name="blue-pyramid" style="opacity: 1; transform: translateX(-50%) perspective(1200px) translateY(1.27714px) scale(0.4) rotate(10deg);">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="240px" srcset="https://framerusercontent.com/images/en9G6oaN8j6IT8H0gpgIS69gXg4.png?scale-down-to=512 512w,https://framerusercontent.com/images/en9G6oaN8j6IT8H0gpgIS69gXg4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/en9G6oaN8j6IT8H0gpgIS69gXg4.png 2048w" src="https://framerusercontent.com/images/en9G6oaN8j6IT8H0gpgIS69gXg4.png" alt="Blue Pyramid" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-ss6pia" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <h2 className="framer-text framer-styles-preset-q2ybry" data-styles-preset="xQaGeseCC" style="--framer-text-alignment:center">About Me</h2>
    //  </div>
    //  </div>
    //  <div className="framer-1u0pjka" data-framer-name="About Cards (3)" name="About Cards (3)">
    //  <div className="framer-huvfll" data-framer-name="About Card-01" name="About Card-01">
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-xa0mm2-container" style="opacity: 1; transform: rotate(2deg);">
    //  <div className="framer-Fes0k framer-W8FY1 framer-bDL2M framer-9wI2i framer-haXsu framer-r8qnc framer-eeI7V framer-rmcxko framer-v-xhrbkc" data-framer-name="Mobile" tabindex="0" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); max-width: 100%; width: 100%; border-radius: 48px; opacity: 1;">
    //  <div className="framer-da0p51" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1ybgdin" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-r7m3fp">Greetings! I'm Larry, and I navigate the exciting world of web design, where every pixel serves a purpose. Combining a deep understanding of user experience with a knack for transforming ideas into visually stunning interfaces, I approach each project with a burning passion to craft something truly remarkable.</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1a2dup1" data-framer-name="About Card-02" name="About Card-02">
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-10flm93-container" style="opacity: 1; transform: rotate(-2deg);">
    //  <div className="framer-Fes0k framer-W8FY1 framer-bDL2M framer-9wI2i framer-haXsu framer-r8qnc framer-eeI7V framer-rmcxko framer-v-xhrbkc" data-framer-name="Mobile" tabindex="0" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); max-width: 100%; width: 100%; border-radius: 48px; opacity: 1;">
    //  <div className="framer-da0p51" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1ybgdin" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-r7m3fp">My web design journey began with a solid foundation in design principles, meticulously honed through years of formal education. I hold a degree in Graphic Design from XYZ University, where I not only acquired technical expertise but also developed a profound appreciation for the beautiful union of aesthetics and functionality.</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-4rbx2f" data-framer-name="About Card-03" name="About Card-03">
    //  <div className="framer-1fkqt69-container" style="opacity:1;transform:translate(-50%, -50%)">
    //  <a className="framer-Dotj9 framer-5UinU framer-1krwpc6 framer-v-2ijm01 framer-1jvgwp4" data-framer-name="Desktop - New Tab" data-highlight="true" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.1); border-radius: 96px; box-shadow: none; opacity: 1;" href="https://twitter.com/CristianMielu" target="_blank" rel="noopener" tabindex="0">
    //  <div className="framer-91ex9m" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-zmfqcu" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--variable-reference-E3sMJqdyg-GjHZzzxwD); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --variable-reference-E3sMJqdyg-GjHZzzxwD: rgb(0, 0, 0); transform: none; opacity: 1;" data-framer-component-type="RichTextContainer">
    //  <p style="--font-selector:R0Y7UHVibGljIFNhbnMtNzAw;--framer-font-family:&quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif;--framer-font-size:24px;--framer-font-weight:700;--framer-line-height:1.4em;--framer-text-color:var(--extracted-r6o4lv, var(--variable-reference-E3sMJqdyg-GjHZzzxwD))" className="framer-text">Read My CV</p>
    //  </div>
    //  <div className="framer-o3hmp0" data-framer-name="Icon" style="background-color: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); border-radius: 48px; transform: translateY(-50%) rotate(180deg); opacity: 1;">
    //  <div className="framer-qib4ye-container" style="opacity: 1;">
    //  <div style="display:contents">
    //  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255))" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); flex-shrink: 0;">
    //  <g color="var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255))" weight="regular">
    //  <path d="M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23h0a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM178.26,224h0L48,201,77.75,32,208,55ZM89.34,58.42a8,8,0,0,1,9.27-6.48l83,14.65a8,8,0,0,1-1.39,15.88,8.36,8.36,0,0,1-1.4-.12l-83-14.66A8,8,0,0,1,89.34,58.42ZM83.8,89.94a8,8,0,0,1,9.27-6.49l83,14.66A8,8,0,0,1,174.67,114a7.55,7.55,0,0,1-1.41-.13l-83-14.65A8,8,0,0,1,83.8,89.94Zm-5.55,31.51A8,8,0,0,1,87.52,115L129,122.29a8,8,0,0,1-1.38,15.88,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,78.25,121.45Z">
    //  </path>
    //  </g>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </a>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-1cpj5m4-container" style="opacity: 1; transform: rotate(2deg);">
    //  <div className="framer-Fes0k framer-W8FY1 framer-bDL2M framer-9wI2i framer-haXsu framer-r8qnc framer-eeI7V framer-rmcxko framer-v-xhrbkc" data-framer-name="Mobile" tabindex="0" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); max-width: 100%; width: 100%; border-radius: 48px; opacity: 1;">
    //  <div className="framer-da0p51" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1ybgdin" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-r7m3fp">My tech stack mirrors the vibrant diversity of the web itself. From the core languages of HTML5, CSS3, and JavaScript to an arsenal of design tools like Adobe Creative Suite and Sketch, I stay well-equipped. However, I believe in constantly pushing the boundaries, exploring emerging technologies and design trends to ensure my work remains both timeless and cutting-edge.</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </section>
    //  <section className="framer-1p2zycd" data-framer-name=" Testimonials Section" name=" Testimonials Section">
    //  <div className="framer-1h6mjf2" data-framer-name="Content" name="Content">
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-9zevq2" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;">
    //  <h2 className="framer-text framer-styles-preset-q2ybry" data-styles-preset="xQaGeseCC" style="--framer-text-alignment: center;">Testimonials</h2>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-l2w53i-container">
    //  <div className="framer-BYuYj framer-5amg54 framer-v-5amg54" data-framer-name="Variant 1" style="height: 100%; width: 100%; opacity: 1;">
    //  <div className="framer-1fft0cr-container" style="opacity: 1;">
    //  <section style="display: flex; flex-direction: row; width: 100%; height: 100%; max-width: 100%; max-height: 100%; place-items: center; margin: 0px; padding: 0px; list-style-type: none; opacity: 1; user-select: none;">
    //  <div style="width: 100%; height: 100%; margin: 0px; padding: inherit; position: absolute; inset: 0px; overflow: hidden; border-radius: 0px; user-select: none; perspective: 1200px;">
    //  <ul draggable="false" style="display: flex; flex-direction: row; width: 100%; height: 100%; max-width: 100%; max-height: 100%; place-items: center; margin: 0px; padding: 0px; list-style-type: none; gap: 10px; cursor: grab; user-select: none; transform: translateX(-3716.56px); touch-action: pan-y;">
    //  <li aria-hidden="false" style="display: contents;">
    //  <div className="framer-1xt1cqr-container" style="flex-shrink: 0; user-select: none; width: 100%; height: 100%; opacity: 1; visibility: hidden; transform: none; transform-origin: 100% 50% 0px;">
    //  <div className="framer-sDuhw framer-9wI2i framer-5UinU framer-W8FY1 framer-bDL2M framer-haXsu framer-QiCi9 framer-eeI7V framer-hyby1 framer-v-hyby1" data-framer-name="Variant 1" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-tejona" data-framer-name="Profile Data" style="opacity: 1;">
    //  <div className="framer-1y2uqau" data-framer-name="emily" style="opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="96px" src="https://framerusercontent.com/images/21y9kg3DMhOUBxbQ3y9CwHNPQO8.png" alt="" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-ds1vr1" data-framer-name="Name and Role" style="opacity: 1;">
    //  <div className="framer-npd45s" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Sarah Jones</h3>
    //  </div>
    //  <div className="framer-mf1rve" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT">Marketing Manager, Green Earth Solar</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-mmee4m" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1bu20u5">"Larry's design transformed our website! It's not just gorgeous, but it's incredibly user-friendly too. We've seen a huge jump in leads since launch, and customers love the easy navigation. Larry truly exceeded our expectations!"</p>
    //  </div>
    //  </div>
    //  </div>
    //  </li>
    //  <li aria-hidden="false" style="display: contents;">
    //  <div className="framer-kgt6su-container" style="flex-shrink: 0; user-select: none; width: 100%; height: 100%; opacity: 1; visibility: hidden; transform: none; transform-origin: 100% 50% 0px;">
    //  <div className="framer-sDuhw framer-9wI2i framer-5UinU framer-W8FY1 framer-bDL2M framer-haXsu framer-QiCi9 framer-eeI7V framer-hyby1 framer-v-hyby1" data-framer-name="Variant 1" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-tejona" data-framer-name="Profile Data" style="opacity: 1;">
    //  <div className="framer-1y2uqau" data-framer-name="emily" style="opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="96px" src="https://framerusercontent.com/images/2JNdM2O0RnZg1BcZHNgDWoMrhKA.png" alt="David Memoji Photo" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-ds1vr1" data-framer-name="Name and Role" style="opacity: 1;">
    //  <div className="framer-npd45s" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">David Lee</h3>
    //  </div>
    //  <div className="framer-mf1rve" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT">CEO, Technovation Inc.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-mmee4m" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1bu20u5">"Working with Larry was a dream. He took the time to understand our business and target audience, and the website he designed perfectly reflects our brand identity. Larry's ongoing support also gives us peace of mind, knowing our website is always running smoothly."</p>
    //  </div>
    //  </div>
    //  </div>
    //  </li>
    //  <li aria-hidden="false" style="display: contents;">
    //  <div className="framer-rqndxw-container" style="flex-shrink: 0; user-select: none; width: 100%; height: 100%; opacity: 1; visibility: hidden; transform: none; transform-origin: 100% 50% 0px;">
    //  <div className="framer-sDuhw framer-9wI2i framer-5UinU framer-W8FY1 framer-bDL2M framer-haXsu framer-QiCi9 framer-eeI7V framer-hyby1 framer-v-hyby1" data-framer-name="Variant 1" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-tejona" data-framer-name="Profile Data" style="opacity: 1;">
    //  <div className="framer-1y2uqau" data-framer-name="emily" style="opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="96px" src="https://framerusercontent.com/images/lQFJ89Y2vFBRt0WU8OFpJ3ZkPlA.png" alt="Emily Memoji Photo" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-ds1vr1" data-framer-name="Name and Role" style="opacity: 1;">
    //  <div className="framer-npd45s" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Emily Garcia</h3>
    //  </div>
    //  <div className="framer-mf1rve" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT">Founder, The Painted Palette</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-mmee4m" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1bu20u5">"As a small business owner, I was nervous about a professional website. But Larry made the process affordable and stress-free. He guided me through everything and delivered a beautiful website that showcases my artwork perfectly. Now I can focus on my passion, knowing my online presence is in good hands thanks to Larry!"</p>
    //  </div>
    //  </div>
    //  </div>
    //  </li>
    //  <li aria-hidden="true" style="display: contents;">
    //  <div className="framer-1xt1cqr-container" style="flex-shrink: 0; user-select: none; width: 100%; height: 100%; opacity: 1; visibility: hidden; transform: none; transform-origin: 100% 50% 0px;">
    //  <div className="framer-sDuhw framer-9wI2i framer-5UinU framer-W8FY1 framer-bDL2M framer-haXsu framer-QiCi9 framer-eeI7V framer-hyby1 framer-v-hyby1" data-framer-name="Variant 1" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-tejona" data-framer-name="Profile Data" style="opacity: 1;">
    //  <div className="framer-1y2uqau" data-framer-name="emily" style="opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="96px" src="https://framerusercontent.com/images/21y9kg3DMhOUBxbQ3y9CwHNPQO8.png" alt="" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-ds1vr1" data-framer-name="Name and Role" style="opacity: 1;">
    //  <div className="framer-npd45s" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Sarah Jones</h3>
    //  </div>
    //  <div className="framer-mf1rve" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT">Marketing Manager, Green Earth Solar</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-mmee4m" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1bu20u5">"Larry's design transformed our website! It's not just gorgeous, but it's incredibly user-friendly too. We've seen a huge jump in leads since launch, and customers love the easy navigation. Larry truly exceeded our expectations!"</p>
    //  </div>
    //  </div>
    //  </div>
    //  </li>
    //  <li aria-hidden="true" style="display: contents;">
    //  <div className="framer-kgt6su-container" style="flex-shrink: 0; user-select: none; width: 100%; height: 100%; opacity: 1; visibility: visible; transform: none; transform-origin: 100% 50% 0px;">
    //  <div className="framer-sDuhw framer-9wI2i framer-5UinU framer-W8FY1 framer-bDL2M framer-haXsu framer-QiCi9 framer-eeI7V framer-hyby1 framer-v-hyby1" data-framer-name="Variant 1" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-tejona" data-framer-name="Profile Data" style="opacity: 1;">
    //  <div className="framer-1y2uqau" data-framer-name="emily" style="opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="96px" src="https://framerusercontent.com/images/2JNdM2O0RnZg1BcZHNgDWoMrhKA.png" alt="David Memoji Photo" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-ds1vr1" data-framer-name="Name and Role" style="opacity: 1;">
    //  <div className="framer-npd45s" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">David Lee</h3>
    //  </div>
    //  <div className="framer-mf1rve" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT">CEO, Technovation Inc.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-mmee4m" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1bu20u5">"Working with Larry was a dream. He took the time to understand our business and target audience, and the website he designed perfectly reflects our brand identity. Larry's ongoing support also gives us peace of mind, knowing our website is always running smoothly."</p>
    //  </div>
    //  </div>
    //  </div>
    //  </li>
    //  <li aria-hidden="true" style="display: contents;">
    //  <div className="framer-rqndxw-container" style="flex-shrink: 0; user-select: none; width: 100%; height: 100%; opacity: 1; visibility: visible; transform: none; transform-origin: 100% 50% 0px;">
    //  <div className="framer-sDuhw framer-9wI2i framer-5UinU framer-W8FY1 framer-bDL2M framer-haXsu framer-QiCi9 framer-eeI7V framer-hyby1 framer-v-hyby1" data-framer-name="Variant 1" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-tejona" data-framer-name="Profile Data" style="opacity: 1;">
    //  <div className="framer-1y2uqau" data-framer-name="emily" style="opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="96px" src="https://framerusercontent.com/images/lQFJ89Y2vFBRt0WU8OFpJ3ZkPlA.png" alt="Emily Memoji Photo" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-ds1vr1" data-framer-name="Name and Role" style="opacity: 1;">
    //  <div className="framer-npd45s" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Emily Garcia</h3>
    //  </div>
    //  <div className="framer-mf1rve" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT">Founder, The Painted Palette</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-mmee4m" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1bu20u5">"As a small business owner, I was nervous about a professional website. But Larry made the process affordable and stress-free. He guided me through everything and delivered a beautiful website that showcases my artwork perfectly. Now I can focus on my passion, knowing my online presence is in good hands thanks to Larry!"</p>
    //  </div>
    //  </div>
    //  </div>
    //  </li>
    //  <li aria-hidden="true" style="display: contents;">
    //  <div className="framer-1xt1cqr-container" style="flex-shrink: 0; user-select: none; width: 100%; height: 100%; opacity: 1; visibility: visible; transform: none; transform-origin: 65.631% 50% 0px;">
    //  <div className="framer-sDuhw framer-9wI2i framer-5UinU framer-W8FY1 framer-bDL2M framer-haXsu framer-QiCi9 framer-eeI7V framer-hyby1 framer-v-hyby1" data-framer-name="Variant 1" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-tejona" data-framer-name="Profile Data" style="opacity: 1;">
    //  <div className="framer-1y2uqau" data-framer-name="emily" style="opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="96px" src="https://framerusercontent.com/images/21y9kg3DMhOUBxbQ3y9CwHNPQO8.png" alt="" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-ds1vr1" data-framer-name="Name and Role" style="opacity: 1;">
    //  <div className="framer-npd45s" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Sarah Jones</h3>
    //  </div>
    //  <div className="framer-mf1rve" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT">Marketing Manager, Green Earth Solar</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-mmee4m" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1bu20u5">"Larry's design transformed our website! It's not just gorgeous, but it's incredibly user-friendly too. We've seen a huge jump in leads since launch, and customers love the easy navigation. Larry truly exceeded our expectations!"</p>
    //  </div>
    //  </div>
    //  </div>
    //  </li>
    //  <li aria-hidden="true" style="display: contents;">
    //  <div className="framer-kgt6su-container" style="flex-shrink: 0; user-select: none; width: 100%; height: 100%; opacity: 1; visibility: visible; transform: none; transform-origin: 0% 50% 0px;">
    //  <div className="framer-sDuhw framer-9wI2i framer-5UinU framer-W8FY1 framer-bDL2M framer-haXsu framer-QiCi9 framer-eeI7V framer-hyby1 framer-v-hyby1" data-framer-name="Variant 1" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-tejona" data-framer-name="Profile Data" style="opacity: 1;">
    //  <div className="framer-1y2uqau" data-framer-name="emily" style="opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="96px" src="https://framerusercontent.com/images/2JNdM2O0RnZg1BcZHNgDWoMrhKA.png" alt="David Memoji Photo" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-ds1vr1" data-framer-name="Name and Role" style="opacity: 1;">
    //  <div className="framer-npd45s" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">David Lee</h3>
    //  </div>
    //  <div className="framer-mf1rve" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT">CEO, Technovation Inc.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-mmee4m" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1bu20u5">"Working with Larry was a dream. He took the time to understand our business and target audience, and the website he designed perfectly reflects our brand identity. Larry's ongoing support also gives us peace of mind, knowing our website is always running smoothly."</p>
    //  </div>
    //  </div>
    //  </div>
    //  </li>
    //  <li aria-hidden="true" style="display: contents;">
    //  <div className="framer-rqndxw-container" style="flex-shrink: 0; user-select: none; width: 100%; height: 100%; opacity: 1; visibility: visible; transform: none; transform-origin: 0% 50% 0px;">
    //  <div className="framer-sDuhw framer-9wI2i framer-5UinU framer-W8FY1 framer-bDL2M framer-haXsu framer-QiCi9 framer-eeI7V framer-hyby1 framer-v-hyby1" data-framer-name="Variant 1" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-tejona" data-framer-name="Profile Data" style="opacity: 1;">
    //  <div className="framer-1y2uqau" data-framer-name="emily" style="opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="96px" src="https://framerusercontent.com/images/lQFJ89Y2vFBRt0WU8OFpJ3ZkPlA.png" alt="Emily Memoji Photo" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-ds1vr1" data-framer-name="Name and Role" style="opacity: 1;">
    //  <div className="framer-npd45s" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Emily Garcia</h3>
    //  </div>
    //  <div className="framer-mf1rve" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT">Founder, The Painted Palette</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-mmee4m" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1bu20u5">"As a small business owner, I was nervous about a professional website. But Larry made the process affordable and stress-free. He guided me through everything and delivered a beautiful website that showcases my artwork perfectly. Now I can focus on my passion, knowing my online presence is in good hands thanks to Larry!"</p>
    //  </div>
    //  </div>
    //  </div>
    //  </li>
    //  <li aria-hidden="true" style="display: contents;">
    //  <div className="framer-1xt1cqr-container" aria-hidden="false" style="flex-shrink: 0; user-select: none; width: 100%; height: 100%; opacity: 1; visibility: hidden; transform: none; transform-origin: 0% 50% 0px;">
    //  <div className="framer-sDuhw framer-9wI2i framer-5UinU framer-W8FY1 framer-bDL2M framer-haXsu framer-QiCi9 framer-eeI7V framer-hyby1 framer-v-hyby1" data-framer-name="Variant 1" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-tejona" data-framer-name="Profile Data" style="opacity: 1;">
    //  <div className="framer-1y2uqau" data-framer-name="emily" style="opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="96px" src="https://framerusercontent.com/images/21y9kg3DMhOUBxbQ3y9CwHNPQO8.png" alt="" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-ds1vr1" data-framer-name="Name and Role" style="opacity: 1;">
    //  <div className="framer-npd45s" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Sarah Jones</h3>
    //  </div>
    //  <div className="framer-mf1rve" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT">Marketing Manager, Green Earth Solar</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-mmee4m" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1bu20u5">"Larry's design transformed our website! It's not just gorgeous, but it's incredibly user-friendly too. We've seen a huge jump in leads since launch, and customers love the easy navigation. Larry truly exceeded our expectations!"</p>
    //  </div>
    //  </div>
    //  </div>
    //  </li>
    //  <li aria-hidden="true" style="display: contents;">
    //  <div className="framer-kgt6su-container" aria-hidden="true" style="flex-shrink: 0; user-select: none; width: 100%; height: 100%; opacity: 1; visibility: hidden; transform: none; transform-origin: 0% 50% 0px;">
    //  <div className="framer-sDuhw framer-9wI2i framer-5UinU framer-W8FY1 framer-bDL2M framer-haXsu framer-QiCi9 framer-eeI7V framer-hyby1 framer-v-hyby1" data-framer-name="Variant 1" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-tejona" data-framer-name="Profile Data" style="opacity: 1;">
    //  <div className="framer-1y2uqau" data-framer-name="emily" style="opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="96px" src="https://framerusercontent.com/images/2JNdM2O0RnZg1BcZHNgDWoMrhKA.png" alt="David Memoji Photo" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-ds1vr1" data-framer-name="Name and Role" style="opacity: 1;">
    //  <div className="framer-npd45s" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">David Lee</h3>
    //  </div>
    //  <div className="framer-mf1rve" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT">CEO, Technovation Inc.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-mmee4m" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1bu20u5">"Working with Larry was a dream. He took the time to understand our business and target audience, and the website he designed perfectly reflects our brand identity. Larry's ongoing support also gives us peace of mind, knowing our website is always running smoothly."</p>
    //  </div>
    //  </div>
    //  </div>
    //  </li>
    //  <li aria-hidden="true" style="display: contents;">
    //  <div className="framer-rqndxw-container" aria-hidden="true" style="flex-shrink: 0; user-select: none; width: 100%; height: 100%; opacity: 1; visibility: hidden; transform: none; transform-origin: 0% 50% 0px;">
    //  <div className="framer-sDuhw framer-9wI2i framer-5UinU framer-W8FY1 framer-bDL2M framer-haXsu framer-QiCi9 framer-eeI7V framer-hyby1 framer-v-hyby1" data-framer-name="Variant 1" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-tejona" data-framer-name="Profile Data" style="opacity: 1;">
    //  <div className="framer-1y2uqau" data-framer-name="emily" style="opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="96px" src="https://framerusercontent.com/images/lQFJ89Y2vFBRt0WU8OFpJ3ZkPlA.png" alt="Emily Memoji Photo" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-ds1vr1" data-framer-name="Name and Role" style="opacity: 1;">
    //  <div className="framer-npd45s" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Emily Garcia</h3>
    //  </div>
    //  <div className="framer-mf1rve" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT">Founder, The Painted Palette</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-mmee4m" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1bu20u5">"As a small business owner, I was nervous about a professional website. But Larry made the process affordable and stress-free. He guided me through everything and delivered a beautiful website that showcases my artwork perfectly. Now I can focus on my passion, knowing my online presence is in good hands thanks to Larry!"</p>
    //  </div>
    //  </div>
    //  </div>
    //  </li>
    //  </ul>
    //  </div>
    //  <fieldset aria-label="Slideshow pagination controls" className="framer--slideshow-controls" style="display: flex; justify-content: space-between; align-items: center; position: absolute; pointer-events: none; user-select: none; inset: 0px; border: 0px; padding: 0px; margin: 0px;">
    //  <div style="position: absolute; display: flex; flex-direction: row; justify-content: space-between; gap: unset; opacity: 1; align-items: center; inset: 20px;">
    //  <button type="button" aria-label="Previous" tabindex="0" style="border: none; display: none; place-content: center; place-items: center; overflow: hidden; background: rgba(0, 0, 0, 0.2); cursor: pointer; margin: 0px; padding: 0px; width: 40px; height: 40px; border-radius: 40px; pointer-events: auto; transform: none;">
    //  <img width="40" height="40" src="https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg" alt="Back Arrow"/>
    //  </button>
    //  <button type="button" aria-label="Next" tabindex="0" style="border: none; display: none; place-content: center; place-items: center; overflow: hidden; background: rgba(0, 0, 0, 0.2); cursor: pointer; margin: 0px; padding: 0px; width: 40px; height: 40px; border-radius: 40px; pointer-events: auto; transform: none;">
    //  <img width="40" height="40" src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg" alt="Next Arrow"/>
    //  </button>
    //  </div>
    //  <div style="display: flex; place-content: center; place-items: center; overflow: hidden; position: absolute; pointer-events: auto; left: 50%; top: unset; transform: translateX(-50%); flex-direction: row; bottom: 10px; border-radius: 50px; background-color: rgba(0, 0, 0, 0); user-select: none;">
    //  <button aria-label="Scroll to page 1" type="button" style="border: none; display: flex; place-content: center; place-items: center; overflow: hidden; background: transparent; cursor: pointer; margin: 0px; padding: 10px 5px 10px 10px;">
    //  <div style="border-radius: 50%; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: var(--token-63e45272-007b-437e-b2a8-9f4d1433e3e9, rgb(102, 112, 255)); cursor: pointer; border: none; place-content: center; place-items: center; padding: 0px; width: 10px; height: 10px; opacity: 1; will-change: auto;">
    //  </div>
    //  </button>
    //  <button aria-label="Scroll to page 2" type="button" style="border: none; display: flex; place-content: center; place-items: center; overflow: hidden; background: transparent; cursor: pointer; margin: 0px; padding: 10px 5px;">
    //  <div style="border-radius: 50%; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: var(--token-63e45272-007b-437e-b2a8-9f4d1433e3e9, rgb(102, 112, 255)); cursor: pointer; border: none; place-content: center; place-items: center; padding: 0px; width: 10px; height: 10px; opacity: 0.2; will-change: auto;">
    //  </div>
    //  </button>
    //  <button aria-label="Scroll to page 3" type="button" style="border: none; display: flex; place-content: center; place-items: center; overflow: hidden; background: transparent; cursor: pointer; margin: 0px; padding: 10px 10px 10px 5px;">
    //  <div style="border-radius: 50%; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: var(--token-63e45272-007b-437e-b2a8-9f4d1433e3e9, rgb(102, 112, 255)); cursor: pointer; border: none; place-content: center; place-items: center; padding: 0px; width: 10px; height: 10px; opacity: 0.2; will-change: auto;">
    //  </div>
    //  </button>
    //  </div>
    //  </fieldset>
    //  </section>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </section>
    //  <section className="framer-wvkvs1" data-framer-name="Stack Section" name="Stack Section">
    //  <div className="framer-1pvdr9c" data-framer-name="Stack Scroll Section" name="Stack Scroll Section">
    //  <div className="framer-1cciwpj" data-framer-name="Stack Scroll Section-01" id="stack" name="Stack Scroll Section-01">
    //  </div>
    //  </div>
    //  <div className="framer-qkzqqr" data-framer-name="Content" name="Content">
    //  <div className="framer-ms1di8" data-framer-name="My Stack" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <h2 className="framer-text framer-styles-preset-q2ybry" data-styles-preset="xQaGeseCC" style="--framer-text-alignment:center">My Stack</h2>
    //  </div>
    //  <div className="framer-10iu1of" data-framer-name="Stacks" name="Stacks">
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-18xds7x-container" data-framer-cursor="vjt1q8" style="opacity: 1; transform: scale(0.8);">
    //  <div className="framer-AGvXy framer-W8FY1 framer-bDL2M framer-9wI2i framer-haXsu framer-Ds1Ep framer-eeI7V framer-5UinU framer-10df59w framer-v-1ithyro" data-framer-name="Mobile" data-highlight="true" tabindex="0" style="height: 100%; width: 100%; transform: none; opacity: 1;">
    //  <div className="framer-1tflksa" data-framer-name="Stack Card - Description" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; transform: perspective(500px) rotateX(180deg); opacity: 1;">
    //  <div className="framer-1efahs0" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1ve8pux" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1k9uixy">Framer revolutionizes my web design workflow. It goes beyond a simple website builder, offering a visual playground where I can craft stunning and interactive websites without getting bogged down in complex code.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-cedhtq" data-framer-name="Stack Card - Logo" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1; transform: perspective(500px);">
    //  <div className="framer-1j9k7ha" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1v1pl5a-container" style="opacity: 1;">
    //  <div className="framer-rRVpX framer-aryam1 framer-v-aryam1" data-framer-name="Framer" tabindex="0" style="height: 100%; width: 100%; opacity: 1;">
    //  <div data-framer-component-type="SVG" data-framer-name="Framer" className="framer-d27we" style="image-rendering: pixelated; flex-shrink: 0; fill: black; color: black; opacity: 1;">
    //  <div className="svgContainer" style="width: 100%; height: 100%; aspect-ratio: inherit;">
    //  <svg style="width:100%;height:100%" viewBox="0 0 48 48" preserveAspectRatio="none" width="100%" height="100%">
    //  <use href="#svg1593616172_160">
    //  </use>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1caw2gc" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Framer</h3>
    //  </div>
    //  </div>
    //  <div className="framer-1qjashw" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: translateX(-50%); opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)));">Tap to flip</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-azz0t8-container" data-framer-cursor="vjt1q8" style="opacity: 1; transform: scale(0.8);">
    //  <div className="framer-AGvXy framer-W8FY1 framer-bDL2M framer-9wI2i framer-haXsu framer-Ds1Ep framer-eeI7V framer-5UinU framer-10df59w framer-v-1ithyro" data-framer-name="Mobile" data-highlight="true" tabindex="0" style="height: 100%; width: 100%; transform: none; opacity: 1;">
    //  <div className="framer-1tflksa" data-framer-name="Stack Card - Description" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; transform: perspective(500px) rotateX(180deg); opacity: 1;">
    //  <div className="framer-1efahs0" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1ve8pux" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1k9uixy">Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based approach streamlines the design process.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-cedhtq" data-framer-name="Stack Card - Logo" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1; transform: perspective(500px);">
    //  <div className="framer-1j9k7ha" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1v1pl5a-container" style="opacity: 1;">
    //  <div className="framer-rRVpX framer-aryam1 framer-v-1pmk0td" data-framer-name="Figma" tabindex="0" style="height: 100%; width: 100%; opacity: 1;">
    //  <div data-framer-component-type="SVG" data-framer-name="Figma" className="framer-tebhhg" style="image-rendering: pixelated; flex-shrink: 0; fill: black; color: black; opacity: 1;">
    //  <div className="svgContainer" style="width: 100%; height: 100%; aspect-ratio: inherit;">
    //  <svg style="width:100%;height:100%" viewBox="0 0 48 48" preserveAspectRatio="none" width="100%" height="100%">
    //  <use href="#svg1569875058_661">
    //  </use>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1caw2gc" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Figma</h3>
    //  </div>
    //  </div>
    //  <div className="framer-1qjashw" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: translateX(-50%); opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)));">Tap to flip</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-199v01q-container" data-framer-cursor="vjt1q8" style="opacity: 1; transform: scale(0.8);">
    //  <div className="framer-AGvXy framer-W8FY1 framer-bDL2M framer-9wI2i framer-haXsu framer-Ds1Ep framer-eeI7V framer-5UinU framer-10df59w framer-v-1ithyro" data-framer-name="Mobile" data-highlight="true" tabindex="0" style="height: 100%; width: 100%; transform: none; opacity: 1;">
    //  <div className="framer-1tflksa" data-framer-name="Stack Card - Description" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; transform: perspective(500px) rotateX(180deg); opacity: 1;">
    //  <div className="framer-1efahs0" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1ve8pux" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1k9uixy">Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to project timelines is in one place.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-cedhtq" data-framer-name="Stack Card - Logo" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1; transform: perspective(500px);">
    //  <div className="framer-1j9k7ha" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1v1pl5a-container" style="opacity: 1;">
    //  <div className="framer-rRVpX framer-aryam1 framer-v-l85y99" data-framer-name="Notion" tabindex="0" style="height: 100%; width: 100%; opacity: 1;">
    //  <div data-framer-component-type="SVG" data-framer-name="Notion" className="framer-kqopsq" style="image-rendering: pixelated; flex-shrink: 0; fill: black; color: black; opacity: 1;">
    //  <div className="svgContainer" style="width: 100%; height: 100%; aspect-ratio: inherit;">
    //  <svg style="width:100%;height:100%" viewBox="0 0 48 48" preserveAspectRatio="none" width="100%" height="100%">
    //  <use href="#svg424135576_1121">
    //  </use>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1caw2gc" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Notion</h3>
    //  </div>
    //  </div>
    //  <div className="framer-1qjashw" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: translateX(-50%); opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)));">Tap to flip</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-1e84gbx-container" data-framer-cursor="vjt1q8" style="opacity: 1; transform: scale(0.8);">
    //  <div className="framer-AGvXy framer-W8FY1 framer-bDL2M framer-9wI2i framer-haXsu framer-Ds1Ep framer-eeI7V framer-5UinU framer-10df59w framer-v-1ithyro" data-framer-name="Mobile" data-highlight="true" tabindex="0" style="height: 100%; width: 100%; transform: none; opacity: 1;">
    //  <div className="framer-1tflksa" data-framer-name="Stack Card - Description" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; transform: perspective(500px) rotateX(180deg); opacity: 1;">
    //  <div className="framer-1efahs0" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1ve8pux" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1k9uixy">Airtable is my go-to solution for robust data organization. I harness its power to create structured databases, making information easily accessible and ensuring a systematic approach to handling complex datasets.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-cedhtq" data-framer-name="Stack Card - Logo" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1; transform: perspective(500px);">
    //  <div className="framer-1j9k7ha" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1v1pl5a-container" style="opacity: 1;">
    //  <div className="framer-rRVpX framer-aryam1 framer-v-x82bv6" data-framer-name="Airtable" tabindex="0" style="height: 100%; width: 100%; opacity: 1;">
    //  <div data-framer-component-type="SVG" data-framer-name="Airtable" className="framer-uf4h35" style="image-rendering: pixelated; flex-shrink: 0; fill: black; color: black; opacity: 1;">
    //  <div className="svgContainer" style="width: 100%; height: 100%; aspect-ratio: inherit;">
    //  <svg style="width:100%;height:100%" viewBox="0 0 48 48" preserveAspectRatio="none" width="100%" height="100%">
    //  <use href="#svg57128850_981">
    //  </use>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1caw2gc" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Airtable</h3>
    //  </div>
    //  </div>
    //  <div className="framer-1qjashw" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: translateX(-50%); opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)));">Tap to flip</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-bsx1o-container" data-framer-cursor="vjt1q8" style="opacity: 1; transform: scale(0.8);">
    //  <div className="framer-AGvXy framer-W8FY1 framer-bDL2M framer-9wI2i framer-haXsu framer-Ds1Ep framer-eeI7V framer-5UinU framer-10df59w framer-v-1ithyro" data-framer-name="Mobile" data-highlight="true" tabindex="0" style="height: 100%; width: 100%; transform: none; opacity: 1;">
    //  <div className="framer-1tflksa" data-framer-name="Stack Card - Description" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; transform: perspective(500px) rotateX(180deg); opacity: 1;">
    //  <div className="framer-1efahs0" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1ve8pux" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1k9uixy">Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to life, allowing stakeholders to experience the user flow and interactions before development begins. It's invaluable for refining the user experience.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-cedhtq" data-framer-name="Stack Card - Logo" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1; transform: perspective(500px);">
    //  <div className="framer-1j9k7ha" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1v1pl5a-container" style="opacity: 1;">
    //  <div className="framer-rRVpX framer-aryam1 framer-v-1wpwlu4" data-framer-name="Zapier" tabindex="0" style="height: 100%; width: 100%; opacity: 1;">
    //  <div data-framer-component-type="SVG" data-framer-name="Zapier" className="framer-1c8csae" style="image-rendering: pixelated; flex-shrink: 0; fill: black; color: black; opacity: 1;">
    //  <div className="svgContainer" style="width: 100%; height: 100%; aspect-ratio: inherit;">
    //  <svg style="width:100%;height:100%" viewBox="0 0 48 48" preserveAspectRatio="none" width="100%" height="100%">
    //  <use href="#svg138838848_987">
    //  </use>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1caw2gc" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Zapier</h3>
    //  </div>
    //  </div>
    //  <div className="framer-1qjashw" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: translateX(-50%); opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)));">Tap to flip</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-11lzwhy-container" data-framer-cursor="vjt1q8" style="opacity: 1; transform: scale(0.8);">
    //  <div className="framer-AGvXy framer-W8FY1 framer-bDL2M framer-9wI2i framer-haXsu framer-Ds1Ep framer-eeI7V framer-5UinU framer-10df59w framer-v-1ithyro" data-framer-name="Mobile" data-highlight="true" tabindex="0" style="height: 100%; width: 100%; transform: none; opacity: 1;">
    //  <div className="framer-1tflksa" data-framer-name="Stack Card - Description" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; transform: perspective(500px) rotateX(180deg); opacity: 1;">
    //  <div className="framer-1efahs0" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1ve8pux" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1k9uixy">LemonSqueezy stands as my comprehensive solution for managing every aspect of my SaaS business. From seamless payment processing and subscription management to global tax compliance and fraud prevention, this all-in-one platform simplifies the complexities of running a SaaS operation.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-cedhtq" data-framer-name="Stack Card - Logo" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1; transform: perspective(500px);">
    //  <div className="framer-1j9k7ha" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1v1pl5a-container" style="opacity: 1;">
    //  <div className="framer-rRVpX framer-aryam1 framer-v-1k3nxtk" data-framer-name="LemonSqueezy" tabindex="0" style="height: 100%; width: 100%; opacity: 1;">
    //  <div data-framer-component-type="SVG" data-framer-name="LemonSqueezy" className="framer-8mclxw" style="image-rendering: pixelated; flex-shrink: 0; fill: black; color: black; opacity: 1;">
    //  <div className="svgContainer" style="width: 100%; height: 100%; aspect-ratio: inherit;">
    //  <svg style="width:100%;height:100%" viewBox="0 0 48 48" preserveAspectRatio="none" width="100%" height="100%">
    //  <use href="#svg-1057467642_815">
    //  </use>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1caw2gc" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Lemon Squeezy</h3>
    //  </div>
    //  </div>
    //  <div className="framer-1qjashw" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: translateX(-50%); opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)));">Tap to flip</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-11560wc-container" data-framer-cursor="vjt1q8" style="opacity: 1; transform: scale(0.8);">
    //  <div className="framer-AGvXy framer-W8FY1 framer-bDL2M framer-9wI2i framer-haXsu framer-Ds1Ep framer-eeI7V framer-5UinU framer-10df59w framer-v-1ithyro" data-framer-name="Mobile" data-highlight="true" tabindex="0" style="height: 100%; width: 100%; transform: none; opacity: 1;">
    //  <div className="framer-1tflksa" data-framer-name="Stack Card - Description" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; transform: perspective(500px) rotateX(180deg); opacity: 1;">
    //  <div className="framer-1efahs0" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1ve8pux" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1k9uixy">Mailchimp is my go-to for elevating outreach strategies. I utilize its features to craft engaging email campaigns, manage subscriber lists, and analyze performance data, ensuring effective and targeted communication.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-cedhtq" data-framer-name="Stack Card - Logo" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1; transform: perspective(500px);">
    //  <div className="framer-1j9k7ha" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1v1pl5a-container" style="opacity: 1;">
    //  <div className="framer-rRVpX framer-aryam1 framer-v-m46byg" data-framer-name="Mailchimp" tabindex="0" style="height: 100%; width: 100%; opacity: 1;">
    //  <div data-framer-component-type="SVG" data-framer-name="Mailchimp" className="framer-12be6uj" style="image-rendering: pixelated; flex-shrink: 0; fill: black; color: black; opacity: 1;">
    //  <div className="svgContainer" style="width: 100%; height: 100%; aspect-ratio: inherit;">
    //  <svg style="width:100%;height:100%" viewBox="0 0 48 48" preserveAspectRatio="none" width="100%" height="100%">
    //  <use href="#svg476648197_4445">
    //  </use>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1caw2gc" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Mailchimp</h3>
    //  </div>
    //  </div>
    //  <div className="framer-1qjashw" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: translateX(-50%); opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)));">Tap to flip</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-1u44ys1-container" data-framer-cursor="vjt1q8" style="opacity: 1; transform: scale(0.8);">
    //  <div className="framer-AGvXy framer-W8FY1 framer-bDL2M framer-9wI2i framer-haXsu framer-Ds1Ep framer-eeI7V framer-5UinU framer-10df59w framer-v-1ithyro" data-framer-name="Mobile" data-highlight="true" tabindex="0" style="height: 100%; width: 100%; transform: none; opacity: 1;">
    //  <div className="framer-1tflksa" data-framer-name="Stack Card - Description" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; transform: perspective(500px) rotateX(180deg); opacity: 1;">
    //  <div className="framer-1efahs0" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1ve8pux" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1k9uixy">Slack is the cornerstone of my collaborative workflow. It fosters a dynamic environment where teams can seamlessly exchange ideas, share files, and provide real-time feedback.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-cedhtq" data-framer-name="Stack Card - Logo" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1; transform: perspective(500px);">
    //  <div className="framer-1j9k7ha" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1v1pl5a-container" style="opacity: 1;">
    //  <div className="framer-rRVpX framer-aryam1 framer-v-18o21n" data-framer-name="Slack" tabindex="0" style="height: 100%; width: 100%; opacity: 1;">
    //  <div data-framer-component-type="SVG" data-framer-name="Slack" className="framer-2u8zx8" style="image-rendering: pixelated; flex-shrink: 0; fill: black; color: black; opacity: 1;">
    //  <div className="svgContainer" style="width: 100%; height: 100%; aspect-ratio: inherit;">
    //  <svg style="width:100%;height:100%" viewBox="0 0 48 48" preserveAspectRatio="none" width="100%" height="100%">
    //  <use href="#svg2047704320_1306">
    //  </use>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1caw2gc" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Slack</h3>
    //  </div>
    //  </div>
    //  <div className="framer-1qjashw" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: translateX(-50%); opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)));">Tap to flip</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-8iwag3-container" data-framer-cursor="vjt1q8" style="opacity: 1; transform: scale(0.8);">
    //  <div className="framer-AGvXy framer-W8FY1 framer-bDL2M framer-9wI2i framer-haXsu framer-Ds1Ep framer-eeI7V framer-5UinU framer-10df59w framer-v-1ithyro" data-framer-name="Mobile" data-highlight="true" tabindex="0" style="height: 100%; width: 100%; transform: none; opacity: 1;">
    //  <div className="framer-1tflksa" data-framer-name="Stack Card - Description" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; transform: perspective(500px) rotateX(180deg); opacity: 1;">
    //  <div className="framer-1efahs0" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1ve8pux" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1k9uixy">Adobe Creative Cloud is my comprehensive toolkit for unleashing creative potential. It offers a powerful suite of applications like Photoshop, Illustrator, and After Effects, each designed to excel in specific design tasks.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-cedhtq" data-framer-name="Stack Card - Logo" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1; transform: perspective(500px);">
    //  <div className="framer-1j9k7ha" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1v1pl5a-container" style="opacity: 1;">
    //  <div className="framer-rRVpX framer-aryam1 framer-v-ut9aj5" data-framer-name="Creative Cloud" tabindex="0" style="height: 100%; width: 100%; opacity: 1;">
    //  <div data-framer-component-type="SVG" data-framer-name="Creative Cloud" className="framer-1xiwc6a" style="image-rendering: pixelated; flex-shrink: 0; fill: black; color: black; opacity: 1;">
    //  <div className="svgContainer" style="width: 100%; height: 100%; aspect-ratio: inherit;">
    //  <svg style="width:100%;height:100%" viewBox="0 0 48 48" preserveAspectRatio="none" width="100%" height="100%">
    //  <use href="#svg1278744266_2539">
    //  </use>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1caw2gc" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Creative Cloud</h3>
    //  </div>
    //  </div>
    //  <div className="framer-1qjashw" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: translateX(-50%); opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)));">Tap to flip</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-1c99j63-container" data-framer-cursor="vjt1q8" style="opacity: 1; transform: scale(0.8);">
    //  <div className="framer-AGvXy framer-W8FY1 framer-bDL2M framer-9wI2i framer-haXsu framer-Ds1Ep framer-eeI7V framer-5UinU framer-10df59w framer-v-1ithyro" data-framer-name="Mobile" data-highlight="true" tabindex="0" style="height: 100%; width: 100%; transform: none; opacity: 1;">
    //  <div className="framer-1tflksa" data-framer-name="Stack Card - Description" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; transform: perspective(500px) rotateX(180deg); opacity: 1;">
    //  <div className="framer-1efahs0" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1ve8pux" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1k9uixy">ChatGPT is my content generation and assistance tool. I leverage it for content ideas, copywriting, and problem-solving. It provides invaluable insights and suggestions that enhance the quality of my projects.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-cedhtq" data-framer-name="Stack Card - Logo" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1; transform: perspective(500px);">
    //  <div className="framer-1j9k7ha" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1v1pl5a-container" style="opacity: 1;">
    //  <div className="framer-rRVpX framer-aryam1 framer-v-1zvqpq" data-framer-name="Chat GPT" tabindex="0" style="height: 100%; width: 100%; opacity: 1;">
    //  <div data-framer-component-type="SVG" data-framer-name="Chat GPT" className="framer-h4be0t" style="image-rendering: pixelated; flex-shrink: 0; fill: black; color: black; opacity: 1;">
    //  <div className="svgContainer" style="width: 100%; height: 100%; aspect-ratio: inherit;">
    //  <svg style="width:100%;height:100%" viewBox="0 0 48 48" preserveAspectRatio="none" width="100%" height="100%">
    //  <use href="#svg-516148561_1603">
    //  </use>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1caw2gc" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Chat GPT</h3>
    //  </div>
    //  </div>
    //  <div className="framer-1qjashw" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: translateX(-50%); opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)));">Tap to flip</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-l1r0wx-container" data-framer-cursor="vjt1q8" style="opacity: 1; transform: scale(0.8);">
    //  <div className="framer-AGvXy framer-W8FY1 framer-bDL2M framer-9wI2i framer-haXsu framer-Ds1Ep framer-eeI7V framer-5UinU framer-10df59w framer-v-1ithyro" data-framer-name="Mobile" data-highlight="true" tabindex="0" style="height: 100%; width: 100%; transform: none; opacity: 1;">
    //  <div className="framer-1tflksa" data-framer-name="Stack Card - Description" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; transform: perspective(500px) rotateX(180deg); opacity: 1;">
    //  <div className="framer-1efahs0" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1ve8pux" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1k9uixy">HTML5 is the backbone of my web design work. I use it to structure content, ensuring that websites are semantically meaningful and accessible. It forms the foundation upon which the visual elements of a site are built.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-cedhtq" data-framer-name="Stack Card - Logo" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1; transform: perspective(500px);">
    //  <div className="framer-1j9k7ha" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1v1pl5a-container" style="opacity: 1;">
    //  <div className="framer-rRVpX framer-aryam1 framer-v-2rimsv" data-framer-name="HTML" tabindex="0" style="height: 100%; width: 100%; opacity: 1;">
    //  <div data-framer-component-type="SVG" data-framer-name="HTML" className="framer-1q7n1qj" style="image-rendering: pixelated; flex-shrink: 0; fill: black; color: black; opacity: 1;">
    //  <div className="svgContainer" style="width: 100%; height: 100%; aspect-ratio: inherit;">
    //  <svg style="width:100%;height:100%" viewBox="0 0 48 48" preserveAspectRatio="none" width="100%" height="100%">
    //  <use href="#svg-1482206869_441">
    //  </use>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1caw2gc" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">HTML</h3>
    //  </div>
    //  </div>
    //  <div className="framer-1qjashw" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: translateX(-50%); opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)));">Tap to flip</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-mv6g26-container" data-framer-cursor="vjt1q8" style="opacity: 1; transform: scale(0.8);">
    //  <div className="framer-AGvXy framer-W8FY1 framer-bDL2M framer-9wI2i framer-haXsu framer-Ds1Ep framer-eeI7V framer-5UinU framer-10df59w framer-v-1ithyro" data-framer-name="Mobile" data-highlight="true" tabindex="0" style="height: 100%; width: 100%; transform: none; opacity: 1;">
    //  <div className="framer-1tflksa" data-framer-name="Stack Card - Description" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; transform: perspective(500px) rotateX(180deg); opacity: 1;">
    //  <div className="framer-1efahs0" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1ve8pux" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1k9uixy">CSS3 is my styling and layout powerhouse. It's instrumental in creating visually appealing websites by controlling everything from fonts and colors to the responsive design that adapts to various screen sizes.</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-cedhtq" data-framer-name="Stack Card - Logo" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1; transform: perspective(500px);">
    //  <div className="framer-1j9k7ha" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-1v1pl5a-container" style="opacity: 1;">
    //  <div className="framer-rRVpX framer-aryam1 framer-v-llznf" data-framer-name="CSS" tabindex="0" style="height: 100%; width: 100%; opacity: 1;">
    //  <div data-framer-component-type="SVG" data-framer-name="CSS" className="framer-12hilwf" style="image-rendering: pixelated; flex-shrink: 0; fill: black; color: black; opacity: 1;">
    //  <div className="svgContainer" style="width: 100%; height: 100%; aspect-ratio: inherit;">
    //  <svg style="width:100%;height:100%" viewBox="0 0 48 48" preserveAspectRatio="none" width="100%" height="100%">
    //  <use href="#svg831501363_745">
    //  </use>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1caw2gc" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">CSS</h3>
    //  </div>
    //  </div>
    //  <div className="framer-1qjashw" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: translateX(-50%); opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)));">Tap to flip</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </section>
    //  <section className="framer-1mxi429" data-framer-name="Services Section" name="Services Section">
    //  <div className="framer-c9gqc7" data-framer-name="Services-Scroll Section" name="Services-Scroll Section">
    //  <div className="framer-17a93ev" data-framer-name="Services Scroll Section" id="services" name="Services Scroll Section">
    //  </div>
    //  </div>
    //  <div className="framer-i9etg6" data-framer-name="Content" name="Content">
    //  <div className="framer-3yt83f" data-framer-name="Services" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <h2 className="framer-text framer-styles-preset-q2ybry" data-styles-preset="xQaGeseCC" style="--framer-text-alignment:center">Services</h2>
    //  </div>
    //  <div className="framer-1dqwdy7" data-framer-name="Content" name="Content">
    //  <div className="framer-1m6104i" data-framer-name="Content Right" name="Content Right">
    //  <div className="framer-e0jeob" data-framer-name="Description-01" name="Description-01">
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-1g6awp8-container hidden-72rtr7 hidden-1wif7cb">
    //  <div className="framer-PZXIC framer-9wI2i framer-g5aayk framer-v-g5aayk" data-framer-name="Desktop-01" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-wj9u1" data-framer-name="Service Number" style="opacity: 1;">
    //  <div className="framer-1khapy0" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtODAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 200px; --framer-font-weight: 800; --framer-text-alignment: left; --framer-text-color: var(--extracted-a0htzi, var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)));">01</h3>
    //  </div>
    //  </div>
    //  <div className="framer-9596vl" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">Website Design &amp; Development</h3>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-54p2cv" data-framer-name="Services-Scroll-Section-01" id="services-scroll-section-01" name="Services-Scroll-Section-01">
    //  </div>
    //  <div className="framer-1c0ewje" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <p className="framer-text framer-styles-preset-r7m3fp" data-styles-preset="FDLlW0ER3" style="--framer-text-alignment:left">Transform your vision into a reality. This service encompasses crafting beautiful and user-friendly websites that not only captivate visitors but also guide them towards specific actions, whether it's making a purchase, signing up for a newsletter, or contacting you. Our process involves in-depth understanding of your target audience, user experience (UX) design to ensure intuitive navigation and clear calls to action, and front-end development utilizing the latest web technologies to create a visually stunning and functional website.</p>
    //  </div>
    //  <div className="framer-1medp2g-container">
    //  <div className="framer-VBR1P framer-v4mkyo framer-v-v4mkyo" data-framer-name="Variant 1" style="height: 100%; width: 100%; opacity: 1;" tabindex="0">
    //  <div className="framer-18re7xq" data-framer-name="yellow_cube" style="opacity: 1; transform: translateY(14.2114px) rotate(-10deg);">
    //  <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
    //  <img decoding="async" sizes="120px" srcset="https://framerusercontent.com/images/nSf6ya4FcQ5iCpFIBAboozmlgzA.png?scale-down-to=512 512w,https://framerusercontent.com/images/nSf6ya4FcQ5iCpFIBAboozmlgzA.png 1024w" src="https://framerusercontent.com/images/nSf6ya4FcQ5iCpFIBAboozmlgzA.png" alt="Red Pyramid" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover;image-rendering:auto"/>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-cwceab" data-framer-name="Description-02" name="Description-02">
    //  <div className="framer-tfs66r" data-framer-name="Services-Scroll-Section-02" id="services-scroll-section-02" name="Services-Scroll-Section-02">
    //  </div>
    //  <div className="framer-dzrd7c" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <p className="framer-text framer-styles-preset-r7m3fp" data-styles-preset="FDLlW0ER3" style="--framer-text-alignment:left">Landing pages are laser-focused on specific marketing goals. We design high-impact landing pages that grab attention, communicate your value proposition clearly, and seamlessly convert visitors into leads or paying customers. From crafting compelling headlines and captivating visuals to optimizing conversion elements like CTAs (calls to action) and lead capture forms, we ensure your landing page delivers a powerful first impression and drives results.</p>
    //  </div>
    //  <div className="framer-1lmbz4b-container">
    //  <div className="framer-VBR1P framer-v4mkyo framer-v-v4mkyo" data-framer-name="Variant 1" style="height: 100%; width: 100%; opacity: 1;" tabindex="0">
    //  <div className="framer-18re7xq" data-framer-name="yellow_cube" style="opacity: 1; transform: translateY(16.0971px);">
    //  <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
    //  <img decoding="async" sizes="120px" srcset="https://framerusercontent.com/images/fbDdTEyddMlUKyioryX3T3M3I.png?scale-down-to=512 512w,https://framerusercontent.com/images/fbDdTEyddMlUKyioryX3T3M3I.png 1024w" src="https://framerusercontent.com/images/fbDdTEyddMlUKyioryX3T3M3I.png" alt="Blue Cube" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover;image-rendering:auto"/>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-prpeej-container hidden-72rtr7 hidden-1wif7cb">
    //  <div className="framer-PZXIC framer-9wI2i framer-g5aayk framer-v-m3nxl6" data-framer-name="Desktop-02" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-wj9u1" data-framer-name="Service Number" style="opacity: 1;">
    //  <div className="framer-1khapy0" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtODAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 200px; --framer-font-weight: 800; --framer-text-alignment: left; --framer-text-color: var(--extracted-a0htzi, var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)));">02</h3>
    //  </div>
    //  </div>
    //  <div className="framer-9596vl" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">Landing Page Design</h3>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1lj0y2m" data-framer-name="Description-03" name="Description-03">
    //  <div className="framer-y5vmbb" data-framer-name="Services-Scroll-Section-03" id="services-scroll-section-03" name="Services-Scroll-Section-03">
    //  </div>
    //  <div className="framer-1lype57" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <p className="framer-text framer-styles-preset-r7m3fp" data-styles-preset="FDLlW0ER3" style="--framer-text-alignment:left">Your online store should be a seamless shopping experience. We create user-friendly and visually appealing e-commerce websites that not only showcase your products beautifully but also make it easy for customers to browse, find what they're looking for, and complete their purchases effortlessly. We incorporate clear product information, intuitive navigation, secure payment gateways, and a streamlined checkout process to maximize sales conversions.</p>
    //  </div>
    //  <div className="framer-xs6oek-container">
    //  <div className="framer-VBR1P framer-v4mkyo framer-v-v4mkyo" data-framer-name="Variant 1" style="height: 100%; width: 100%; opacity: 1;" tabindex="0">
    //  <div className="framer-18re7xq" data-framer-name="yellow_cube" style="opacity: 1; transform: translateY(16.1057px) rotate(-15deg);">
    //  <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
    //  <img decoding="async" sizes="120px" srcset="https://framerusercontent.com/images/un1NlasO4xdJ3ogUjNzC5U3NsU.png?scale-down-to=512 512w,https://framerusercontent.com/images/un1NlasO4xdJ3ogUjNzC5U3NsU.png 1024w" src="https://framerusercontent.com/images/un1NlasO4xdJ3ogUjNzC5U3NsU.png" alt="Green Cylinder" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover;image-rendering:auto"/>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-qsnmim-container hidden-72rtr7 hidden-1wif7cb">
    //  <div className="framer-PZXIC framer-9wI2i framer-g5aayk framer-v-1lrt9t1" data-framer-name="Desktop-03" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-wj9u1" data-framer-name="Service Number" style="opacity: 1;">
    //  <div className="framer-1khapy0" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtODAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 200px; --framer-font-weight: 800; --framer-text-alignment: left; --framer-text-color: var(--extracted-a0htzi, var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)));">03</h3>
    //  </div>
    //  </div>
    //  <div className="framer-9596vl" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">E-commerce Design</h3>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-4j0p2h" data-framer-name="Description-04" name="Description-04">
    //  <div className="framer-1s6y65y" data-framer-name="Services-Scroll-Section-04" id="services-scroll-section-04" name="Services-Scroll-Section-04">
    //  </div>
    //  <div className="framer-1393tzt" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <p className="framer-text framer-styles-preset-r7m3fp" data-styles-preset="FDLlW0ER3" style="--framer-text-alignment:left">Don't wait until development begins to see your website come to life. We utilize advanced prototyping tools like Framer to build interactive prototypes that simulate the final user experience. These prototypes allow you to test user flow, visualize interactions, and gather valuable feedback before any code is written. This iterative process ensures your website is on the right track from the very beginning.</p>
    //  </div>
    //  <div className="framer-ffuadh-container">
    //  <div className="framer-VBR1P framer-v4mkyo framer-v-v4mkyo" data-framer-name="Variant 1" style="height: 100%; width: 100%; opacity: 1;" tabindex="0">
    //  <div className="framer-18re7xq" data-framer-name="yellow_cube" style="opacity: 1; transform: translateY(16.1143px);">
    //  <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
    //  <img decoding="async" sizes="120px" srcset="https://framerusercontent.com/images/gshDWTLuPfNPn8ZUFpq49jhvIPk.png?scale-down-to=512 512w,https://framerusercontent.com/images/gshDWTLuPfNPn8ZUFpq49jhvIPk.png 1024w" src="https://framerusercontent.com/images/gshDWTLuPfNPn8ZUFpq49jhvIPk.png" alt="Orange Sphere" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover;image-rendering:auto"/>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-nfjns4-container hidden-72rtr7 hidden-1wif7cb">
    //  <div className="framer-PZXIC framer-9wI2i framer-g5aayk framer-v-quz7wd" data-framer-name="Desktop-04" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-wj9u1" data-framer-name="Service Number" style="opacity: 1;">
    //  <div className="framer-1khapy0" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtODAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 200px; --framer-font-weight: 800; --framer-text-alignment: left; --framer-text-color: var(--extracted-a0htzi, var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)));">04</h3>
    //  </div>
    //  </div>
    //  <div className="framer-9596vl" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">Website Prototyping</h3>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1lquz1p" data-framer-name="Description-05" name="Description-05">
    //  <div className="framer-1fquskq" data-framer-name="Services-Scroll-Section-05" id="services-scroll-section-05" name="Services-Scroll-Section-05">
    //  </div>
    //  <div className="framer-2x3hit" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <p className="framer-text framer-styles-preset-r7m3fp" data-styles-preset="FDLlW0ER3" style="--framer-text-alignment:left">Your website needs to look great and function flawlessly across all devices, from desktop computers to tablets and smartphones. Our responsive design approach ensures your website adapts automatically to different screen sizes, delivering an optimal user experience for all visitors, regardless of their device.</p>
    //  </div>
    //  <div className="framer-19hauiz-container">
    //  <div className="framer-VBR1P framer-v4mkyo framer-v-v4mkyo" data-framer-name="Variant 1" style="height: 100%; width: 100%; opacity: 1;" tabindex="0">
    //  <div className="framer-18re7xq" data-framer-name="yellow_cube" style="opacity: 1; transform: translateY(16.1143px) rotate(-45deg);">
    //  <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
    //  <img decoding="async" sizes="120px" srcset="https://framerusercontent.com/images/2YMs3TUoFSk6OAJu3tquJSjY.png?scale-down-to=512 512w,https://framerusercontent.com/images/2YMs3TUoFSk6OAJu3tquJSjY.png 1024w" src="https://framerusercontent.com/images/2YMs3TUoFSk6OAJu3tquJSjY.png" alt="Purple Circle" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover;image-rendering:auto"/>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-14hrk6w-container hidden-72rtr7 hidden-1wif7cb">
    //  <div className="framer-PZXIC framer-9wI2i framer-g5aayk framer-v-s9mnoc" data-framer-name="Desktop-05" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-wj9u1" data-framer-name="Service Number" style="opacity: 1;">
    //  <div className="framer-1khapy0" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtODAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 200px; --framer-font-weight: 800; --framer-text-alignment: left; --framer-text-color: var(--extracted-a0htzi, var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)));">05</h3>
    //  </div>
    //  </div>
    //  <div className="framer-9596vl" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">Responsive Design</h3>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1j3sc5x" data-framer-name="Description-06" name="Description-06">
    //  <div className="framer-1yvom51" data-framer-name="Services-Scroll-Section-06" id="services-scroll-section-06" name="Services-Scroll-Section-06">
    //  </div>
    //  <div className="framer-uwd414" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <p className="framer-text framer-styles-preset-r7m3fp" data-styles-preset="FDLlW0ER3" style="--framer-text-alignment:left">Empower yourself to easily manage your website content. We seamlessly integrate popular CMS platforms like WordPress into your website, allowing you to update content, add new pages, and manage images without needing any coding knowledge. This puts you in control of your website's content and keeps it fresh and engaging.</p>
    //  </div>
    //  <div className="framer-1idjgpa-container">
    //  <div className="framer-VBR1P framer-v4mkyo framer-v-v4mkyo" data-framer-name="Variant 1" style="height: 100%; width: 100%; opacity: 1;" tabindex="0">
    //  <div className="framer-18re7xq" data-framer-name="yellow_cube" style="opacity: 1; transform: translateY(16.3886px) rotate(25deg);">
    //  <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
    //  <img decoding="async" sizes="120px" srcset="https://framerusercontent.com/images/eiTxkfpr6msnt5xKhves6aFLlTw.png?scale-down-to=512 512w,https://framerusercontent.com/images/eiTxkfpr6msnt5xKhves6aFLlTw.png 1024w" src="https://framerusercontent.com/images/eiTxkfpr6msnt5xKhves6aFLlTw.png" alt="Yellow Heart" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover;image-rendering:auto"/>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-ziz9r0-container hidden-72rtr7 hidden-1wif7cb">
    //  <div className="framer-PZXIC framer-9wI2i framer-g5aayk framer-v-18aamhh" data-framer-name="Desktop-06" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-wj9u1" data-framer-name="Service Number" style="opacity: 1;">
    //  <div className="framer-1khapy0" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtODAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 200px; --framer-font-weight: 800; --framer-text-alignment: left; --framer-text-color: var(--extracted-a0htzi, var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)));">06</h3>
    //  </div>
    //  </div>
    //  <div className="framer-9596vl" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">Content Management System (CMS) Integration</h3>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1f1mc7v" data-framer-name="Description-07" name="Description-07">
    //  <div className="framer-1d2sci5" data-framer-name="Services-Scroll-Section-07" id="services-scroll-section-07" name="Services-Scroll-Section-07">
    //  </div>
    //  <div className="framer-xefe37" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <p className="framer-text framer-styles-preset-r7m3fp" data-styles-preset="FDLlW0ER3" style="--framer-text-alignment:left">Your website is an ongoing investment. We provide ongoing website maintenance and support services to ensure your website stays up-to-date, secure against potential threats, and functions smoothly. This includes regular software updates, security scans, performance monitoring, and troubleshooting any technical issues that may arise.</p>
    //  </div>
    //  <div className="framer-78sci1-container">
    //  <div className="framer-VBR1P framer-v4mkyo framer-v-v4mkyo" data-framer-name="Variant 1" style="height: 100%; width: 100%; opacity: 1;" tabindex="0">
    //  <div className="framer-18re7xq" data-framer-name="yellow_cube" style="opacity: 1; transform: translateY(16.4057px) rotate(-15deg);">
    //  <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
    //  <img decoding="async" sizes="120px" srcset="https://framerusercontent.com/images/YnQwe4Efg37DiOr8IRYEfPzKE.png?scale-down-to=512 512w,https://framerusercontent.com/images/YnQwe4Efg37DiOr8IRYEfPzKE.png 1024w" src="https://framerusercontent.com/images/YnQwe4Efg37DiOr8IRYEfPzKE.png" alt="Orange Star" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover;image-rendering:auto"/>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-4yqlr0-container hidden-72rtr7 hidden-1wif7cb">
    //  <div className="framer-PZXIC framer-9wI2i framer-g5aayk framer-v-dlpj2a" data-framer-name="Desktop-07" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-wj9u1" data-framer-name="Service Number" style="opacity: 1;">
    //  <div className="framer-1khapy0" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtODAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 200px; --framer-font-weight: 800; --framer-text-alignment: left; --framer-text-color: var(--extracted-a0htzi, var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)));">07</h3>
    //  </div>
    //  </div>
    //  <div className="framer-9596vl" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">Website Maintenance &amp; Support</h3>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-al4pnj" data-framer-name="Description-08" name="Description-08">
    //  <div className="framer-sm3ksp" data-framer-name="Services-Scroll-Section-08" id="services-scroll-section-08" name="Services-Scroll-Section-08">
    //  </div>
    //  <div className="framer-1ieadu8" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <p className="framer-text framer-styles-preset-r7m3fp" data-styles-preset="FDLlW0ER3" style="--framer-text-alignment:left">Your website should be a seamless extension of your brand. We develop a cohesive brand identity that goes beyond the website, encompassing elements like logos, color palettes, fonts, and design styles. This creates a consistent and memorable brand image across all your digital platforms, strengthening brand recognition and trust with your audience.</p>
    //  </div>
    //  <div className="framer-1kkm8uz-container">
    //  <div className="framer-VBR1P framer-v4mkyo framer-v-v4mkyo" data-framer-name="Variant 1" style="height: 100%; width: 100%; opacity: 1;" tabindex="0">
    //  <div className="framer-18re7xq" data-framer-name="yellow_cube" style="opacity: 1; transform: translateY(16.6543px);">
    //  <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
    //  <img decoding="async" sizes="120px" srcset="https://framerusercontent.com/images/snuvetWlg8kNNuH4rBY2aSQch5c.png?scale-down-to=512 512w,https://framerusercontent.com/images/snuvetWlg8kNNuH4rBY2aSQch5c.png 1024w" src="https://framerusercontent.com/images/snuvetWlg8kNNuH4rBY2aSQch5c.png" alt="Blue Gem" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover;image-rendering:auto"/>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-1c1hkfg-container hidden-72rtr7 hidden-1wif7cb">
    //  <div className="framer-PZXIC framer-9wI2i framer-g5aayk framer-v-1mpns3r" data-framer-name="Desktop-08" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-wj9u1" data-framer-name="Service Number" style="opacity: 1;">
    //  <div className="framer-1khapy0" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtODAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 200px; --framer-font-weight: 800; --framer-text-alignment: left; --framer-text-color: var(--extracted-a0htzi, var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)));">08</h3>
    //  </div>
    //  </div>
    //  <div className="framer-9596vl" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">Brand Identity Design</h3>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1q4glo" data-framer-name="Description-09" name="Description-09">
    //  <div className="framer-8gu6er" data-framer-name="Services-Scroll-Section-09" id="services-scroll-section-09" name="Services-Scroll-Section-09">
    //  </div>
    //  <div className="framer-1nprhlz" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <p className="framer-text framer-styles-preset-r7m3fp" data-styles-preset="FDLlW0ER3" style="--framer-text-alignment:left">Get found by your target audience in search results. We incorporate basic SEO (Search Engine Optimization) best practices to improve your website's ranking in search engine results pages (SERPs) for relevant keywords. This helps potential customers discover your website organically, increasing website traffic and generating leads.</p>
    //  </div>
    //  <div className="framer-wbmpo2-container">
    //  <div className="framer-VBR1P framer-v4mkyo framer-v-v4mkyo" data-framer-name="Variant 1" style="height: 100%; width: 100%; opacity: 1;" tabindex="0">
    //  <div className="framer-18re7xq" data-framer-name="yellow_cube" style="opacity: 1; transform: translateY(16.6629px);">
    //  <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
    //  <img decoding="async" sizes="120px" srcset="https://framerusercontent.com/images/3YQ5k1hZdNkPRgquxbSfEunCE.png?scale-down-to=512 512w,https://framerusercontent.com/images/3YQ5k1hZdNkPRgquxbSfEunCE.png 1024w" src="https://framerusercontent.com/images/3YQ5k1hZdNkPRgquxbSfEunCE.png" alt="Lime Green Cube" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover;image-rendering:auto"/>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-1g2xvm0-container hidden-72rtr7 hidden-1wif7cb">
    //  <div className="framer-PZXIC framer-9wI2i framer-g5aayk framer-v-gn1xfd" data-framer-name="Desktop-09" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-wj9u1" data-framer-name="Service Number" style="opacity: 1;">
    //  <div className="framer-1khapy0" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtODAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 200px; --framer-font-weight: 800; --framer-text-alignment: left; --framer-text-color: var(--extracted-a0htzi, var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)));">09</h3>
    //  </div>
    //  </div>
    //  <div className="framer-9596vl" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">SEO Optimization</h3>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-c8j4f6" data-framer-name="Description-10" name="Description-10">
    //  <div className="framer-7uw7io" data-framer-name="Services-Scroll-Section-10" id="services-scroll-section-10" name="Services-Scroll-Section-10">
    //  </div>
    //  <div className="framer-1fphfjt" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <p className="framer-text framer-styles-preset-r7m3fp" data-styles-preset="FDLlW0ER3" style="--framer-text-alignment:left">Websites should be accessible to everyone. We conduct website accessibility audits to ensure your website adheres to WCAG (Web Content Accessibility Guidelines) standards. This makes your website usable by people with disabilities, promoting inclusivity and potentially expanding your audience reach.</p>
    //  </div>
    //  <div className="framer-1dqf18e-container">
    //  <div className="framer-VBR1P framer-v4mkyo framer-v-v4mkyo" data-framer-name="Variant 1" style="height: 100%; width: 100%; opacity: 1;" tabindex="0">
    //  <div className="framer-18re7xq" data-framer-name="yellow_cube" style="opacity: 1; transform: translateY(16.6714px) rotate(-25deg);">
    //  <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
    //  <img decoding="async" sizes="120px" srcset="https://framerusercontent.com/images/5PoEhJTKleU3AaFM5T9aYtiqo.png?scale-down-to=512 512w,https://framerusercontent.com/images/5PoEhJTKleU3AaFM5T9aYtiqo.png 1024w" src="https://framerusercontent.com/images/5PoEhJTKleU3AaFM5T9aYtiqo.png" alt="Yellow Pill" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover;image-rendering:auto"/>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-1inip5j-container hidden-72rtr7 hidden-1wif7cb">
    //  <div className="framer-PZXIC framer-9wI2i framer-g5aayk framer-v-cmeumu" data-framer-name="Desktop-10" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-wj9u1" data-framer-name="Service Number" style="opacity: 1;">
    //  <div className="framer-1khapy0" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtODAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 200px; --framer-font-weight: 800; --framer-text-alignment: left; --framer-text-color: var(--extracted-a0htzi, var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)));">10</h3>
    //  </div>
    //  </div>
    //  <div className="framer-9596vl" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">Website Accessibility Audit</h3>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-kdrb37" data-framer-name="Description-11" name="Description-11">
    //  <div className="framer-pyna20" data-framer-name="Services-Scroll-Section-11" id="services-scroll-section-11" name="Services-Scroll-Section-11">
    //  </div>
    //  <div className="framer-1vliokx" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <p className="framer-text framer-styles-preset-r7m3fp" data-styles-preset="FDLlW0ER3" style="--framer-text-alignment:left">Ensure design consistency across all digital platforms. We develop a design system that provides a collection of reusable components, including UI elements, design patterns, and code snippets. This streamlines the design and development process, promotes brand consistency, and empowers your team to create future digital assets that seamlessly integrate with your existing website.</p>
    //  </div>
    //  <div className="framer-1vccsr9-container">
    //  <div className="framer-VBR1P framer-v4mkyo framer-v-v4mkyo" data-framer-name="Variant 1" style="height: 100%; width: 100%; opacity: 1;" tabindex="0">
    //  <div className="framer-18re7xq" data-framer-name="yellow_cube" style="opacity: 1; transform: translateY(16.68px);">
    //  <div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
    //  <img decoding="async" sizes="120px" srcset="https://framerusercontent.com/images/7Xrs4S6qdC6EyvyrM1EGw533im4.png?scale-down-to=512 512w,https://framerusercontent.com/images/7Xrs4S6qdC6EyvyrM1EGw533im4.png 1024w" src="https://framerusercontent.com/images/7Xrs4S6qdC6EyvyrM1EGw533im4.png" alt="Pink Gem" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover;image-rendering:auto"/>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-1ukpshc-container hidden-72rtr7 hidden-1wif7cb">
    //  <div className="framer-PZXIC framer-9wI2i framer-g5aayk framer-v-164iaro" data-framer-name="Desktop-11" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-wj9u1" data-framer-name="Service Number" style="opacity: 1;">
    //  <div className="framer-1khapy0" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtODAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 200px; --framer-font-weight: 800; --framer-text-alignment: left; --framer-text-color: var(--extracted-a0htzi, var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)));">11</h3>
    //  </div>
    //  </div>
    //  <div className="framer-9596vl" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">Design System Creation</h3>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-jj5vmw" data-framer-name="Description-12" name="Description-12">
    //  <div className="framer-31ufm2" data-framer-name="Services-Scroll-Section-12" id="services-scroll-section-12" name="Services-Scroll-Section-12">
    //  </div>
    //  <div className="framer-unlzmn" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <p className="framer-text framer-styles-preset-r7m3fp" data-styles-preset="FDLlW0ER3" style="--framer-text-alignment:left">Put your users at the center of the design process. We conduct user research and usability testing to understand your target audience's needs, preferences, and pain points. This valuable data is then used to optimize the user experience (UX) of your website, ensuring it is intuitive, user-friendly, and ultimately helps users achieve their goals.</p>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-b9h0si-container hidden-72rtr7 hidden-1wif7cb">
    //  <div className="framer-PZXIC framer-9wI2i framer-g5aayk framer-v-voqj88" data-framer-name="Desktop-12" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-wj9u1" data-framer-name="Service Number" style="opacity: 1;">
    //  <div className="framer-1khapy0" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtODAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 200px; --framer-font-weight: 800; --framer-text-alignment: left; --framer-text-color: var(--extracted-a0htzi, var(--token-755abc58-3adf-4e31-933f-db4718cdad56, rgb(242, 242, 242)));">12</h3>
    //  </div>
    //  </div>
    //  <div className="framer-9596vl" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">User Experience (UX) Research &amp; Testing</h3>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </section>
    //  <section className="framer-1epcun4" data-framer-name="Pricing Section" name="Pricing Section">
    //  <div className="framer-1qjpdtt" data-framer-name="Pricing-Scroll Section" name="Pricing-Scroll Section">
    //  <div className="framer-11ynaov" data-framer-name="Pricing Scroll Section" id="pricing" name="Pricing Scroll Section">
    //  </div>
    //  </div>
    //  <div className="framer-v04x93" data-framer-name="Content" name="Content">
    //  <div className="framer-199zeuq" data-framer-name="Services" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <h2 className="framer-text framer-styles-preset-q2ybry" data-styles-preset="xQaGeseCC" style="--framer-text-alignment:center">Subscription Plans</h2>
    //  </div>
    //  <div className="framer-1p4u90a" data-framer-name="Pricing Cards" name="Pricing Cards">
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-1lk0cot-container" style="opacity: 0; transform: scale(0.8);">
    //  <div className="framer-MCVDH framer-9wI2i framer-5UinU framer-Ds1Ep framer-1yoy890 framer-v-8b9w4f" data-framer-name="Mobile" tabindex="0" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); width: 100%; border-radius: 48px; opacity: 1;">
    //  <div className="framer-9119px" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-556uix" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Essential Plan</h3>
    //  </div>
    //  <div className="framer-10f2241" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT">Perfect for simple websites, blogs, or landing pages</p>
    //  </div>
    //  <div className="framer-62n3c1" style="opacity: 1;">
    //  <div className="framer-19qei8w" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--variable-reference-JWZtJpNMj-P1Yn6g9EH); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --variable-reference-JWZtJpNMj-P1Yn6g9EH: var(--token-71847330-551e-46c6-930c-59c8982f4c98, rgb(249, 71, 6)); transform: none; opacity: 1;">
    //  <h3 className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtNzAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 48px; --framer-font-weight: 700; --framer-text-alignment: left; --framer-text-color: var(--extracted-a0htzi, var(--variable-reference-JWZtJpNMj-P1Yn6g9EH));">$750</h3>
    //  </div>
    //  <div className="framer-1sjtyl8" style="opacity: 1;">
    //  <div className="framer-qlv7zo" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1k9uixy" data-styles-preset="A7YTVQYta">/month</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1w0hizg-container" style="opacity: 1;">
    //  <a className="framer-Dotj9 framer-5UinU framer-1krwpc6 framer-v-1j9e81k framer-1jvgwp4" data-framer-name="Project CTA" data-highlight="true" href="https://www.framer.com/pricing/?via=cristianmielu" target="_blank" rel="noopener" tabindex="0" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.1); width: 100%; border-radius: 96px; box-shadow: none; opacity: 1;">
    //  <div className="framer-91ex9m" style="background-color: var(--token-71847330-551e-46c6-930c-59c8982f4c98, rgb(249, 71, 6)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-zmfqcu" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--variable-reference-E3sMJqdyg-GjHZzzxwD); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --variable-reference-E3sMJqdyg-GjHZzzxwD: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); transform: none; opacity: 1;">
    //  <p className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtNTAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-weight: 500; --framer-line-height: 1.4em; --framer-text-color: var(--extracted-r6o4lv, var(--variable-reference-E3sMJqdyg-GjHZzzxwD));">Purchase Plan</p>
    //  </div>
    //  <div className="framer-o3hmp0" data-framer-name="Icon" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 48px; transform: translateY(-50%) rotate(180deg); opacity: 1;">
    //  <div className="framer-qib4ye-container" style="opacity: 1;">
    //  <div style="display: contents;">
    //  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-71847330-551e-46c6-930c-59c8982f4c98, rgb(249, 71, 6))" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-71847330-551e-46c6-930c-59c8982f4c98, rgb(249, 71, 6)); color: var(--token-71847330-551e-46c6-930c-59c8982f4c98, rgb(249, 71, 6)); flex-shrink: 0;">
    //  <g color="var(--token-71847330-551e-46c6-930c-59c8982f4c98, rgb(249, 71, 6))" weight="regular">
    //  <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z">
    //  </path>
    //  </g>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </a>
    //  </div>
    //  <div className="framer-1acscg4" data-framer-name="Features List" style="opacity: 1;">
    //  <div className="framer-ouip7t-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Website Design &amp; Development (up to 5 pages)</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-16sw6sm-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Mobile-responsive design</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-59sijs-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Stock photo integration</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-s1wh3k-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Basic SEO optimization</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-12oohk0-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Contact form integration</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1ngpqmn-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Limited content updates (1 per month)</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-xn218j-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Basic website security monitoring</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-b9dghd-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Ongoing bug fixes and maintenance</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-17x3qkg-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">24/7 email support</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-lhhn3j-container" style="opacity: 0; transform: scale(0.8);">
    //  <div className="framer-MCVDH framer-9wI2i framer-5UinU framer-Ds1Ep framer-1yoy890 framer-v-8b9w4f" data-framer-name="Mobile" tabindex="0" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); width: 100%; border-radius: 48px; opacity: 1;">
    //  <div className="framer-9119px" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 24px; opacity: 1;">
    //  <div className="framer-556uix" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP">Growth Plan</h3>
    //  </div>
    //  <div className="framer-10f2241" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT">Ideal for growing businesses and e-commerce websites</p>
    //  </div>
    //  <div className="framer-62n3c1" style="opacity: 1;">
    //  <div className="framer-19qei8w" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-a0htzi: var(--variable-reference-JWZtJpNMj-P1Yn6g9EH); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --variable-reference-JWZtJpNMj-P1Yn6g9EH: var(--token-63e45272-007b-437e-b2a8-9f4d1433e3e9, rgb(102, 112, 255)); transform: none; opacity: 1;">
    //  <h3 className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtNzAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 48px; --framer-font-weight: 700; --framer-text-alignment: left; --framer-text-color: var(--extracted-a0htzi, var(--variable-reference-JWZtJpNMj-P1Yn6g9EH));">$1,200</h3>
    //  </div>
    //  <div className="framer-1sjtyl8" style="opacity: 1;">
    //  <div className="framer-qlv7zo" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-1k9uixy" data-styles-preset="A7YTVQYta">/month</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1w0hizg-container" style="opacity: 1;">
    //  <a className="framer-Dotj9 framer-5UinU framer-1krwpc6 framer-v-1j9e81k framer-1jvgwp4" data-framer-name="Project CTA" data-highlight="true" href="https://www.framer.com/pricing/?via=cristianmielu" target="_blank" rel="noopener" tabindex="0" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.1); width: 100%; border-radius: 96px; box-shadow: none; opacity: 1;">
    //  <div className="framer-91ex9m" style="background-color: var(--token-63e45272-007b-437e-b2a8-9f4d1433e3e9, rgb(102, 112, 255)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-zmfqcu" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--variable-reference-E3sMJqdyg-GjHZzzxwD); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --variable-reference-E3sMJqdyg-GjHZzzxwD: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); transform: none; opacity: 1;">
    //  <p className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtNTAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-weight: 500; --framer-line-height: 1.4em; --framer-text-color: var(--extracted-r6o4lv, var(--variable-reference-E3sMJqdyg-GjHZzzxwD));">Purchase Plan</p>
    //  </div>
    //  <div className="framer-o3hmp0" data-framer-name="Icon" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 48px; transform: translateY(-50%) rotate(180deg); opacity: 1;">
    //  <div className="framer-qib4ye-container" style="opacity: 1;">
    //  <div style="display: contents;">
    //  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-63e45272-007b-437e-b2a8-9f4d1433e3e9, rgb(102, 112, 255))" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-63e45272-007b-437e-b2a8-9f4d1433e3e9, rgb(102, 112, 255)); color: var(--token-63e45272-007b-437e-b2a8-9f4d1433e3e9, rgb(102, 112, 255)); flex-shrink: 0;">
    //  <g color="var(--token-63e45272-007b-437e-b2a8-9f4d1433e3e9, rgb(102, 112, 255))" weight="regular">
    //  <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z">
    //  </path>
    //  </g>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </a>
    //  </div>
    //  <div className="framer-1acscg4" data-framer-name="Features List" style="opacity: 1;">
    //  <div className="framer-ouip7t-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Everything in the Essential Plan</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-16sw6sm-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Website Design &amp; Development (up to 5 pages)</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-59sijs-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Custom graphic design elements</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-s1wh3k-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Content Management System (CMS) access for basic content updates</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-12oohk0-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">E-commerce functionality (optional add-on)</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-1ngpqmn-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Advanced SEO optimization (ongoing)</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-xn218j-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Google Analytics integration and reporting</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-b9dghd-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Unlimited content updates within a monthly allowance</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-17x3qkg-container" style="opacity: 1;">
    //  <div className="framer-SFNrg framer-nSBJJ framer-am0v2b framer-v-1sa6c2k" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-14y3z1w" data-framer-name="Bullet" style="background-color: var(--token-22ce634a-3bca-44b4-a2f7-9723690faaf5, rgb(102, 255, 217)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-9sky9i" style="background-color: var(--token-6f90ab0b-9c06-473d-9152-fd7240d55b02, rgb(0, 204, 153)); border-radius: 24px; opacity: 1;">
    //  </div>
    //  </div>
    //  <div className="framer-1ceb3ns" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-7uxmog" data-styles-preset="Z3vkB1ESn">Priority email and phone support</p>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-5o3dd0" data-framer-name="Book a Call" name="Book a Call">
    //  <div className="framer-1ro8itf" data-framer-name="Heading Stack" name="Heading Stack">
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-sd06nc" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: center;">Need something more?</h3>
    //  </div>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-awn4br" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;">
    //  <p className="framer-text framer-styles-preset-r7m3fp" data-styles-preset="FDLlW0ER3" style="--framer-text-alignment: center;">We craft custom plans to fit your website's specific needs. Contact us for a quote!</p>
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-191qwsx-container">
    //  <a className="framer-Dotj9 framer-5UinU framer-1krwpc6 framer-v-2ijm01 framer-1jvgwp4" data-framer-name="Desktop - New Tab" data-highlight="true" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.1); border-radius: 96px; box-shadow: none; opacity: 1;" href="https://calendly.com/" target="_blank" rel="noopener" tabindex="0">
    //  <div className="framer-91ex9m" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-zmfqcu" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--variable-reference-E3sMJqdyg-GjHZzzxwD); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; --variable-reference-E3sMJqdyg-GjHZzzxwD: rgb(0, 0, 0); transform: none; opacity: 1;" data-framer-component-type="RichTextContainer">
    //  <p style="--font-selector:R0Y7UHVibGljIFNhbnMtNzAw;--framer-font-family:&quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif;--framer-font-size:24px;--framer-font-weight:700;--framer-line-height:1.4em;--framer-text-color:var(--extracted-r6o4lv, var(--variable-reference-E3sMJqdyg-GjHZzzxwD))" className="framer-text">Book a Call</p>
    //  </div>
    //  <div className="framer-o3hmp0" data-framer-name="Icon" style="background-color: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); border-radius: 48px; transform: translateY(-50%) rotate(180deg); opacity: 1;">
    //  <div className="framer-qib4ye-container" style="opacity: 1;">
    //  <div style="display:contents">
    //  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255))" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); flex-shrink: 0;">
    //  <g color="var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255))" weight="regular">
    //  <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z">
    //  </path>
    //  </g>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </div>
    //  </a>
    //  </div>
    //  </div>
    //  </div>
    //  </section>
    //  <section className="framer-9ban57" data-framer-name="Projects Section" name="Projects Section">
    //  <div className="framer-17ny4dd" data-framer-name="Projects-Scroll Section" name="Projects-Scroll Section">
    //  <div className="framer-l2b38i" data-framer-name="Projects Scroll Section" id="projects" name="Projects Scroll Section">
    //  </div>
    //  </div>
    //  <div className="framer-1ixasel" data-framer-name="Content" name="Content">
    //  <div className="framer-1peg05k" data-framer-name="Services" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer">
    //  <h2 className="framer-text framer-styles-preset-q2ybry" data-styles-preset="xQaGeseCC" style="--framer-text-alignment:center">Projects</h2>
    //  </div>
    //  <div className="ssr-variant hidden-1wif7cb hidden-72rtr7">
    //  <div className="framer-83qiao-container">
    //  <div className="framer-zQAR2 framer-gk4f16 framer-v-k9dz03" data-framer-name="Mobile" tabindex="0" style="width: 100%; opacity: 1;">
    //  <div className="framer-regu0z" style="opacity: 1;">
    //  <div className="framer-16dzdnl-container" style="opacity: 1;">
    //  <a className="framer-mpDhT framer-5UinU framer-9wI2i framer-1sbzqzw framer-v-1sbzqzw framer-1wub1od" data-framer-cursor="wj4010" data-framer-name="Desktop" href="./brightsites-website-made-in-framer" tabindex="0" style="width: 100%; opacity: 0; transform: scale(0.8);">
    //  <div className="framer-10700vr" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1;">
    //  <div className="framer-4cm9l2" style="border-radius: 24px; opacity: 1;">
    //  <div className="framer-x53s9d" data-framer-name="Photo1" style="transform: perspective(1200px); opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="max(max(min(max(100vw - 32px, 1px), 1248px), 200px) - 48px, 1px)" srcset="https://framerusercontent.com/images/FKg22tE9mNtcNRvK3lYDA7DYw.png?scale-down-to=512 512w,https://framerusercontent.com/images/FKg22tE9mNtcNRvK3lYDA7DYw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/FKg22tE9mNtcNRvK3lYDA7DYw.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/FKg22tE9mNtcNRvK3lYDA7DYw.png 2400w" src="https://framerusercontent.com/images/FKg22tE9mNtcNRvK3lYDA7DYw.png" alt="BrightSites Framer Website" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-1rhnpn" data-framer-name="Overlay" style="backdrop-filter: blur(0px); background-color: rgba(255, 255, 255, 0); opacity: 0;">
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-5u8gwp" data-framer-name="Post" style="opacity: 1;">
    //  <div className="framer-ozxvie" style="opacity: 1;">
    //  <div className="framer-1u340sx" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-d1efab36-84ca-4c47-98a0-f9f61fd3586c, rgb(77, 77, 77)); transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-d1efab36-84ca-4c47-98a0-f9f61fd3586c, rgb(77, 77, 77)));">Web Design</p>
    //  </div>
    //  </div>
    //  <div className="framer-u33cma" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">BrightSites Website made in Framer</h3>
    //  </div>
    //  </div>
    //  </a>
    //  </div>
    //  <div className="framer-16dzdnl-container" style="opacity: 1;">
    //  <a className="framer-mpDhT framer-5UinU framer-9wI2i framer-1sbzqzw framer-v-1sbzqzw framer-1wub1od" data-framer-cursor="wj4010" data-framer-name="Desktop" href="./designcube-framer-website" tabindex="0" style="width: 100%; opacity: 0; transform: scale(0.8);">
    //  <div className="framer-10700vr" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1;">
    //  <div className="framer-4cm9l2" style="border-radius: 24px; opacity: 1;">
    //  <div className="framer-x53s9d" data-framer-name="Photo1" style="transform: perspective(1200px); opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="max(max(min(max(100vw - 32px, 1px), 1248px), 200px) - 48px, 1px)" srcset="https://framerusercontent.com/images/q00ISSPwWvjiIXvXmA1dgYTXhhw.png?scale-down-to=512 512w,https://framerusercontent.com/images/q00ISSPwWvjiIXvXmA1dgYTXhhw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/q00ISSPwWvjiIXvXmA1dgYTXhhw.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/q00ISSPwWvjiIXvXmA1dgYTXhhw.png 2400w" src="https://framerusercontent.com/images/q00ISSPwWvjiIXvXmA1dgYTXhhw.png" alt="DesignCube Framer Website" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-1rhnpn" data-framer-name="Overlay" style="backdrop-filter: blur(0px); background-color: rgba(255, 255, 255, 0); opacity: 0;">
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-5u8gwp" data-framer-name="Post" style="opacity: 1;">
    //  <div className="framer-ozxvie" style="opacity: 1;">
    //  <div className="framer-1u340sx" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-d1efab36-84ca-4c47-98a0-f9f61fd3586c, rgb(77, 77, 77)); transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-d1efab36-84ca-4c47-98a0-f9f61fd3586c, rgb(77, 77, 77)));">Web Design</p>
    //  </div>
    //  </div>
    //  <div className="framer-u33cma" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">DesignCube Framer Website</h3>
    //  </div>
    //  </div>
    //  </a>
    //  </div>
    //  <div className="framer-16dzdnl-container" style="opacity: 1;">
    //  <a className="framer-mpDhT framer-5UinU framer-9wI2i framer-1sbzqzw framer-v-1sbzqzw framer-1wub1od" data-framer-cursor="wj4010" data-framer-name="Desktop" href="./healthwell-website-in-framer" tabindex="0" style="width: 100%; opacity: 0; transform: scale(0.8);">
    //  <div className="framer-10700vr" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1;">
    //  <div className="framer-4cm9l2" style="border-radius: 24px; opacity: 1;">
    //  <div className="framer-x53s9d" data-framer-name="Photo1" style="transform: perspective(1200px); opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="max(max(min(max(100vw - 32px, 1px), 1248px), 200px) - 48px, 1px)" srcset="https://framerusercontent.com/images/o7nuIhLAAETB3Wepq8RCBJhOqE.png?scale-down-to=512 512w,https://framerusercontent.com/images/o7nuIhLAAETB3Wepq8RCBJhOqE.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/o7nuIhLAAETB3Wepq8RCBJhOqE.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/o7nuIhLAAETB3Wepq8RCBJhOqE.png 2400w" src="https://framerusercontent.com/images/o7nuIhLAAETB3Wepq8RCBJhOqE.png" alt="HealthWell Website - Hero Section" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-1rhnpn" data-framer-name="Overlay" style="backdrop-filter: blur(0px); background-color: rgba(255, 255, 255, 0); opacity: 0;">
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-5u8gwp" data-framer-name="Post" style="opacity: 1;">
    //  <div className="framer-ozxvie" style="opacity: 1;">
    //  <div className="framer-1u340sx" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-d1efab36-84ca-4c47-98a0-f9f61fd3586c, rgb(77, 77, 77)); transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-d1efab36-84ca-4c47-98a0-f9f61fd3586c, rgb(77, 77, 77)));">Web Design</p>
    //  </div>
    //  </div>
    //  <div className="framer-u33cma" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">HealthWell Website in Framer</h3>
    //  </div>
    //  </div>
    //  </a>
    //  </div>
    //  <div className="framer-16dzdnl-container" style="opacity: 1;">
    //  <a className="framer-mpDhT framer-5UinU framer-9wI2i framer-1sbzqzw framer-v-1sbzqzw framer-1wub1od" data-framer-cursor="wj4010" data-framer-name="Desktop" href="./thelist-framer-website" tabindex="0" style="width: 100%; opacity: 0; transform: scale(0.8);">
    //  <div className="framer-10700vr" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1;">
    //  <div className="framer-4cm9l2" style="border-radius: 24px; opacity: 1;">
    //  <div className="framer-x53s9d" data-framer-name="Photo1" style="transform: perspective(1200px); opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="max(max(min(max(100vw - 32px, 1px), 1248px), 200px) - 48px, 1px)" srcset="https://framerusercontent.com/images/j239g5dMm1zRGJN20IOSxIuksk.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/j239g5dMm1zRGJN20IOSxIuksk.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/j239g5dMm1zRGJN20IOSxIuksk.jpg 1200w" src="https://framerusercontent.com/images/j239g5dMm1zRGJN20IOSxIuksk.jpg" alt="Thelist Framer Website" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-1rhnpn" data-framer-name="Overlay" style="backdrop-filter: blur(0px); background-color: rgba(255, 255, 255, 0); opacity: 0;">
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-5u8gwp" data-framer-name="Post" style="opacity: 1;">
    //  <div className="framer-ozxvie" style="opacity: 1;">
    //  <div className="framer-1u340sx" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-d1efab36-84ca-4c47-98a0-f9f61fd3586c, rgb(77, 77, 77)); transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-d1efab36-84ca-4c47-98a0-f9f61fd3586c, rgb(77, 77, 77)));">Web Design</p>
    //  </div>
    //  </div>
    //  <div className="framer-u33cma" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">Thelist Framer Website</h3>
    //  </div>
    //  </div>
    //  </a>
    //  </div>
    //  <div className="framer-16dzdnl-container" style="opacity: 1;">
    //  <a className="framer-mpDhT framer-5UinU framer-9wI2i framer-1sbzqzw framer-v-1sbzqzw framer-1wub1od" data-framer-cursor="wj4010" data-framer-name="Desktop" href="./reify-website-in-framer" tabindex="0" style="width: 100%; opacity: 0; transform: scale(0.8);">
    //  <div className="framer-10700vr" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1;">
    //  <div className="framer-4cm9l2" style="border-radius: 24px; opacity: 1;">
    //  <div className="framer-x53s9d" data-framer-name="Photo1" style="transform: perspective(1200px); opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="max(max(min(max(100vw - 32px, 1px), 1248px), 200px) - 48px, 1px)" srcset="https://framerusercontent.com/images/BJAYxdYT6jqNkEDrfxzF7yH7B9M.png?scale-down-to=512 512w,https://framerusercontent.com/images/BJAYxdYT6jqNkEDrfxzF7yH7B9M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/BJAYxdYT6jqNkEDrfxzF7yH7B9M.png 1200w" src="https://framerusercontent.com/images/BJAYxdYT6jqNkEDrfxzF7yH7B9M.png" alt="Reify Website - Hero Section" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-1rhnpn" data-framer-name="Overlay" style="backdrop-filter: blur(0px); background-color: rgba(255, 255, 255, 0); opacity: 0;">
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-5u8gwp" data-framer-name="Post" style="opacity: 1;">
    //  <div className="framer-ozxvie" style="opacity: 1;">
    //  <div className="framer-1u340sx" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-d1efab36-84ca-4c47-98a0-f9f61fd3586c, rgb(77, 77, 77)); transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-d1efab36-84ca-4c47-98a0-f9f61fd3586c, rgb(77, 77, 77)));">Web Design</p>
    //  </div>
    //  </div>
    //  <div className="framer-u33cma" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">Reify Website in Framer</h3>
    //  </div>
    //  </div>
    //  </a>
    //  </div>
    //  <div className="framer-16dzdnl-container" style="opacity: 1;">
    //  <a className="framer-mpDhT framer-5UinU framer-9wI2i framer-1sbzqzw framer-v-1sbzqzw framer-1wub1od" data-framer-cursor="wj4010" data-framer-name="Desktop" href="./verve-dent-framer-website" tabindex="0" style="width: 100%; opacity: 0; transform: scale(0.8);">
    //  <div className="framer-10700vr" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.05); border-radius: 48px; opacity: 1;">
    //  <div className="framer-4cm9l2" style="border-radius: 24px; opacity: 1;">
    //  <div className="framer-x53s9d" data-framer-name="Photo1" style="transform: perspective(1200px); opacity: 1;">
    //  <div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0px;">
    //  <img decoding="async" sizes="max(max(min(max(100vw - 32px, 1px), 1248px), 200px) - 48px, 1px)" srcset="https://framerusercontent.com/images/IGRi4Al6L6fopFSCBEa54pXjoS8.png?scale-down-to=512 512w,https://framerusercontent.com/images/IGRi4Al6L6fopFSCBEa54pXjoS8.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/IGRi4Al6L6fopFSCBEa54pXjoS8.png 1200w" src="https://framerusercontent.com/images/IGRi4Al6L6fopFSCBEa54pXjoS8.png" alt="VerveDent - Laptop" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover; image-rendering: auto;"/>
    //  </div>
    //  </div>
    //  <div className="framer-1rhnpn" data-framer-name="Overlay" style="backdrop-filter: blur(0px); background-color: rgba(255, 255, 255, 0); opacity: 0;">
    //  </div>
    //  </div>
    //  </div>
    //  <div className="framer-5u8gwp" data-framer-name="Post" style="opacity: 1;">
    //  <div className="framer-ozxvie" style="opacity: 1;">
    //  <div className="framer-1u340sx" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-d1efab36-84ca-4c47-98a0-f9f61fd3586c, rgb(77, 77, 77)); transform: none; opacity: 1;">
    //  <p className="framer-text framer-styles-preset-wgv8vw" data-styles-preset="b6LwCOazT" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-d1efab36-84ca-4c47-98a0-f9f61fd3586c, rgb(77, 77, 77)));">Web Design</p>
    //  </div>
    //  </div>
    //  <div className="framer-u33cma" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none; opacity: 1;">
    //  <h3 className="framer-text framer-styles-preset-83172e" data-styles-preset="BvhJTDkTP" style="--framer-text-alignment: left;">VerveDent Framer Website</h3>
    //  </div>
    //  </div>
    //  </a>
    //  </div>
    //  </div>
    //  <div className="framer-tl3qz6-container" style="opacity: 1;">
    //  <div className="framer-LBHoj framer-82etxf framer-v-82etxf" data-framer-name="Variant 1" data-highlight="true" tabindex="0" style="backdrop-filter: blur(5px); background-color: rgba(102, 112, 255, 0.1); border-radius: 96px; opacity: 1;">
    //  <button className="framer-1td5z4j" data-reset="button" style="background-color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); border-radius: 48px; opacity: 1;">
    //  <div className="framer-niw3ox" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
    //  <p className="framer-text" style="--font-selector: R0Y7UHVibGljIFNhbnMtNzAw; --framer-font-family: &quot;Public Sans&quot;, &quot;Public Sans Placeholder&quot;, sans-serif; --framer-font-size: 24px; --framer-font-weight: 700; --framer-line-height: 1.4em; --framer-text-color: var(--extracted-r6o4lv, var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)));">View More</p>
    //  </div>
    //  <div className="framer-16p78wo" data-framer-name="Icon" style="background-color: var(--token-1dfb5f8e-6d59-4a6a-bbc6-917bc568117f, rgb(0, 0, 0)); border-radius: 48px; transform: translateY(-50%) rotate(180deg); opacity: 1;">
    //  <div className="framer-1ff87g3-container" style="opacity: 1;">
    //  <div style="display: contents;">
    //  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255))" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); color: var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255)); flex-shrink: 0;">
    //  <g color="var(--token-6bef2831-d541-489a-82bb-da4e27db4e2c, rgb(255, 255, 255))" weight="regular">
    //  <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z">
    //  </path> */}
    //  {/* </g>
    //  </svg>
    //  </div>
    //  </div>
    //  </div>
    //  </button> */}
    //  {/* </div>
    //  </div>
    //  </div>
    //  </div> */}
    //  {/* </div> */}
    // {/* //  </div>
    // //  </section>
    // //  </main> */}


     
     
