'use client';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner from '../../../public/images/banner268.jpg'
import banner2 from '../../../public/images/Web Banner for Carousel_Revised.jpg'
import banner3 from '../../../public/images/banner216.jpg';
import newslogo from '../../../public/images/HightlightNewyellow.gif'
import '../style/home.css'
import Card from './card';
import Slide from './slider';
import Service from './service';
import LoanDetail from './loan';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,   // Show one slide at a time
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <div>
                <Slider {...settings}>
                    <div>
                        <Image className="banner-image" src={banner} alt="banner" />
                    </div>
                    <div>
                        <Image className="banner-image" src={banner2} alt="banner" />
                    </div>
                    <div>
                        <Image
                            className="banner-image" src={banner3} alt="banner" />

                        <div className='main-text'>
                            <div>
                                <h1>Financial Year : 2024-2025 No. of PMMY Loans Sanctioned - 13694536 *</h1>
                            </div>
                            <div>
                                <p>Amount Sanctioned</p> <p>137524.80 Crore</p>
                            </div>
                            <div>
                                <span>Amount Disbursed</span> <span>132405.57 Crore</span>
                            </div>
                            <div>
                                <p>*Provisional Data</p>
                                <p>Last Updated on: 23/08/2024</p>
                            </div>
                        </div>

                    </div>
                </Slider>
            </div>
            <div className='news-section'>
                <div className='container latest-flex'>
                    <div className='latest'>
                <h2>Latest News :</h2>
                </div>
                <div>
                    <marquee width="100%" direction="left">
                    <Image src={newslogo} alt="news-logo" />
                     Note: There are no agents or middleman engaged by MUDRA for availing of Mudra Loans. The borrowers are advised to keep away from persons posing as Agents/ facilitators of MUDRA/PMMY.
                    </marquee>
                </div>
                </div>
            </div>
            
            <Card/>
            <Slide/>
           <Service/>
           <LoanDetail/>
        </>
    );
};

export default Home;
