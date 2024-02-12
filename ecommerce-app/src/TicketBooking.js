import React, { useState } from 'react';
import './Ticket.css';

function TicketBooking() {
    
    const [ticketType, setTicketType] = useState([
        {
            name: 'SpiceJet',
            imgsrc: 'https://www.air.irctc.co.in/assets/img/flights-icon/SG.png',
            departure_place_code: 'TIR',
            departure_place: ' Tirupati, India',
            departure_time: '07:40',
            duration: '16h 05m',
            arrival_place_code: 'DEL',
            arrival_place: ' New Delhi, India',
            arrival_time: '23:45',
            Price: 9285,
            Layover: 'BOM',
            Layover_time: 'Mumbai 11h 25m'
        },
        {
            name: 'IndiGo',
            imgsrc: 'https://www.air.irctc.co.in/assets/img/flights-icon/6E.png',
            departure_place_code: 'TIR',
            departure_place: ' Tirupati, India',
            departure_time: '12:30',
            duration: '6h 20m',
            arrival_place_code: 'DEL',
            arrival_place: ' New Delhi, India',
            arrival_time: '18:50',
            Price: 9623,
            Layover: 'HYD',
            Layover_time: 'Hyderabad 2h 40m'
        },
        {
            name: 'Air India',
            imgsrc: 'https://www.air.irctc.co.in/assets/img/flights-icon/AI.png',
            departure_place_code: 'TIR',
            departure_place: ' Tirupati, India',
            departure_time: '14:30',
            duration: '4h 20m',
            arrival_place_code: 'DEL',
            arrival_place: ' New Delhi, India',
            arrival_time: '18:50',
            Price: 17528,
            Layover: 'HYD',
            Layover_time: 'Hyderabad 0h 45m'
        },
        {
            name: 'Vistara',
            imgsrc: 'https://www.air.irctc.co.in/assets/img/flights-icon/UK.png',
            departure_place_code: 'TIR',
            departure_place: ' Tirupati, India',
            departure_time: '15:10',
            duration: '11h 0m',
            arrival_place_code: 'DEL',
            arrival_place: ' New Delhi, India',
            arrival_time: '02:10',
            Price: 11482,
            Layover: 'HYD',
            Layover_time: 'Hyderabad 4h 40m'
        },
        {
            name: 'SpiceJet',
            imgsrc: 'https://www.air.irctc.co.in/assets/img/flights-icon/SG.png',
            departure_place_code: 'TIR',
            departure_place: ' Tirupati, India',
            departure_time: '17:10',
            duration: '15h 15m',
            arrival_place_code: 'DEL',
            arrival_place: ' New Delhi, India',
            arrival_time: '08:25',
            Price: 13233,
            Layover: 'HYD',
            Layover_time: 'Hyderabad 11h 40m'
        },
        {
            name: 'IndiGo',
            imgsrc: 'https://www.air.irctc.co.in/assets/img/flights-icon/6E.png',
            departure_place_code: 'TIR',
            departure_place: ' Tirupati, India',
            departure_time: '20:20',
            duration: '11h 05m',
            arrival_place_code: 'DEL',
            arrival_place: ' New Delhi, India',
            arrival_time: '07:25',
            Price: 12173,
            Layover: 'HYD',
            Layover_time: 'Hyderabad 7h 35m'
        }

    ]);

    //Price onClick Effect Part Start
    const [sortOrder, setSortOrder] = useState('lowToHigh');

    const handleClick = () => {
        if (sortOrder === 'lowToHigh') {
            const sortdata = ticketType.sort((a, b) => {
                if (a.Price > b.Price) {
                    return 1;
                } else if (a.Price < b.Price) {
                    return -1;

                } else {
                    return 0;
                }
            });
            setTicketType([...sortdata])
            setSortOrder('highToLow')
        } else {
            const sortdata = ticketType.sort((a, b) => {
                if (a.Price > b.Price) {
                    return -1;
                } else if (a.Price < b.Price) {
                    return 1;

                } else {
                    return 0;
                }
            });
            setTicketType([...sortdata])
            setSortOrder('lowToHigh')
        }
    };
    //Price onClick Effect Part End

    // Departure onClick Effect Part Start
    const [time, setTime] = useState('lowToHigh')

    const handleDeparture = () => {
        if (time === 'lowToHigh') {
            const data = ticketType.sort((a, b) => {
                let dateA = a.departure_time.split(":").join("");
                let dateB = b.departure_time.split(":").join("");
                if (dateA > dateB) {
                    return 1;
                } else if (dateA < dateB) {
                    return -1;
                } else {
                    return 0;
                }
            });
            setTicketType([...data])
            setTime('highToLow')
        } else {
            const data = ticketType.sort((a, b) => {
                let dateA = a.departure_time.split(":").join("");
                let dateB = b.departure_time.split(":").join("");
                if (dateA > dateB) {
                    return -1;
                } else if (dateA < dateB) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setTicketType([...data])
            setTime('lowToHigh')

        }
    };
    //Departure onClick Effect Part End

    //Duration onClick Effect Part Start
    const [d_time, set_d_time] = useState('lowToHigh')

    const convertTime = (duration) => {
        const [hours, min] = duration.split('h').map((part) => parseInt(part));
        return hours * 60 + min
    }

    const handleDuration = () => {
        if (d_time === 'lowToHigh') {
            const data = ticketType.sort((a, b) => {

                let dataA = convertTime(a.duration)
                let dataB = convertTime(b.duration)
                if (dataA > dataB) {
                    return 1;
                } else if (dataA < dataB) {
                    return -1;
                } else {
                    return 0;
                }
            }
            );
            setTicketType([...data])
            set_d_time('highToLow')
        } else {
            const data = ticketType.sort((a, b) => {

                let dataA = convertTime(a.duration)
                let dataB = convertTime(b.duration)
                if (dataA > dataB) {
                    return -1;
                } else if (dataA < dataB) {
                    return 1;
                } else {
                    return 0;
                }
            }
            );
            setTicketType([...data])
            set_d_time('lowToHigh')
        }
    };
    // Duration onClick Effect Part End

//Arrival onClick Effect part Start
    const [Arrivaltime, setArrivalTime] = useState('lowToHigh')

    const handleArrival = () => {
        if (Arrivaltime === 'lowToHigh') {
            const data = ticketType.sort((a, b) => {
                let dateA = a.arrival_time.split(":").join("");
                let dateB = b.arrival_time.split(":").join("");
                if (dateA > dateB) {
                    return 1;
                } else if (dateA < dateB) {
                    return -1;
                } else {
                    return 0;
                }
            });
            setTicketType([...data])
            setArrivalTime('highToLow')
        } else {
            const data = ticketType.sort((a, b) => {
                let dateA = a.arrival_time.split(":").join("");
                let dateB = b.arrival_time.split(":").join("");
                if (dateA > dateB) {
                    return -1;
                } else if (dateA < dateB) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setTicketType([...data])
            setArrivalTime('lowToHigh')

        }
    };
//Arrival onClick Effect part End

    return (
        <div className='Container bg-light'>



            <nav class="navbar navbar-expand-sm bg-secondary navbar-light my-4 py-4 p-5  sticky-top ">
                <div class="container-fluid row ">
                    <ul class="navbar-nav ">
                        <li class="nav-item col-sm-2" >
                            <a class="nav-link " style={{ cursor: 'pointer' }} onClick={handleDeparture}><b >DEPARTURE</b></a>
                        </li>
                        <li class="nav-item col-sm-2">
                            <a class="nav-link" style={{ cursor: 'pointer' }} onClick={handleDuration}><b>DURATION</b></a>
                        </li>
                        <li class="nav-item service col-sm-4">
                            <a class="nav-link" style={{ cursor: 'pointer' }} onClick={handleArrival}><b>ARRIVAL</b></a>
                        </li>
                        <li class="nav-item col-sm-2 ">
                            <a class="nav-link" style={{ cursor: 'pointer', marginLeft: '34px' }} onClick={handleClick}><b> PRICE </b></a>
                        </li>
                        <li class="nav-item col-sm-2">
                            <a class="nav-link" href="#"><b>BEST</b></a>
                        </li>
                    </ul>
                </div>
            </nav>



            


            {ticketType.map((item) => (
                <div className='my-4 py-4 p-5   border'>
                    <div className='row '>
                        <div className='col-sm-8'>

                            <p><img src={item.imgsrc} />  {item.name}</p>



                        </div>


                    </div>
                    <div className='row'>
                        <div className='col-sm-2'>
                            <p>{item.departure_place_code}<small className='text-muted'>{item.departure_place}</small></p>
                        </div>
                        <div className='col-sm-2'>
                            <p>- {item.Layover} -</p>
                        </div>
                        <div className='col-sm-2 '>
                            <p>{item.arrival_place_code}<small className='text-muted'>{item.arrival_place}</small></p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-2'>
                            <p><b>{item.departure_time}</b></p>

                        </div>
                        <div className='col-sm-2'>
                            <p><b>{item.duration}</b></p>

                        </div>
                        <div className='col-sm-4'>
                            <p><b>{item.arrival_time}</b></p>

                        </div>
                        <div className='col-sm-2'>
                            <p><b>₹{item.Price}</b></p>

                        </div>
                        <div className='col-sm-2'>
                            <button className='btn btn-primary'>Book</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <p><small><small>Layover - {item.Layover_time}</small></small></p>
                        </div>
                    </div>

                </div>


            )
            )}


        </div>
    )
}

export default TicketBooking;
