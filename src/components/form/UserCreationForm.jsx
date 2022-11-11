import Button from "../button/Button";
import { useState } from "react";

const UserCreationForm = (props) => {
  const occupationElements = props.endpointData?.occupations?.map((index) => (
    <option key={index}>{index}</option>
  ));

  const stateElements = props.endpointData?.states?.map((index) => (
    <option key={index.name}>{index.name}</option>
  ));

  const handleChange = (e) => {
    const name = e.target.name; 
    const value = e.target.value;
    setUserForm({
      ...userForm,
      [name]: value
    })
  }
  const handleSubmit = () => {
    fetch(`https://frontend-take-home.fetchrewards.com/form`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userForm),
    })
    .then(res => res.json())
    .then(data => console.log(data))
  };

  const [userForm, setUserForm] = useState({
    name: "",
    occupation: "",
    state: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  
  return (
    <>
      <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-white p-7">
        <h1 className="text-4xl font-bold text-[#300C38]">
          User Creation Form
        </h1>
        <div className="card-body text-[#300C38]">
          <div className="form-control py-2">
            <input
              type="text"
              placeholder="full name"
              name="name" value={userForm.fullName}
              onChange={handleChange}
              className="input input-bordered bg-white focus:border-[#FAA916]"
            />
          </div>

          <div className="flex gap-8 py-3 focus:bg-[#FAA916]">
            <select
            name="occupation" value={userForm.occupation}
            onChange={handleChange}
            className="select select-ghost max-w-xs bg-white focus:bg-[#FAA916] focus:text-white shadow-md">
              <option>Occupation</option>
              {occupationElements}
            </select>
            <select
            name="state" value={userForm.state}
            onChange={handleChange}
            className="select select-ghost max-w-xs bg-white focus:bg-[#FAA916] focus:text-white shadow-md">
              <option>State</option>
              {stateElements}
            </select>
          </div>

          <div className="form-control py-2">
            <input
              type="email"
              placeholder="email"
              name="email" value={userForm.email}
              onChange={handleChange}
              className="input input-bordered bg-white focus:border-[#FAA916]"
            />
          </div>

          <div className="form-control py-2">
            <input
              type="password"
              placeholder="password"
              name="password" value={userForm.password}
              onChange={handleChange}
              className="input input-bordered bg-white focus:border-[#FAA916]"
            />
          </div>

          <div className="form-control py-2">
            <input
              type="password"
              placeholder="confirm password"
              name="confirmPassword" value={userForm.confirmPassword}
              onChange={handleChange}
              className="input input-bordered bg-white focus:border-[#FAA916]"
            />
          </div>

          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </>
  );
};
export default UserCreationForm;
