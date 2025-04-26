interface inputType{
    placeholder:string
}

function TextInput({placeholder}:inputType) {
  return (
  <input
    type="text"
    placeholder={placeholder}
    style={{
        padding: '10px',
        backgroundColor: '#374151',
        color: '#f9fafb',
        border: '1px solid #4b5563',
        borderRadius: '8px',
        outline: 'none',
        width: '100%'
    }}
  />)
}

export default TextInput
