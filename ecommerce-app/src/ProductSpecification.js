import { useState } from "react";
import { useLocation } from "react-router-dom";

function Specification() {
    const [specifications, setSpecification] = useState([
        {
            id: 1,
            Specification: 
                {
                    title: 'General',

                    SalesPackage: 'Laptop, Power Adaptor, User Guide, Warranty Documents',
                    ModelNumber: 'FA506IHRZ-HN112W',
                    PartNumber: '90NR07G7-M00BT0',
                    ModelName: 'FA506IHRZ-HN112W',
                    Series: 'TUF Gaming A15',
                    Color: 'TUF Gaming A15',
                    Type: 'Gaming Laptop',
                    SuitableFor: 'Gaming',
                    PowerSupply: '150W AC Adapter',
                    BatteryCell: 3,
                    MSOfficeProvided: 'No'
                }
        },
        {
            id: 2,
            Specification: 
                {
                    title: 'General',

                    SalesPackage: 'Laptop, Power Adaptor, User Guide, Warranty Documents',
                    ModelNumber: 'FA506IHRZ-HN112W',
                    PartNumber: '90NR07G7-M00BT0',
                    ModelName: 'FA506IHRZ-HN112W',
                    Series: 'TUF Gaming A15',
                    Color: 'TUF Gaming A15',
                    Type: 'Gaming Laptop',
                    SuitableFor: 'Gaming',
                    PowerSupply: '150W AC Adapter',
                    BatteryCell: 3,
                    MSOfficeProvided: 'No'
                }
        },
        {
            id: 3,
            Specification: 
                {
                    title: 'General',

                    SalesPackage: 'Laptop, Power Adaptor, User Guide, Warranty Documents',
                    ModelNumber: 'FA506IHRZ-HN112W',
                    PartNumber: '90NR07G7-M00BT0',
                    ModelName: 'FA506IHRZ-HN112W',
                    Series: 'TUF Gaming A15',
                    Color: 'TUF Gaming A15',
                    Type: 'Gaming Laptop',
                    SuitableFor: 'Gaming',
                    PowerSupply: '150W AC Adapter',
                    BatteryCell: 3,
                    MSOfficeProvided: 'No'
                }
        },
        {
            id: 4,
            Specification: 
                {
                    title: 'General',

                    SalesPackage: 'Laptop, Power Adaptor, User Guide, Warranty Documents',
                    ModelNumber: 'FA506IHRZ-HN112W',
                    PartNumber: '90NR07G7-M00BT0',
                    ModelName: 'FA506IHRZ-HN112W',
                    Series: 'TUF Gaming A15',
                    Color: 'TUF Gaming A15',
                    Type: 'Gaming Laptop',
                    SuitableFor: 'Gaming',
                    PowerSupply: '150W AC Adapter',
                    BatteryCell: 3,
                    MSOfficeProvided: 'No'
                }
        },
        {
            id: 5,
            Specification: 
                {
                    title: 'General',

                    SalesPackage: 'Laptop, Power Adaptor, User Guide, Warranty Documents',
                    ModelNumber: 'FA506IHRZ-HN112W',
                    PartNumber: '90NR07G7-M00BT0',
                    ModelName: 'FA506IHRZ-HN112W',
                    Series: 'TUF Gaming A15',
                    Color: 'TUF Gaming A15',
                    Type: 'Gaming Laptop',
                    SuitableFor: 'Gaming',
                    PowerSupply: '150W AC Adapter',
                    BatteryCell: 3,
                    MSOfficeProvided: 'No'
                }
            
        },
        {
            id: 6,
            Specification: 
                {
                    title: 'General',

                    SalesPackage: 'Laptop, Power Adaptor, User Guide, Warranty Documents',
                    ModelNumber: 'FA506IHRZ-HN112W',
                    PartNumber: '90NR07G7-M00BT0',
                    ModelName: 'FA506IHRZ-HN112W',
                    Series: 'TUF Gaming A15',
                    Color: 'TUF Gaming A15',
                    Type: 'Gaming Laptop',
                    SuitableFor: 'Gaming',
                    PowerSupply: '150W AC Adapter',
                    BatteryCell: 3,
                    MSOfficeProvided: 'No'
                }
        },
        {
            id: 7,
            Specification: 
                {
                    title: 'General',

                    SalesPackage: 'Laptop, Power Adaptor, User Guide, Warranty Documents',
                    ModelNumber: 'FA506IHRZ-HN112W',
                    PartNumber: '90NR07G7-M00BT0',
                    ModelName: 'FA506IHRZ-HN112W',
                    Series: 'TUF Gaming A15',
                    Color: 'TUF Gaming A15',
                    Type: 'Gaming Laptop',
                    SuitableFor: 'Gaming',
                    PowerSupply: '150W AC Adapter',
                    BatteryCell: 3,
                    MSOfficeProvided: 'No'
                }
        },
        {
            id: 8,
            Specification: 
                {
                    title: 'General',

                    SalesPackage: 'Laptop, Power Adaptor, User Guide, Warranty Documents',
                    ModelNumber: 'FA506IHRZ-HN112W',
                    PartNumber: '90NR07G7-M00BT0',
                    ModelName: 'FA506IHRZ-HN112W',
                    Series: 'TUF Gaming A15',
                    Color: 'TUF Gaming A15',
                    Type: 'Gaming Laptop',
                    SuitableFor: 'Gaming',
                    PowerSupply: '150W AC Adapter',
                    BatteryCell: 3,
                    MSOfficeProvided: 'No'
                }
        },
        {
            id: 9,
            Specification: 
                {
                    title: 'General',

                    SalesPackage: 'Laptop, Power Adaptor, User Guide, Warranty Documents',
                    ModelNumber: 'FA506IHRZ-HN112W',
                    PartNumber: '90NR07G7-M00BT0',
                    ModelName: 'FA506IHRZ-HN112W',
                    Series: 'TUF Gaming A15',
                    Color: 'TUF Gaming A15',
                    Type: 'Gaming Laptop',
                    SuitableFor: 'Gaming',
                    PowerSupply: '150W AC Adapter',
                    BatteryCell: 3,
                    MSOfficeProvided: 'No'
                }
        }
    ])
    const location=useLocation()
console.log(location)

const productId=location.pathname.split("/")[2];
console.log(productId)

const selectedProduct = specifications.find(Product => Product.id == productId);
    return (
        <div className="container">
        <div className="row">
            <div className="col-sm-3">
               <h4>{selectedProduct.Specification.title}</h4>
               
            </div>
        </div>
        <div className="row my-2">
            <div className="col-sm-4 my-3">
                <p>Sales Package</p>
                <p>Model Number</p>
                <p>Part Number</p>
                <p>Model Name</p>
                <p>Series</p>
                <p>Color</p>
                <p>Type</p>
                <p>Suitable For</p>
                <p>Power Supply</p>
                <p>Battery Cell</p>
                <p>MS Office Provided</p>

            </div>
            <div className="col-sm-8 ">
                <p style={{fontSize:'small'}}>{selectedProduct.Specification.SalesPackage}</p>
                <p>{selectedProduct.Specification.ModelNumber}</p>
                <p>{selectedProduct.Specification.PartNumber}</p>
                <p>{selectedProduct.Specification.ModelName}</p>
                <p>{selectedProduct.Specification.Series}</p>
                <p>{selectedProduct.Specification.Color}</p>
                <p>{selectedProduct.Specification.Type}</p>
                <p>{selectedProduct.Specification.SuitableFor}</p>
                <p>{selectedProduct.Specification.PowerSupply}</p>
                <p>{selectedProduct.Specification.BatteryCell}</p>
                <p>{selectedProduct.Specification.MSOfficeProvided}</p>

            </div>
        </div>
        
    </div>
    )
}
export default Specification;