import { connect } from 'react-redux';
import Home from '../component/Home'
import { increment, decrement, toggle } from '../action/action'

// This method is similar to useSelector() hook
// const counter = useSelector((state) => state.counter); 
const mapStateToProps = (state) => {

    return {
        counter: state.counterReducer.counter,
        showCounter : state.counterReducer.showCounter
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

        // dispatch() will call the action creator which will return action / action objects
        increment: (num) => dispatch(increment(num)),
        decrement: () => dispatch(decrement()),
        toggle: () => dispatch(toggle())
    }
}


// connect method is used to connect Componenent to Redux Store.
// connect method passes the state and dispatch function as props to the component.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
