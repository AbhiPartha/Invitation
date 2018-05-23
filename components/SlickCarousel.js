import Slider from "react-slick";

class SlickCarousel extends React.Component {
  render() {
    var settings = {
      dots: false,
      speed: 300,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '30px',
      arrows: false,
      autoplay: true,
      variableWidth: true,
      infinite: true,
      pauseOnHover: true,
      className: "slider variable-width",
      adaptiveHeight: true,
      cssEase: 'linear'
    };

    return (
      <Slider {...settings}>
        <img src="/static/images/image1.jpg" />
        <img src="/static/images/image2.jpg" />
        <img src="/static/images/image3.jpg" />
        <img src="/static/images/image4.jpg" />
        <img src="/static/images/image5.jpg" />
        <style jsx>
        {`
            img {
                width: auto !important;
                height: 220px;
                padding: 8px;
            }
        `}
        </style>
      </Slider>
    );
  }
}

export default SlickCarousel