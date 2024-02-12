import React from 'react';
import footerOne from "../../data/footer/footerOne.json";
import ScrollTop from "./ScrollTop";


const footerIntem = footerOne[0];
const footerIntemOne = footerOne[1];
const footerIntemTwo = footerOne[2];
const footerIntemThree = footerOne[3];
const footerIntemFour = footerOne[4];
const footerIntemFive = footerOne[5];

const indexOneLink = (footerIntemOne.quicklink);
const indexTwoLink = (footerIntemTwo.quicklink);
const indexThreeLink = (footerIntemThree.quicklink);

const FooterFour = () => {
    return (
        <>
            <footer className="rn-footer footer-style-default no-border">

                <div className="copyright-area copyright-style-one no-border">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="copyright-left">
                                    <ul className="ft-menu link-hover">
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms And Condition</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="copyright-right text-center text-md-end">
                                    <p className="copyright-text">© Hype Business Consulting {new Date().getFullYear()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollTop />
        </>
    )
}

export default FooterFour;
