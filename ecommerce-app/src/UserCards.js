
function Cards(){
    const Users=[
        {
          id: 1,
          firstName: "Terry",
          lastName: "Medhurst",
          maidenName: "Smitham",
          age: 50,
          gender: "male",
          email: "atuny0@sohu.com",
          phone: "+63 791 675 8914",
          username: "atuny0",
        },
       {
          id: 2,
          firstName: "Sheldon",
          lastName: "Quigley",
          maidenName: "Cole",
          age: 28,
          gender: "male",
          email: "hbingley1@plala.or.jp",
          phone: "+7 813 117 7139",
          username: "hbingley1",
        },
    {
          id: 3,
          firstName: "Terrill",
          lastName: "Hills",
          maidenName: "Hoeger",
          age: 38,
          gender: "male",
          email: "rshawe2@51.la",
          phone: "+63 739 292 7942",
          username: "rshawe2",
        },
        {
          id: 4,
          firstName: "Miles",
          lastName: "Cummerata",
          maidenName: "Maggio",
          age: 49,
          gender: "male",
          email: "yraigatt3@nature.com",
          phone: "+86 461 145 4186",
          username: "yraigatt3",
        },
        {
            id: 5,
            firstName: "Mavis",
            lastName: "Schultz",
            maidenName: "Yundt",
            age: 38,
            gender: "male",
            email: "kmeus4@upenn.edu",
            phone: "+372 285 771 1911",
            username: "kmeus4",
        },
        {
            id: 6,
            firstName: "Alison",
            lastName: "Reichert",
            maidenName: "Franecki",
            age: 21,
            gender: "female",
            email: "jtreleven5@nhs.uk",
            phone: "+351 527 735 3642",
            username: "jtreleven5",
        }
    ];

    return(
        <div className="container">
            
                <div className="row "  >
                {Users.map((userInfo) =>(
                  
                    <div className="col-sm-4"  >
                        <div>
                        <h3>{userInfo.id}</h3>
                        <h4>{userInfo.username}</h4>
                        <p>{userInfo.firstName}  {userInfo.lastName}</p>
                        <p>{userInfo.maidenName}</p>
                        <p>{userInfo.gender}</p>
                        <p>{userInfo.email}</p>
                        <p>{userInfo.phone}</p>



</div>

                </div>
            
            )
            )}
            </div>

        </div>
    )
}

export default Cards;