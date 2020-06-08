import React, { Component } from 'react'

import Task from "./Task/Task"
import Auxiliar from "./../../hoc/Auxiliar"

export default class List extends Component {
    render() {
        return (
            <Auxiliar>
                <ul>
                    <Task />
                    <Task />
                    <Task />
                </ul>
                <div><span>+</span></div>
            </Auxiliar>
            )
    }
}
