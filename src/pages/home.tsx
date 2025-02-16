"use client"

import  './style.scss'
import Part1 from "../app/componets/bannersStart/type1/type1B"
import Part2 from "../app/componets/textbutonImage/type1/sectioFerature"
import Part3 from "../app/componets/textbutonImage/type2/sectioFerature"
import Part4 from "../app/componets/list/type1/list"
import Part5 from "../app/componets/list/type2/CardList"
import Part6 from "../app/componets/phrase/phrase"
import Footer from "../app/componets/footer/type1/type1"



export default function Home() {
  
  const itemList = [
    { id: 1, title: "Our client", description: "Since the beginning, we have provided reliable services to our ​clients. We have had the honor of being the first company ​chosen by the following corporations:" }
  ]
  const itemsAndImage = [
    {
      id: 1,
      title: "Bank Belden Ltda.",
      image: "/imgs/4e76c980cabb097f2c0d8ccf0bab02d8.jpg",
    },
    {
      id: 2,
      title: "Miranda Digital",
      image: "/imgs/6e2cdbae6526d11968f53134ed15f82a.jpg",
    },
    {
      id: 3,
      title: "Pereira Values securities",
      image: "/imgs/8d698ec10d095e41d18848f6311a9058.jpg",
    },
    
  ];
  return (
    <>
      <Part1
        title="Cronos ​Accounting"
        subtitle="Experience. Commitment. Value."
        backgroundImage="/imgs/background.png"
        icon='/imgs/cub.svg'
      />
      <Part2
        title="Company Profile"
        subtitle=""
        listItems={[]}
        description="Founded in 1992, Cronos Contabilidade is a ​full-service firm offering affordable accounting ​solutions for local and international individuals ​and businesses"
        buttonText="Learn More"
        imageUrl="/imgs/8d24cf588ac57b49b2d18178953fb093.jpg"
        LocalButom="aboutCompany"
      />
      <Part3
        title="Our service"
        subtitle="What we can do for you"
        listItems={[
          "Tax Preparation: We prepare everything you need for income ​tax",
          "Startup Package: We create financial models that you can present to ​investors",
          "Asset Management: We provide intelligent investment ​advisory services"
        ]}
        description=""
        imageUrl="/imgs/acb37fdd42ad8151abd41da042849077.jpg"
      />
      <Part4 items={itemList}/>
      <Part5 items={itemsAndImage}/>
      <Part6
        text="Accounting is our passion. We'll take care of it, so ​you can focus on yours."
        author='— Rick Jons , CEO'
      />
      <Footer
          title="Let's work together"
          address="street n, 123 - any sity, USA"
          phone="(0​1) 55555-55555"
          email="alo@sitebacana.com.br"
          addressT="Address: "
          phoneT="Ph​one number: "
          emailT="E-mail: "
          imageSrc="/imgs/e78ff1bf64355041990f6071b114a100.jpg"
          imageAlt="img"
      />
    </>
  );
}
