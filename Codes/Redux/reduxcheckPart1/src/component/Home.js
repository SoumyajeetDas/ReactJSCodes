import React from 'react'
import { connect } from 'react-redux';
// import { decNumber, incNumber } from '../actions';


function Home(props) {

    function incrementHandler(num) {
        props.increment(num)
    }
    function decrementHandler() {
        props.decrement()
    }
    function toggleHandler(){
        props.toggle();
    }



    return (
        <>
            <div className="container">
                <div className="row text-center">
                    <h1>Increement or Decrement Counter</h1>
                    <h4>Using React and Redux Part 1</h4>
                </div>

                {props.showCounter && <div className="my-5" id="content">
                    <button className="btn btn-secondary m-3" onClick={() => incrementHandler(5)}>+</button>
                    <input className="form-control text-center m-3" type="text" value={props.counter} style={{ width: "5rem" }}></input>
                    <button className="btn btn-secondary m-3" onClick={() => decrementHandler()}>-</button>
                </div>}
                <div id="content">
                    <button class="btn btn-primary" onClick={toggleHandler}>Toggle Counter</button>
                </div>


            </div>
        </>
    );
}




// This method is similar to useSelector() hook
// const counter = useSelector((state) => state.counter); 
const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        showCounter : state.showCounter
    }
}

// This method is similar to useDispatch() hook

// const dispatch = useDispatch(); 

// const incrementHandler = () =>{
//     dispatch({type:"INCREEMENT"})
// }

// const decrementHandler = () =>{
//     dispatch({type:"DECREEMENT"})
// }

const mapDispatchToProps = dispatch => {
    return { 
        // Within the dispatch action/ action object is passed to make reducer work.
        // Action/Action Object is the object which looks like --> {type:"", payload:""}
        increment: (num) => dispatch({ type: "INCREEMENT", payload: num }),
        decrement: () => dispatch({ type: "DECREEMENT" }),
        toggle : () => dispatch({ type: "TOGGLE"})
    }
}


// connect method is used to connect Componenent to Redux Store.
// connect method passes the state and dispatch function as props to the component.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
