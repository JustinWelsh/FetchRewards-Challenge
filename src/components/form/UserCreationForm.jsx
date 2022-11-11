import Button from "../button/Button";
import { useState } from "react";

const UserCreationForm = (props) => {
  const occupationElements = props.endpointData?.occupations?.map((index) => (
    <option key={index}>{index}</option>
  ));

  const stateElements = props.endpointData?.states?.map((index) => (
    <option key={index.name}>{index.name}</option>
  ));
  const [userForm, setUserForm] = useState({
    fullName: "",
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
              className="input input-bordered bg-white focus:border-[#FAA916]"
            />
          </div>

          <div className="flex gap-8 py-3 focus:bg-[#FAA916]">
            <select className="select select-ghost max-w-xs bg-white focus:bg-[#FAA916] focus:text-white shadow-md">
              <option disabled selected>
                Occupation
              </option>
              {occupationElements}
            </select>
            <select className="select select-ghost max-w-xs bg-white focus:bg-[#FAA916] focus:text-white shadow-md">
              <option disabled selected>
                State
              </option>
              {stateElements}
            </select>
          </div>

          <div className="form-control py-2">
            <input
              type="email"
              placeholder="email"
              className="input input-bordered bg-white focus:border-[#FAA916]"
            />
          </div>

          <div className="form-control py-2">
            <input
              type="password"
              placeholder="password"
              className="input input-bordered bg-white focus:border-[#FAA916]"
            />
          </div>

          <div className="form-control py-2">
            <input
              type="password"
              placeholder="confirm password"
              className="input input-bordered bg-white focus:border-[#FAA916]"
            />
          </div>

          <Button>Submit</Button>
        </div>
      </div>
    </>
  );
};
export default UserCreationForm;
