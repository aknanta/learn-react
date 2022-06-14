import React from 'react';
import { createRoot } from 'react-dom/client';

function CounterDisplay({count}){
    return <p>{count}</p>
}

function IncreaseButton({increase}){
    return <button onClick={increase}>Increase</button>
}

function DecreaseButton({decrease}){
    return <button onClick={decrease}>Decrease</button>
}

function ResetButton({reset}){
    return <button onClick={reset}>Reset</button>
}

class CounterApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0
        };
         this.OnIncreaseEventHandler = this.OnIncreaseEventHandler.bind(this);
         this.onDecreaseEventHandler = this.onDecreaseEventHandler.bind(this);
         this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }
    
    //on outside of constructor you can make the event handler.
    OnIncreaseEventHandler(){
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            }
        });
    }

    onResetEventHandler(){
        this.setState(() => {
            return {
                count : 0
            }
        })
    }

    onDecreaseEventHandler(){
        this.setState((previousState) => {
            return {
                count : previousState.count - 1
            }
        })
    }


    render() {
        return (
            <div>
                <CounterDisplay count={this.state.count} />
                <IncreaseButton increase={this.OnIncreaseEventHandler} />
                <DecreaseButton decrease={this.onDecreaseEventHandler} />
                <ResetButton reset={this.onResetEventHandler} />
            </div>
        )
    }
}


const root = createRoot(document.getElementById('root'));
root.render(<CounterApp />);
