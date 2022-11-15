const Button = (props) => (
  <div className="form-control mt-6">
    <button className="btn rounded-full bg-[#300C38] hover:bg-[#880174] border-none text-white shadow-md disabled:bg-[#300C38] disabled:opacity-50" {...props}>
      {props.children}
    </button>
  </div>
);
export default Button;

// {...props} is passed to give access to other html attributes 
// i.e. Eventhandlers