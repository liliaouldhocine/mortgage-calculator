export const SelectInput = ({
  label,
  name,
  value,
  handleOnChange,
  options,
}) => {
  const renderOptions = () => {
    return options.map(option => (
      <option key={option.value} value={option.value} label={option.label} />
    ));
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select value={value} onChange={(e) => handleOnChange(e.target.value)} name={name}>
        {renderOptions()}
      </select>
    </div>
  )
}

export default SelectInput;