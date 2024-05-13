import React from "react";
import { connect } from "react-redux";
import { IoClose } from "react-icons/io5";
import { addTodos, completeTodos, removeTodos } from "../../redux/ToDoReducer";

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    };
};

const SingleTodo = (props) => {

    const { removeTodo, completeTodo } = props;

    return (
        <ul className="w-11/12 sm:w-1/2 lg:w-1/3 mt-10 bg-cyan-800 py-6 rounded z-10 opacity-75">
            {props.todos.length > 0
                ?
                props.todos.map((todo) => {
                    return (
                        <li
                            key={todo.id}
                            className=" text-slate-200 border-b last:border-b-0 border-cyan-900 px-8 py-3 flex justify-between items-center"
                        >
                            <div>
                                <input
                                    id={todo.id}
                                    type="checkbox"
                                    style={{ accentColor: "#1E6091" }}
                                    className="w-6 h-4 mr-4 checked:hidden"
                                    onChange={() => completeTodo(todo.id)}
                                />
                                {todo.completed
                                    ? <del className="completed">{todo.todo}</del>
                                    : <label className="" htmlFor={todo.id}>{todo.todo}</label>
                                }
                            </div>
                            <button
                                style={{ color: "red" }}
                                className="text-2xl"
                                onClick={() => removeTodo(todo.id)} >
                                <IoClose />
                            </button>
                        </li>)
                })
                : <p className="text-center text-white text-3xl">🥳 You made it, Bravo!</p>}
        </ul>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleTodo);