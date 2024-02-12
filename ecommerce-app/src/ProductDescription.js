import { useState } from "react";
import { useLocation } from "react-router-dom";

function Description(){
    const [description,setDescription]=useState([
        {
            id:1,
            description:[
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               },
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               }

            ]
        },
        {
            id:2,
            description:[
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               },
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               }

            ]
        },
        {
            id:3,
            description:[
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               },
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               }

            ]
        }
        ,
        {
            id:4,
            description:[
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               },
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               }

            ]
        },
        {
            id:5,
            description:[
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               },
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               }

            ]
        }
        ,
        {
            id:6,
            description:[
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               },
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               }

            ]
        },
        {
            id:7,
            description:[
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               },
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               }

            ]
        },
        {
            id:8,
            description:[
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               },
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               }

            ]
        },
        {
            id:9,
            description:[
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               },
               {
                title:'Exceptional Performance',
                content:'The TUF Gaming A15 is a feature-rich Windows 11 gaming laptop that is designed for hardcore gaming and has the ability to carry you to success.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/99b34dc31465471893883cd36a3ffd73_18364f4f96c_image.jpeg?q=90'
               },
               {
                title:'Brilliant Design',
                content:'A honeycomb-patterned material on the base increases grip and mimics the hexagonal chassis reinforcements, adding a soft texture that appears clean and polished.',
                imgsrc:'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7a0792119d3a47b792a0aa05f98e82fd_18364f50ed8_image.jpeg?q=90'
               }

            ]
        }
    ])
const location=useLocation()
console.log(location)

const productId=location.pathname.split("/")[2];
console.log(productId)

const selectedProduct = description.find(Product => Product.id == productId);
    return(
        <div className="container my-3 py-3 p-4">
            {description && selectedProduct.description.map((desc)=>(
                <div className="row border my-2">
                    <div className="col-sm-9">
                        <h3>{desc.title}</h3>
                        <p>{desc.content}</p>
                        </div>
                        <div className="col-sm-3 text-center">
                            <img src={desc.imgsrc} width={'90px'}/>
                            </div>
                    </div>
            ))}
           
        </div>
    )
}
export default Description;