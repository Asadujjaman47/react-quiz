import classes from '../styles/Answers.module.css';
import CheckBox from './Checkbox';

export default function Answers() {
    return (
        <div className={classes.answers}>
            <CheckBox className = {classes.answer} text="Test answer" />
        </div>
    );
}