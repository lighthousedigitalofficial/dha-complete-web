import React from "react";

const Solarfirms = () => {
    // Data for the table
    const dealers = [
       
        {
            id: "SC-001",
            regdno: "SC-001",
            NAMEOFFIRM: "M/S Zeal Engineering Services Pvt Ltd",
            ENGRNAME: "Salman Ali Khan",
            ADDRESS: "Opposite Amazon Mall Near DHA-2, Gate 1, Main GT Road Rawalpindi",
            CONTACTNO: "0333-5302605",
          },
          {
            id: "SC-002",
            regdno: "SC-002",
            NAMEOFFIRM: "M/S Catkin Engineering Sale & Service (Pvt) Ltd",
            ENGRNAME: "Tahir Naeem",
            ADDRESS: "Plot # 14-15, Hospital Blvd, Sector A, Phase II DHA Islamabad",
            CONTACTNO: "0321-8582889",
          },
          {
            id: "SC-003",
            regdno: "SC-003",
            NAMEOFFIRM: "M/S Progressive Ventures (SMC-Pvt) Ltd",
            ENGRNAME: "Malik Muhammad Ali",
            ADDRESS: "Office # 21, 3rd Floor, Al Anayat Plaza Mall G-11 Markaz Islamabad",
            CONTACTNO: "0321-5299660",
          },
          {
            id: "SC-004",
            regdno: "SC-004",
            NAMEOFFIRM: "Alpha Renewables (SMC-Pvt) Ltd",
            ENGRNAME: "Muhammad Junaid",
            ADDRESS: "Office No 6, Block 1-H, Moon Plaza, Markaz F-10, Islamabad",
            CONTACTNO: "0321-5017581",
          },
          {
            id: "SC-005",
            regdno: "SC-005",
            NAMEOFFIRM: "M/S Kaiynat Hitech Services",
            ENGRNAME: "Ammar Ahmad Khan",
            ADDRESS: "Shop G-09, Syed Heights, Wallayat Complex, Phase VII, Bahria Town Rawalpindi",
            CONTACTNO: "0324-3876527",
          },
          {
            id: "SC-006",
            regdno: "SC-006",
            NAMEOFFIRM: "Atlantic Solar (Pvt) Ltd",
            ENGRNAME: "Muhammad Haider Ali",
            ADDRESS: "Office No 4, 1st Floor 44 Business Junction Sector C Phase VIII, Bahria Town Rawalpindi",
            CONTACTNO: "0333-5187747",
          },
          {
            id: "SC-007",
            regdno: "SC-007",
            NAMEOFFIRM: "M/S Irek Merx",
            ENGRNAME: "Haroon Roshan Awan",
            ADDRESS: "Shop # 3, Plot # 86, I&T Centre G-8/1 Islamabad",
            CONTACTNO: "0345-5003624",
          },
          {
            id: "SC-008",
            regdno: "SC-008",
            NAMEOFFIRM: "M/S Mason 1 SMC Pvt Ltd",
            ENGRNAME: "Muhammad Uzair",
            ADDRESS: "1st Floor, J&K Building Above Askari Bank, Phase IV, Bahria Town Islamabad",
            CONTACTNO: "0312-8888412",
          },
          {
            id: "SC-010",
            regdno: "SC-010",
            NAMEOFFIRM: "Renergy Solutions Pvt Ltd",
            ENGRNAME: "Air Marshal Shahid Hamid ®",
            ADDRESS: "House # 16, Street # 85, Sector G-6/4, Embassy Road, Islamabad",
            CONTACTNO: "0300-8555873",
          },
          {
            id: "SC-011",
            regdno: "SC-011",
            NAMEOFFIRM: "Alnoor Traders & Noorsol",
            ENGRNAME: "Muhammad Saleh Shahbaz",
            ADDRESS: "House No 449, Street No 14, Sector B, Askari 14 Rawalpindi",
            CONTACTNO: "0337-9233489",
          },
          {
            id: "SC-012",
            regdno: "SC-012",
            NAMEOFFIRM: "M/S UB Solar & Security Solutions",
            ENGRNAME: "Umaiz Imtiaz Butt",
            ADDRESS: "Office # 4, Rauf Tower, Main GT Road, Phase II DHA Islamabad",
            CONTACTNO: "0321-5314540",
          },
          {
            id: "SC-013",
            regdno: "SC-013",
            NAMEOFFIRM: "M/S ACE Solar Energy (SMC-Pvt) Ltd",
            ENGRNAME: "Zil E Hussain",
            ADDRESS: "Office # 14, 1st floor, Golden Plaza Near Crown Plaza, Jinnah Avenue, Blue Area Islamabad",
            CONTACTNO: "0334-5555690",
          },
          {
            id: "SC-015",
            regdno: "SC-015",
            NAMEOFFIRM: "Skyelectric Pvt Ltd",
            ENGRNAME: "Waqas Akbar",
            ADDRESS: "Floor # 15, Islamabad Stock Exchange Tower, Blue Area Islamabad",
            CONTACTNO: "051-8487480, 0300-7882341",
          },
          {
            id: "SC-016",
            regdno: "SC-016",
            NAMEOFFIRM: "Ningbo Green Light Energy Pvt Ltd",
            ENGRNAME: "Muhammad Qasim",
            ADDRESS: "Ningbo Plaza, Street # 25 Daisy Road Phase II DHA Islamabad",
            CONTACTNO: "0301-8422460",
          },
          {
            id: "SC-018",
            regdno: "SC-018",
            NAMEOFFIRM: "Quantum Engineering",
            ENGRNAME: "Ammad Ud Din",
            ADDRESS: "1st Floor, Amina Plaza, Eziline Street, Peshawar Road, Rawalpindi",
            CONTACTNO: "0333-5493767",
          },
          {
            id: "SC-019",
            regdno: "SC-019",
            NAMEOFFIRM: "M/S Enabling Solutions SMC Pvt Ltd",
            ENGRNAME: "Rehan Adnan Qureshi",
            ADDRESS: "Plot No 206, 1st Floor, Service Road East, Sector I-10/3 Islamabad",
            CONTACTNO: "0343-2224411",
          },
          {
            id: "SC-020",
            regdno: "SC-020",
            NAMEOFFIRM: "M/S Nanx Engineering (Pvt) Ltd",
            ENGRNAME: "Brig ® Adnan Siddiqui",
            ADDRESS: "Plot No 729, Street No 4/1, Block B, O-9, National Police Foundation, Off PWD Road Islamabad",
            CONTACTNO: "0333-6269801",
          },
          {
            id: "SC-022",
            regdno: "SC-022",
            NAMEOFFIRM: "M/S ATS Engineering Sales & Services",
            ENGRNAME: "Haider Nisar",
            ADDRESS: "Plot # 69, Street # 3, Main Street # 01, Industrial Area, Sector I-10/3, Islamabad",
            CONTACTNO: "0322-8555456",
          },
          {
            id: "SC-023",
            regdno: "SC-023",
            NAMEOFFIRM: "M/S Pantera Energy",
            ENGRNAME: "Farooq Saeed",
            ADDRESS: "EOBI House, Service Road South G-10/4, G-10 Markaz Islamabad",
            CONTACTNO: "0321-5711200",
          },
          {
            id: "SC-025",
            regdno: "SC-025",
            NAMEOFFIRM: "M/S Invincible Energy Pvt Ltd",
            ENGRNAME: "Danial Abdullah",
            ADDRESS: "Plaza 11-B, Second floor, Plot 116, Main PWD Road Islamabad",
            CONTACTNO: "0344-9555881",
          },
          {
            id: "SC-027",
            regdno: "SC-027",
            NAMEOFFIRM: "M/S Alternative Electric Solutions Pvt Ltd",
            ENGRNAME: "Ahmed Kamal",
            ADDRESS: "Mezzanine Floor, Plaza # 169, Near Askari Bank, Shaheen Chowk, Bahria Spring Phase VII, Rawalpindi",
            CONTACTNO: "0334-5559187",
          },
          {
            id: "SC-030",
            regdno: "SC-030",
            NAMEOFFIRM: "M/S Sunpredators Private Limited",
            ENGRNAME: "Aabish Nusrat",
            ADDRESS: "28-A Pine Complex, Iftikhar Janjua Road Rawalpindi",
            CONTACTNO: "0307-1438645",
          },
          {
            id: "SC-031",
            regdno: "SC-031",
            NAMEOFFIRM: "M/S Radiance Tek Engineering (Private) Limited",
            ENGRNAME: "Sajid Ali Khan",
            ADDRESS: "2F, 30 Giga Down Ton, W-4, Sector-A DHA Phase 2, Islamabad",
            CONTACTNO: "0300-5007116",
          },
          {
            id: "SC-032",
            regdno: "SC-032",
            NAMEOFFIRM: "M/S The Hyper Technologies",
            ENGRNAME: "Haris Fayyaz",
            ADDRESS: "Office 1 & 2, Lower Ground, Al Moiz Plaza, Street # 14, Faisal Book Service Road, near Executive Block, Gulberg Greens, Islamabad",
            CONTACTNO: "0345-5516723",
          },
          {
            id: "SC-033",
            regdno: "SC-033",
            NAMEOFFIRM: "M/S Arista Solution",
            ENGRNAME: "Muhammad Hamza",
            ADDRESS: "Office-10-14, Sunrise Arcade, Phase II, Main GT Road Islamabad",
            CONTACTNO: "0311-0111176",
          }      
    ];    

  return (
    <>
      <div className="bg-golden">
        {/* <div className="bg-[#020202] flex text-center justify-center p-5">
          <h1 className="text-cream text-3xl font-bold">Solar Firms</h1>
        </div> */}
        <div className="p-4 mt-5 flex justify-center items-center">
          <div className="text-cream rounded-lg  w-full lg:max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center p-4">
            LIST OF SOLAR FIRMs - DHA ISLAMABAD - FOR THE YEAR 2024
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
                    REGD NO
                    </th>
                    <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">
                    NAME OF FIRM
                    </th>
                    <th className="border border-cream px-2 py-1 text-left text-sm md:text-base">
                    ENGR NAME
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
                        {dealer.ENGRNAME}
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

export default Solarfirms;



