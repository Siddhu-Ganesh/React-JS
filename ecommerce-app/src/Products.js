import React, { useState } from 'react';
function ProductsComponent() {
    const [products, setProducts] = useState([
        {
            name: 'POCO C50 (Royal Blue, 32 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/a/x/-original-imaghmtch6qfmfxg.jpeg?q=70',
            price: 5499,
            specifications: [
                '2 GB RAM | 32 GB ROM | Expandable Upto 512 GB',
                '16.56 cm (6.52 inch) HD+ Display',
                '8MP Dual Camera | 5MP Front Camera',
                '5000 mAh Lithium Polymer Battery',
                'Mediatek Helio A22 Processor, Upto 2.0 GHz Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
            ],
            averageRating: 4.2
        },
        {
            name: 'POCO C51 (Power Black, 64 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/t/a/c51-mzb0e6din-poco-original-imagzdzzraqzsrzc.jpeg?q=70',
            price: 6499,
            specifications: [
                '2 GB RAM | 32 GB ROM | Expandable Upto 512 GB',
                '16.56 cm (6.52 inch) HD+ Display',
                '8MP Dual Camera | 5MP Front Camera',
                '5000 mAh Lithium Polymer Battery',
                'Mediatek Helio A22 Processor, Upto 2.0 GHz Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
            ],
            averageRating: 4.2
        },
        {
            name: 'POCO C55 (Cool Blue, 64 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/g/-original-imagnfzyhh8gz8sd.jpeg?q=70',
            price: 7499,
            specifications: [
                '2 GB RAM | 32 GB ROM | Expandable Upto 512 GB',
                '16.56 cm (6.52 inch) HD+ Display',
                '8MP Dual Camera | 5MP Front Camera',
                '5000 mAh Lithium Polymer Battery',
                'Mediatek Helio A22 Processor, Upto 2.0 GHz Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
            ],
            averageRating: 4.2
        },
        {
            name: 'MOTOROLA G32 (Mineral Gray, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/j/j/-original-imagnvvwvzyhfvx9.jpeg?q=70',
            price: 11999,
            specifications: [
                '2 GB RAM | 32 GB ROM | Expandable Upto 512 GB',
                '16.56 cm (6.52 inch) HD+ Display',
                '8MP Dual Camera | 5MP Front Camera',
                '5000 mAh Lithium Polymer Battery',
                'Mediatek Helio A22 Processor, Upto 2.0 GHz Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
            ],
            averageRating: 4.2
        },
        {
            name: 'REDMI 11 Prime (Peppy Purple, 128 GB)',
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/m/3/11-prime-mzb0ceoin-redmi-original-imagzqvrz4mvf6tx.jpeg?q=70',
            price: 15999,
            specifications: [
                '2 GB RAM | 32 GB ROM | Expandable Upto 512 GB',
                '16.56 cm (6.52 inch) HD+ Display',
                '8MP Dual Camera | 5MP Front Camera',
                '5000 mAh Lithium Polymer Battery',
                'Mediatek Helio A22 Processor, Upto 2.0 GHz Processor',
                '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
            ],
            averageRating: 4.2
        }
    ]);
    const sortProducts = (mode) => {
        if (mode === 'lowToHigh') {
            const sortedData = products.sort((a, b) => {
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
            const sortedData = products.sort((a, b) => {
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
        <div className="container">
            <div className="row">
                <div className="col-sm">
                <nav className="navbar navbar-expand-lg bg-body-tertiary mt-4">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" style={{cursor: 'pointer'}} onClick={() => sortProducts('lowToHigh')}>Price -- Low to High</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{cursor: 'pointer'}} onClick={() => sortProducts('highToLow')}>Price -- High to Low</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
            {products.map((product) => (
                <div className="row my-4 py-4 border-bottom" key={product.name}>
                    <div className="col-sm-3">
                        <img src={product.imgSrc} width="150px"/>
                    </div>
                    <div className="col-sm-6">
                        <h3>{product.name}</h3>
                        <ul className="ms-4">
                            {product.specifications.map(specification => (
                                <li key={specification}>{specification}</li>
                            ))}
                        </ul>
                    </div>  
                    <div className="col-sm-3">
                        <h3>{product.price}</h3>
                        <button className="btn btn-success">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsComponent;