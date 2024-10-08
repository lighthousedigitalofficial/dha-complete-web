import React from "react";

const Propertydealer = () => {
  // Data for the table
  const dealers = [
    {
      id: 1,
      agency: "I & I Builders",
      name: "Lt Col (R) Imran Gulzar",
      address:
        "Office No 4, 1st Floor, Faizan Plaza Mini Commercial Phase-7, Bahria Town Rawalpindi",
      mobile: "0333-9611715",
    },
    {
      id: 2,
      agency: "United Alliance & Builders",
      name: "Sajid Ramzan",
      address:
        "Office No 2, 1st Floor, Siddique Centre, Jinnah Avenue, Sec-J, Ph-II, DHA Islamabad",
      mobile: "0300-5100548",
    },
    {
      id: 3,
      agency: "Qazi Real Estate",
      name: "Muhammad Nasir",
      address:
        "Plaza # 39, 3rd Floor, Sector E Commercial, Ph-II, DHA Islamabad",
      mobile: "0331-9539530",
    },
    {
      id: 4,
      agency: "Abdullah Trading Co & Builders",
      name: "Ghulam Haider",
      address:
        "Plaza 36, 2nd Floor, Haq Plaza, Behind HBL Bank, Jinnah Boulevard, Sector E, Ph-II, DHA Islamabad",
      mobile: "0321-5211097",
    },
    {
      id: 5,
      agency: "Farrukh Real Estate & Builders",
      name: "Malik Wajahat Ali",
      address: "1st Floor, Plaza # 43, Sector D DHA, Ph-II, DHA Islamabad",
      mobile: "0333-5800559",
    },
    {
      id: 6,
      agency: "OK Enterprises",
      name: "Shahid Pervez Warraich",
      address:
        "Office No. 1, 2nd Floor, Plaza #5, Sector E, Main Jinnah Boulevard, DHA Phase",
      mobile: "0331/0321-5225889",
    },
    {
      id: 7,
      agency: "City Property",
      name: "Malik Muhammad Ashfaq",
      address: "City Plaza, Sector G, Tipu Boulevard, Phase II, DHA Islamabad",
      mobile: "0321-9555629",
    },
    {
      id: 8,
      agency: "Intellectual Agency",
      name: "Syed Adnan Tahir",
      address:
        "Shop No 1, Lower Ground, Shafiq Arced Plaza No 1&2, Mini Extn II, Bahria Expressway, Phase-7, Bahria Town",
      mobile: "0336-5060615",
    },
    {
      id: 9,
      agency: "Awan Properties",
      name: "Ghulam Haider Awan",
      address:
        "Capt GM Awan Arcade, Plaza # 18, Iqbal Boulevard Commercial Area, Inside Gate # 3, Sector A, Ph-II, DHA",
      mobile: "0300-5013566",
    },
    {
      id: 10,
      agency: "Al-Rasheed",
      name: "Lt Col (R) Muhammad Rasheed Minhas",
      address: "22 Shalimar Plaza, Near PC, Aziz Bhatti Road Rawalpindi",
      mobile: "0300-9547747",
    },
    {
      id: 11,
      agency: "Shua Associates",
      name: "Lt Col (R) Muhammad Siddique",
      address: "21, Shalimar Plaza, Aziz Bhatti Road Rawalpindi",
      mobile: "0321-5145504",
    },
    {
      id: 12,
      agency: "De Agency 99",
      name: "Maj (R) Javaid Iqbal",
      address:
        "Plaza No 93, 1st Floor, Iqbal Blvd, Sector D, Ph-II, DHA Islamabad",
      mobile: "0321-5554250",
    },
  ];
  return (
    <>
      <div className="bg-golden">
        <div className="p-4 flex justify-center items-center">
          <div className="text-cream   w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center p-4">
              List of Approved Property Dealers
            </h2>
            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border-cream">
                <thead>
                  <tr>
                    <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">
                      Ser
                    </th>
                    <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">
                      Agency
                    </th>
                    <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">
                      Name
                    </th>
                    <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">
                      Address
                    </th>
                    <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">
                      Mobile Number
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dealers.map((dealer, index) => (
                    <tr key={dealer.id}>
                      <td className="border border-cream px-2 py-1 text-sm md:text-base">
                        {index + 1}
                      </td>
                      <td className="border border-cream px-2 py-1 text-sm md:text-base">
                        {dealer.agency}
                      </td>
                      <td className="border border-cream px-2 py-1 text-sm md:text-base">
                        {dealer.name}
                      </td>
                      <td className="border border-cream px-2 py-1 text-sm md:text-base">
                        {dealer.address}
                      </td>
                      <td className="border border-cream px-2 py-1 text-sm md:text-base">
                        {dealer.mobile}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Propertydealer;
