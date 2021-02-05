import React,{useState} from 'react'

const Todo = () => {

    const [input, setInput] = useState("");
    const [addTodo, setAddTodo] = useState([]);
    const [show, setShow] = useState(false);

    const handleClick = () => {
     
      setAddTodo([...addTodo, { input, id: new Date().getTime().toString() }]);
      setInput("");
    };


    const handleDel = (id) => {
      const filter = addTodo.filter((list) => list.id !== id);
      setAddTodo(filter);
    };
    return (
      <div>
        <div className ="container">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Add todo"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button className ="btn1" onClick={handleClick}>Add</button>
          </form>
          {addTodo.map((list) => {
            return (
              <div className ="btn"
                key={list.id}
              >
                <h3>{list.input}</h3><button
                  onClick={() => handleDel(list.id)}
                >
                  X
                </button>
                
              </div>
            );
          })}
          
          
        </div>
       
      </div>
    );
}

export default Todo
