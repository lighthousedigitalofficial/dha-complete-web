


import React from "react";

const Structuralengineers = () => {
    // Data for the table
    const dealers = [
        {
            id: "SE-0212",
            regdno: "SE-0212",
            NAMEOFFIRM: "M/s Graffitec Design and Consultancy Office",
            STRENGRNAME: "Saeed Ullah Khan Bangash",
            ADDRESS: "House No 216 (Basement), Street No 74, Sector I-8/3, Islamabad",
            CONTACTNO: "0321-5371557",
          },
          {
            id: "SE-0213",
            regdno: "SE-0213",
            NAMEOFFIRM: "M/s Bukhari Associates",
            STRENGRNAME: "Syed Iqbal Hussain Bukhari",
            ADDRESS: "1st Floor # 101 Sector CBD North, Mohsin Arcade, Opposite Bahria Head Office (new) Phase 8, Rawalpindi /Islamabad",
            CONTACTNO: "051-5179762, 0300-6340094",
          },
          {
            id: "SE-0215",
            regdno: "SE-0215",
            NAMEOFFIRM: "M/s EDMS (Pvt) Limited",
            STRENGRNAME: "Mr Aftab Nadir",
            ADDRESS: "Flat # 1, Amjad Arcade, Street # 4, Gulraiz Phase-III Commercial Rawalpindi",
            CONTACTNO: "051-5509768, 0333-5172105",
          },
          {
            id: "SE-0216",
            regdno: "SE-0216",
            NAMEOFFIRM: "M/s Professional Engineering Services",
            STRENGRNAME: "Sajid Hussain",
            ADDRESS: "P.O.Box 891, GPO, Rawalpindi",
            CONTACTNO: "0300-5149113",
          },
          {
            id: "SE-0220",
            regdno: "SE-0220",
            NAMEOFFIRM: "M/s A.N. Associates",
            STRENGRNAME: "Mr Karamat Ali",
            ADDRESS: "Office # 18/62, Rafique Centre, 1st Floor Adam Jee Rd, Saddar Rawalpindi",
            CONTACTNO: "051-5529849, 0300-8554680",
          },
          {
            id: "SE-0221",
            regdno: "SE-0221",
            NAMEOFFIRM: "M/s Abdul Naseem",
            STRENGRNAME: "Abdul Naseem",
            ADDRESS: "17, Main Double Road, 786, G-13/4, Islamabad",
            CONTACTNO: "051-2154726, 0333-5259694",
          },
          {
            id: "SE-0222",
            regdno: "SE-0222",
            NAMEOFFIRM: "M/s Muhammad Idrees Associates",
            STRENGRNAME: "Mr Muhammad Idress",
            ADDRESS: "11,First Floor, Asim Center, Opposite Benazir Hospital Murree Road, Rawalpindi",
            CONTACTNO: "051-4907006, 0300-9555748",
          },
          {
            id: "SE-0223",
            regdno: "SE-0223",
            NAMEOFFIRM: "M/s ACES (Geo)",
            STRENGRNAME: "Dr. M. Khaliq-ur-Rashid Kayani",
            ADDRESS: "2nd Floor, Saffari Commercial Complex, Saffari, Villas-2, Phase-VII, Bahria Town Rawal Pindi",
            CONTACTNO: "051-5707345-6, 0321-5140000",
          },
          {
            id: "SE-0229",
            regdno: "SE-0229",
            NAMEOFFIRM: "M/s Khalid M. Consulting Engineer",
            STRENGRNAME: "Khalid Mehmood",
            ADDRESS: "Flat D17/6, Yousaf Colony Westridge-III Rawalpindi Cantt",
            CONTACTNO: "0321-4904988",
          },
          {
            id: "SE-0230",
            regdno: "SE-0230",
            NAMEOFFIRM: "M/s Abbasy & Associates",
            STRENGRNAME: "Mr Habib Ur Rehman",
            ADDRESS: "Office No 1, 4th Floor, Plot No 41, Awan Icon Arcade Plaza, Midway Commercial, Phase-7, Bahria Town, Rawalpindi",
            CONTACTNO: "051-5172018, 0300-8525508",
          },
          {
            id: "SE-0231",
            regdno: "SE-0231",
            NAMEOFFIRM: "M/s Malik Associates",
            STRENGRNAME: "Nasir Ud Din",
            ADDRESS: "Office # 10, Second Floor Royal Plaza 6th Road Satellite Town Rawalpindi",
            CONTACTNO: "051-4419660, 0323-5148306",
          },
          {
            id: "SE-0234",
            regdno: "SE-0234",
            NAMEOFFIRM: "M/s Banday’s Arch Asia",
            STRENGRNAME: "Mr. M. Asif",
            ADDRESS: "H # 34, Atta Ul Haq Road, Westridge-1 Rawalpindi Cantt",
            CONTACTNO: "051-7133035, 0300-9568856",
          },
          {
            id: "SE-0238",
            regdno: "SE-0238",
            NAMEOFFIRM: "M/s Qadri Associates",
            STRENGRNAME: "Shahzad Ahmad Qadri",
            ADDRESS: "3-C Basement Floor, Street # 65, Muslim Market, Sector F-10/3 Islamabad",
            CONTACTNO: "051-2370030, 0300-8388810",
          },
          {
            id: "SE-0248",
            regdno: "SE-0248",
            NAMEOFFIRM: "M/s H&H Civil Design Consultant",
            STRENGRNAME: "Mr. Abid Hussain",
            ADDRESS: "House No 458, Street NO 10, Sector A, Askari-14, Rawalpindi",
            CONTACTNO: "0334-5585458",
          },
          {
            id: "SE-0249",
            regdno: "SE-0249",
            NAMEOFFIRM: "M/s Muhammad Sohail",
            STRENGRNAME: "Muhammad Sohail",
            ADDRESS: "Office # 25, 3rd Floor, Gulberg Trade Centre Business Park, Gulberg Greens, Islamabad",
            CONTACTNO: "0331-5588851",
          },
          {
            id: "SE-0254",
            regdno: "SE-0254",
            NAMEOFFIRM: "M/s Umair Majeed",
            STRENGRNAME: "Umair Majeed",
            ADDRESS: "Office No-S-116,117,118,119 Second Floor City Centre Bank Road Saddar Rawalpindi",
            CONTACTNO: "0332-5056097",
          },
          {
            id: "SE-0256",
            regdno: "SE-0256",
            NAMEOFFIRM: "M/s ZAK Consulting Engr",
            STRENGRNAME: "M. Bilal Rana",
            ADDRESS: "Suite - 407, 4th Floor, Tariq Heights, Street 73, F-11/1, Islamabad",
            CONTACTNO: "0332-5109821",
          },
          {
            id: "SE-0260",
            regdno: "SE-0260",
            NAMEOFFIRM: "M/s ZAC Engineers",
            STRENGRNAME: "Dr Zeshan Alam",
            ADDRESS: "G3/G4, Anwar Plaza, Bolan Road Soan Garden, Islamabad",
            CONTACTNO: "0333-8555086",
          },
          {
            id: "SE-0261",
            regdno: "SE-0261",
            NAMEOFFIRM: "M/s Design Align",
            STRENGRNAME: "Ehab Ali Sarwar",
            ADDRESS: "House # 20-G, Street #10, Sector F-8/3, Islamabad",
            CONTACTNO: "051-8317519, 0333-5174576",
          },
          {
            id: "SE-0262",
            regdno: "SE-0262",
            NAMEOFFIRM: "M/s MASNOMIK CONSULT",
            STRENGRNAME: "Mumtaz Ali Memon",
            ADDRESS: "House # 9, St # 10, Block F, Naval Anchorage, Zone V Islamabad",
            CONTACTNO: "051-8739074, 0344-5586030",
          },
          {
            id: "SE-0263",
            regdno: "SE-0263",
            NAMEOFFIRM: "M/s EMARAT Design & Engineering",
            STRENGRNAME: "Waqar Saleem",
            ADDRESS: "14-C 1st Floor, Niaz Arcade, Phase 8, Abu Bkar Commercial, Bahria Town Rawalpindi",
            CONTACTNO: "051-8744487, 0331-7204875",
          },
          {
            id: "SE-0264",
            regdno: "SE-0264",
            NAMEOFFIRM: "M/s Engineering & Design Consultants",
            STRENGRNAME: "Ghazi Arsalan Ahmed",
            ADDRESS: "Office # 1&2, 1st Floor, Faizan Plaza, 27 Mini River View Commercial, Phase-VII, Bahria Town Rawalpindi",
            CONTACTNO: "0322-5118790",
          },
          {
            id: "SE-0265",
            regdno: "SE-0265",
            NAMEOFFIRM: "M/s Nafees Khan Associates",
            STRENGRNAME: "Muhammad Nafees Khan",
            ADDRESS: "25, Street 4-A, Walayat Colony, Chaklala Scheme III Rawalpindi",
            CONTACTNO: "0333-5165253",
          },
          {
            id: "SE-0266",
            regdno: "SE-0266",
            NAMEOFFIRM: "Arcadian Consultancy Services",
            STRENGRNAME: "Engr Hafiz Muhammad Awais",
            ADDRESS: "Office 201, Second Floor, Time Square Plaza, Block 4, Phase VII, Bahria Town Islamabad",
            CONTACTNO: "0312-5977739",
          },
          {
            id: "SE-0267",
            regdno: "SE-0267",
            NAMEOFFIRM: "M/s Civil Works Consultants",
            STRENGRNAME: "Asad Abbas",
            ADDRESS: "House No 8, Street No 132, G-13/4 Islamabad",
            CONTACTNO: "0336-5810866",
          }
        
      
      
    ];
  
    

  return (
    <>
      <div className="bg-golden">
        {/* <div className="bg-[#CEB682] flex text-center justify-center p-5">
          <h1 className="text-cream text-3xl font-bold">
          Structural Engineers</h1>
        </div> */}
        <div className="p-4 mt-5 flex justify-center items-center">
          <div className=" text-cream rounded-lg  w-full lg:max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center p-4">
            LIST OF STRUCTRE ENGINEERS - DHA ISLAMABAD - FOR THE YEAR 2024
            </h2>
            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-cream">
                <thead>
                  <tr>
                    <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">
                      Ser
                    </th>
                    <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">
                    REGD NO
                    </th>
                    <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">
                    NAME OF FIRM
                    </th>
                    <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">
                    STR ENGR NAME
                    </th>
                    <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">
                    ADDRESS
                    </th>
                    <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">
                    CONTACT NO
                
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
                        {dealer. regdno}
                      </td>
                      <td className="border border-cream px-2 py-1 text-sm md:text-base">
                        {dealer. NAMEOFFIRM}
                      </td>
                      <td className="border border-cream px-2 py-1 text-sm md:text-base">
                        {dealer.STRENGRNAME}
                      </td>
                      <td className="border border-cream px-2 py-1 text-sm md:text-base">
                        {dealer. ADDRESS}
                      </td>
                      <td className="border border-cream px-2 py-1 text-sm md:text-base">
                        {dealer.  CONTACTNO}
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

export default Structuralengineers;



