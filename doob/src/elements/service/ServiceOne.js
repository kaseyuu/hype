import React from 'react';
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FiActivity />,
        title: 'TAX ADVISORY & COMPLIANCE',
        description: 'We strive to provide assistance and solutions that go beyond the traditional tax and accounting role.'
    },
    {
        icon: <FiActivity />,
        title: 'ACCOUNTING & BOOKKEEPING',
        description: 'Our accounting and bookkeeping services is focused on helping you to keep a close eye on costs and carefully manage cash flow.'
    },
    {
        icon: <FiCast />,
        title: 'BUSINESS ADVISORY',
        description: 'We work with our clients for addressing their complex business issues in order to deliver best outcomes and long-lasting results.'
    },
    {
        icon: <FiMap />,
        title: 'PAYROLL',
        description: 'Should I combine it with business advisory part?'
    },
]

const ServiceOne = ({ textAlign, serviceStyle }) => {
    return (
        <div className="row row--15 service-wrapper">
            {ServiceList.map((val, i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{ __html: val.title }}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{ __html: val.description }}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;