import { useState, useEffect } from "react";

const ViewUsers = () => {
    const [users, setUsers] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    
    const fetchUsers = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/users`, {
                method: "GET",
            });

            if (res.ok) {
                const data = await res.json();
                setUsers(data); 
            } else {
                setError("Failed to fetch users.");
            }
        } catch (err) {
            setError("An error occurred while fetching users.");
        } finally {
            setLoading(false); 
        }
    };

    
    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (error) {
        return <div style={{ color: "red" }}>{error}</div>; 
    }

    return (
        <div style={{ maxWidth: 1000, margin: "auto" }}>
            <h2>Users List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>ZIP</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Phone</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.company}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.zip}</td>
                            <td>{user.state}</td>
                            <td>{user.country}</td>
                            <td>{user.phone}</td>
                            <td>
                                {user.photo ? (
                                    <img
                                        src={`${process.env.REACT_APP_SERVER_URL}/uploads/${user.photo}`}
                                        alt="User"
                                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                    />
                                ) : (
                                    "No Photo"
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewUsers;
