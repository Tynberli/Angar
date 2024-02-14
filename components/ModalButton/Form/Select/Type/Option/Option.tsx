import styles from './Option.module.scss';

interface IFormSelectAngarOption {
    text: string;
}

const Option = ({text}: IFormSelectAngarOption) => {
    return (
        <option value={text}>{text}</option>
    )
};
export default Option;