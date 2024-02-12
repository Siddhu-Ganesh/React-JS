import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counter.slice';
import Posts from './Posts';

function App() {
  const counter = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();
  return (
    <div className="App"> 
      {/* <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <h2>Counter: {counter.value}</h2>
            <button className='btn btn-primary me-2' onClick={() => dispatch(increment())}>+</button>
            <button className='btn btn-warning me-2' onClick={() => dispatch(decrement())}>-</button>
            <button className='btn btn-danger' onClick={() => dispatch(reset())}>Reset</button>
          </div>
        </div>
      </div> */}
      <Posts/>
    </div>
  );
}

export default App;
