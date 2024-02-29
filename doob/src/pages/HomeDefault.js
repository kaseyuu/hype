import React from 'react'
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopNews from '../common/header/HeaderTopNews';
import AboutFour from '../elements/about/AboutFour';
import Copyright from '../common/footer/Copyright';
import ServiceOne from '../elements/service/ServiceOne';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


var BlogListData = BlogClassicData.slice(0, 3);


const HomeDefault = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <SEO title="Hype Business Consultant" />
            <main className="page-wrapper">
                <HeaderTopNews />
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 variation-default height-850" data-black-overlay="7">
                    <Slider {...settings}>
                        {/* Slide 1 */}
                        <div>
                            <div className="bg_image" style={{ backgroundImage: `url(./hype/home2.jpg)` }}>
                                {/* Static Content */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="inner text-center">
                                                <h1 className="title display-one">Unique Business <span>Consulting</span></h1>
                                                <p className="description">We help our clients succeed by blabla. Is it better to add a contact us button here?</p>
                                                <div className="button-group">
                                                    <Link className="btn-default btn-medium btn-border round btn-icon" to="#">Book an appointment <i className="icon"><FiArrowRight /></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slide 2 */}

                    </Slider>
                </div>
                {/* End Slider Area  */}

                <AboutFour image="./images/about/contact-image.jpg" />

                <Separator />


                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="What we can do for you"
                                    title="Services provide for you."
                                    description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                />
                            </div>
                        </div>
                        <ServiceOne
                            serviceStyle="service__style--1 bg-color-blackest radius mt--25"
                            textAlign="text-center"
                        />
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Client Feedback"
                                    title="Our Clients Feedback."
                                    description="We provide accounting and finance service for <br /> individual and company business."
                                />
                            </div>
                        </div>
                        <TestimonialThree teamStyle="" />
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />
                <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Latests News"
                                    title="Our Latest News."
                                    description="Maybe consider putting news here so we can put fancy photos on top."
                                />
                            </div>
                        </div>
                        <div className="row row--15">
                            {BlogListData.map((item) => (
                                <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 col-12 mt--30">
                                    <BlogList StyleVar="box-card-style-default" data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Start Elements Area  */}
                <div className="rwt-callto-action-area rn-section-gapBottom">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div>
                {/* End Elements Area  */}

                {/* <FooterOne /> */}
                <Copyright />

            </main>

        </>
    )
}
export default HomeDefault

