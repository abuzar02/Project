import Link from 'next/link'
import React from 'react'
import '../style/genesis.css'
import Image from 'next/image'
import composition from '../../../public/images/composition-of-own-account-enterprises-image-01.jpg'
import composition1 from '../../../public/images/composition-of-own-account-enterprises-image-02.jpg'
import { IoIosArrowForward } from "react-icons/io";

const page = () => {
    return (
        <>
            <div className='bgheimage'>
                <div className='container'>
                    <div className='gallery-flex'>
                        <h2>Genesis and Role of MUDRA</h2>
                        <ul>
                            <li><Link href='/'>Home</Link></li>
                            /
                            <li><Link href='#'>About Us</Link></li>
                            /
                            <li><Link className='color-active' href='#'> Genesis and Role of MUDRA</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='photoGallery'><h2>The Genesis of MUDRA</h2></div>
                <div className='innerAbout1'>
                    <p>The Union Budget presented by the Hon'ble Finance Minister Shri Arun Jaitley, for FY 2015-16, announced the formation of MUDRA Bank. Accordingly MUDRA was registered as a Company in March 2015 under the Companies Act 2013 and as a Non Banking Finance Institution with the RBI on 07 April 2015. MUDRA was launched by the Hon'ble Prime Minister Shri Narendra Modi on 08 April 2015 at a function held at Vigyan Bhawan, New Delhi.</p>
                </div>

                <div className='photoGallery'><h2>Micro Enterprises</h2></div>
                <div className='innerAbout1'>
                    <p>Micro enterprises constitute a major economic segment in our country and provides large employment after agriculture. This segment include micro units engaged in manufacturing, processing, trading and services sector. It provides employment to nearly 10 crore people. Many of these units are proprietary/ single ownership or Own Account enterprises and many a time referred as Non Corporate Small Business sector.</p>
                </div>

                <div className='photoGallery'><h2>The Non-Corporate Small Business Sector</h2></div>
                <div className='innerAbout1'>
                    <p>Non-Corporate Small Business Sector (NCSBS) is the economic foundation of India. It is perhaps one of the largest disaggregated business ecosystems in the world sustaining around 50 crore lives.</p>
                    <p>The sector comprises of myriad of small manufacturing units, shopkeepers, fruits / vegetable vendors, truck & taxi operators, food-service units, repair shops, machine operators, small industries, artisans, food processors, street vendors and many others.</p>
                    <p>Formal or institutional architecture has not been able to reach out to them to meet the financial requirements of this sector. They are largely self financed or rely on personal networks or moneylenders. Addressing this need will give a big boost to the economy otherwise this segment would remain unfunded and a portion of the productive labour force would remain unemployed.</p>
                    <p>Small business is big business. According to NSSO Survey (2013), there are 5.77 crore small business units, mostly individual proprietorship. Most of these 'own account enterprises' (OAE) are owned by people belonging to Scheduled Caste, Scheduled Tribe or Other Backward Classes. They get very little credit, and that too mostly from non formal lenders, or friends and relatives. Providing access to institutional finance to such micro/small business units would turn them into strong instruments of GDP growth and also employment.</p>
                </div>

                <div className='photoGallery'><h2>Broad composition of Micro enterprise sector</h2></div>
                <div className='inner-flex'>
                    <div className='sercal'>
                        <div className='innerAbout1 align'>
                            <Image src={composition} alt='composition' />
                            <p className='align'>Figure : Composition of 5.7 crore Own Account Enterprises</p>
                        </div>
                    </div>
                    <div className='sercal'>
                        <div className='innerAbout1 align'>
                            <Image src={composition1} alt='composition' />
                            <p className='align'>Figure : Composition of 5.7 crore Own Account Enterprises</p>
                        </div>
                    </div>
                </div>
                <div className='innerAbout1'>
                    <p>The Non Corporate Small Business Sector (NCSBS) accounts for a large share of industrial units. They feed large local and international value chains as well as domestic consumer markets as suppliers, manufacturers, contractors, distributors, retailers and service providers. The gross value addition of this sector is 6.28 lakh crore annually.</p>
                    <p>Mainstreaming these enterprises will not only help in improving the quality of life of these entrepreneurs but will also contribute substantially to job creation in the economy thereby achieving higher GDP growth.</p>
                </div>

                <div className='photoGallery'><h2>The Micro Constraints</h2></div>
                <div className='innerAbout1'>
                    <h4 className='major'>The major constraints faced by the myriad of the micro enterprises along the length and breadth of the country include :</h4>

                    <div className='list'>
                        <ul>
                            <li> <IoIosArrowForward />Access to Finance</li>
                            <li><IoIosArrowForward />Infrastructure Gaps</li>
                            <li><IoIosArrowForward />Lack of growth orientation</li>
                        </ul>
                        <ul>
                            <li><IoIosArrowForward />Skill Development Gaps</li>
                            <li><IoIosArrowForward />Policy Advocacy Needs</li>
                            <li><IoIosArrowForward />Lack of Market Development / Market Making</li>
                        </ul>
                        <ul>
                            <li><IoIosArrowForward />Knowledge Gaps</li>
                            <li><IoIosArrowForward />Information Asymmetry</li>
                            <li><IoIosArrowForward />Entry Level Technologies</li>
                        </ul>
                    </div>

                    <p>The biggest bottleneck to the growth of entrepreneurship in the NCSBS is lack of financial support to this sector. The support from the Banks to this sector is meagre, with less than 15% of bank credit going to Micro, Small and Medium Enterprises (MSMEs).</p>
                    <p>A vast part of the non-corporate sector operates as unregistered enterprises. They do not maintain proper Books of Accounts and are not formally covered under taxation areas. Therefore, the banks find it difficult to lend to them. Majority of this sector does not access outside sources of finance.</p>
                </div>

                <div className='photoGallery'><h2>The MUDRA</h2></div>
                <div className='innerAbout1'>
                    <p>In the above backdrop the Micro Units Development & Refinance Agency Ltd (MUDRA) was set up by the Government of India (GoI). MUDRA has been initially formed as a wholly owned subsidiary of Small Industries Development bank of India (SIDBI) with 100% capital being contributed by it. Presently, the authorized capital of MUDRA is ₹5000 crores and paid up capital is ₹1675.92 crore, fully subscribed by SIDBI. More capital is expected to enhance the functioning of MUDRA.</p>
                    <p>This Agency would be responsible for developing and refinancing all Micro-enterprises sector by supporting the finance Institutions which are in the business of lending to micro / small business entities engaged in manufacturing, trading and service activities. MUDRA would partner with Banks, MFIs and other lending institutions at state level / regional level to provide micro finance support to the micro enterprise sector in the country.</p>
                    <p>Micro Finance is an economic development tool whose objective is to provide income generating opportunities to the people at the bottom of the pyramid. It covers a range of services which include, in addition to the provision of credit, many other credit plus services , financial literacy and other social support services.</p>
                    <h4 className='major'>Roles and Responsibilities of MUDRA</h4>
                    <p>MUDRA has been formed with primary objective of developing the micro enterprise sector in the country by extending various support including financial support in the form of refinance, so as to achieve the goal of â€œfunding the unfundedâ€. The GOI Press release of 2 March 2015 has laid down the roles and responsibilities of MUDRA.
                    </p>
                    <p>Subsequently GOI has also decided that MUDRA will provide refinance support, monitor the PMMY data by managing the web portal, facilitate offering guarantees for loans granted under PMMY and take up other activities assigned to it from time to time. Accordingly MUDRA has been carrying out these functions over the last one year.</p>
                </div>
                <div className='photoGallery'><h2>Monitoring of PMMY</h2></div>
                <div className='innerAbout1'>
                    <p>Pradhan Mantri Mudra Yojana (PMMY) was launched along with the launching of MUDRA on 08 April 2015 and the detailed guidelines were issued by Government of India to all banks and MFIs. MUDRA was given the responsibility of monitoring the programme by collecting the information on regular basis. Accordingly, MUDRA has put in place a monitoring portal which captures the data on lending under PMMY, in a granular fashion.</p>
                </div>
            </div>
        </>
    )
}

export default page