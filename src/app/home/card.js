import React from 'react'
import Image from 'next/image';
import vision from '../../../public/images/vision-hover.png'
import vision1 from '../../../public/images/vision.png'
import mudra from '../../../public/images/mision-hover.png'
import mudra1 from '../../../public/images/mision.png'
const Card = () => {
    return (
        <>
            <div className='container'>
                <div className='card-flex'>
                    <div className='crad1'>
                        <Image src={vision} alt="vision" />
                        <Image className='vision' src={vision1} alt="vision" />
                        <h2 className='mudraa'> MUDRA Vision</h2>
                        <p className='includiv'>"To be an integrated financial and support services provider par excellence benchmarked with global best practices and standards for the bottom of the pyramid universe for their comprehensive economic and social development."</p>
                    </div>
                    <div className='crad1'>
                        <Image src={mudra} alt="vision" />
                        <Image className='vision' src={mudra1} alt="vision" />
                        <h2 className='mudraa'> MUDRA Mission</h2>
                        <p className='includiv'>"To create an inclusive, sustainable and value based entrepreneurial culture, in collaboration with our partner institutions in achieving economic success and financial security."
                        </p>
                    </div>
                </div>
            </div>

        <div className='loandetail'>
            <div class="container">
                <h2 className='Pradhan'>
                    Pradhan Mantri MUDRA Yojana (PMMY)
                </h2>
                <p className='Mantri'>
                    Pradhan Mantri MUDRA Yojana (PMMY) is a scheme launched by the Hon’ble Prime Minister on April 8, 2015 for providing loans up to
                    <i class="icon-rupee"></i>10 lakh to the non-corporate, non-farm small/micro enterprises. These loans are classified as MUDRA loans under PMMY.
                    These loans are given by Commercial Banks, RRBs, Small Finance Banks, MFIs and NBFCs.
                    The borrower can approach any of the lending institutions mentioned above or can apply online through this portal <a href="http://www.udyamimitra.in/">www.udyamimitra.in .</a>
                    Under the aegis of PMMY, MUDRA has created three products namely 'Shishu', 'Kishore' and 'Tarun' to signify the stage of growth / development and funding needs of the beneficiary micro unit / entrepreneur and also provide a reference point for the next phase of graduation / growth.
                </p>
            </div>
         </div>
        </>
    )
}

export default Card