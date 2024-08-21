import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "../../../required-data/assests/image/earn.jpg"

function SliderInHome() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='w-3/4 m-auto'>
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
        <div className="row">
            <div className="col-lg-4 col-12">
                ffffffffff
            </div>
            <div className="col-lg-4 col-12">
                kkkkkkkk
            </div>

        </div>
        //   <div key={d.name} className="bg-white h-[50px] text-black rounded-xl">
        //     <div className='h-10 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
        //       <img src={d.img} alt="kkkk" className="h-10 w-10 rounded-full"/>
        //     </div>

        //     <div className="flex flex-col items-center justify-center gap-4 p-4">
        //       <p className="text-xl font-semibold">{d.name}</p>
        //       <p className="text-center">{d.review}</p>
        //       <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
        //     </div>
        //   </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: "kkkkkk",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: "kkkkkkkk",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
];

export default SliderInHome;