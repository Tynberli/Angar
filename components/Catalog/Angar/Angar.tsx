
import React from 'react';
import Image from 'next/image';

import styles from './Angar.module.scss'

type AngarCardProps = {
  title: string;
  long: string;
  width: string;
  height: string;
  price: string;
  installation: string;
  image: string;
  // Добавьте остальные значения, необходимые для карточки ангара
};

const AngarCard: React.FC<AngarCardProps> = ({ title, height, width, long, price, installation, image,  }) => {
  return (
    <div className={styles.card}>
      {/* Добавьте остальные элементы вашей карточки ангара */}
      <div className={styles.picture}>
        <Image src={image} alt={title} width={460} height={460} />
      </div>
      <h4>{title}</h4>
      <p className={styles.parametres}> ДхШхВ: <span className="long">{long}</span> х <span
        className="width">{width}</span> х
        <span className="height">{height}</span> м
      </p>
      <p className={styles.price}>от {price} ₽</p>
      <p className={styles.installation}>Монтаж: {installation}
        ₽/м2</p>
      <button className="open-popup_color">Заказать
        ангар</button>
    </div>
  );
};

export default AngarCard;
