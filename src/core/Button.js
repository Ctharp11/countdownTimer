export const Button = ({ className, type, onClick, name }) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >
            {name}
        </button>
    )
}