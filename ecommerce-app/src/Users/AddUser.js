import React, { useContext, useState } from 'react';
import { UserContext } from "./UserContext";
import { ToastContainer, toast } from 'react-toastify';

function AddUser() {
    const [userInfo, SetUserInfo] = useState({
        name: '',
        username: '',
        mobile: '',
        address: {
            street: '',
        },
        company: {
            name: ''

        }
    });

    const { userActions } = useContext(UserContext);

    const adduser = () => {
        userActions('add', userInfo);
        SetUserInfo({
            name: '',
            username: '',
            mobile: '',
            address: {
                street: '',
            },
            company: {
                name: ''

            }
        });
        toast.success('User added Succesfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    };

    const onFormfieldChange = (formfield, value) => {
        if (formfield === "address") {
            SetUserInfo({ ...userInfo, address: { street: value } })
        } else if (formfield === 'company') {
            SetUserInfo({ ...userInfo, company: { name: value } })
        } else {
            SetUserInfo({ ...userInfo, [formfield]: value })
        }
    };

    return (
        <div className="col-sm">
            <h2>Add User</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" value={userInfo.name} onChange={(event) => onFormfieldChange('name', event.target.value)} placeholder="Enter Name" />
            </div>

            <div className="mb-3">
                <label htmlFor="username" className="form-label">UserName</label>
                <input type="text" className="form-control" id="username" value={userInfo.username} onChange={(event) => onFormfieldChange('username', event.target.value)} placeholder="Enter UserName" />
            </div>

            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" value={userInfo.address.street} onChange={(event) => onFormfieldChange('address', event.target.value)} placeholder="Enter Address" />
            </div>

            <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Phone no</label>
                <input type="text" className="form-control" id="mobile" value={userInfo.mobile} onChange={(event) => onFormfieldChange('mobile', event.target.value)} placeholder="Enter Phone number" />
            </div>

            <div className="mb-3">
                <label htmlFor="company" className="form-label">Company Name</label>
                <input type="text" className="form-control" id="company" value={userInfo.company.name} onChange={(event) => onFormfieldChange('company', event.target.value)} placeholder="Enter Company Name" />
            </div>

            <button className="btn btn-success" onClick={adduser}>Save</button>

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
                theme="light"
            />


        </div>
    )
}

export default AddUser;