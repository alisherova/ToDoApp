import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../../redux/ToDoReducer";

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

const Todos = (props) => {

    const [todo, setTodo] = useState("");

    const addNewToDo = () => {
        if (todo === "") {
            alert("Enter the title, please");
        } else if (!todo.match(/^[a-zA-Z]+$/)) {
            alert("You can only enter words");
        } else {
            props.addTodo({
                id: Date.now(),
                todo: todo,
                completed: false,
            });
            setTodo("");
        }
    };

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    return (
        <div className="w-11/12 sm:w-1/2 lg:w-1/3 flex z-10 opacity-75">
            <input type="text"
                className="block w-full p-3 ps-10 text-gray-100 border border-cyan-700 rounded-s-lg bg-cyan-700"
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        addNewToDo();
                }}
                value={todo}
                placeholder="Add a new todo..."
                required
            />
            <button
                onClick={() => addNewToDo()}
                className="text-white bg-cyan-900 hover:bg-cyan-800 focus:ring-4 focus:outline-none font-medium rounded-e-lg px-6 py-2">
                Add
            </button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

