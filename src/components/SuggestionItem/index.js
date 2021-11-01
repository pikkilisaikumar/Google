import './index.css'

const SuggestionItem = props => {
  const {each, onUpdateBtn} = props
  const {suggestion} = each

  const onDeleteBtn = () => {
    onUpdateBtn(suggestion)
  }

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
