import Image from 'next/image';

import styles from './Step.module.scss'

type StepProps = {
    title: string;
    descr: string;
    img: string;
  };
const Step: React.FC<StepProps> = ({ title, descr, img,}) => {
    return (
        <div>
            <div
                className={styles.descr__step}>
                <p>{title}</p>
                <p>{descr}</p>
            </div>
            <div className={styles.picture}>
                <Image width={940} height={320}
                    src={img} alt={title} />
            </div>
        </div>
    )

}
export default Step;