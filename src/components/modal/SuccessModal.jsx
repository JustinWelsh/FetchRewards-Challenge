const SuccessModal = (props) => {
  return (
    <>
      {/* The button to open modal */}
      <label
        disabled={props.isSubmitDisabled}
        htmlFor="my-modal-6"
        onClick={props.handleSubmit}
        className="btn rounded-full bg-[#300C38] hover:bg-[#880174] border-none text-white shadow-md disabled:bg-[#300C38] disabled:opacity-50 mt-5"
      >
        Submit
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle text-center">
        <div className="modal-box bg-white border-2">
          <h3 className="font-bold text-xl text-[#22c55e] p-4">
          🎊 Congratulations! 🎊
          </h3>
          <p className="py-4 text-[#300C38] text-lg">
          User was successfully created,<br></br>you may continue to create users!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-sm rounded-full bg-[#300C38] hover:bg-[#880174] border-none text-white shadow-md disabled:bg-[#300C38] disabled:opacity-50">
              Ok
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default SuccessModal;
