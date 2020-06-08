import React, { Component } from 'react'

export default class Jokes extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         joke:"My dog used to chase people on a bike a lot. It got so bad I had to take his bike away."
    //     }
    // }

    state = {
        joke:"My dog used to chase people on a bike a lot. It got so bad I had to take his bike away."
    }

    render() {
        return (
            <div>
                "{this.state.joke}"
            </div>
        )
    }
}
