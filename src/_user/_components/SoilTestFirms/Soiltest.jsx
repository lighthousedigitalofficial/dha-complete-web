import React from "react";

const Soiltest = () => {
    // Data for the table
    const dealers = [
        {
            id: 1,
            regdno: "ST-1001",
            NAMEOFFIRM: "M/S Royal Material Testing Laboratory",
            NAMEofengr: "Muhammad Waqas Liaqat Ali",
            ADDRESS: "K-83 Zafar Ul Haq Road Rawalpindi",
            CONTACTNO: "051-5506573, 0321-5201019",
        },
        {
            id: 2,
            regdno: "ST-1002",
            NAMEOFFIRM: "M/S Architectural & Civil Engg Service (ACES)",
            NAMEofengr: "Muhammad Khaliq Ur Rashid Kayani",
            ADDRESS: "2nd Floor, Saffari Commercial, Saffari Villas-2, Phase VII, Bahria Town Rawalpindi",
            CONTACTNO: "051-5707345-6",
        },
        {
            id: 3,
            regdno: "ST-1004",
            NAMEOFFIRM: "M/s Advance Soil Mat Laboratory",
            NAMEofengr: "Farooq Ahmad",
            ADDRESS: "C/O Resources Development Institute, (RDI) Complex, Kashmir/Hilal Road, Rawalpindi",
            CONTACTNO: "051-9270556, 0321-5170264",
        },
        {
            id: 4,
            regdno: "ST-1008",
            NAMEOFFIRM: "M/S CWO Materials Testing Laboratory",
            NAMEofengr: "Yasir Mehmood Ansari",
            ADDRESS: "HQ Civil Works Organization Post Box # 368 Rawalpindi",
            CONTACTNO: "0343-5590003, 051-2190410",
        },
        {
            id: 5,
            regdno: "ST-1009",
            NAMEOFFIRM: "M/S AJK Engineers (Pvt) Ltd.",
            NAMEofengr: "Arif Junaid Kareem",
            ADDRESS: "3rd Floor, 72 West Opposite Pak Saudi Tower, Blue Area Islamabad",
            CONTACTNO: "051-2803010, 0300-5009950",
        },
        {
            id: 6,
            regdno: "ST-1010",
            NAMEOFFIRM: "M/S Pearl Geo Tech",
            NAMEofengr: "Umar Saeed",
            ADDRESS: "1st Floor, Sunny Plaza, Near High Court Rawalpindi",
            CONTACTNO: "0300-5381545",
        },
        {
            id: 7,
            regdno: "ST-1014",
            NAMEOFFIRM: "M/s SWIS-TECH",
            NAMEofengr: "Rais Agha",
            ADDRESS: "Plot # A-336, Ittefaq Town, Bahadur Khan Road, Chour Depot, Peshawar Road, Rawalpindi",
            CONTACTNO: "051-5492983, 0301-5100801",
        },
        {
            id: 8,
            regdno: "ST-1015",
            NAMEOFFIRM: "M/s CTTI (FWO)",
            NAMEofengr: "Shaukat Hayat",
            ADDRESS: "CTTI (Subsidiary Org of FWO) Post Box # 145, Shaigan, Sector 1-12, Islamabad",
            CONTACTNO: "051-9278103, 0321-5188624",
        },
        {
            id: 9,
            regdno: "ST-2007",
            NAMEOFFIRM: "M/S A.N Associates",
            NAMEofengr: "Muhammad Imran",
            ADDRESS: "18/62, Rafique Center Adam Jee Road, Saddar, Rawalpindi",
            CONTACTNO: "051-5529849, 0300-8554680",
        },
        {
            id: 10,
            regdno: "ST-2011",
            NAMEOFFIRM: "M/S DD & C E-IN-C's Branch",
            NAMEofengr: "Muhammad Khashif",
            ADDRESS: "E-In-C's Branch GHQ Rawalpindi",
            CONTACTNO: "051-9271272, 0342-9594603",
        }
        
      
      
    ];
  
    

  return (
    <>
      <div className="bg-golden">
        <div className="p-4 flex justify-center items-center">
          <div className="text-cream rounded-lg  w-full lg:max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center p-4">
            LIST OF SOIL TEST ENGINEER - DHA ISLAMABAD - FOR THE YEAR 2024
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
                     NAME of Engr
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
                        {dealer.NAMEofengr}
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

export default Soiltest;



