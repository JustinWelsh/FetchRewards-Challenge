import { BsFillCaretDownFill } from "react-icons/bs";

const Form = () => {
  return (
    <>
      <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-white p-7">
        <h1 className="text-4xl font-bold text-[#300C38]">User Creation Form</h1>
        <div className="card-body text-[#300C38]">
          <div className="form-control py-2">
            <input
              type="text"
              placeholder="full name"
              className="input input-bordered bg-white"
            />
          </div>



        <div className="flex gap-8 py-3">
            <select className="select select-ghost max-w-xs bg-white focus:bg-[#FAA916] focus:text-white shadow-md">
                <option disabled selected>Occupation</option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
            </select>
            <select className="select select-ghost max-w-xs bg-white focus:bg-[#FAA916] focus:text-white shadow-md">
                <option disabled selected>State</option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
            </select>
        </div>

          <div className="form-control py-2">
            <input
              type="email"
              placeholder="email"
              className="input input-bordered bg-white"
            />
          </div>

          <div className="form-control py-2">
            <input
              type="password"
              placeholder="password"
              className="input input-bordered bg-white"
            />
          </div>

          <div className="form-control py-2">
            <input
              type="password"
              placeholder="confirm password"
              className="input input-bordered bg-white"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn rounded-full bg-[#300C38] hover:bg-[#880174] border-none text-white shadow-md">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
