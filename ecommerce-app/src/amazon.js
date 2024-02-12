import './amazon.css'
import React, { useState } from "react";
function Amazon() {
 
  const [Amazon, setAmazon] = useState([
    {
      name: "Trending Top 10 on miniTV",

      imgsrc:
        "https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg",
      imgsrc1:
        "https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg",
        
      imgsrc2:
      "https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg",
    imgsrc3:
      "https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg"
    },
    {
        name: "Hip Hop India | New Dance Reality Show",

      imgsrc:
        "https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg",
      imgsrc1:
        "https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg",
    },
    {
        name: "Romantic shows & mini Movies",

      imgsrc:
        "https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg",
      imgsrc1:
        "https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg",
    },
    {
        name: "Popular Web Series",

      imgsrc:
        "https://m.media-amazon.com/images/S/pv-target-images/9a3e6714f2da63a7d5d8f824b7081c1de8ac544cb43cfadc7d64eb7581439fd7.__SX330__SY186__QL60__._TTH_.jpg",
      imgsrc1:
        "https://m.media-amazon.com/images/S/pv-target-images/8e5de78012f24b2a1c5ba24708cff327ae53a2f659d90eee77394698fc9a5120.__SX330__SY186__QL60__._TTH_.jpg",
    },
  ]);
  return (
    <div className="container">
      <div className="row">
        {Amazon.map((product) => (
         <div>
          <div className=" col-sm-12  ">
          <p style={{color:'white'}}>{product.name}</p>
          </div>
               <div className='row '>
              {Amazon.map((images)=>(
              <div className='col-sm-3 d-flex' >
                {/* <img src={images.imgsrc} style={{width:'220px'}} alt="pic"/> */}
                
                <p className='mx-4'><img src={images.imgsrc} style={{width:'220px'}}/></p>
                <p className='mx-4'><img src={images.imgsrc1} style={{width:'220px'}}/></p>
                <p className='mx-4'><img src={images.imgsrc2} style={{width:'220px'}}/></p>
                <p className='mx-4'><img src={images.imgsrc3} style={{width:'220px'}}/></p>
                </div>
              
              ))};
              </div>
              </div>
              ))};
              </div>
    </div>
  );
}
export default Amazon;
