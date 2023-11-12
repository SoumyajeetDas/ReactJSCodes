import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protected(props) {

  const {Component} = props;
  const navigate = useNavigate();

  useEffect(()=>{  // Just after rendering the Component if it finds it is not logged in it redirects to login page,
    let login = localStorage.getItem('login');

    if(!login){
      navigate('/login')
    }

  });

  return (
    <>
      <Component/>
    </>
  )
}
