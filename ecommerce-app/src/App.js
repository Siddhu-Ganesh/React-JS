
import "./App.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Todo from './Todo'

// import UserInfo from './UserInfo';
import Navbar from './Navbar';
import Footer  from './Footer';
// // import ProductsComponent from './Products';
// import ProductImpl from './Product';

import TicketBooking from './TicketBooking';

// import Data from './data.js'
// import Amazon from './ama';
// import Laptop from "./Laptop";
import LaptopDetails from './LaptopDetails';
import Laptop from './laptops';
import ProductDetails from './produuctdetails'
import Description from "./ProductDescription";
import Specification from "./ProductSpecification";
import Review from "./ProductRatings&Reviews";
import Employee from "./Employees";
import Carts from "./Carts";
import TrainList from "./Train/TainList";

import Users from "./Users/users";
import Register from "./Webpage/Register";
import Crud from "./CRUD";
import ProductImpl from "./Product";

function App() {
  return (
    <div>
      {/* <ProductImpl/> */}
      {/* <Crud/> */}
      <BrowserRouter>
       <Navbar />
      {/* <TicketBooking/>  */}
      {/* <UserInfo/> */}
      {/* <ProductImpl/> */}
      {/* <ProductsComponent/> */}
      {/* <Amazon/> */}
      {/* <Data/> */}
      {/* <Laptop/> */}
      <Routes>
        {/* <Route path="/user" element={<UserInfo/>}/>
        <Route path="/TicketBooking" element={<TicketBooking/>}/>
        <Route path="/Product" element={<ProductImpl/>}/>
        <Route path="/dataCards" element={<Data/>}/>
        <Route path="/amazon" element={<Amazon/>}/>
        <Route path="/" element={<Laptop />} />
          <Route path="/LaptopDetails/:productId" element={<LaptopDetails />} /> */}
          
      
       <Route path="/laptops" element={<Laptop/>}/>
       <Route path="/ProductDetails/:laptapId" element={<ProductDetails/>}/>
       <Route path="/LaptopDetails/:productId" element={<LaptopDetails />}>

       <Route path="description" element={<Description/>}></Route>
       <Route path="Specifications" element={<Specification/>}></Route>
       <Route path="Review" element={<Review/>}></Route>

       </Route>
       {/* <Route path="/TrainList" element={<TrainList/>}/>
       <Route path="/Carts" element={<Carts/>}/>
       <Route path="/User" element={<Users/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/flights" element={<TicketBooking/>}/>
       <Route path="/Todo" element={<Todo/>}/> */}
      </Routes>
      <Footer/>
      </BrowserRouter>
     


    </div>
   
  );
}

export default App;
