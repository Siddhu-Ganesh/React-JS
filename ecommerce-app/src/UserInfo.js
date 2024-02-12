
function UserInfo (){
    const userinfo={
        firstname: 'Siddhu',
        Lastname: 'Ganesh',
        contact: 9087654321,
        email: 'siddhu@gmail.com',
        Location: 'Hyderabad',
        age: '23 Y',
        gender: 'male',
        hobbies : ['reading',',','Travelling'],
        skills: ['React',',','Javascript'],
        education: 'B.Tech',
        YOP: '2021',
        experience: 'Fresher'
    };

    const getPercentage = () =>  {
        console.log("Percentage is : 90%")

    };
    const getUserInfo = (firstname) => {
        console.log(firstname);
    };

    return(
        <div>
            <h3>FirstName: {userinfo.firstname}</h3>
            <h3>Lastname: {userinfo.Lastname}</h3>
            <h3>contact: {userinfo.contact}</h3>
            <h3>email: {userinfo.email}</h3>
            <h3>Location: {userinfo.Location}</h3>
            <h3>age: {userinfo.age}</h3>
            <h3>gender: {userinfo.gender}</h3>
            <h3>hobbies: {userinfo.hobbies}</h3>
            <h3>skills: {userinfo.skills}</h3>
            <h3>education: {userinfo.education}</h3>
            <h3>YOP: {userinfo.YOP}</h3>
            <h3>experience: {userinfo.experience}</h3>
            <button onClick={getPercentage}>Click To view Percentage</button>
            <button onClick={()=>getUserInfo(userinfo.firstname)}>Click Show Info on console</button>
        </div>
    );
}

export default UserInfo;