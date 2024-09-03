import React from 'react'
import '../style/loan.css'
import Image from 'next/image';
import rupee from '../../../public/images/rupeesIcon.png'

const LoanDetail = () => {
  return (
    <div className='loan-bg'>
        <div className='container'>
            <div className='loan-flex'>
                <div className='loan-box'>
                    <Image className='rupee' src={rupee} alt="rupee"/>
                    <h2 ><a href='#'>Shishu</a></h2>
                    <p> Covering loans upto  50,000/-</p>
                </div>

                <div className='loan-box'>
                    <Image className='rupee' src={rupee} alt="rupee"/>
                    <h2 ><a href='#'>Kishore</a></h2>
                    <p>  Covering loans above   50,000/- and upto  5 lakh</p>
                </div>

                <div className='loan-box'>
                    <Image className='rupee' src={rupee} alt="rupee"/>
                    <h2 ><a href='#'>Tarun</a></h2>
                    <p>Covering loans above  5 lakh and upto  10 lakh</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoanDetail