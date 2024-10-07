import React, { useState } from 'react';

const Status = () => {
  const [status, setStatus] = useState('inactive');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleStatus = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    setStatus(prevStatus => (prevStatus === 'active' ? 'inactive' : 'active'));
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={toggleStatus}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out focus:outline-none ${status === 'active' ? 'bg-brand' : 'bg-primary'}`}
      >
        <span
          className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${status === 'active' ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-brand-light p-6 h-48 flex flex-col justify-between rounded shadow-lg">
            <h2 className="text-xl mb-4">Confirm Status Change</h2>
            <p>Are you sure you want to change the status to {status === 'active' ? 'inactive' : 'active'}?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleModalClose}
                className="bg-primary hover:bg-primary-light text-primary-dark font-bold py-2 px-4 rounded mr-2"
              >
                No
              </button>
              <button
                onClick={handleConfirm}
                className="bg-brand hover:bg-brand-dark text-white font-bold py-2 px-4 rounded"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Status;