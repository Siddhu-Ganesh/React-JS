import axios from "axios";
import { useEffect, useState } from "react";


function Carts(){
    const [carts,setCarts]=useState([])

    useEffect(()=>{
        axios.get('https://hub.dummyapis.com/employee').then(response =>{
            console.log(response.data)
            setCarts(response.data)
        })
    },[]);
        return(
            <div className='container '>
                {carts.map((emp)=>(
                    <div>
                        </div>
                ))
            }
            {/* {carts.map((details)=>(
                <div className="row">
                    <div className="col-sm-4">
                        <p>carts id</p>
                        <p>title</p>

                        </div>
                        <div className="col-sm-8">
                            <p>{details.id}</p>
                            {details.map((prod)=>(
                                <div>
                                    <p>{prod.title}</p>
                                    </div>
                            ))}
                            </div>
                    </div>
            ))} */}

        </div>
    )
}

export default Carts;