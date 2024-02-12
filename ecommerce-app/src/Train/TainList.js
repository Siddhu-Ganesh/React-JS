import React ,{useEffect, useState} from "react";
import ChildTrain from "./Train";
import axios from "axios";
import { Alert } from "bootstrap";
import { ToastContainer, toast } from 'react-toastify';

function TrainList(){

    
const[traindata,setTraindata]=useState([
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        price:[
            695,
            1825,
            2625,
            4460

        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'SAMPARK KRANTI (12649)',
        departure_time:'08:20',
        departure_place:' KACHEGUDA  ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'08:10 ',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'23:50',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'TELANGANA EXP (12723)',
        departure_time:'06:00',
        departure_place:' HYDERABAD DECAN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'07:40',
        arrival_place:' NEW DELHI ',
        arrival_date:' Tue, 08 Aug',
        duration:'25:40',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },
    {
        name: 'RAJDHANI EXP (22691)',
        departure_time:'07:15',
        departure_place:' SECUNDERABAD JN ',
        departure_date:'Mon, 07  Aug',
        arrival_time:'05:30',
        arrival_place:' H NIZAMUDDIN ',
        arrival_date:' Tue, 08 Aug',
        duration:'22:15',

        classes:[
            
                'AC 3 Tier (3A)',
                'AC 2 Tier (2A)',
                'AC First Class (1A)',
                 'Sleeper (SL)'
              
        ],
        Runs_on:[
            {
                day:'M'
            },
            {
                day:'T'
            },
            {
                day:'W'
            },
            {
                day:'T'
            },
            {
                day:'F'
            },
            {
                day:'S'
            },
            {
                day:'S'
            }

        ]


    },

]);


const getDetails=()=>{
    
    toast.warn('please select class', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}
// useEffect(()=>{
//     getTrainListdata();
// },[])

// const getTrainListdata =()=>{
//       axios.get(' ').then(response=>{
//         console.log(response.data)
//         setTraindata(response.data)
//       })  
// }
return(
    <div className="container ">
       
        {traindata.map((data)=>(
            <ChildTrain data={data} getDetails={getDetails} />
        ))}

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
        

    </div>
)
}
export default TrainList;
