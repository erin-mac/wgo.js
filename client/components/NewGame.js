import React, { Component } from 'react';
import GameBoard from './Board';
export default class NewGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            p1Color: 'white',
            p2Color: 'black',
        },
            this.colorChoices = ["black", "white"];
    }


    handleChange = ev => {
        ev.preventDefault();
        this.setState({ [`${ev.target.name}`]: ev.target.value });
        console.log(this.state);
    };

    handleSubmit = ev => {
        ev.preventDefault();
        const { history } = this.props
        history.push('/board')
    };

    render() {
        const { handleChange, handleSubmit } = this;
        const { p1Color, p2Color } = this.state;

        return (
            <div className="colorchoice-div">
                <form onSubmit={handleSubmit}>
                    <label>Josh Choose a Color:</label>
                    <select
                        value={p1Color}
                        name='p1Color'
                        onChange={ev => handleChange(ev)}
                    >
                        {this.colorChoices.map(color => (
                            <option key={color} value={color} name='p1Color'>
                                {color}
                            </option>
                        ))}
                    </select>
                    <br />
                    <label>Erin Choose a Color:</label>
                    <select
                        value={p2Color}
                        name='p2Color'
                        onChange={ev => handleChange(ev)}
                    >
                        {this.colorChoices.map(color => (
                            <option key={color} value={color} name='p2Color'>
                                {color}
                            </option>
                        ))}
                    </select>
                    <br />
                    <input type="submit" value="Start game" />
                </form>
                {/* <GameBoard p1Color={this.state.p1Color} p2Color={this.state.p2Color} /> */}
            </div >
        );
    }
}