'use client';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/slide.css';
import { MdCurrencyRupee } from "react-icons/md";

const Slide = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <h3 className='achive'>Achievements Under PMMY Since Inception</h3>
            <div className="custom-slider">
                <Slider {...settings}>
                    <div className='new-achievements'>
                        <div className='finance'>
                            <p>Financial Year :</p>
                            <p> <span style={{ marginRight: "176px" }}>:</span> 2015-2016</p>
                        </div>

                        <div className='finance'>
                            <p>No. of PMMY Loans Sanctioned :</p>
                            <p><span style={{ marginRight: "175px" }}>:</span> 34880924</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Sanctioned :</p>
                            <p><span style={{ marginRight: "100px" }}>:</span> <MdCurrencyRupee />  137449.27 Crore</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Disbursed :</p>
                            <p><span style={{ marginRight: "100px" }}>:</span> <MdCurrencyRupee /> 132954.73 Crore</p>
                        </div>
                        <p className='lastupdate'>Last Updated on: 31/03/2016</p>
                    </div>
                    <div className='second'>
                        <div className='finance'>
                            <p>Financial Year :</p>
                            <p><span style={{marginRight: "175px"}}>:</span> 2016-2017</p>
                        </div>
                        <div className='finance'>
                            <p>No. of PMMY Loans Sanctioned :</p>
                            <p><span style={{marginRight: "175px"}}>:</span> 39701047</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Sanctioned :</p>
                            <p><span style={{marginRight: "100px"}}>:</span><MdCurrencyRupee />  180528.54 Crore</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Disbursed :</p>
                            <p><span style={{marginRight: "100px"}}>:</span><MdCurrencyRupee /> 175312.13 Crore</p>
                        </div>
                        <p className='lastupdate'>Last Updated on: 31/03/2017</p>
                    </div>

                    <div className='third'>
                        <div className='finance'>
                            <p>Financial Year :</p>
                            <p><span style={{marginRight: "175px"}}>:</span> 2017-2018
                            </p>
                        </div>
                        <div className='finance'>
                            <p>No. of PMMY Loans Sanctioned :</p>
                            <p><span style={{marginRight: "175px"}}>:</span> 48130593</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Sanctioned :</p>
                            <p><span style={{marginRight: "100px"}}>:</span><MdCurrencyRupee /> 253677.10 Crore</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Disbursed :</p>
                            <p><span style={{marginRight: "100px"}}>:</span><MdCurrencyRupee /> 246437.40 Crore</p>
                        </div>
                        <p className='lastupdate'>Last Updated on: 31/03/2018</p>
                    </div>

                    <div className='forth'>

                        <div className='finance'>
                            <p>Financial Year :</p>
                            <p><span style={{marginRight: "175px"}}>:</span>2018-2019</p>
                        </div>
                        <div className='finance'>
                            <p>No. of PMMY Loans Sanctioned :</p>
                            <p><span style={{marginRight: "175px"}}>:</span> 59870318</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Sanctioned :</p>
                            <p><span style={{marginRight: "100px"}}>:</span><MdCurrencyRupee />  321722.79 Crore</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Disbursed :</p>
                            <p><span style={{marginRight: "100px"}}>:</span><MdCurrencyRupee /> 311811.38 Crore</p>
                        </div>
                        <p className='lastupdate'>Last Updated on: 31/03/2019</p>
                    </div>

                    <div className='five'>
                        <div className='finance'>
                            <p>Financial Year :</p>
                            <p><span style={{marginRight: "175px"}}>:</span>2019-2020</p>
                        </div>
                        <div className='finance'>
                            <p>No. of PMMY Loans Sanctioned :</p>
                            <p><span style={{marginRight: "175px"}}>:</span>62247606</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Sanctioned :</p>
                            <p><span style={{marginRight: "100px"}}>:</span> <MdCurrencyRupee /> 337495.53 Crore</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Disbursed :</p>
                            <p><span style={{marginRight: "100px"}}>:</span> <MdCurrencyRupee /> 329715.03 Crore</p>
                        </div>
                        <p className='lastupdate'>Last Updated on: 31/03/2020</p>
                    </div>

                    <div className='six'>
                        <div className='finance'>
                            <p>Financial Year :</p>
                            <p><span style={{marginRight: "175px"}}>:</span>2020-2021</p>
                        </div>
                        <div className='finance'>
                            <p>No. of PMMY Loans Sanctioned :</p>
                            <p><span style={{marginRight: "175px"}}>:</span> 50735046</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Sanctioned :</p>
                            <p><span style={{marginRight: "100px"}}>:</span> <MdCurrencyRupee /> 321759.25 Crore</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Disbursed :</p>
                            <p><span style={{marginRight: "100px"}}>:</span> <MdCurrencyRupee /> 311754.47 Crore</p>
                        </div>
                        <p className='lastupdate'>Last Updated on: 31/03/2021</p>
                    </div>

                    <div className='six'>
                        <div className='finance'>
                            <p>Financial Year :</p>
                            <p><span style={{marginRight: "175px"}}>:</span> 2021-2022</p>
                        </div>
                        <div className='finance'>
                            <p>No. of PMMY Loans Sanctioned :</p>
                            <p><span style={{marginRight: "175px"}}>:</span> 53795526</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Sanctioned :</p>
                            <p><span style={{marginRight: "100px"}}>:</span> <MdCurrencyRupee /> 339110.35 Crore</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Disbursed :</p>
                            <p><span style={{marginRight: "100px"}}>:</span><MdCurrencyRupee />331402.20 Crore</p>
                        </div>
                        <p className='lastupdate'>Last Updated on: 31/03/2022</p>
                    </div>

                    <div className='eight'>
                        <div className='finance'>
                            <p>Financial Year :</p>
                            <p><span style={{marginRight: "175px"}}>:</span> 2022-2023</p>
                        </div>
                        <div className='finance'>
                            <p>No. of PMMY Loans Sanctioned :</p>
                            <p><span style={{marginRight: "175px"}}>:</span> 62310598</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Sanctioned :</p>
                            <p><span style={{marginRight: "100px"}}>:</span>  <MdCurrencyRupee /> 456537.98 Crore</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Disbursed :</p>
                            <p><span style={{marginRight: "100px"}}>:</span> <MdCurrencyRupee /> 450423.66 Crore</p>
                        </div>
                        <p className='lastupdate'>Last Updated on: 31/03/2023</p>
                    </div>

                    <div className='nine'>
                        <div className='finance'>
                            <p>Financial Year :</p>
                            <p><span style={{marginRight: "175px"}}>:</span> 2023-2024</p>
                        </div>
                        <div className='finance'>
                            <p>No. of PMMY Loans Sanctioned :</p>
                            <p><span style={{marginRight: "175px"}}>:</span> 66777013</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Sanctioned :</p>
                            <p><span style={{marginRight: "100px"}}>:</span> <MdCurrencyRupee /> 541012.86 Crore</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Disbursed :</p>
                            <p><span style={{marginRight: "100px"}}>:</span><MdCurrencyRupee />532358.35 Crore</p>
                        </div>
                        <p className='lastupdate'>Last Updated on: 31/03/2024</p>
                    </div>

                    <div className='ten'>
                        <div className='finance'>
                            <p>Financial Year :</p>
                            <p><span style={{marginRight: "175px"}}>:</span> 2024-2025</p>
                        </div>
                        <div className='finance'>
                            <p>No. of PMMY Loans Sanctioned :</p>
                            <p><span style={{marginRight: "175px"}}>:</span> 13694536 *</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Sanctioned :</p>
                            <p><span style={{marginRight: "100px"}}>:</span> <MdCurrencyRupee /> 137524.80 Crore *</p>
                        </div>

                        <div className='finance'>
                            <p>Amount Disbursed :</p>
                            <p><span style={{marginRight: "100px"}}>:</span><MdCurrencyRupee /> 132405.57 Crore *</p>
                        </div>
                        <p className='lastupdate'>Last Updated on: 23/08/2024</p>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Slide;
