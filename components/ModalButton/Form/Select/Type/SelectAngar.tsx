import styles from './SelectAngar.module.scss';
import Option from "./Option/Option";

interface IFormSelectAngar {
    name: string;
}

const SelectAngar = ({name}: IFormSelectAngar) => {
    return (
        <select name={name} className={styles.input}>
            <Option text='Выберите тип ангара'/>
            <Option text='Прямостенный односкатный'/>
            <Option text='Двухскатный'/>
            <Option text='Прямостенный с уклоном'/>
        </select>
    )
};
export default SelectAngar;