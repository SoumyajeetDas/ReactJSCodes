import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Update from './Update.js'


export default function Index() {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState(true);
    
    const [id,setId] = useState(NaN);
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [lang,setLang] = useState("");

    
    async function FetchData() {
        let url = "https://localhost:44386/api/Employee";
        

        /* 1st Technique */

        // let data = await fetch(url); Fetch Method Style

        // let data = await axios.get(url);

        // let dataJson = await data.json(); // Fetch Method Style

        // let dataJson = await data.data;


         /* 2nd Technique */

        let data = await axios({
            url,
            method: "GET"
        })

        let dataJson = await data.data;

        setData(dataJson);

        console.table(dataJson);

    }


    async function Delete(id) {
        let url = `https://localhost:44386/api/Employee/delete/${id}`;

        // let data = await fetch(url, {
        //     method: 'DELETE'
        // });


        /* 1st Technique */
        //let res = await axios.delete(url)


        /* 2nd Technique */
        let res = await axios({
            url,
            method:'delete'
        })


        if (res.status === 200) {
            console.log("Hi");
            alert("Deleted");
        }
        else {
            alert("Cannot be deleted");
        }

        FetchData(); // FetchData is called so that after delete the Read is called automatically and we do not need to refresh manually
    }


    function UpdateData(id,name, age, lang) {
        if(status){
            setStatus(false)
            setName(name);
            setAge(age);
            setLang(lang);
            setId(id);
        }
        else{
            setStatus(true);
            FetchData();
        }
    }


    useEffect(() => {

        FetchData();

    }, [])


    return (
        <>

            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        {status && <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Language</th>
                                    <th scope="col">Want to Delete?</th>
                                    <th scope="col">Want to Update?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((n, i) =>
                                    <tr key={i}>
                                        <th scope="row">{n.id}</th>
                                        <td>{n.name}</td>
                                        <td>{n.age}</td>
                                        <td>{n.lang}</td>
                                        <td><button class="btn btn-primary" onClick={() => Delete(n.id)}>Delete</button></td>
                                        <td><button class="btn btn-primary" onClick={() => UpdateData(n.id,n.name,n.age,n.lang)}>Update</button></td>
                                    </tr>
                                )}

                            </tbody>
                        </table>}

                        {!status && <Update id={id} name={name} age={age} lang={lang} UpdateData={UpdateData} />}
                    </div>
                </div>
            </div>


        </>
    )
}
