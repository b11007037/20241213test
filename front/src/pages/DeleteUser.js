import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DeleteUser = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");

    const handleChange = (e) => {
        setUserId(e.target.value);
    };

    const handleDelete = async () => {
        if (!userId) {
            alert("Please enter a valid User ID.");
            return;
        }

        try {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/${userId}`, {
                method: "DELETE",
            });

            if (res.ok) {
                alert("User deleted successfully.");
                setUserId("");
                navigate("/", { replace: true });
            } else {
                const errorData = await res.json();
                alert(`Failed to delete user: ${errorData.message}`);
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while deleting the user.");
        }
    };

    return (
        <div style={{ maxWidth: 500, margin: "auto" }}>
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Enter User ID"
                    onChange={handleChange}
                    type="text"
                    value={userId}
                />
            </div>
            <div className="mb-3">
                <button className="btn btn-danger" onClick={handleDelete}>
                    Delete User
                </button>
            </div>
        </div>
    );
};

export default DeleteUser;