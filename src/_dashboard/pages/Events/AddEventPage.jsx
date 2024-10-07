import React from 'react';
import { useForm } from 'react-hook-form';

const AddEventPage = () => {
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = async (data) => {
        console.log("Form data submitted:", data); // Log the data

        // Prepare the payload
        const payload = {
            title: data.title,             // Make sure your form has a field named 'title'
            description: data.description,  // Ensure this matches your form fields
            images: data.images             // Directly send the images array
        };

        try {
            const response = await fetch('http://localhost:5000/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload), // Send the prepared payload
            });

            if (!response.ok) {
                const errorResponse = await response.json(); // Get the error response
                throw new Error(`HTTP error! status: ${response.status} - ${errorResponse.message}`);
            }

            const result = await response.json(); // Get the success response
            console.log('Event created:', result);
        } catch (error) {
            console.error('Failed to create event:', error);
        }
    };

    // Handle input change for images
    const handleImageInput = (event) => {
        const urls = event.target.value.split(',').map(url => url.trim());
        setValue('images', urls); // Update the images array in form state
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">Event Title</label>
                <input
                    {...register("title", { required: true })} // Add validation if needed
                    placeholder="Event Title"
                />
            </div>
            <div>
                <label htmlFor="description">Event Description</label>
                <input
                    {...register("description", { required: true })} // Add validation if needed
                    placeholder="Event Description"
                />
            </div>
            <div>
                <label htmlFor="images">Image URLs (comma-separated)</label>
                <input
                    onChange={handleImageInput} // Handle change for images
                    placeholder="Image URLs (comma-separated)"
                />
            </div>
            <button type="submit">Create Event</button>
        </form>
    );
};

export default AddEventPage;

// import React from 'react';
// import { useForm } from 'react-hook-form';

// const AddEventPage = () => {
//     const { register, handleSubmit, setValue } = useForm();

//     const onSubmit = async (data) => {
//         console.log("Form data submitted:", data); // Log the data

//         // Prepare the payload
//         const payload = {
//             title: data.title,             // Make sure your form has a field named 'title'
//             description: data.description,  // Ensure this matches your form fields
//             images: data.images             // Directly send the images array
//         };

//         try {
//             const response = await fetch('http://localhost:5000/api/events', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(payload), // Send the prepared payload
//             });

//             if (!response.ok) {
//                 const errorResponse = await response.json(); // Get the error response
//                 throw new Error(`HTTP error! status: ${response.status} - ${errorResponse.message}`);
//             }

//             const result = await response.json(); // Get the success response
//             console.log('Event created:', result);
//         } catch (error) {
//             console.error('Failed to create event:', error);
//         }
//     };

//     // Handle input change for images
//     const handleImageInput = (event) => {
//         const urls = event.target.value.split(',').map(url => url.trim());
//         setValue('images', urls); // Update the images array in form state
//     };

//     return (

//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//                 <label htmlFor="title">Event Title</label>
//                 <input
//                     {...register("title", { required: true })} // Add validation if needed
//                     placeholder="Event Title"
//                 />
//             </div>
//             <div>
//                 <label htmlFor="description">Event Description</label>
//                 <input
//                     {...register("description", { required: true })} // Add validation if needed
//                     placeholder="Event Description"
//                 />
//             </div>
//             <div>
//                 <label htmlFor="images">Image URLs (comma-separated)</label>
//                 <input
//                     onChange={handleImageInput} // Handle change for images
//                     placeholder="Image URLs (comma-separated)"
//                 />
//             </div>
//             <button type="submit">Create Event</button>
//         </form>
//     );
// };

// export default AddEventPage;



