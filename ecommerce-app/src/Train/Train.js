import { useState } from "react";
import "./Train.css"
function ChildTrain(props) {

    const [collapse, setCollapse] = useState(true)
    const [dates, setdates] = useState(false)
    const [refresh, setrefresh] = useState([]);

    const handelrefresh = () => {
        // const currentDate = new Date();
        // const options = { year: 'numeric', month: 'short', day: 'numeric' };
        // const newDate = currentDate.toLocaleDateString('en-US', options);
        const currentDate = new Date();
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const dateRange = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);
            const formattedDate = `${daysOfWeek[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
            dateRange.push(formattedDate);
        }
        setrefresh(dateRange)
        setCollapse(false)
        setdates(true)
    }
    const Closedate=()=>{
        setdates(false)
    }


    return (
        <div className="my-3 box border border-dark">
            <div className="row bg">
                <div className="col-sm-4 mx-3 my-2 ">

                    <h4> {props.data.name}</h4>
                </div>

                <div className="col-sm-4 my-2">
                    <p>Runs on :
                        {props.data.Runs_on.map((days) => (
                            <span className="mx-1">{days.day}</span>
                        ))}</p>

                </div>
                <div className="col-sm-3 mx-4 my-2">
                    <a>Train Schedule</a>

                </div>



            </div>
            <div className="row my-3 mx-2">
                <div className="col-sm-5">
                    <p><b>{props.data.departure_time} | </b>{props.data.departure_place} <span> | {props.data.departure_date}</span></p>
                </div>
                <div className="col-sm-3">
                    <p>------ <span>{props.data.duration} </span>------</p>

                </div>
                <div className="col-sm-4">
                    <p><b>{props.data.arrival_time} |</b>{props.data.arrival_place} |<span>{props.data.arrival_date}</span></p>

                </div>

            </div>
            {!dates && (
                <div className="row mx-2">
                    <div className="col-sm-2  m-1 ">

                        <button onClick={handelrefresh} className="refresh px-4"> <p>{props.data.classes[3]}</p>
                            Refresh</button>


                    </div>
                    <div className="col-sm-2  m-1 ">

                        <button onClick={handelrefresh} className="refresh px-4"> <p>{props.data.classes[0]}</p>
                            Refresh</button>

                    </div>
                    <div className="col-sm-2  m-1 ">

                        <button onClick={handelrefresh} className="refresh px-4"> <p>{props.data.classes[1]}</p>
                            Refresh</button>

                    </div>
                    <div className="col-sm-2  m-1 ">

                        <button onClick={handelrefresh} className="refresh px-2"> <p>{props.data.classes[2]}</p>
                            Refresh</button>

                    </div>
                </div>
            )}


            {/* {!collapse && (  <div className="row mx-2">
            <div className="col-sm-12 refresh-content ">  
                        <p className="refresh-date border">{refresh.join(" ")}</p>
                        </div></div>)} */}
    {/* style={{backgroundColor:'#E0E0E0'}} */}

            {dates && (
            
            <div className="p-1" style={{backgroundColor:'#E0E0E0'}} >  
                <div className="row border-bg">
                <div className="col-sm-2  text-center border-date">
                    <span onClick={handelrefresh}>{props.data.classes[3]}</span>

                </div>
                <div className="col-sm-2 ">
                    <span onClick={handelrefresh}>{props.data.classes[0]}</span>

                </div>
                <div className="col-sm-2  ">
                    <p>{props.data.classes[1]}</p>

                </div>
                <div className="col-sm-3 ">
                    <p>{props.data.classes[2]}</p>

                </div>
                <div className="col-sm-2  d-flex flex-row-reverse">
                {/* <span id="boot-icon" class="bi bi-x" style={{fontSize:'10rem'}}></span> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" onClick={Closedate} style={{cursor:'pointer'}}>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
                
                </div>
            </div>
                <div className="row mx-2 my-5">
                    <div className="col-sm-12 sleeper-content p-3">
                        {refresh.map((date, index) => (
                            <span key={index} className="refreshed-date border p-3 mx-2">
                                {date} 
                                {index !== refresh.length - 1 && " "}
                            </span>
                            
                        ))}
                    </div>
                </div>
                </div>
            )}

            <div className="row mx-1 my-3">
                <div className="col-sm-2 gap ">
                    <button className="border border-danger p-2 " id="button" style={{ backgroundColor: '#FFCCBC' }} onClick={props.getDetails}> Book Now </button>


                </div>
                {!dates && (
                    <div className="col-sm-2">
                        <button className="p-2 border border-secondary" id="background"> OTHER DATES </button>

                    </div>
                )}
                {dates && (
                    <div className="col-sm-3">
                        <p>{}</p>

                        </div>
                )}
            </div>
        </div>
    )
}
export default ChildTrain;