import React, { useState } from "react";
import { Link, useParams ,Outlet} from "react-router-dom";

function LaptopDetails() {
    const params = useParams();
    const { productId } = params;


    const [Product, setProduct] = useState([
        {
            id: 1,
            name: 'Lenovo V15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) V15 G2 ALC Thin and Light Lapto...',
            image: '	https://rukminim2.flixcart.com/image/312/312/xif0q/computer/b/d/i/-original-imagzhefhc84rmbf.jpeg?q=70',
            specifications: [
                'AMD Ryzen 5 Hexa Core Processor',
                '8 GB DDR4 RAM',
                'Windows 11 Operating System',
                '512 GB SSD',
                '39.62 cm (15.6 Inch) Display',
                '1 Year Onsite Warranty'

            ],
            price: 34990,
            imgsrc: [

                'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/b/d/i/-original-imagzhefhc84rmbf.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
            ]
        },
        {
            id: 2,
            name: 'ASUS Vivobook 15 Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X515EA-EJ328WS ...',
            image: '	https://rukminim2.flixcart.com/image/312/312/xif0q/computer/5/6/i/-original-imaggshd5zgfe8ev.jpeg?q=70',
            specifications: [
                'AMD Ryzen 5 Hexa Core Processor',
                '8 GB DDR4 RAM',
                'Windows 11 Operating System',
                '512 GB SSD',
                '39.62 cm (15.6 Inch) Display',
                '1 Year Onsite Warranty'

            ],
            price: 34990,
            imgsrc: [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
            ]
        },
        {
            id: 3,
            name: 'HP 15s (2023) Ryzen 3 Dual Core 3250U - (8 GB/512 GB SSD/Windows 11 Home) 15s- eq1580AU Thin and Light...',
            image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/i/j/u/-original-imaggzes4pd7ptkx.jpeg?q=70',
            specifications: [
                'AMD Ryzen 5 Hexa Core Processor',
                '8 GB DDR4 RAM',
                'Windows 11 Operating System',
                '512 GB SSD',
                '39.62 cm (15.6 Inch) Display',
                '1 Year Onsite Warranty'

            ],
            price: 34990,
            imgsrc: [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
            ]
        },
        {
            id: 4,
            name: 'DELL Inspiron Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) Inspiron 3511 Thin and Light Laptop',
            image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70',
            specifications: [
                'AMD Ryzen 5 Hexa Core Processor',
                '8 GB DDR4 RAM',
                'Windows 11 Operating System',
                '512 GB SSD',
                '39.62 cm (15.6 Inch) Display',
                '1 Year Onsite Warranty'

            ],
            price: 34990,
            imgsrc: [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
            ]
        },
        {
            id: 5,
            name: 'Lenovo V15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) V15 G2 ALC Thin and Light Lapto...',
            image: '	https://rukminim2.flixcart.com/image/312/312/xif0q/computer/5/6/i/-original-imaggshd5zgfe8ev.jpeg?q=70',
            specifications: [
                'AMD Ryzen 5 Hexa Core Processor',
                '8 GB DDR4 RAM',
                'Windows 11 Operating System',
                '512 GB SSD',
                '39.62 cm (15.6 Inch) Display',
                '1 Year Onsite Warranty'

            ],
            price: 34990,
            imgsrc: [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
            ]
        },
        {
            id: 6,
            name: 'Lenovo V15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) V15 G2 ALC Thin and Light Lapto...',
            image: '	https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/m/k/-original-imagzyfzhzcw8wvp.jpeg?q=70',
            specifications: [
                'AMD Ryzen 5 Hexa Core Processor',
                '8 GB DDR4 RAM',
                'Windows 11 Operating System',
                '512 GB SSD',
                '39.62 cm (15.6 Inch) Display',
                '1 Year Onsite Warranty'

            ],
            price: 34990,
            imgsrc: [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
            ]
        },
        {
            id: 7,
            name: 'Lenovo V15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) V15 G2 ALC Thin and Light Lapto...',
            image: '	https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70',
            specifications: [
                'AMD Ryzen 5 Hexa Core Processor',
                '8 GB DDR4 RAM',
                'Windows 11 Operating System',
                '512 GB SSD',
                '39.62 cm (15.6 Inch) Display',
                '1 Year Onsite Warranty'

            ],
            price: 34990,
            imgsrc: [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
            ]
        },
        {
            id: 8,
            name: 'Lenovo V15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) V15 G2 ALC Thin and Light Lapto...',
            image: '	https://rukminim2.flixcart.com/image/312/312/xif0q/computer/i/j/u/-original-imaggzes4pd7ptkx.jpeg?q=70',
            specifications: [
                'AMD Ryzen 5 Hexa Core Processor',
                '8 GB DDR4 RAM',
                'Windows 11 Operating System',
                '512 GB SSD',
                '39.62 cm (15.6 Inch) Display',
                '1 Year Onsite Warranty'

            ],
            price: 34990,
            imgsrc: [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
            ]
        },
        {
            id: 9,
            name: 'Lenovo V15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) V15 G2 ALC Thin and Light Lapto...',
            image: '	https://rukminim2.flixcart.com/image/312/312/xif0q/computer/5/6/i/-original-imaggshd5zgfe8ev.jpeg?q=70',
            specifications: [
                'AMD Ryzen 5 Hexa Core Processor',
                '8 GB DDR4 RAM',
                'Windows 11 Operating System',
                '512 GB SSD',
                '39.62 cm (15.6 Inch) Display',
                '1 Year Onsite Warranty'

            ],
            price: 34990,
            imgsrc: [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
            ]
        }

    ])
    const selectedProduct = Product.find(Product => Product.id == productId);
    console.log(selectedProduct)

    const [seletedimageurls, Setseletedimageurls] = useState(selectedProduct.imgsrc[0]);

    const SeletedImg = (imgurl) => {
        Setseletedimageurls(imgurl);
    }


    return (

        <div className="container bg-white my-4 ">
            <div className="row">
                <div className="col-sm-3">
                    {selectedProduct.imgsrc.map(imgurl => (
                        <div>
                            <img src={imgurl} onClick={() => SeletedImg(imgurl)} style={{ width: '120px' }} />
                        </div>
                    ))}

                </div>
                <div className="col-sm-9">
                    <div className="row">
                        <div className="col-sm-5">
                            <img src={seletedimageurls} style={{ width: '300px' }} />

                        </div>
                        <div className="col-sm-7">
                            <h2>{selectedProduct.name}</h2>
                            {selectedProduct.specifications.map((spect) => (


                                <ul>
                                    <li>{spect}</li>
                                </ul>
                            ))}
                            <h5>₹{selectedProduct.price}</h5>
                            <button className="bg-secondary">Add To Cart</button>
                            <nav class="navbar navbar-expand-lg navbar-light bg-light my-2">
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link class="nav-item nav-link "to={`/LaptopDetails/${productId}/description`}>Product Description </Link>
                                <Link class="nav-item nav-link" to={`/LaptopDetails/${productId}/Specifications`} >Product Specifications</Link>
                                <Link class="nav-item nav-link" to={`/LaptopDetails/${productId}/Review`} >Product Rating</Link>
                               
                            </div>
                        </div>
                    </nav>
                    <div>
                        <Outlet/>

                    </div>
                        </div>
                        

                    </div>
                    

                </div>

            </div>

        </div>
    )
}

export default LaptopDetails;