"user client"
import React from "react";
import "./FeatureSection.scss";
import Link from "next/link";
import { FaRegCircle } from "react-icons/fa";
interface FeatureSectionProps {
  title: string;
  subtitle: string;
  listItems: string[];
  description: string;
  buttonText: string;
  imageUrl: string;
  LocalButom: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  listItems,
  description,
  buttonText,
  imageUrl,
  LocalButom,
}) => {
  
  return (
    <section className="feature-section">
      <div className="text-content">
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}><FaRegCircle className="icon"></FaRegCircle>{item}</li>
          ))}
        </ul>
        <p>{description}</p>
        <Link href={LocalButom}>
          <button>{buttonText}</button>
        </Link>
        
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="Feature Image" />
      </div>
    </section>
  );
};

export default FeatureSection;
