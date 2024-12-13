import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        id: "",
        name: "",
        company: "",
        username: "",
        email: "",
        address: "",
        zip: "",
        state: "",
        country: "",
        phone: "",
        photo: "",
    });

    const handleChange = (name) => (e) => {
        const value = name === "photo" ? e.target.files[0] : e.target.value;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            let formData = new FormData();
            formData.append("id", data.id);
            formData.append("name", data.name);
            formData.append("company", data.company);
            formData.append("username", data.username);
            formData.append("email", data.email);
            formData.append("address", data.address);
            formData.append("zip", data.zip);
            formData.append("state", data.state);
            formData.append("country", data.country);
            formData.append("phone", data.phone);
            formData.append("photo", data.photo);

            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/customer`, {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                setData({
                    id: "",
                    name: "",
                    company: "",
                    username: "",
                    email: "",
                    address: "",
                    zip: "",
                    state: "",
                    country: "",
                    phone: "",
                    photo: "",
                });
                navigate("/", { replace: true });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ maxWidth: 500, margin: "auto" }}>
            <div className="mb-3">
                <input className="form-control" placeholder="Enter Customer ID" onChange={handleChange("id")} type="text" name="id" value={data.id} />
            </div>
            <div className="mb-3">
                <input className="form-control" placeholder="Enter Name" onChange={handleChange("name")} type="text" name="name" value={data.name} />
            </div>
            <div className="mb-3">
                <input className="form-control" placeholder="Enter Company" onChange={handleChange("company")} type="text" name="company" value={data.company} />
            </div>
            <div className="mb-3">
                <input className="form-control" placeholder="Enter Username" onChange={handleChange("username")} type="text" name="username" value={data.username} />
            </div>
            <div className="mb-3">
                <input className="form-control" placeholder="Enter Email" onChange={handleChange("email")} type="email" name="email" value={data.email} />
            </div>
            <div className="mb-3">
                <input className="form-control" placeholder="Enter Address" onChange={handleChange("address")} type="text" name="address" value={data.address} />
            </div>
            <div className="mb-3">
                <input className="form-control" placeholder="Enter ZIP Code" onChange={handleChange("zip")} type="text" name="zip" value={data.zip} />
            </div>
            <div className="mb-3">
                <input className="form-control" placeholder="Enter State" onChange={handleChange("state")} type="text" name="state" value={data.state} />
            </div>
            <div className="mb-3">
                <input className="form-control" placeholder="Enter Country" onChange={handleChange("country")} type="text" name="country" value={data.country} />
            </div>
            <div className="mb-3">
                <input className="form-control" placeholder="Enter Phone" onChange={handleChange("phone")} type="text" name="phone" value={data.phone} />
            </div>
            <div className="mb-3">
                <input className="form-control" type="file" name="photo" accept="image/*" onChange={handleChange("photo")} />
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default AddCustomer;