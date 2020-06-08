import React, { Component } from 'react'

import Task from "./Task/Task"
import Auxiliar from './../../hoc/Auxiliar'

import classes from './List.module.css'

export default class List extends Component {
    state = {
        list: [
            {name:"Wash dishes", isCompleted: true},
            {name:"Do laundry", isCompleted: false},
            {name:"Make the bed", isCompleted: false}
        ]
    }

    render() {
        // for loop that go over every element of the list and execute a function on it, returning a new array
        const tasks = this.state.list.map((task, index) => {
            return(
                <Task completed={task.isCompleted} key={index}>{task.name}</Task>
            )
        })

        return (
            <Auxiliar>
                <ul className={classes.List}>
                    {tasks}
                </ul>
                <div className={classes.addItem}><span>+</span></div>
            </Auxiliar>
            )
    }
}
