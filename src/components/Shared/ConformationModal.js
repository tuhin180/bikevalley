import React from "react";

const ConformationModal = ({
  title,
  message,
  closeModal,
  successAction,
  modalData,
}) => {
  return (
    <div>
      <input type="checkbox" id="conformationModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="conformationModal"
              className="btn"
            >
              Delete
            </label>
            <button onClick={closeModal} className="btn btn-error">
              cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConformationModal;
