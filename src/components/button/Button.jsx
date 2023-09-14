const Button = ({ name, customClass, onClick }) => {
    return (
        <button className={customClass} onClick={onClick}>
            {name}
        </button>
    );
};

export default Button;
