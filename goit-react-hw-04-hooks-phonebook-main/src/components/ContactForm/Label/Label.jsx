import PropTypes from 'prop-types';
import s from './Label.module.css';

export const Label = ({ labelTitle, children}) => {
    return <label className={s.label}>
        {labelTitle}
        {children}
    </label>
}

Label.propTypes = {
    labelTitle: PropTypes.string.isRequired,
    children: PropTypes.node
}
