import { useState,useEffect } from "react";
import Cart from "./Cart";
import { ToastContainer, toast } from 'react-toastify';

function Product(){
    const[product,SetProduct]=useState(
        [
            {
                id:1,
                name:'realme C51 (Carbon Black, 64 GB)',
                image:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/5/5/-original-imagt4qzhsrnpyhb.jpeg?q=70',
                description:[
                    '4 GB RAM | 64 GB ROM | Expandable Upto 2 TB',
                    '17.12 cm (6.74 inch) HD Display',
                    '50MP + 0.08MP | 5MP Front Camera',
                    '5000 mAh Battery',
                    'T612 Processor',
                    '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
                ],
                price:'₹8,999'
            },
            {
                id:2,
                name:'realme C51 (Carbon Black, 64 GB)',
                image:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/5/5/-original-imagt4qzhsrnpyhb.jpeg?q=70',
                description:[
                    '4 GB RAM | 64 GB ROM | Expandable Upto 2 TB',
                    '17.12 cm (6.74 inch) HD Display',
                    '50MP + 0.08MP | 5MP Front Camera',
                    '5000 mAh Battery',
                    'T612 Processor',
                    '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
                ],
                price:'₹8,999'
            },
            {
                id:3,
                name:'realme C51 (Carbon Black, 64 GB)',
                image:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/5/5/-original-imagt4qzhsrnpyhb.jpeg?q=70',
                description:[
                    '4 GB RAM | 64 GB ROM | Expandable Upto 2 TB',
                    '17.12 cm (6.74 inch) HD Display',
                    '50MP + 0.08MP | 5MP Front Camera',
                    '5000 mAh Battery',
                    'T612 Processor',
                    '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
                ],
                price:'₹8,999'
            },
            {
                id:4,
                name:'realme C51 (Carbon Black, 64 GB)',
                image:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/5/5/-original-imagt4qzhsrnpyhb.jpeg?q=70',
                description:[
                    '4 GB RAM | 64 GB ROM | Expandable Upto 2 TB',
                    '17.12 cm (6.74 inch) HD Display',
                    '50MP + 0.08MP | 5MP Front Camera',
                    '5000 mAh Battery',
                    'T612 Processor',
                    '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
                ],
                price:'₹8,999'
            },
            {
                id:5,
                name:'realme C51 (Carbon Black, 64 GB)',
                image:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/5/5/-original-imagt4qzhsrnpyhb.jpeg?q=70',
                description:[
                    '4 GB RAM | 64 GB ROM | Expandable Upto 2 TB',
                    '17.12 cm (6.74 inch) HD Display',
                    '50MP + 0.08MP | 5MP Front Camera',
                    '5000 mAh Battery',
                    'T612 Processor',
                    '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
                ],
                price:'₹8,999'
            },
            {
                id:6,
                name:'realme C51 (Carbon Black, 64 GB)',
                image:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/5/5/-original-imagt4qzhsrnpyhb.jpeg?q=70',
                description:[
                    '4 GB RAM | 64 GB ROM | Expandable Upto 2 TB',
                    '17.12 cm (6.74 inch) HD Display',
                    '50MP + 0.08MP | 5MP Front Camera',
                    '5000 mAh Battery',
                    'T612 Processor',
                    '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
                ],
                price:'₹8,999'
            },
            {
                id:7,
                name:'realme C51 (Carbon Black, 64 GB)',
                image:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/5/5/-original-imagt4qzhsrnpyhb.jpeg?q=70',
                description:[
                    '4 GB RAM | 64 GB ROM | Expandable Upto 2 TB',
                    '17.12 cm (6.74 inch) HD Display',
                    '50MP + 0.08MP | 5MP Front Camera',
                    '5000 mAh Battery',
                    'T612 Processor',
                    '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
                ],
                price:'₹8,999'
            },
           {
                id:8,
                name:'realme C51 (Carbon Black, 64 GB)',
                image:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/5/5/-original-imagt4qzhsrnpyhb.jpeg?q=70',
                description:[
                    '4 GB RAM | 64 GB ROM | Expandable Upto 2 TB',
                    '17.12 cm (6.74 inch) HD Display',
                    '50MP + 0.08MP | 5MP Front Camera',
                    '5000 mAh Battery',
                    'T612 Processor',
                    '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
                ],
                price:'₹8,999'
            },
        ]
    )
    const [cartItems, setCartItems] = useState([]);

    
  useEffect(() => {
    console.log("Updated Cart Items:", cartItems);
  }, [cartItems]);

  const addToCart = (selectedProduct) => {
    setCartItems((prevCartItems) => [...prevCartItems, selectedProduct]);
    console.log("Selected Product:", selectedProduct);

  
        console.log("Updated Cart Items:", cartItems);
      
    
    toast.success('Item added into Cart', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        
  };
     
    return(
        <div className="container">
            {product.map((list)=>(
                <div className="row my-4 py-4" key={list.id}>
                    <div className="col-sm-4">
                    <img src={list.image} width={'150px'} alt={list.name}/>
                    </div>
                    <div className="col-sm-5">
                        <h5 style={{color:'#1687de',marginLeft:'8px'}}>{list.name}</h5>

                        {list.description.map((desc, index)=>(
                            <div key={index}>
                                <ul>
                                    <li>{desc}</li>
                                </ul>
                                </div>
                        ))}
                        </div> 
                        <div className="col-sm-3" > 
                        <p style={{marginLeft:"30px"}}><b>{list.price}</b></p>

                        <button className="btn btn-primary" onClick={()=>addToCart(list)}>Add To Cart</button>
                        
                            </div>

                            <hr/>

                    </div>
            ))}
            
            <Cart cartItems={cartItems} />
            
            
            
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

    );
}
export default Product;