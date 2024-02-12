
import React ,{useState}from 'react';

function ProductImpl () {
    const [Product,setProduct]=useState(
        [
            {
                name:'Siddhu',
                age:23
            },
            {
                name:'Ganesh',
                age:22
            },
            {
                name:'Sidd',
                age:21
            },
            {
                name:'Gani',
                age:20
            },
            {
                name:'Si',
                age:25
            },
            {
                name:'Ga',
                age:24
            }
        ]
    );
    const sortProduct=(mode)=>{
        if(mode==='lowtohigh'){
            const SortData=Product.sort((a,b)=>{
                if(a.age>b.age){
                    return -1;
                }else if(a.age<b.age){
                    return 1;

                }else{
                    return 0;
                }

            });
            setProduct([...SortData])
        }else{
            const SortData=Product.sort((a,b)=>{
                if(a.age>b.age){
                    return 1;
                }else if(a.age<b.age){
                    return -1;

                }else{
                    return 0;
                }

            });
            setProduct([...SortData])
        }

    }
  return (
    <div className='Container'>

        <div>
        <button onClick={()=>(sortProduct('lowtohigh'))}>Top</button>
        <button onClick={()=>(sortProduct('Hightolow'))}>LOw</button>
        </div>
        {Product.map((products)=>(
        
        <div className='row'>
             <div className='col-sm-3'><h1>{products.name}</h1></div>
             <div className='col-sm-6'><h1>{products.age}</h1></div>
        </div>
        
        
            
        ))}

       
        
    </div>
    
  )
}

export default ProductImpl;
