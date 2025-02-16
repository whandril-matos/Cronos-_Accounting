"user client"
import React from "react";
import "./FeatureSection.scss";
import { FaRegCircle } from "react-icons/fa";
interface FeatureSectionProps {
  title: string;
  subtitle: string;
  listItems: string[];
  description: string;
  imageUrl: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  listItems,
  description,
  imageUrl,
}) => {

  return (
    <section className="feature-section">
      
      <div className="image-container text-content">
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <img src={imageUrl} alt="Feature Image" />
      </div>
      <div className="text-content">
        <ul>
          {listItems.map((item, index) => (
            <li key={index}><div className="icon"><FaRegCircle className="icon"></FaRegCircle></div>{item}</li>
          ))}
        </ul>
        <p>{description}</p>
        
      </div>
      
    </section>
  );
};

export default FeatureSection;
