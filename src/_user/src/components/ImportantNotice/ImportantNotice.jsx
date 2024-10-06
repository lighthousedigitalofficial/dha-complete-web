import React from "react";

const ImportantNotice = () => {
  const imageUrls = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpg",
    "/5.webp",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpeg",
    "/10.jpg",
    "/11.jpg",
    "/12.jpg",
    "/13.jpg",
    "/14.jpg",
  ];

  return (
    <div className="bg-brand p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`img-${index}`}
            className="h-56 w-full  rounded-md object-cover object-top"
          />
        ))}
      </div>
      <div className="flex justify-center items-center py-5 text-center bg-brand">
        <h1 className="text-white w-[80vw] bg-golden text-[1.3rem] md:text-[1.8rem] font-bold">
          Important Announcement
        </h1>
      </div>
      <div className="text-gray-300 text-[1rem] md:text-[1.1rem] leading-relaxed space-y-3">
        <h1 className="text-golden text-[1rem] font-semibold">
          Dear Residents
        </h1>
        <p>
          1- DHA has hired additional tankers to meet the shortage free of cost.
        </p>
        <p>
          2- Amount is charged in monthly bills if surplus water is required.
        </p>
        <p>3- No cash is to be paid to tanker staff.</p>
        <p>
          4- It has been observed that residents launch preemptive complaints
          while they still have water in tanks.
        </p>
        <p>
          5- You can register complaints via DHA Mob Apps or by calling 1092
          directly from your cell or landline.
        </p>
        <p>6- Urgent complaints are mostly resolved the same day.</p>
        <p>7- All complaints are computerized and recorded.</p>
        <p>
          8- You can check status on your mob app in complaint history or by
          calling 1092.
        </p>
        <h1 className="text-golden text-[1rem] font-semibold">
          Regards DHAI-R
        </h1>
      </div>
    </div>
  );
};

export default ImportantNotice;
