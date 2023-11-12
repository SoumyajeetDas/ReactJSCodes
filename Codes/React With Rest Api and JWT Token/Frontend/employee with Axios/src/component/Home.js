import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import axios from 'axios';

export default function Home(props) {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const fetchdata = async () => {

        console.log("Cookie After login", Cookies.get('token'))

        let url = "https://localhost:44326/api/Employee";
     

        // let data = await fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         Authorization: 'Bearer ' + Cookies.get('token')
        //     }

        // });

        let data;
        try{ // Try is given as it is throwing exception and not able to give the alrtt and send to login page
            data = await axios({
                url,
                method:'GET',
                headers: { 
                    Authorization: 'Bearer ' + Cookies.get('token')
                }
            })

            let dataJson = await data.data;
            setData(dataJson);
        }

        catch{
            if (data === undefined) { // If the data is unthorized then the data is returning undefined and not 401 Error.
                alert("Not Authorized");
                navigate('/login')
            }

        }
        
       
       

        


        // if (data.status === 401) {
        //     alert("Not Authorized");
        //     navigate('/login')
        // }
        // if (data === undefined) {
        //     alert("Not Authorized");
        //     navigate('/login')
        // }

        // else {
        //     let dataJson = await data.data;

        //     setData(dataJson);

        //     console.table(dataJson);
        // }


        // let data = await fetch(url);

    }

    useEffect(() => {
        fetchdata();
        // eslint-disable-next-line
    }, [])
    return (
        
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 m-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Lang</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            {data.map((value, i) =>

                                <tr key={i}>
                                    <th scope="row">{value.id}</th>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td>{value.lang}</td>
                                </tr>
                            )}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
