import { useState } from "react";
import SuccessModal from "../modal/SuccessModal";
import PasswordCreation from "./inputs/PasswordCreation";

const UserCreationForm = (props) => {

  // Set initial state obj. template to make it easy to reset the "userForm" state as needed.
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

  // Email validation
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  // Form validation
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

  // To ensure entire form is filled upon submit
  const isEmpty = () => {
    if(userForm.name === '' || userForm.occupation === '' || userForm.state === '' || userForm.email === '' || userForm.password === '' || userForm.confirmPassword === '') {
      return true
    } return false
  }

  // Mapping data to display <option>
  const occupationElements = props.endpointData?.occupations?.map((index) => (
    <option key={index} value={index}>{index}</option>
  ));

  // Mapping data to display <option>
  const stateElements = props.endpointData?.states?.map((index) => (
    <option key={index.name} value={index.name}>{index.name}</option>
  ));

  const handleChange = (e) => {
    const name = e.target.name; 
    const value = e.target.value;
    let errors = userForm.errors; // variable obj. path shortcut

    // Form error condition and setting
    switch (name) {
      case 'name': 
        errors.fullName = 
          value.length < 5 // ternary condition
            ? 'Full Name must be at least 5 characters long!' //set to this
            : ''; //else, set to empty string
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
      ...userForm, // use of spread operator to copy all previous state
      // square bracket notation | computed property name
      [name]: value // change only the name that matches event.target.name (or input name) with the corresponding event.target.value
    })

    // logic for disabling submit button 
    if(validateForm(userForm.errors) && !isEmpty()) { // no errors & 
      setIsSubmitDisabled(false) // enable
    } else {
      setIsSubmitDisabled(true) // disable
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
        if (res.status === 201) {
          console.log("201 success!")
          console.log(userForm)
          setUserForm(initialState); // resetting state
          setIsSubmitDisabled(true) // re-disable submit button
        }
      })

    }else{
      console.error('Invalid Form')
      console.log(userForm.errors);
    }
  };
  
  return (
    <>
      <div className="card flex-shrink-0 w-full shadow-2xl bg-white pt-3 sm:pt-7
      max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#300C38] text-center">
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

          <div className="xl:flex lg:gap-3 focus:bg-[#FAA916]">
            <select
            name="occupation"
            onChange={handleChange}
            className="select select-ghost bg-white focus:bg-[#FAA916] focus:text-white shadow-md mb-2 lg:m-0">
              <option>Occupation</option>
              {occupationElements}
            </select>

            {userForm.errors.occupation !== '' && (
              <p className="text-sm text-[#f87171] mb-2">{userForm.errors.occupation}</p>
            )}
            <select
            name="state" value={userForm.state}
            onChange={handleChange}
            className="select select-ghost bg-white focus:bg-[#FAA916] focus:text-white shadow-md mt-2 lg:m-0">
              <option>State</option>
              {stateElements}
            </select>

            {userForm.errors.state !== '' && (
              <p className="text-sm text-[#f87171] my-2">{userForm.errors.state}</p>
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
