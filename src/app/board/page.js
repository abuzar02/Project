// pages/index.js
import Link from 'next/link';
import Card from './card';
import Image from 'next/image';
import manoj from '../../../public/images/Shri_Manoj_Ji_Mittal.jpg'

const cardData = [
    {
        imageSrc: 'https://www.mudra.org.in/images/Shri_Sushil_Singh.jpeg',
        name: 'Shri Sushil Kumar Singh',
        description: 'Government Nominee Director',
    },
    {
        imageSrc: 'https://www.mudra.org.in/images/Sudatta_Mandal.jpg',
        name: 'Shri Sudatta Mandal',
        description: '  SIDBI Nominee Director',
    },
    {
        imageSrc: 'https://www.mudra.org.in/images/Shri_Prakash_Kumar.jpg',
        name: 'Shri Prakash Kumar',
        description: 'SIDBI Nominee Director',
    },
    // Add more card data as needed
    {
        imageSrc: 'https://www.mudra.org.in/images/ShriSVSastry.jpg',
        name: 'Shri S V Sastry',
        description: 'Independent Director',
    },
    {
        imageSrc: 'https://www.mudra.org.in/images/Smt.%20Mala%20Sinha.png',
        name: 'Smt. Mala Sinha',
        description: 'Independent Director',
    },
    {
        imageSrc: 'https://www.mudra.org.in/images/Vinay_Hedaoo.jpg',
        name: 'Shri Vinay Hedaoo',
        description: 'MD & CEO',
    },
];

const HomePage = () => {
    return (
        <>
            <div className='bgheimage'>
                <div className='container'>
                    <div className='gallery-flex'>
                        <h2>Board of Directors</h2>
                        <ul>
                            <li><Link href='/'>Home</Link></li>
                            /
                            <li><Link href='#'>About Us</Link></li>
                            /
                            <li><Link className='color-active' href='#'> Board of Directors</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
            <div className='clearfix'>
                <div class="imgarea">
                    <Image src={manoj} alt='manoj' />
                </div>
                <h4 className='name'>Shri Manoj Mittal</h4>
                <p className='post'>Chairman</p>
            </div>
            </div>
            <div className='container14'>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        imageSrc={card.imageSrc}
                        name={card.name}
                        description={card.description}
                    />
                ))}
            </div>
        </>
    );
};

export default HomePage;
