import { useState } from "react";
import SuccessModal from "../modal/SuccessModal";
import PasswordCreation from "./inputs/PasswordCreation";

const UserCreationForm = (props) => {

  const initialState = {
    name: "",
    occupation: "",
    state: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {
      fullName: '',
      occupation: '',
      state: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }
  const [userForm, setUserForm] = useState(initialState);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)
  const [successAlertHidden, setSuccessAlertHidden] = useState(true)

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

  const isEmpty = () => {
    if(userForm.name === '' || userForm.occupation === '' || userForm.state === '' || userForm.email === '' || userForm.password === '' || userForm.confirmPassword === '') {
      return true
    } return false
  }

  const occupationElements = props.endpointData?.occupations?.map((index) => (
    <option key={index}>{index}</option>
  ));

  const stateElements = props.endpointData?.states?.map((index) => (
    <option key={index.name}>{index.name}</option>
  ));

  const handleChange = (e) => {
    const name = e.target.name; 
    const value = e.target.value;
    let errors = userForm.errors;

    switch (name) {
      case 'name': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;

        case 'occupation': 
        errors.occupation = 
          value === '' || value === 'Occupation'
            ? 'required'
            : '';
        break;
        case 'state': 
        errors.state = 
        value === '' || value === 'State'
            ? 'required'
            : '';
        break;

      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
        case 'confirmPassword': 
        errors.confirmPassword = 
          value !== userForm.password
            ? 'Confirmation password doesn\'t match!'
            : '';
        break;
      default:
        break;
    }
    setUserForm({
      ...userForm,
      [name]: value
    })
    if(validateForm(userForm.errors) && !isEmpty()) {
      setIsSubmitDisabled(false)
    } else {
      setIsSubmitDisabled(true)
    }
  }
  const handleSubmit = () => {
    if(validateForm(userForm.errors)) {
      console.info('Valid Form')
      fetch(`https://frontend-take-home.fetchrewards.com/form`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: userForm.name,
          occupation: userForm.occupation,
          state: userForm.state,
          email: userForm.email,
          password: userForm.password,
        }),
      })
      .then(res => {
        // console.log(res)
        if (res.status === 201) {
          console.log("201 success!")
          setUserForm(initialState);
          setIsSubmitDisabled(true)
          setSuccessAlertHidden(false)
        }
      }) // if (201) => reset state | re enable submit btn | render success message.

    }else{
      console.error('Invalid Form')
      console.log(userForm.errors);
    }
  };
  
  return (
    <>
      <div className="card flex-shrink-0 w-full shadow-2xl bg-white py-7
      max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <h1 className="text-4xl font-bold text-[#300C38] text-center">
          User Creation Form
        </h1>
        <div className="card-body text-[#300C38]">
          <div className="form-control py-2">
            <input
              type="text"
              placeholder="full name"
              name="name" value={userForm.name}
              onChange={handleChange}
              className="input input-bordered bg-white focus:border-[#FAA916]"
            />
            {userForm.errors.fullName !== '' && (
              <p className="text-sm text-[#f87171] pt-2">{userForm.errors.fullName}</p>
            )}
          </div>

          <div className="lg:flex lg:gap-3 focus:bg-[#FAA916]">
            <select
            name="occupation" value={userForm.occupation}
            onChange={handleChange}
            className="select select-ghost bg-white focus:bg-[#FAA916] focus:text-white shadow-md mb-2 lg:m-0">
              <option>Occupation</option>
              {occupationElements}
            </select>

            {userForm.errors.occupation !== '' && (
              <p className="text-sm text-[#f87171] pt-2">{userForm.errors.occupation}</p>
            )}
            <select
            name="state" value={userForm.state}
            onChange={handleChange}
            className="select select-ghost bg-white focus:bg-[#FAA916] focus:text-white shadow-md mt-2 lg:m-0">
              <option>State</option>
              {stateElements}
            </select>

            {userForm.errors.state !== '' && (
              <p className="text-sm text-[#f87171] pt-2">{userForm.errors.state}</p>
            )}
          </div>

          <div className="form-control py-2">
            <input
              type="email"
              placeholder="email"
              name="email" value={userForm.email}
              onChange={handleChange}
              className="input input-bordered bg-white focus:border-[#FAA916]"
            />
            {userForm.errors.email !== '' && (
              <p className="text-sm text-[#f87171] pt-2">{userForm.errors.email}</p>
            )}
          </div>

          <PasswordCreation userForm={userForm} handleChange={handleChange} />

          <SuccessModal handleSubmit={handleSubmit} isSubmitDisabled={isSubmitDisabled} />

        </div>
      </div>
    </>
  );
};
export default UserCreationForm;
