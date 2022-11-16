const SuccessModal = (props) => {
  return (
    <>
      {/* The button to open modal */}
      <label
        disabled={props.isSubmitDisabled}
        htmlFor="my-modal-6"
        onClick={props.handleSubmit}
        className="btn rounded-full bg-[#300C38] hover:bg-[#880174] border-none text-white shadow-md disabled:bg-[#300C38] disabled:opacity-50"
      >
        Submit
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle text-center">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-xl text-[#22c55e] ">
          🎊 Congratulations 🎊 <br></br>
            user was successfully created!
          </h3>
          <p className="py-4 text-[#300C38] text-lg">
            You may continue to create users!
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