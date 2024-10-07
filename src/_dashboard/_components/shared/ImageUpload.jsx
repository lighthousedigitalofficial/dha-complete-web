import { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const ImageUpload = ({ name, label }) => {
  const { register, setValue, formState: { errors } } = useFormContext();
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedImages(files.map(file => URL.createObjectURL(file)));
    setValue(name, files);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="file"
        accept="image/*"
        multiple
        {...register(name)}
        onChange={handleImageUpload}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
      />
      {uploadedImages.length > 0 && (
        <div className="mt-2">
          {uploadedImages.map((image, index) => (
            <img key={index} src={image} alt={`Uploaded ${index}`} className="w-64 h-48 mb-2" />
          ))}
        </div>
      )}
      {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
    </div>
  );
};

ImageUpload.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ImageUpload;