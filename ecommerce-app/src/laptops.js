import React, { useState } from "react";
import { Link } from "react-router-dom";
function Laptop() {
  const [Product, setProducts] = useState([
    {
      id:1,
      name: 'Lenovo V15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) V15 G2 ALC Thin and Light Lapto...',
      image: '	https://rukminim2.flixcart.com/image/312/312/xif0q/computer/b/d/i/-original-imagzhefhc84rmbf.jpeg?q=70',
      specifications:[
          'AMD Ryzen 5 Hexa Core Processor',
          '8 GB DDR4 RAM',
          'Windows 11 Operating System',
          '512 GB SSD',
          '39.62 cm (15.6 Inch) Display',
          '1 Year Onsite Warranty'

      ],
      price:34990,
      imgsrc:[
          
          'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/b/d/i/-original-imagzhefhc84rmbf.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
      ]
  },
  {
      id:2,
      name: 'ASUS Vivobook 15 Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X515EA-EJ328WS ...',
      image: '	https://rukminim2.flixcart.com/image/312/312/xif0q/computer/5/6/i/-original-imaggshd5zgfe8ev.jpeg?q=70',
      specifications:[
          'AMD Ryzen 5 Hexa Core Processor',
          '8 GB DDR4 RAM',
          'Windows 11 Operating System',
          '512 GB SSD',
          '39.62 cm (15.6 Inch) Display',
          '1 Year Onsite Warranty'

      ],
      price:34990,
      imgsrc:[
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
      ]
  },
  {
      id:3,
      name: 'HP 15s (2023) Ryzen 3 Dual Core 3250U - (8 GB/512 GB SSD/Windows 11 Home) 15s- eq1580AU Thin and Light...',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/i/j/u/-original-imaggzes4pd7ptkx.jpeg?q=70',
      specifications:[
          'AMD Ryzen 5 Hexa Core Processor',
          '8 GB DDR4 RAM',
          'Windows 11 Operating System',
          '512 GB SSD',
          '39.62 cm (15.6 Inch) Display',
          '1 Year Onsite Warranty'

      ],
      price:34990,
      imgsrc:[
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
      ]
  },
  {
      id:4,
      name: 'DELL Inspiron Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) Inspiron 3511 Thin and Light Laptop',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70',
      specifications:[
          'AMD Ryzen 5 Hexa Core Processor',
          '8 GB DDR4 RAM',
          'Windows 11 Operating System',
          '512 GB SSD',
          '39.62 cm (15.6 Inch) Display',
          '1 Year Onsite Warranty'

      ],
      price:34990,
      imgsrc:[
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
      ]
  },
  {
      id:5,
      name: 'Lenovo V15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) V15 G2 ALC Thin and Light Lapto...',
      image: '	https://rukminim2.flixcart.com/image/312/312/xif0q/computer/5/6/i/-original-imaggshd5zgfe8ev.jpeg?q=70',
      specifications:[
          'AMD Ryzen 5 Hexa Core Processor',
          '8 GB DDR4 RAM',
          'Windows 11 Operating System',
          '512 GB SSD',
          '39.62 cm (15.6 Inch) Display',
          '1 Year Onsite Warranty'

      ],
      price:34990,
      imgsrc:[
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
      ]
  },
  {
      id:6,
      name: 'Lenovo V15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) V15 G2 ALC Thin and Light Lapto...',
      image: '	https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/m/k/-original-imagzyfzhzcw8wvp.jpeg?q=70',
      specifications:[
          'AMD Ryzen 5 Hexa Core Processor',
          '8 GB DDR4 RAM',
          'Windows 11 Operating System',
          '512 GB SSD',
          '39.62 cm (15.6 Inch) Display',
          '1 Year Onsite Warranty'

      ],
      price:34990,
      imgsrc:[
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
      ]
  },
  {
      id:7,
      name: 'Lenovo V15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) V15 G2 ALC Thin and Light Lapto...',
      image: '	https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70',
      specifications:[
          'AMD Ryzen 5 Hexa Core Processor',
          '8 GB DDR4 RAM',
          'Windows 11 Operating System',
          '512 GB SSD',
          '39.62 cm (15.6 Inch) Display',
          '1 Year Onsite Warranty'

      ],
      price:34990,
      imgsrc:[
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
      ]
  },
  {
      id:8,
      name: 'Lenovo V15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) V15 G2 ALC Thin and Light Lapto...',
      image: '	https://rukminim2.flixcart.com/image/312/312/xif0q/computer/i/j/u/-original-imaggzes4pd7ptkx.jpeg?q=70',
      specifications:[
          'AMD Ryzen 5 Hexa Core Processor',
          '8 GB DDR4 RAM',
          'Windows 11 Operating System',
          '512 GB SSD',
          '39.62 cm (15.6 Inch) Display',
          '1 Year Onsite Warranty'

      ],
      price:34990,
      imgsrc:[
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
      ]
  },
  {
      id:9,
      name: 'Lenovo V15 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) V15 G2 ALC Thin and Light Lapto...',
      image: '	https://rukminim2.flixcart.com/image/312/312/xif0q/computer/5/6/i/-original-imaggshd5zgfe8ev.jpeg?q=70',
      specifications:[
          'AMD Ryzen 5 Hexa Core Processor',
          '8 GB DDR4 RAM',
          'Windows 11 Operating System',
          '512 GB SSD',
          '39.62 cm (15.6 Inch) Display',
          '1 Year Onsite Warranty'

      ],
      price:34990,
      imgsrc:[
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/s/q/z/-original-imagzhefwzqqdnbb.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/i/z/6/-original-imagzhefg3yfphng.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/f/h/8/-original-imagzhefqsfgbzsv.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/z/2/8/-original-imagzhefrgvy3tjy.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/computer/j/p/4/-original-imagzheffqr7a7sg.jpeg?q=70'
      ]
  }

])
  const sortProduct = (mode) => {
    if (mode === 'lowToHigh') {
        const sortedData = Product.sort((a, b) => {
            if (a.price < b.price) {
                return -1;
            } else if (a.price > b.price) {
                return 1;
            } else {
                return 0;
            } 
        });
        setProducts([...sortedData]);
    } else {
        const sortedData = Product.sort((a, b) => {
            if (a.price < b.price) {
                return 1;
            } else if (a.price > b.price) {
                return -1;
            } else {
                return 0;
            } 
        });
        setProducts([...sortedData]);
    }
};
return (
    <div>
      <div className="container">
      <div className="row">
                <div className="col-sm">
                <nav className="navbar navbar-expand-lg bg-body-tertiary mt-4">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" style={{cursor: 'pointer'}} onClick={() => sortProduct('lowToHigh')}>Price -- Low to High</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{cursor: 'pointer'}} onClick={() => sortProduct('highToLow')}>Price -- High to Low</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
            {Product.map((laptop) => (
          <div className=" row">
            <div className=" col-sm-3">
              <img src={laptop.image} width="220px" />
            </div  >
            <div className=" col-sm-5">
              <h5 className="text-primary" style={{cursor: 'pointer'}}  ><Link to={`/LaptopDetails/${laptop.id}?name=${laptop.name}&price=${laptop.price}`}>{laptop.name} </Link></h5>
              <h6>
                <b>{laptop.averageRating}</b>{" "}
                <small>
                  <small className="text-muted">averageRating</small>
                </small>
              </h6>
              <ul className="ms-4 text-muted">
                {laptop.specifications.map((specification) => (
                  <li key={specification}>{specification}</li>
                ))}
              </ul>
            </div>
            <div className=" col-sm-3">
              <h5>{laptop.price}</h5>
              <h6>
                <small>
                  <small>{laptop.delivery}</small>
                </small>
              </h6>
              <h6>
                <small>
                  <small>{laptop.Exchange}</small>
                </small>
              </h6>
              <h6 className="text-success">
                <small>
                  <small>
                    <b>{laptop.Offer}</b>
                  </small>
                </small>
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Laptop;
