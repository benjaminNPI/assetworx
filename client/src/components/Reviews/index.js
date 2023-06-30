import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Reviews = () => {
  // Mock data for customer reviews
  const reviews = [
    { id: 1, name: '-John Doe, Awardco CEO', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: '-Jane Smith', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, name: '-Alice Johnson', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 4, name: '-Bob Williams', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className='border-4 border-white rounded-[50px] bg-reviewBlue m-10'>
      <div className='uppercase mt-3 text-white text-center text-xl md:text-3xl font-bold'>What our clients say</div>
      <hr className='text-green border-t-4 rounded m-auto mx-20'></hr>
    <Slider {...settings}>
      {reviews.map(review => (
        <div key={review.id} className="text-center text-white">
          <div className='p-3 lg:p-10 text-sm sm:text-xl'>{review.review}</div>
          <div>{review.name}</div>
        </div>
      ))}
    </Slider>
    <br></br>
    <br></br>
    </div>
  );
};

export default Reviews;
