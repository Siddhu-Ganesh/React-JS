import React, { useState } from "react";

import { useParams ,useSearchParams } from "react-router-dom";
function ProductDetails(){
    const params =useParams();
   const { laptopId}=params;
   const [searchParams ,setSearchParams] = useSearchParams();
   console.log(searchParams.get('name'),searchParams.get('price'));
   const [Product, setProducts] = useState([
    {  
      id:"1",
      name: "Primebook 4G Android Based MediaTek MT8788 - (4 GB/64 GB EMMC Storage/Prime OS) 4G Thin and Light Lapt... ",
      imgsrc:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70",
      averageRating: "4.1",
      price: "13990",
      specifications: [
        "MediaTek MediaTek MT8788 Processor",
        "4 GB LPDDR4 RAM",
        "Prime OS Operating System",
        "29.46 cm (11.6 Inch) Display",
        "1 Year Pick and Drop Warranty",
      ],
      delivery: "Free delivery",
      Exchange: "Upto 13450 of on Exchange",
      Offer: "Bankoffer",
      imgurls:[
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70',
        'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/360-view_c3a99e.png',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/c/x/2/-original-imagnb24yffacr69.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/q/t/f/-original-imagnb24nggwbhtu.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/t/d/-original-imagnb24ewxbmgrp.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/y/d/6/-original-imagnb24pzqs53jq.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/a/e/s/-original-imagnb24trf3gfqy.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/t/q/l/-original-imagnzbts37phvxn.jpeg?q=70',

      ]
    },
    { 
      id:"2",
      name: "Macbook 4G Android Based MediaTek MT8788 - (4 GB/64 GB EMMC Storage/Prime OS) 4G Thin and Light Lapt... ",
      imgsrc:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70",
      averageRating: "4.1",
      price: "13000",
      specifications: [
        "MediaTek MediaTek MT8788 Processor",
        "4 GB LPDDR4 RAM",
        "Prime OS Operating System",
        "29.46 cm (11.6 Inch) Display",
        "1 Year Pick and Drop Warranty",
      ],
      delivery: "Free delivery",
      Exchange: "Upto 13450 of on Exchange",
      Offer: "Bankoffer",
      imgurls:[
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70',
        'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/360-view_c3a99e.png',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/c/x/2/-original-imagnb24yffacr69.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/q/t/f/-original-imagnb24nggwbhtu.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/t/d/-original-imagnb24ewxbmgrp.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/y/d/6/-original-imagnb24pzqs53jq.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/a/e/s/-original-imagnb24trf3gfqy.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/t/q/l/-original-imagnzbts37phvxn.jpeg?q=70',

      ]
    },
    { 
      id:"3",
      name: "Del 4G Android Based MediaTek MT8788 - (4 GB/64 GB EMMC Storage/Prime OS) 4G Thin and Light Lapt... ",
      imgsrc:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70",
      averageRating: "4.1",
      price: "15990",
      specifications: [
        "MediaTek MediaTek MT8788 Processor",
        "4 GB LPDDR4 RAM",
        "Prime OS Operating System",
        "29.46 cm (11.6 Inch) Display",
        "1 Year Pick and Drop Warranty",
      ],
      delivery: "Free delivery",
      Exchange: "Upto 13450 of on Exchange",
      Offer: "Bankoffer",
      imgurls:[
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70',
        'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/360-view_c3a99e.png',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/c/x/2/-original-imagnb24yffacr69.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/q/t/f/-original-imagnb24nggwbhtu.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/t/d/-original-imagnb24ewxbmgrp.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/y/d/6/-original-imagnb24pzqs53jq.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/a/e/s/-original-imagnb24trf3gfqy.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/t/q/l/-original-imagnzbts37phvxn.jpeg?q=70',

      ]
    },
    { 
      id:"4",
      name: "lenovo 4G Android Based MediaTek MT8788 - (4 GB/64 GB EMMC Storage/Prime OS) 4G Thin and Light Lapt... ",
      imgsrc:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70",
      averageRating: "4.1",
      price: "16990",
      specifications: [
        "MediaTek MediaTek MT8788 Processor",
        "4 GB LPDDR4 RAM",
        "Prime OS Operating System",
        "29.46 cm (11.6 Inch) Display",
        "1 Year Pick and Drop Warranty",
      ],
      delivery: "Free delivery",
      Exchange: "Upto 13450 of on Exchange",
      Offer: "Bankoffer",
      imgurls:[
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70',
        'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/360-view_c3a99e.png',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/c/x/2/-original-imagnb24yffacr69.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/q/t/f/-original-imagnb24nggwbhtu.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/t/d/-original-imagnb24ewxbmgrp.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/y/d/6/-original-imagnb24pzqs53jq.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/a/e/s/-original-imagnb24trf3gfqy.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/t/q/l/-original-imagnzbts37phvxn.jpeg?q=70',

      ]
    },
    { 
      id:"5",
      name: "hp 4G Android Based MediaTek MT8788 - (4 GB/64 GB EMMC Storage/Prime OS) 4G Thin and Light Lapt... ",
      imgsrc:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70",
      averageRating: "4.1",
      price: "14990",
      specifications: [
        "MediaTek MediaTek MT8788 Processor",
        "4 GB LPDDR4 RAM",
        "Prime OS Operating System",
        "29.46 cm (11.6 Inch) Display",
        "1 Year Pick and Drop Warranty",
      ],
      delivery: "Free delivery",
      Exchange: "Upto 13450 of on Exchange",
      Offer: "Bankoffer",
      imgurls:[
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70',
        'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/360-view_c3a99e.png',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/c/x/2/-original-imagnb24yffacr69.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/q/t/f/-original-imagnb24nggwbhtu.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/t/d/-original-imagnb24ewxbmgrp.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/y/d/6/-original-imagnb24pzqs53jq.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/a/e/s/-original-imagnb24trf3gfqy.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/t/q/l/-original-imagnzbts37phvxn.jpeg?q=70',

      ]
    },
    {  
      id:"6",
      name: "Del 4G Android Based MediaTek MT8788 - (4 GB/64 GB EMMC Storage/Prime OS) 4G Thin and Light Lapt... ",
      imgsrc:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70",
      averageRating: "4.1",
      price: "12990",
      specifications: [
        "MediaTek MediaTek MT8788 Processor",
        "4 GB LPDDR4 RAM",
        "Prime OS Operating System",
        "29.46 cm (11.6 Inch) Display",
        "1 Year Pick and Drop Warranty",
      ],
      delivery: "Free delivery",
      Exchange: "Upto 13450 of on Exchange",
      Offer: "Bankoffer",
      imgurls:[
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70',
        'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/360-view_c3a99e.png',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/c/x/2/-original-imagnb24yffacr69.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/q/t/f/-original-imagnb24nggwbhtu.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/t/d/-original-imagnb24ewxbmgrp.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/y/d/6/-original-imagnb24pzqs53jq.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/a/e/s/-original-imagnb24trf3gfqy.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/t/q/l/-original-imagnzbts37phvxn.jpeg?q=70',

      ]
    },
    { 
      id:"7",
      name: "Mac 4G Android Based MediaTek MT8788 - (4 GB/64 GB EMMC Storage/Prime OS) 4G Thin and Light Lapt... ",
      imgsrc:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70",
      averageRating: "4.1",
      price: "12990",
      specifications: [
        "MediaTek MediaTek MT8788 Processor",
        "4 GB LPDDR4 RAM",
        "Prime OS Operating System",
        "29.46 cm (11.6 Inch) Display",
        "1 Year Pick and Drop Warranty",
      ],
      delivery: "Free delivery",
      Exchange: "Upto 13450 of on Exchange",
      Offer: "Bankoffer",
      imgurls:[
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70',
        'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/360-view_c3a99e.png',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/c/x/2/-original-imagnb24yffacr69.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/q/t/f/-original-imagnb24nggwbhtu.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/t/d/-original-imagnb24ewxbmgrp.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/y/d/6/-original-imagnb24pzqs53jq.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/a/e/s/-original-imagnb24trf3gfqy.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/t/q/l/-original-imagnzbts37phvxn.jpeg?q=70',

      ]
    },
    { 
      id:"8",
      name: "Primebook 4G Android Based MediaTek MT8788 - (4 GB/64 GB EMMC Storage/Prime OS) 4G Thin and Light Lapt... ",
      imgsrc:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70",
      averageRating: "4.1",
      price: "17990",
      specifications: [
        "MediaTek MediaTek MT8788 Processor",
        "4 GB LPDDR4 RAM",
        "Prime OS Operating System",
        "29.46 cm (11.6 Inch) Display",
        "1 Year Pick and Drop Warranty",
      ],
      delivery: "Free delivery",
      Exchange: "Upto 13450 of on Exchange",
      Offer: "Bankoffer",
      imgurls:[
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/x/y/s/-original-imagn9s6z2qmxmem.jpeg?q=70',
        'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/360-view_c3a99e.png',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/c/x/2/-original-imagnb24yffacr69.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/q/t/f/-original-imagnb24nggwbhtu.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/t/d/-original-imagnb24ewxbmgrp.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/y/d/6/-original-imagnb24pzqs53jq.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/a/e/s/-original-imagnb24trf3gfqy.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/t/q/l/-original-imagnzbts37phvxn.jpeg?q=70',

      ]
    },
  ]);
  const selectedLaptop=Product.find(laptop => laptop.id === laptopId);
  console.log(selectedLaptop);
   const [selectedImgUrl,setSelectedImgUrl]=useState(selectedLaptop.imgurls[0 ]);   
  const selectImage =(imgurl) => {
    setSelectedImgUrl(imgurl);
  }

  return (
    <div className="container">
       <div className="row">
       <div className="col-sm-2">
            {selectedLaptop.imgurls.map(imgurl =>(
                <div className="border text-center  my-2" width="100px">
                    <img src={imgurl} width={'70px'} className="my-2" onClick={() =>selectImage(imgurl)}/>
                </div> 
            ))}

        </div>
        <div className="col-sm-10 ">
           <div className="row  my-5">
            <div className="col-sm-4  my-5 py-5">
                <img src={selectedImgUrl} width={'300px'} />
            </div>
            <div className="col-sm-8">
            <h5 className="text-primary" style={{cursor: 'pointer'}}  >{selectedLaptop.name} </h5>
              <h6>
                <b>{selectedLaptop.averageRating}</b>{" "}
                <small>
                  <small className="text-muted">averageRating</small>
                </small>
              </h6>
              <ul className="ms-4 text-muted">
                {selectedLaptop.specifications.map((specification) => (
                  <li key={specification}>{specification}</li>
                ))}
              </ul>
              <h4>{selectedLaptop.price}</h4>
              <button className="btn btn-primary">Add to Cart</button>

                
            </div>
           
           </div>
       </div>

       </div>
    </div>
  )
}
export default ProductDetails; 