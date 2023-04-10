import ProfileImg from "../../assets/ranbir-kapoor-profile.jpg";
const Profile = () => {
  return (
    <>
      <div className="mx-[auto] px-[15px] mt-[12px]">
        <div className="flex items-center gap-[5%] sd:flex-col sd:justify-center sd:text-center max-w-[960px] mx-[auto] ">
          <div className="w-[35%] ">
            <img
              src={ProfileImg}
              className="w-full h-[auto]  rounded-[10px] shadow-[0_3px_10px_rgb(0_0_0/0.2)]"
            />
          </div>
          <div className="w-[60%]">
            <h1 className="text-[24px] text-[#343a40] font-[500] leading-[1.2] mb-[0.5rem]">
              Ranbir Kapoor
            </h1>
            <h2 className="text-[16px] text-[#6c757d] font-[500] leading-[1.2] mb-[0.5rem]">
              (CELEBRITY APPEARANCE)
            </h2>
            <h2 className="text-[14px] text-[#6c757d] font-[600] leading-[1.2] mb-[25px] ">
              Mumbai, Maharastra
            </h2>
            <button className="px-[16px] py-[8px] w-[300px] font-[700] text-[#ffffff] bg-[#ff214f] text-[15px] rounded-[15px] border-[2px] border-[#ff214f] mb-[20px] ">
              See Price And Book
            </button>
            <h6 className="">
              The 'ROCKSTAR' who is a heart throb of millions, Ranbir Kapoor is
              one of the finest actors in Bollywood and is a true versatile
              performer
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
