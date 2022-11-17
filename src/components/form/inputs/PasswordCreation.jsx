import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from "react";


const PasswordCreation = (props) => {
    const [passwordVis, setPasswordVis] = useState(false)
    const [confirmPwVis, setConfirmPwVis] = useState(false)
  return (
    <>
      <div className="form-control py-2 relative">
        <input
          type={passwordVis ? "text" : "password"}
          placeholder="password"
          name="password"
          value={props.userForm.password}
          onChange={props.handleChange}
          className="input input-bordered bg-white focus:border-[#FAA916]"
        />
        <div className="absolute right-2 top-5">
          {!passwordVis ? (
            <AiOutlineEye onClick={() => setPasswordVis(!passwordVis)} />
          ) : (
            <AiOutlineEyeInvisible onClick={() => setPasswordVis(!passwordVis)} />
          )}
        </div>

        {props.userForm.errors.password !== "" && (
          <p className="text-sm text-[#f87171] pt-2">
            {props.userForm.errors.password}
          </p>
        )}
      </div>

      <div className="form-control py-2 relative">
        <input
          type={confirmPwVis ? "text" : "password"}
          placeholder="confirm password"
          name="confirmPassword"
          value={props.userForm.confirmPassword}
          onChange={props.handleChange}
          className="input input-bordered bg-white focus:border-[#FAA916]"
        />
        <div className="absolute right-2 top-5">
          {!confirmPwVis ? (
            <AiOutlineEye onClick={() => setConfirmPwVis(!confirmPwVis)} />
          ) : (
            <AiOutlineEyeInvisible
              onClick={() => setConfirmPwVis(!confirmPwVis)}
            />
          )}
        </div>

        {props.userForm.errors.confirmPassword !== "" && (
          <p className="text-sm text-[#f87171] pt-2">
            {props.userForm.errors.confirmPassword}
          </p>
        )}
      </div>
    </>
  );
};
export default PasswordCreation;
