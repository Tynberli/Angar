import styles from './Input.module.scss';

interface IFormInput {
    type: string;
    text: string;
    placeholder: string;
    name: string;

}


const Input = ({type, text, placeholder, name}: IFormInput) => {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                
                required
                className={styles.input}/>
        </>
    )
};
export default Input;