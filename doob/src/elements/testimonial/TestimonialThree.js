import React from 'react';
import Slider from "react-slick";
import { slickDot } from "../../utils/script";

const TestimonialData = [
    {
        form: "Sydney",
        description: "Hype has been handling my tax return for years and delivered excellent services.",
        name: "John Wu",
        subtitle: "App Developer",
        image: "testimonial-dark-01"
    },
    {
        form: "Germany",
        description: "Hype has been handling my tax return for years and delivered excellent services.",
        name: "John Due",
        subtitle: "App Developer",
        image: "testimonial-dark-02"
    },
    {
        form: "USA",
        description: "Hype has been handling my tax return for years and delivered excellent services.",
        name: "Janen",
        subtitle: "App Developer",
        image: "testimonial-dark-03"
    },
]
const TestimonialThree = ({ teamStyle }) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <Slider className="slick-space-gutter--15 rn-slick-dot rn-slick-arrow mb--60" {...slickDot}>
                    {TestimonialData.map((data, index) => (
                        <div key={index} className={`testimonial-style-two ${teamStyle}`}>
                            <div className="row align-items-center row--20">
                                <div className="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                                    <div className="content mt_sm--40">
                                        <span className="form">{data.form}</span>
                                        <p className="description">{data.description}</p>
                                        <div className="client-info">
                                            <h4 className="title">{data.name}</h4>
                                            <h6 className="subtitle">{data.subtitle}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 order-md-2 col-lg-4 col-md-4">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`./images/testimonial/${data.image}.jpg`} alt="Corporate React Template" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
export default TestimonialThree;




















