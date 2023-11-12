import { incCartNumber } from "../action/action";
import Content from "../component/Content";

const { connect } = require("react-redux");

// mapSateToProps is same as useSelector() which acess the state from the Redux store.
const mapStateToProps=state=>({
    cartData:state
});


// mapDispatchToProps is same as the useDispatch()
const mapDispatchToProps = dispatch =>({
    addToCartHandler : data => dispatch(incCartNumber(data))
});

//connect method is used to connect Componenent to Redux Store.
// connect method passes the state and dispatch function as props to the component.

export default connect(mapStateToProps,mapDispatchToProps)(Content);

