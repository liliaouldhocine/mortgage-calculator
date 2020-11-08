export const TextInput = ({
  label,
  name,
  placeholder,
  type,
  value,
  handleOnChange,
}) => {
  const renderInput = () => {
    if (type === 'cash') {
      return (
        <div>
          <span>$</span>
          <input placeholder={placeholder} value={value} onChange={(e) => handleOnChange(e.target.value)} name={name} type="number" />
        </div>
      )
    }
    if (type === 'percentage') {
      return (
        <div>
          <input placeholder={placeholder} value={value} onChange={(e) => handleOnChange(e.target.value)} name={name} type="number" min="0" max="100" />
          <span>%</span>
        </div>
      )
    }

    return(
      <input placeholder={placeholder} value={value} onChange={(e) => handleOnChange(e.target.value)} name={name} type="number" />
    )
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {renderInput()}
    </div>
  )
}

export default TextInput;