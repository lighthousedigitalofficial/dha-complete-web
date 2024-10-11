
const Vettingengineers = () => {
  // Data for the table
  const dealers = [
    {
      id: 1,
      regdno: "VE-2002",
      NAMEOFFIRM: "M/s Shahzad Consulting Engineers",
      NAMEofengr: "Engr. Shahzad Aslam",
      ADDRESS: "Office # 12, 3rd Floor, National Business Centre, Murree Road Rawalpindi",
      CONTACTNO: "051-4935712, 0300-8507032",
    },
    {
      id: 2,
      regdno: "VE-2003",
      NAMEOFFIRM: "M/S A.N Associates",
      NAMEofengr: "Mr. Karamat Ali",
      ADDRESS: "18/62, 1st Floor, Rafiq Center, Adamjee road, Saddar Rawalpindi.",
      CONTACTNO: "051-5529849, 0300-8554680",
    },
    {
      id: 3,
      regdno: "VE-2004",
      NAMEOFFIRM: "M/s Tariq & Saad Associates",
      NAMEofengr: "Allah Nawaz Qaisrani",
      ADDRESS: "Office No 55/1 Ist Floor Grindlays Market Bank Road Rawalpindi Cantt",
      CONTACTNO: "051-5792564-5, 0334-5133007",
    },
    {
      id: 4,
      regdno: "VE-2005",
      NAMEOFFIRM: "M/S Design Inn",
      NAMEofengr: "M Abdul Hayee",
      ADDRESS: "2nd Floor, Plot No 17-B Main Double Road PWD Society, Lohi Bher Islamabad",
      CONTACTNO: "051-2203037, 03219823259",
    },
    {
      id: 5,
      regdno: "VE-2012",
      NAMEOFFIRM: "M/s Sher Muhammad Awan",
      NAMEofengr: "Sher Muhammad Awan",
      ADDRESS: "House No. 32, Street # 7, Sector D, Phase-II, DHA, Islamabad",
      CONTACTNO: "051-2612864, 0321-5205201",
    },
    {
      id: 6,
      regdno: "VE-2013",
      NAMEOFFIRM: "M/s Faisal & Fahad Associates",
      NAMEofengr: "Mr Shahzada Faisal Naeem",
      ADDRESS: "Office No. 301, Raja Safder Arcade, Bahria Expressway, (Opposite DHA-I Bridge) Bahria Town Rawalpindi",
      CONTACTNO: "0310-9990888",
    },
    {
      id: 7,
      regdno: "VE-2014",
      NAMEOFFIRM: "M/s Civil Engineering Consulting",
      NAMEofengr: "Mansoor Khalid",
      ADDRESS: "Flat # 1, 3rd Floor, Adyala Tower, Adyala Road, Rawalpindi",
      CONTACTNO: "051-5157396, 0300-9545631",
    },
    {
      id: 8,
      regdno: "VE-2015",
      NAMEOFFIRM: "M/s ACES",
      NAMEofengr: "Mr. Shafqat Sami",
      ADDRESS: "2nd Floor, Saffari Commercial Complex, Saffari, Villas-2, Phase-VII, Bahria Town Rawal Pindi",
      CONTACTNO: "0321-5575995",
    },
    {
      id: 9,
      regdno: "VE-2018",
      NAMEOFFIRM: "M/S We Design",
      NAMEofengr: "Arshad Yaqub",
      ADDRESS: "House No-24, Street No-6, Sector D DHA Phase-1, Islamabad",
      CONTACTNO: "0332-5477881",
    },
    {
      id: 10,
      regdno: "VE-2021",
      NAMEOFFIRM: "M/S En Em Associates",
      NAMEofengr: "Nadeem Hussain Malik",
      ADDRESS: "Office 401, 4th Floor, Galaxy Plaza, 103 Block C, Business Square, Gulberg Greens, Islamabad",
      CONTACTNO: "0301-8134815",
    },
    {
      id: 11,
      regdno: "VE-2025",
      NAMEOFFIRM: "M/S Modern Consulting Engineers",
      NAMEofengr: "Muhammad Amjad Hanif",
      ADDRESS: "1st floor, River Hills – II Mini Extension 2, Phase 7, Bahria Town Rawalpindi",
      CONTACTNO: "0334-5495998",
    },
    {
      id: 12,
      regdno: "VE-2026",
      NAMEOFFIRM: "M/S Emarsons Engineering Consultants",
      NAMEofengr: "Munir Ahmed Rana",
      ADDRESS: "House # 37, Street # 5, Sector A, Zaraj Housing Scheme Islamabad",
      CONTACTNO: "0300-5270599",
    },
    {
      id: 13,
      regdno: "VE-2027",
      NAMEOFFIRM: "M/S Hafiz Abdul Aleem",
      NAMEofengr: "Hafiz Abdul Aleem",
      ADDRESS: "2nd Floor, Plaza No 17-B, Main Double Road, PWD Society, Islamabad",
      CONTACTNO: "0321-5562846",
    },
    {
      id: 14,
      regdno: "VE-2023",
      NAMEOFFIRM: "M/S Arcadian Consultancy Services",
      NAMEofengr: "Hafiz Muhammad Awais",
      ADDRESS: "Office 201, Second Floor, Time Square Plaza, Block 4, Phase VII, Bahria Town Islamabad",
      CONTACTNO: "0312-5977739",
    },
    {
      id: 15,
      regdno: "VE-2028",
      NAMEOFFIRM: "M/S City Engineering Consultants",
      NAMEofengr: "Shaukat Anwar",
      ADDRESS: "House No 13, Street No 69, Sector 1, Jinnah Garden Islamabad",
      CONTACTNO: "0333-5528249",
    },
    {
      id: 16,
      regdno: "VE-2029",
      NAMEOFFIRM: "M/S MHH Consultants",
      NAMEofengr: "Hassan Baqir",
      ADDRESS: "MZ-12, Defence Shopping Mall, DHA Main Boulevard, Lahore Cantt",
      CONTACTNO: "0331-4296240",
    }
  ];



  return (
    <>
      <div className="bg-golden">
        <div className="p-4 flex justify-center items-center">
          <div className="text-cream rounded-lg  w-full lg:max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center p-4">
              LIST OF VETTING ENGINEER - DHA ISLAMABAD - FOR THE YEAR 2024
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
                        {dealer.regdno}
                      </td>
                      <td className="border border-cream px-2 py-1 text-sm md:text-base">
                        {dealer.NAMEOFFIRM}
                      </td>
                      <td className="border border-cream px-2 py-1 text-sm md:text-base">
                        {dealer.NAMEofengr}
                      </td>
                      <td className="border border-cream px-2 py-1 text-sm md:text-base">
                        {dealer.ADDRESS}
                      </td>
                      <td className="border border-cream px-2 py-1 text-sm md:text-base">
                        {dealer.CONTACTNO}
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

export default Vettingengineers;



