import './index.css'

const SuggestionItem = props => {
  const {each, onUpdateBtn} = props
  const {suggestion} = each

  const onDeleteBtn = () => {
    onUpdateBtn(suggestion)
  }
  //onDeleteBtn before use the const why sir? in GoogleSuggestions Component of index.js we don't write the let or const on before function........But here const is must ......please clarify mydoubt

  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <button type="button" className="buttonone" onClick={onDeleteBtn}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="imagerelated"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
