import React from "react";
import '../stylesheets/Tester.css'

class Tester extends React.Component {
    constructor() {
        super()
        this.state = {
            jmenoRostliny: "",
            img: "",
            input: "",
            result: null,

        }

        this.inputEntered = this.inputEntered.bind(this)
        this.submitButtonClicked = this.submitButtonClicked.bind(this)
        this.nextButtonClicked = this.nextButtonClicked.bind(this)
        this.componentReload = this.componentReload.bind(this)
    }

    componentDidMount() {
        this.componentReload()
    }

    inputEntered(e) {
        if (e.target.value === this.state.jmenoRostliny)
            this.nextButtonClicked()
        else
            this.setState({input: e.target.value})
    }

    submitButtonClicked() {
        this.setState({result: false})
    }

    nextButtonClicked() {
        this.componentReload()
    }

    componentReload() {
        let rand = Math.floor(Math.random() * this.props.zastupci.length);
        this.setState({
            jmenoRostliny: this.props.zastupci[rand].jmenoRostliny,
            img: this.props.zastupci[rand].img,
            input: "",
            result: null
        })
    }

    render() {
        return (
            <div className="background">
                <div className={'tester-component'}>
                    <img className={'image'} src={this.state.img} alt={this.state.jmenoRostliny} width={'auto'} height={500}/>
                    <div className="contoller">
                        <input className={'element'} type={'text'} placeholder={'jmeno rostliny'} onChange={this.inputEntered} defaultValue={''} required autoFocus/>
                        <button className={'element'} onClick={this.submitButtonClicked}>Zkontroluj</button>
                        <button className={'element'} onClick={this.nextButtonClicked}>Další</button>
                        {
                            (this.state.result !== null && this.state.result === false) ?
                                <h1 id={'false'}>Bohužel špatně -> {this.state.jmenoRostliny}</h1> : ""
                        }
                    </div>
                    
                </div>
            </div>

        )
    }
}

export default Tester;