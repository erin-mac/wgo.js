import React, { Component } from 'react';
require('../../wgo/wgo');

export default class GameBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            p1turn: true,
            color: 'white'
        }
        this.turn = this.turn.bind(this);
    }

    componentDidMount() {
        var socket = io(window.location.origin);
        socket.on('connect', function () {
            console.log('I have made a persistent two-way connection to the server!');
        });
    }

    componentDidUpdate() {
        var socket = io(window.location.origin);
        socket.on('turnRecieved', (data) => {
            console.log('turnRevieced:', data);
        })
    }

    turn = () => {
        this.setState({ p1turn: !this.state.p1turn })
        if (this.state.color === 'white') {
            this.setState({ color: 'black' })
        } else {
            this.setState({ color: 'white' })
        }
        console.log(this.state)
    }

    render() {
        var socket = io(window.location.origin);
        const { turn } = this
        let { color } = this.state
        const board = new WGo.Board(document.getElementById("root"), {
            width: 600,
        })
        board.addEventListener("click", function (x, y) {
            if (color === "black") {
                board.addObject({
                    x: x,
                    y: y,
                    c: WGo.B
                });

            } else if (color === "white") {
                board.addObject({
                    x: x,
                    y: y,
                    c: WGo.W
                });

            }
            turn()
            socket.emit('turn', { x, y });
        });
        return (<div></div>)
    }
}
