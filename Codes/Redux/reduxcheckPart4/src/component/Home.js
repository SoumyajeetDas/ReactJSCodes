import React from 'react'


const Home = (props) => {
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
                    <h4>Using React and Redux Part 4</h4>
                </div>

                {props.showCounter && <div className="my-5" id="content">
                    <button className="btn btn-secondary m-3" onClick={() => incrementHandler(5)}>+</button>
                    <input className="form-control text-center m-3" type="text" value={props.counter} style={{ width: "5rem" }}></input>
                    <button className="btn btn-secondary m-3" onClick={decrementHandler}>-</button>
                </div>}

                <div id="content">
                    <button class="btn btn-primary" onClick={toggleHandler}>Toggle Counter</button>
                </div>

            </div>
        </>
    );
}




export default Home


