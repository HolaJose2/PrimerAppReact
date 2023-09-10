import PropTypes from "prop-types";
import "./Campo.css";

export const Campo = ({ label, placeholder, required, valor, setValor, type="text" }) => {

    const manejarCambio = (e)=>{
        setValor(e.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                required={required}
                value={valor}
                onChange={manejarCambio}
            />
        </div>
    );
};

Campo.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};
