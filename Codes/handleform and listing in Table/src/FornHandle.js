import React, { useState } from 'react'

export default function FornHandle() {

    const [name, setName] = useState("");
    const [userErr, setUserErr] = useState("");
    const [pass, setPass] = useState("");
    const [passErr, setPassErr] = useState("");
    const [option, setOption] = useState("");
    
    const [check, setCheck] = useState(false);
    const [total, setTotal] = useState("");


    function show(e) {

        if(name.length<3)
            alert("Username should be greater than length 3");
        else if(pass.length<3)
            alert("Password should be greater than length 3");
        else if(option === ""){
            alert("Please select the Option");
        }

        else{
            setTotal(`Name : ${name} 
            Password : ${pass} 
            Option : ${option} 
            Did u check : ${check}`);
        }

        
        e.preventDefault();

    }


    function handleName(e){
        let item = e.target.value;
        
        if(item.length<3)
        {
            setUserErr("Username should be greater than length 3");
        }
        else{
            setUserErr("");
            setName(item);
        }

    }

    function handlePass(e){
        let item = e.target.value;
        if(item.length<3)
        {
            setPassErr("Password should be greater than length 3");
        }
        else{
            setPassErr("");
            setPass(item);
        }
    }

    function handleOption(e)
    {
        let item = e.target.value;

        setOption(item);
    }
    

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <form onSubmit={show}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">User Name</label>
                                <input type="text" className="form-control" id="name" placeholder='Enter the name' onChange={handleName} />
                                <b className="text-danger">{userErr}</b>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlePass}/>
                                <b className="text-danger">{passErr}</b>
                            </div>

                            <div className="mb-3">
                                <select className="form-select" aria-label="Default select example" onChange={handleOption}>
                                    <option value="">Open this select menu</option>
                                    <option>DC</option>
                                    <option value="Mavbel">Marvel</option>
                                </select>
                                
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(n) => { setCheck(n.target.value) }} />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            
                            <button type="submit" className="btn btn-primary" onClick={show}>Submit</button>
                        </form>
                    </div>
                </div>

                <div className="row text-center">
                    <h3>{total}</h3>
                </div>
            </div>




        </>
    )
}
