import React, { Component } from 'react'

import Task from "./Task/Task"
import Auxiliar from './../../hoc/Auxiliar'

export default class List extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         a:"Hellow"
    //     }
    // }

    state = {
        list: [
            {name:"Wash dishes", isCompleted: false},
            {name:"Do laundry", isCompleted: false},
            {name:"Make the bed", isCompleted: false}
        ]
    }

    render() {
        // for loop that go over every element of the list and execute a function on it, returning a new array
        const tasks = this.state.list.map((task, index) => {
            return(
                <Task name={task.name} completed={task.isCompleted} key={index}/>
            )
        })

        return (
            <Auxiliar>
                <ul>
                    {tasks}
                </ul>
                <div><span>+</span></div>
            </Auxiliar>
            )
    }
}
