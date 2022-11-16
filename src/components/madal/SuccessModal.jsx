const SuccessModal = (props) => {
  return (
    <>
      {/* The button to open modal */}
      <label
        // disabled={isSubmitDisabled}
        htmlFor="my-modal-6"
        onClick={props.handleSubmit}
        className="btn rounded-full bg-[#300C38] hover:bg-[#880174] border-none text-white shadow-md disabled:bg-[#300C38] disabled:opacity-50"
      >
        open modal Component
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations, user was successfully created!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Ok
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default SuccessModal;
