import { BsFillCaretDownFill } from "react-icons/bs";

const Form = () => {
  return (
    <>
      <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 p-6">
        <h1 className="text-4xl font-bold">User Creation Form</h1>
        <div className="card-body">
          <div className="form-control py-2">
            <input
              type="text"
              placeholder="full name"
              className="input input-bordered"
            />
          </div>

          <div className="flex py-2">
            <div className="dropdown dropdown-left">
              <label tabIndex={0} className="btn bg-base-100 border-none">
                Occupation <BsFillCaretDownFill />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-base-300 rounded-box w-52 text-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>

            <div className="grow dropdown dropdown-right">
              <label tabIndex={0} className="btn bg-base-100 border-none">
                State <BsFillCaretDownFill />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-base-300 rounded-box w-52 text-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="form-control py-2">
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control py-2">
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>

          <div className="form-control py-2">
            <input
              type="password"
              placeholder="confirm password"
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
