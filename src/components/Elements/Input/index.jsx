import Label from "./Label"
import Input from "./Input"
const InputFrom = (props) => {
    const { labelTitle, typeInput, name, placeholder } = props;
    return (
        <div className="mb-6">
            <Label For={name}>{labelTitle}</Label>
            <Input type={typeInput} name={name} placeholder={placeholder} id ={name} />
        </div>
    )
}
export default InputFrom