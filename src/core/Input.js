export const Input = ({ onChange, className, type, value, placeholder }) => {
    return (
        <input
            onChange={onChange}
            className={className}
            type={type}
            value={value}
            placeholder={placeholder}
        />
    )
}