import React from 'react'
import SEO from "../common/SEO";
import HeaderTopNews from '../common/header/HeaderTopNews';
import HeaderOne from '../common/header/HeaderOne';
import FooterFour from '../common/footer/FooterFour';
import BrandThree from '../elements/brand/BrandThree';
import AboutFour from '../elements/about/AboutFour';
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import TeamFour from "../elements/team/TeamFour";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Separator from "../elements/separator/Separator";

const AboutUs = () => {
    return (
        <>
            <SEO title="About Us" />
            <main className="page-wrapper">
                <HeaderTopNews />
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 height-850 bg_image" data-black-overlay="7" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-12.jpg)` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner pt--80 text-center">
                                    <div>
                                        <h3 className="rn-sub-badge"><span className="theme-gradient">Our Company's About Details.</span></h3>
                                    </div>
                                    <h1 className="title display-one">We are a Business <br /> Consultant Company.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}


                {/* Start Service Area  */}
                <div className="service-area rn-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="title">WE PROVIDE
                                        HIGH-QUALITY
                                        ACCOUNTING,
                                        TAXATION AND
                                        BUSINESS
                                        CONSULTING
                                        SERVICES</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="mb--10">We are CPA qualified accountants and registered tax agents providing a range of accounting, business advisory and taxation
                                    services. Our areas of expertise spread across small to medium sized businesses, high net worth individuals, primary
                                    producers, professionals, construction and
                                    trades industry, property developers and
                                    many more.
                                    As a suburban accounting practice, the
                                    practice mainly provides compliance and
                                    consulting services to local clients with a
                                    vision to provide proactive, personalised
                                    and professional services to small to
                                    medium business owners and individuals.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}



                {/* Start Brand Area  */}
                <div className="rwt-brand-area pb--60 pt--30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt--10">
                                <BrandThree brandStyle="brand-style-2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}


                <Separator />

                <AboutFour image="./images/about/contact-image.jpg" />

                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Our Corporate Team."
                                    title="Corporate Team Member."
                                    description=""
                                />
                            </div>
                        </div>
                        <TeamFour column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-three" />
                    </div>
                </div>
                {/* End Elements Area  */}

                <FooterFour />
            </main>
        </>
    )
}

export default AboutUs;
