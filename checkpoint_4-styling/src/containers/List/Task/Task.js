import React from 'react'

import classes from "./Task.module.css"

const Task = (props) => {
    const completedClass = props.completed ? classes.Completed : null

 return (
     <li className={completedClass}>
        <input value={props.children}></input>
        <button className={classes.Edit}><span role="img" aria-label="Icon of Edit button">✏️</span></button>
        <button className={classes.Remove}><span role="img" aria-label="Icon of Delete button">❌</span></button>
     </li>
 )   
}

export default Task