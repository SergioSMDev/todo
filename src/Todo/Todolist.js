import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './Todoitem';


const styles = {
    ul: {
        listStyle: 'none',
    },
};

function Todolist(props){
    return (
        <ul style={styles.ul}>
            {props.todos.map( (todo, index) => <TodoItem 
                todo={todo} 
                key={todo.id} 
                index={index}
                onChange={props.onToggle}
                />
            )}
        </ul>
    );
}
Todolist.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default Todolist;