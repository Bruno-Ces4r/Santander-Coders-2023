import { useEffect, useState } from "react";

export default function GetExternalData() {

    const[tasks, setTasks] = useState([]);

    useEffect(
        () => {
            async function getDatas() {
                const result = await fetch('https://jsonplaceholder.typicode.com/todos');
                const finalResult = await result.json(); // aqui faço o parse da respota
                return finalResult;
            }

            getDatas().then(res => setTasks(res));
          
        }, []
    ) 

    return(
        <div>
            <h1>Get External Datas</h1>
        
            <ol>
                {tasks.map((task) => {
                    return(
                        <div>
                            <li key={task.id}>{task.title} -  { task.completed ? 'Completed task': 'Incompleted' }</li>
                           
                        </div>
                    )
                })}
            </ol>
        </div>        
    )// Aqui estou retornando um array da minha lista, definindo uma key para o item e também mostrando o valor
} 