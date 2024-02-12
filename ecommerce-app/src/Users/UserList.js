import User from "./user"
import React, { useContext } from 'react';
import { UserContext } from "./UserContext";
import { ToastContainer, toast } from 'react-toastify';
function UserList() {
    const { users, userActions } = useContext(UserContext);
    console.log(users);

    const deleteuser = (id) => {
        userActions('delete', id)
        
        toast.warn('user deleted', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div className="col-sm">
            <h2>User List</h2>
            {users.map(user => (
                <div className='my-2 py-2 border-bottom'>
                    <h5>Id:{user.id}</h5>
                    <h5>Name:{user.name}</h5>
                    <h5>Username:{user.username}</h5>
                    <h5>Address:{user.address.street}</h5>
                    <h5>Phone No:{user.phone}</h5>
                    <h5>Company Name:{user.company.name}</h5>
                    <button className="btn btn-danger" onClick={() => deleteuser(user.id)}>Remove</button>
                    <ToastContainer
                        position="top-left"
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
            ))}
        </div>
    )
}
export default UserList;