import React from 'react'

// type StatusProps = {
//     status: 'loading' | 'success' | 'error'
// }


interface StatusProps {
    status: 'loading' | 'success' | 'error'
}

const Status = (props: StatusProps) => {

    let message:string = "";


    if(props.status === 'loading') message="Loading....."

    else if(props.status === 'success') message= "Data fetched successfully..."

    else if(props.status === 'error') message= "Error happened"

  return (
    <div>
      {message}
    </div>
  )
}

export default Status
