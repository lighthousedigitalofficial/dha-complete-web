import React from 'react';

const ComplaintForm = ({ handleSubmit, toggleComplaint, name, setName, email, setEmail, phone, setPhone, description, setDescription }) => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-green-200 p-4 rounded-lg shadow-lg mt-4 w-80 rounded-[10px]">
      <div className="flex justify-between items-center border-b border-blue-300 pb-2">
        <h2 className="text-lg font-bold text-blue-800">Submit a Complaint</h2>
        <button
          onClick={toggleComplaint}
          className="text-blue-500 hover:text-blue-800"
        >
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit} className="mt-2">
        <div className="mb-2">
          <label className="block text-sm text-blue-800">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded bg-white text-blue-800 border-blue-300 focus:bg-blue-50 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm text-green-800">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded bg-white text-green-800 border-green-300 focus:bg-green-50 focus:border-green-500"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm text-yellow-800">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded bg-white text-yellow-800 border-yellow-300 focus:bg-yellow-50 focus:border-yellow-500"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm text-red-800">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded bg-white text-red-800 border-red-300 focus:bg-red-50 focus:border-red-500"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplaintForm;