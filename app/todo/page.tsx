'use client'
import { useRef } from "react";
import styles from "../page.module.css"
export default function Todo() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const getInputValue = () => {
    const taskElement = document.getElementById("task") as HTMLElement | null;
    if (inputRef.current && taskElement) {
      const inputfield = inputRef.current.value;
    taskElement.insertAdjacentHTML("beforeend",
      `
    <div class = "todoitem">
    <p>${inputfield}</p>
    <button class="delte" className={styles.delte}>Delete</button>
    </div>`)
      
    }
    taskElement?.addEventListener("click", function (e) {
      if ((e.target as HTMLElement).classList.contains("delte")) {
        const todoItem = (e.target as HTMLElement).closest(".todoitem");
        todoItem?.remove();
      }
    });
  };



  return (
    <div>
    <div className={styles.container}>
     <header>
        <h1 style={{ textAlign: "center", color:"green",}}>Todo list</h1>
      </header>

      <main style={{ justifyContent: 'center', textAlign: "center" }}>
        <label style={{color:"green"}}>Enter your todo</label>
        <input
         required
          id="input"
          className={styles.input}
          type="text"
          placeholder="Enter your todo"
          ref={inputRef} 
        />
        <br />
        <button className = {styles.button}onClick={getInputValue}>Get TODO</button> 
      </main>
      </div>

      <footer id="task">
      
      </footer>

    </div>
  );
}
