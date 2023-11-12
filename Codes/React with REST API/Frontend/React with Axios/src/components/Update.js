import React, { useState } from 'react'
import axios from 'axios';


export default function Update(props) {

    const [name, setName] = useState(props.name);
    const [age, setAge] = useState(props.age);
    const [lang, setLang] = useState(props.lang);
   



    async function updateUser(name,age,lang) {
        console.table({ name, age, lang });

        let data = { name, age, lang };


        // let res = await fetch(`https://localhost:44386/api/Employee/update/${props.id}`, {
        //     method: "PUT",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // });


        /* 1st Technique */
        //let res = await axios.put(`https://localhost:44386/api/Employee/update/${props.id}`,{...data});



        /* 2nd Technique */
        let res = await axios({
            url:`https://localhost:44386/api/Employee/update/${props.id}`,
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data:JSON.stringify(data) // You have to use data only here otherwise it will throw 415 error.
        });

        if (res.status === 200)
            alert("Saved " + res.status);

        else {
            alert("Not saved");
        }
    }

    return (
        <>
            {console.log("In Update")}
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">

                        <button class="btn btn-success" onClick={()=>props.UpdateData(0,"",0,"")}>Back to Home</button>

                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" value={name} class="form-control" id="name" onChange={(n) => setName(n.target.value)} />

                        </div>
                        <div class="mb-3">
                            <label for="age" class="form-label">Age</label>
                            <input type="number" value={age} class="form-control" id="age" onChange={(n) => setAge(n.target.value)} />
                        </div>
                        <div class="mb-3">
                            <select class="form-select" value={lang} aria-label="Default select example" onChange={(n) => setLang(n.target.value)}>
                                <option>Open this select menu</option>
                                <option value="JS">Javascript</option>
                                <option value="Python">Python</option>
                                <option value="C#">C#</option>
                            </select>
                        </div>
                        <button  onClick={()=>updateUser(name,age,lang)} class="btn btn-primary">Submit</button>

                    </div>
                </div>
            </div>

        </>
    )
}
