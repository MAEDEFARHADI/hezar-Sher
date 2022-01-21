import React from "react";
import Slider from "react-slick";
import {routes} from "../../routing/routes";
import BoxCarousel from "../boxCarousel";
function Carousel(props) {
    const { ashaar } = props;
    const { shaer } = routes;
    var settings = {
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,

        centerMode: true,
        focusOnSelect: true ,
        responsive: [{
            breakpoint: 780,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }]
      };
    return(
        
<Slider {...settings} >
{ashaar.map((poet) => {
                            const { id, name, image } = poet;
                            return (
                                <BoxCarousel
                                    key={`poet-${name}`}
                                    title={name}
                                    imageURL={image}
                                    link={`${shaer}/${id}`}
                                />
                            );
                        })}
    </Slider>
    );

}
export default Carousel;
