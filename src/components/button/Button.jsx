
const Button = ({ name, customClass, onClick,children, type }) => {
    return (
        <button className={customClass} onClick={onClick} type={type}>
            {children}
            {name}
        </button>
    );
};

export default Button;
