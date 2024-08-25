import { useState } from "react";
import Button from "./components/Button";


function UseState(){
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    
   
    const addTodo = () => {
        if (inputValue.trim()) { // Check if input is not empty
            setTodos([...todos, inputValue]); // Add new todo to the existing array
            setInputValue(""); // Clear input field after adding todo
          }
    };

    return(
        <div>
         
            <input className="border w-3/6 p-1" value={inputValue} placeholder="Add Todo" onChange={(e) => setInputValue(e.target.value)} />
            <table className="border-solid border-green">
           <thead>
          <tbody>
            <tr>
            <th>Serial.NO</th>
            </tr>
            <Button text={"Add"} onClick={addTodo}/>      
         {todos.map((data, ind) => (
          
              
           
          <tr className="border-solid border-green">
       <td className="border-solid border-green"> <h1 key={ind} className=" p-2 p-10 rounded-md">{data} </h1> </td>
           </tr>
          </tbody> 
         </thead>
          </table>
      
    ))} 
        
          
        </div>
    )

}
// function UseState() {
// //   const [num, setNum] = useState(0);
// const [todo, setTodo] = useState("");
// const [todos, setTodos] = useState([
//   "Shopping",
//   "Learning",
//   "Chae ki Hotel",
//   "Cricket",
// ]);

// const addTodo = () => {
//   setTodos([...todos, todo]);
// };
// return (
//   <div>
//     {/* useState with array */}
//     <input
//       className="border p-1"
//       value={todo}
//       placeholder="ADD TODO"
//       onChange={(e) => setTodo(e.target.value)}
//     />
//     <Button text={"Add"} onClick={addTodo} />
//     {todos.map((data, ind) => (
//       <h1 key={ind} className="bg-red-100 border  rounded-md">
//         {data}
//       </h1>
//     ))}

        
      {/* <h1>Use State with Number</h1>
       <h1 className="text-3xl my-2">Count {num} </h1>
      <Button text={"+2"} onClick={() => setNum(num + 2)} />
      <Button text={"+3"} onClick={() => setNum(num + 3)} />
      <Button text={"+4"} onClick={() => setNum(num + 4)} />
      <Button text={"+5"} onClick={() => setNum(num + 5)} />  */}
//     </div>
//   );
// }

export default UseState;