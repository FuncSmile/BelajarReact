const Input = (props) => {
    const { children, For } = props
    return (
        <label
            htmlFor={For}
            className="block text-gray-700 text-sm font-bold mb-2"
        >
            {children}
        </label>
    )
}
export default Input