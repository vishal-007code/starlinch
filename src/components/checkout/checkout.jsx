import ProfileImg from "../../assets/ranbir-kapoor-profile.jpg";
const Checkout = () => {
  return (
    <>
      <div className="mx-[auto] px-[15px] mt-[12px] pt-[60px] flex max-w-[960px]">
        {/* Left Section */}
        <div className="w-[66.67%] flex-col flex justify-center">
          <div className="flex mb-[20px] items-center justify-center gap-[15px]  ">
            <img
              src={ProfileImg}
              className="w-[100px]  h-[100px] rounded-[50%] "
            />
            <h1 className="text-[1.5rem] font-[500] ">
              Ranbir <br /> Kapoor
            </h1>
          </div>
          <div className="flex gap-[15px] ">
            <strong className=" w-[40px] rounded-[50%] h-[40px] flex justify-center items-center bg-[#fc5b62] text-[#fff] ">
              ✰
            </strong>
            <h3 className=" text-[1.5rem] font-[500] flex flex-col">
              Submit Form
              <span className="text-[1.25rem] font-[500] ">Get Best Price</span>
            </h3>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-[33.33%]"></div>
      </div>
    </>
  );
};
export default Checkout;
