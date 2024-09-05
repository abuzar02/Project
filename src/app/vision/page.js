import Link from 'next/link'
import React from 'react'
import '../style/vision.css'
import Image from 'next/image'
import inner_vision from '../../../public/images/vision-inner.jpg'
import mision from '../../../public/images/mision-inner.jpg'
import perpose from '../../../public/images/purpose-inner.jpg'

const Vision = () => {
  return (
    <>
      <div className='bgheimage'>
        <div className='container'>
          <div className='gallery-flex'>
            <h2>Vision</h2>
            <ul>
              <li><Link href='/'>Home</Link></li>
              /
              <li><Link href='#'>About Us</Link></li>
              /
              <li><Link className='color-active' href='#'>Vision</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='photoGallery'><h2>Photo Gallery</h2></div>

        <div className='innerAbout'>
          <div className='main-box'>
            <div className='first-box'>
              <h3>MUDRA Vision</h3>
              <p>To be an integrated financial and support services provider par excellence, benchmarked with global best practices and standards, for the bottom of the pyramid universe for their comprehensive economic and social development.</p>
            </div>
            <div className='second-box'>
              <Image src={inner_vision} alt='vision' />
            </div>
          </div>
        </div>

        <div className='innerAbout'>
          <div className='main-box'>
            <div className='first-box1'>
              <Image src={mision} alt='vision' />

            </div>
            <div className='second-box2'>
              <h3>MUDRA Mission</h3>
              <p>To create an inclusive, sustainable and value based entrepreneurial culture, in collaboration with our partner institutions in achieving economic success and financial security.</p>
            </div>
          </div>
        </div>


        <div className='innerAbout'>
          <div className='main-box'>
            <div className='first-box'>
              <h3>MUDRA Purpose</h3>
              <p>Our basic purpose is to attain development in an inclusive and sustainable manner by supporting and promoting partner institutions and creating an ecosystem of growth for micro enterprises sector.</p>
            </div>
            <div className='second-box'>
              <Image src={perpose} alt='vision' />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Vision