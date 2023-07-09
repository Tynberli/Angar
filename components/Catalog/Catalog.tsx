// AngarFilter.tsx

import React, { useState } from 'react';
import Angar from './Angar/Angar';
import { angarsData } from './Angar/angarsData'; // Файл с данными для карточек ангаров

import styles from './Catalog.module.scss'
enum AngarCategory {
    All = 'all',
    TwoSkates = 'two-skates',
    Rectangular = 'rectangular',
    Bias = 'bias',
    // Добавьте остальные категории ангаров
}

const AngarFilter: React.FC = () => {
    const [currentCategory, setCurrentCategory] = useState(AngarCategory.All);
    const [visibleAngars, setVisibleAngars] = useState(3); // Начальное количество видимых ангаров
  
    const filteredAngars = angarsData.filter((angar) => {
        if (currentCategory === AngarCategory.All) {
            return true;
        }
        else if (currentCategory === AngarCategory.TwoSkates) {
            return angar.category === AngarCategory.TwoSkates;
        } else if (currentCategory === AngarCategory.Rectangular) {
            return angar.category === AngarCategory.Rectangular;
        } else if (currentCategory === AngarCategory.Bias) {
            return angar.category === AngarCategory.Bias;
        }
        // Добавьте условия фильтрации для каждой категории
        // Например, для категории "Двухскатные":
        // return angar.category === AngarCategory.TwoSkates;
    });
    const showMoreAngars = () => {
        setVisibleAngars((prevVisibleAngars) => prevVisibleAngars + 3); // Увеличиваем количество видимых ангаров на 3
    };
    
    const showLessAngars = () => {
        setVisibleAngars(3); // Возвращаем начальное количество видимых ангаров
    };
    
    const isShowMoreButtonVisible = visibleAngars < filteredAngars.length;
    const displayedAngars = filteredAngars.slice(0, visibleAngars);


    return (
        <section id="catalog">
            <div className='container'>
                <h2 className="text-center">Каталог ангаров</h2>
            </div>
            <ul className={styles.tabs}>
                <li
                    className={currentCategory === AngarCategory.All ? 'active' : ''}
                    onClick={() => setCurrentCategory(AngarCategory.All)}
                >
                    Все
                </li>
                <li
                    className={currentCategory === AngarCategory.TwoSkates ? 'active' : ''}
                    onClick={() => setCurrentCategory(AngarCategory.TwoSkates)}
                >
                    Двухскатные
                </li>
                <li
                    className={currentCategory === AngarCategory.Rectangular ? 'active' : ''}
                    onClick={() => setCurrentCategory(AngarCategory.Rectangular)}
                >
                    Прямостенные односкатные
                </li>
                <li
                    className={currentCategory === AngarCategory.Bias ? 'active' : ''}
                    onClick={() => setCurrentCategory(AngarCategory.Bias)}
                >
                    Прямостенные с уклоном
                </li>
                {/* Добавьте остальные вкладки */}
            </ul>
            <div className={styles.angar_cards}>
                <div className='container'>
                    <div className={styles.wrap} >
                        {displayedAngars.map((angar) => (
                            <Angar
                                key={angar.id}
                                title={angar.title}
                                height={angar.height}
                                width={angar.width}
                                long={angar.long}
                                image={angar.image}
                                price={angar.price} 
                                installation={angar.installation}
                            // Передайте остальные значения для карточки ангара
                            />
                        ))}
                    </div>
                    {isShowMoreButtonVisible ? (
                        <button className={styles.showMoreButton} onClick={showMoreAngars}>
                            Показать больше ангаров
                        </button>
                    ) : (
                        <button className={styles.showMoreButton} onClick={showLessAngars}>
                            Показать меньше ангаров
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AngarFilter;
