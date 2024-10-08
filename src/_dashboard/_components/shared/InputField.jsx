import PropTypes from 'prop-types';

const InputField = ({ label, name, register, required, errors, type = 'text', errorMessage }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        {...register(name, { required: required && errorMessage })}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-200 focus:border-primary-200 sm:text-sm"
      />
      {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.object.isRequired,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default InputField;