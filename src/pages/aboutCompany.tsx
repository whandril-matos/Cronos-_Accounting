"use client"

import  './style.scss'
import './aboutCompany.scss'

import Part1 from "../app/componets/bannersStart/type1/type1B"
import Card from "../app/componets/list/type1/list"

import BackButtom from "../app/componets/bottons/bottonBackNavigation/back"
import OurValues from "../app/componets/textbutonImage/type2/sectioFerature"


export default function Home() {
    const history = [
        { 
            id: 1, 
            title: `History of Cronos Accounting`, 
            description: `
            Founded in 1992, Cronos Accounting is a full-service accounting firm known for its experience, commitment, and value delivery. Since its inception, the company has been dedicated to providing affordable accounting solutions for individuals and businesses, both locally and internationally.
            
            With over three decades of experience, Cronos Accounting has built a strong reputation by offering reliable and personalized services. Its portfolio includes tax preparation, asset management, and the development of financial models for startups, helping entrepreneurs present solid projects to investors.
            
            Over the years, the company has earned the trust of major clients, becoming the first choice for renowned corporations such as Bank Belden Ltda., Miranda Digital, and Pereira Values Securities. This recognition reflects Cronos' commitment to simplifying accounting so that its clients can focus on what truly matters: growing their businesses.
            
            Led by CEO Rick Jons, Cronos Accounting remains steadfast in its mission to turn financial challenges into opportunities, ensuring security, transparency, and efficiency for its clients.`  
        }
    ]
    const ourPurpose= [
        { 
            id: 1, 
            title: `Our Purpose`, 
            description: `Our purpose is to simplify accounting so that entrepreneurs, investors, and professionals can focus on what they do best: growing and innovating. We strive to be more than just an accounting firm—we aim to be strategic partners who help our clients achieve their financial goals with security and confidence.

            At Cronos Accounting, accounting is our passion. We take care of the numbers so you can focus on what truly matters: the success of your business.`
        }
    ]
    return (
        <>
            <BackButtom/>
            <Part1
                title="Cronos ​Accounting"
                subtitle="Experience. Commitment. Value."
                backgroundImage="/imgs/background.png"
                icon='/imgs/cub.svg'
            />
            <Card items={history}/>
            <OurValues
                title="Values and Purpose of Cronos Accounting"
                subtitle="At Cronos Accounting, we believe that accounting goes beyond numbers! It is the foundation for sustainable growth and strategic decision-making. Our commitment is to provide affordable and efficient accounting solutions, helping our clients thrive with security and transparency."
                listItems={[
                    "Commitment to Excellence: we are dedicated to delivering high-quality accounting services, ensuring that each client receives reliable and personalized support.",
                    "Ethics and Transparency: we believe trust is essential. We maintain clear processes and adhere to the highest ethical standards in every service we provide.",
                    " Innovation and Evolution: the business world is constantly changing, and we evolve with it. We use modern technology and strategies to offer efficient and up-to-date accounting solutions.",
                    " Customer Focus: every business is unique, and our goal is to understand each client’s specific needs to provide truly personalized service."
                ]}
                description=""
                imageUrl="/imgs/415-A-diferença-entre-moral-e-ética.webp"
            />
            <Card items={ourPurpose}/>
            
        </>
    );
}
