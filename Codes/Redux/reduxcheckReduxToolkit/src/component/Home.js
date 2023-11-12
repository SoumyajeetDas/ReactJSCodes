import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';


const Home = ()=> {
   

    // useSeletor helps to get the acess to a part of the data managed by the store. There can be many states variable in Redux store
    // but useSelector can get the slice out that is required. useStore() cannot do this.
    // When we use useSelector() redux will automatically add subscription for the component to the store. So whenever the state gets 
    // changed in the store the component subscribed wil get rerendered.
    // When the component gets unmounted the subscription automatically goes away.
    const counter = useSelector((state) => state.counter); 

    const showCounter = useSelector((state) => state.showCounter);

    // To trigger a particular action type
    const dispatch = useDispatch(); 

    const incrementHandler = (num) =>{
        // increment(num) is ultimately an action creator whch is returning the action / action objects
        // dispatch({type:"SOME_UNIQUE_IDENTIFIER", payload:num})
        dispatch(counterActions.increment(num))
    }

    const decrementHandler = () =>{
        // decreament(num) is ultimately an action creator whch is returning the action / action objects
        // dispatch({type:"SOME_UNIQUE_IDENTIFIER"})
        dispatch(counterActions.decrement())
    }

    const toggleHandler = () =>{
        // toggle() is ultimately an action creator whch is returning the action / action objects
        // dispatch({type:"SOME_UNIQUE_IDENTIFIER"})
        dispatch(counterActions.toggle())
    }

    return (
        <>
            <div className="container">
                <div className="row text-center">
                    <h1>Increement or Decrement Counter</h1>
                    <h4>using React and Redux Part 2</h4>
                </div>

                {showCounter && <div className="my-5" id="content">
                    <button className="btn btn-secondary m-3" onClick={()=>incrementHandler(5)}>+</button>
                    <input className="form-control text-center m-3" type="text" value={counter} style={{ width: "5rem" }}></input>
                    <button className="btn btn-secondary m-3" onClick={decrementHandler}>-</button>
                </div>}

                <div id="content">
                    <button class="btn btn-primary" onClick={toggleHandler}>Toggle Counter</button>
                </div>
            </div>
        </>
    );
}

export default Home;
