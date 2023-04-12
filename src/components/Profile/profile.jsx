import ProfileImg from "../../assets/ranbir-kapoor-profile.jpg";
import GalleryImg from "../../assets/gallery_icon.svg";
import Biography from "../../assets/biography_icon.svg";
import Performance from "../../assets/Performance_Details.svg"
import Languages from "../../assets/performance_language_v2.svg"
import Review from '../../assets/review_icon.svg'
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <div className="mx-[auto] px-[15px] mt-[12px] max-w-[960px]">
        <div className="flex items-center gap-[5%] sd:flex-col sd:justify-center sd:text-center  mb-[24px] mx-[auto] ">
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
        <div className="gallery-btn">
          <div>
            <div className="flex px-[5px] justify-around py-[10px] ">
              <img className={GalleryImg} />
              <h1 className="text-[#000] text-[14px] font-[500] ">Gallery </h1>
            </div>
          </div>
        </div>
        <div className="">
          <div className="images-container"></div>
        </div>
        <div className="flex justify-center">
          <div className=" mt-[50px] w-[300px] rounded-[15px] font-[700]  px-[16px] py-[8px] bg-[#ff214f] text-[#fff]">
            <Link to="/checkout" className="w-full">See Price And Book</Link>
          </div>
        </div>
        {/* <div class="dropdown">
          <img src={Biography} className="mr-[15px]" />
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu">
            <div className="w-full ">
              <p>
                Ranbir Kapoor is a Bollywood Superstar. A recipient of several
                accolades including five FILMFARE AWARDS, he is one of the most
                popular and highest paid celebrities in India. He is the
                grandson of well acclaimed Actor-Director Raj Kapoor and the son
                of actors Neetu Kapoor & Rishi Kapoor. At the LEE STRASBERG and
                THEATER AND FILM INSTITUTE & SCHOOL OF VISUAL ARTS, Ranbir
                pursued film-making and method acting respectively, following
                which he assisted SANJAY LEELA BHANSALI on the film BLACK
                (2005). Ranbir Kapoor kick-started his acting debut with
                Bhansali's Tragic-Romance SAAWARIYA (2007), a performance so
                ecstatic that he bagged a Filmfare Award for THE BEST MALE DEBUT
                3 hit flicks, namely Ajab Prem Ki Ghazab Kahani, Rocket
                Singh-Salesman Of The Year & Wake Up Sid earned him 3 Filmfare
                Critics Awards for Best Actor Ranbir Kapoor’s award winning
                spree was extended with 2 BEST ACTOR awards at FILMFARE with
                stellar performances in ROCKSTAR (Drama, 2011) and BARFI
                (Drama-Comedy, 2012), where he played a troubled musician and a
                deaf-mute man respectively He further proved his versatile
                acting skills by engaging the audiences in films like BOMBAY
                TALKIES (Appearance), YEH JAWAANI HAI DIWANI
                (RomanticComedy,2013) & RAJNEETI (Drama, 2010) Films aside,
                Kapoor is a stern supporter of charitable causes and
                initiatives. He happens to be the Co-Owner of the INDIAN SUPER
                LEAGUE football team, MUMBAI CITY FC and the Co-Founder of
                Picture Shuru Productions
              </p>
            </div>
          </ul>
        </div> */}
        <div className="mt-[65px] flex gap-[40px] flex-col">
          <div className="dropdown">
            <img src={Biography} className="mr-[15px]" />
            <div className="flex justify-between w-full">
              <h1 className="">Biography</h1>
              <img src="url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0) format('embedded-opentype')" />
            </div>
          </div>
          <div className="dropdown">
            <img src={Performance} className="mr-[15px]" />
            <div className="flex justify-between w-full">
              <h1 className="">Performance Details</h1>
              <img src="url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0) format('embedded-opentype')" />
            </div>
          </div>
          <div className="dropdown">
            <img src={Languages} className="mr-[15px]" />
            <div className="flex justify-between w-full">
              <h1 className="">Performance Language</h1>
              <img src="url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0) format('embedded-opentype')" />
            </div>
          </div>
          <div className="dropdown">
            <img src={Review} className="mr-[15px] w-[32px]" />
            <div className="flex justify-between w-full">
              <h1 className="">Review</h1>
              <img src="url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0) format('embedded-opentype')" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
