import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState();

    useEffect(()=>{
        const fetchUsers = async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/user`);
            const data = await res.json();
            setUsers(data);
        }; //宣告
        fetchUsers(); //呼叫
    },[]);

    const handleDelete = async (id) => {};

    return (
        <div>
            {users?.map( (user) => (
                <div>
                    <img src={user.avater} width={"100%"} height={200}/>
                    <div>
                      <h4>{user.name}</h4>
                      <div>
                          <Link to={`/edit/${user.id}`}>Edit</Link>
                          <button onClick={() => { handleDelete(user.id) }}></button>
                      </div>
                    </div>
                </div>
            ) )};
        </div>
    );
};

export default Home;