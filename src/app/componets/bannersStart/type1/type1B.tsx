'use client';

import Image from 'next/image';
import styles from './Banner.module.scss';

interface BannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  icon:string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, backgroundImage, icon }) => {
  return (
    <div className={styles.banner}>
      <Image 
        src={backgroundImage} 
        alt="Background" 
        layout="fill" 
        objectFit="cover" 
        quality={80} 
        priority 
        className={styles.backgroundImage}
      />
      <div className={styles.content}>
          <Image 
            alt="icon"
            priority 
            src={icon}
            className={styles.icon}
            width={10}
            height={10}
          />
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
      </div>
    </div>
  );
};

export default Banner;
