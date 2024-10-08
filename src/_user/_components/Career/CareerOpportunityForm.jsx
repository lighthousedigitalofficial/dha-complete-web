import React, { useState } from "react";

const CareerOpportunityForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    position: "",
    date: "",
    qualification: "",
    resume: null,
    remarks: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.mobile) newErrors.mobile = "Mobile Number is required";
    if (!formData.position) newErrors.position = "Position is required";
    if (!formData.date) newErrors.date = "Date of Apply is required";
    if (!formData.qualification)
      newErrors.qualification = "Qualification is required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully");
      console.log(formData);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="space-4  bg-white p-5 border-2 border-gray-200 text-gray-600 rounded shadow-sm"
      >
        <h1 className="text-center text-[1.2rem] md-text-[1.8rem] mb-2 font-semibold text-brand">
          CAREER OPPORTUNITY
        </h1>
        <div>
          <label className="block font-semibold text-[.9rem] mb-2 ">
            Applicant Name*
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block font-semibold text-[.9rem] mb-2  ">
            Email*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-[.9rem] mb-2  ">
            Mobile Number*
          </label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm">{errors.mobile}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-[.9rem] mb-2  ">
            Position Applying For*
          </label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.position && (
            <p className="text-red-500 text-sm">{errors.position}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-[.9rem] mb-2  ">
            Date of Apply*
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
        </div>

        <div>
          <label className="block font-semibold text-[.9rem] mb-2  ">
            Qualification*
          </label>
          <select
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Please Select</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
          </select>
          {errors.qualification && (
            <p className="text-red-500 text-sm">{errors.qualification}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-[.9rem] mb-2  ">
            Upload Your Resume*
          </label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.resume && (
            <p className="text-red-500 text-sm">{errors.resume}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-[.9rem] mb-2  ">
            Remarks
          </label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 mt-2 bg-brand text-white font-bold rounded hover:bg-golden"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CareerOpportunityForm;
