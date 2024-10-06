import React from "react";

const ArchitectsTable = () => {
    // Data for the table
    const dealers = [
      {
        id: 1,
        regdno: 101,
        NAMEOFFIRM: "M/S Bayar Khizar",
        ARCHITECTNAME: "Bayar Khizar",
        ADDRESS: "Office no 85, 2nd Floor, Mobee Plaza, Hyder Road, Rawalpindi",
        CONTACTNO: "051-5110725, 03015555375",
      },
      {
        id: 2,
        regdno: 110,
        NAMEOFFIRM: "M/S Naila Associates",
        ARCHITECTNAME: "Naila Haroon",
        ADDRESS: "House # 18, St # 9, Sector-H, Phase-II DHA Islamabad",
        CONTACTNO: "051-5800230, 0302-8554494",
      },
      {
        id: 3,
        regdno: 114,
        NAMEOFFIRM: "M/S Sohail A Khan Associates",
        ARCHITECTNAME: "Shazia Qureshi",
        ADDRESS: "House No 159, Street No 4, Race Course Rd Rawalpindi",
        CONTACTNO: "051-5174329, 0300-8503286",
      },
      {
        id: 4,
        regdno: 115,
        NAMEOFFIRM: "M/S Farooq Architectural Consultancy",
        ARCHITECTNAME: "Farooq Ahmed",
        ADDRESS: "1st Floor H&H-1 Centre River Gardens Housing Scheme Islamabad Express Way Islamabad",
        CONTACTNO: "0333-5169304",
      },
      {
        id: 5,
        regdno: 121,
        NAMEOFFIRM: "M/s Progressive Engineering Services",
        ARCHITECTNAME: "Waseem Ehsan",
        ADDRESS: "Office No 03, 2nd Floor, Cantt Plaza Chaklala Scheme III, Rawalpindi",
        CONTACTNO: "051-5173700, 0300-9553671",
      },
      {
        id: 6,
        regdno: 123,
        NAMEOFFIRM: "M/S Arshad Design Commune",
        ARCHITECTNAME: "Arshad Muhammad Nasir",
        ADDRESS: "2nd Floor, 62/2, (Atalian Shoes Building), Bank Road, Rawalpindi Cantt",
        CONTACTNO: "051-5586431, 0300-5350380",
      },
      {
        id: 7,
        regdno: 125,
        NAMEOFFIRM: "M/S Abbasy & Associates",
        ARCHITECTNAME: "Syed Sukrat",
        ADDRESS: "Office No 1, 4th Floor, Plot No 41, Awan Icon Arcade Plaza, Midway Commercial, Phase-7, Bahria Town, Rawalpindi",
        CONTACTNO: "051-5172018, 0300-8525508",
      },
      {
        id: 8,
        regdno: 130,
        NAMEOFFIRM: "M/s Tariq & Saad Associates",
        ARCHITECTNAME: "Mariah Nawaz",
        ADDRESS: "55/1, 1st floor Grindlay's Market Bank Road Rawalpindi Cantt",
        CONTACTNO: "051-5792564, 0334-5133007",
      },
      {
        id: 9,
        regdno: 134,
        NAMEOFFIRM: "M/S Seema Andleeb",
        ARCHITECTNAME: "Seema Andleeb",
        ADDRESS: "Suit # 04, Lower Ground, Al Anayat Mall, G-11 Markaz Islamabad",
        CONTACTNO: "051-2300016, 0300-5239983",
      },
      {
        id: 10,
        regdno: 135,
        NAMEOFFIRM: "M/S Ahmed Zaka & Associates",
        ARCHITECTNAME: "Ahmad Zaka Qureshi",
        ADDRESS: "Suite 4-C, 4th Floor, TaaSEEN Complex, Block B, Civic Centre Phase IV Bahria Town Rawalpindi",
        CONTACTNO: "92-51-5733130, 0321-5225522",
      },
      {
        id: 12,
        regdno: 141,
        NAMEOFFIRM: "M/S EDMS (Pvt) Limited",
        ARCHITECTNAME: "M. Asif Nadeem",
        ADDRESS: "Flat No 01, Amjad Arcade, Street No. 4 Gulraiz Phase-II, Commercial, Rawalpindi",
        CONTACTNO: "051-5509768, 0300-5515851",
      },
      {
        id: 13,
        regdno: 148,
        NAMEOFFIRM: "M/S Design Tech",
        ARCHITECTNAME: "Iftikhar Ahmed",
        ADDRESS: "Suite # 101, 1st Floor, Royal Centre, Fazal-e-Haq Road, Blue Area Islamabad",
        CONTACTNO: "0334-5291224, 051-2348449-50",
      },
      {
        id: 14,
        regdno: 151,
        NAMEOFFIRM: "M/S Banday’s Archasia",
        ARCHITECTNAME: "Mian Muhammad Asim",
        ADDRESS: "H-34, Atta ul Haq Road, Westeridge-1, Rawalpindi Cantt",
        CONTACTNO: "051-7133035, 0300-5013539",
      },
      {
        id: 15,
        regdno: 159,
        NAMEOFFIRM: "M/S Jamshaid Khan & Associates",
        ARCHITECTNAME: "Jamshaid Ahmad Khan",
        ADDRESS: "House No 8, Rd, E Block -C Naval Anchorage Islamabad",
        CONTACTNO: "051-8445999, 0321-6155999",
      },
      {
        id: 16,
        regdno: 160,
        NAMEOFFIRM: "M/S Ahmad Riaz & Associates",
        ARCHITECTNAME: "Ahmad Riaz",
        ADDRESS: "84-Peshawar Road, Rawalpindi Cantt",
        CONTACTNO: "051-5567685, 0300-8567040",
      },
      {
        id: 17,
        regdno: 164,
        NAMEOFFIRM: "M/S U. Con",
        ARCHITECTNAME: "Muhammad Afzal Rao",
        ADDRESS: "House No 97, Street No 77, Services Cooperative Housing Society E-11/2 Islamabad",
        CONTACTNO: "0333-5225525",
      },
      {
        id: 18,
        regdno: 167,
        NAMEOFFIRM: "M/S Artificers Associate",
        ARCHITECTNAME: "Shahid Yousaf",
        ADDRESS: "Office # 103, Al-Ahmed Heights, Sector A Opp Lignum Tower, Al-Ghurair Giga, DHA Phase-2 Main GT Road Islamabad",
        CONTACTNO: "051-4494811, 0322-5006009",
      },
      {
        id: 19,
        regdno: 168,
        NAMEOFFIRM: "M/S Architectural & Civil Engineering Services (ACES)",
        ARCHITECTNAME: "Mahnoor Shehzad",
        ADDRESS: "2nd Floor, Saffari Commercial Complex, Saffari Villas-2,Phase-VII, Baheria Town Rawal Pindi",
        CONTACTNO: "051-5707345-6, 0321-5302743",
      },
      {
        id: 20,
        regdno: 175,
        NAMEOFFIRM: "M/S Bukhari Associate",
        ARCHITECTNAME: "Zafar Iqbal",
        ADDRESS: "1st Floor # 101 Sector CBD North, Mohsin Arcade, Opposite Bahria Head Office (new) Phase 8, Rawalpindi/Islamabad",
        CONTACTNO: "0331-5023454, 0333-5543799",
      },
      {
        id: 21,
        regdno: 179,
        NAMEOFFIRM: "M/S A.N Associates",
        ARCHITECTNAME: "Syed Karrar Kazim",
        ADDRESS: "18/62, Rafique Center, 1st Floor, Adamjee Road, Saddar, Rawalpindi",
        CONTACTNO: "0333-5616565",
      },
      {
        id: 22,
        regdno: 180,
        NAMEOFFIRM: "M/S Montage Design Build",
        ARCHITECTNAME: "Sadia Hayat",
        ADDRESS: "3A, Street No. 70, F-8/3 Islamabad",
        CONTACTNO: "0346-8505408, 0344-5900422",
      },
      {
        id: 23,
        regdno: 181,
        NAMEOFFIRM: "M/S Naveed Consultants",
        ARCHITECTNAME: "Amna Naveed",
        ADDRESS: "Office No 7, Mezanine Floor, Prism Arcade-1, Phase-7, Bahria Town Rawalpindi",
        CONTACTNO: "0305-5559804",
      },
      {
        id: 24,
        regdno: 183,
        NAMEOFFIRM: "M/S Qadri Associates",
        ARCHITECTNAME: "Ejaz Ahmed Qadri",
        ADDRESS: "3-C Basement Floor, Street # 65, Muslim Market, Sector F-10/3 Islamabad",
        CONTACTNO: "051-2370030, 0300-8388810",
      },
      {
        id: 25,
        regdno: 184,
        NAMEOFFIRM: "Adil Yousaf + Associates",
        ARCHITECTNAME: "Adil Yusaf",
        ADDRESS: "Suit 112, First Floor, Alladin Apartment, G-11/3 Islamabad",
        CONTACTNO: "0300-5002280",
      },
      {
        id: 26,
        regdno: 186,
        NAMEOFFIRM: "M/S Themez",
        ARCHITECTNAME: "Malik Asmat Hayat",
        ADDRESS: "Office No 7, 2nd Floor, Prism Arcade 1 Phase 7, Bahria Town Rawalpindi",
        CONTACTNO: "0305-5559802",
      },
      {
        id: 27,
        regdno: 187,
        NAMEOFFIRM: "M/S Graffitec Design and Consultancy Office",
        ARCHITECTNAME: "Muhammad Anwar Khalil",
        ADDRESS: "House No 216 (Basement), Street No 74, Sector I-8/3, Islamabad",
        CONTACTNO: "0321-5371557",
      },
      {
        id: 28,
        regdno: 192,
        NAMEOFFIRM: "M/S Javed Bros",
        ARCHITECTNAME: "Javed Akhtar",
        ADDRESS: "House # 101-A, St # 6, Gulraiz Housing Scheme, Phase III, High Court Road Rawalpindi",
        CONTACTNO: "0321-5151816",
      },
      {
        id: 29,
        regdno: 196,
        NAMEOFFIRM: "M/S Mariam Sher Associates",
        ARCHITECTNAME: "Mariam Sher Muhammad",
        ADDRESS: "Taamer Plaza, 12 Hospital Blvd, Sector A, Behind Attock Fuel Station, DHA-2 Islamabad",
        CONTACTNO: "051-4918105-6, 0321-5011277",
      },
      {
        id: 30,
        regdno: 200,
        NAMEOFFIRM: "M/S Asad Rafeek & Architects",
        ARCHITECTNAME: "Assad Rafique",
        ADDRESS: "Plaza 55, Street No 8, Walayat Complex, Bahria Phase 7, Islamabad",
        CONTACTNO: "051-5709472-3, 0333-4216119",
      }
      
      
    ];
  
    

  return (
    <>
      <div className="bg-golden">
        <div className="p-4 flex justify-center items-center">
          <div className="text-cream   w-full lg:max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center p-4">
            LIST OF ARCHITECTS - DHA ISLAMABAD - FOR THE YEAR 2024
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
                    ARCHITECT NAME
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
                        {dealer.ARCHITECTNAME}
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

export default ArchitectsTable;



