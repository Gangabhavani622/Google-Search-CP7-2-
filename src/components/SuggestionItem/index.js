// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, searchText} = props
  const {suggestion} = suggestionItem

  const onChangeText = () => {
    searchText(suggestion)
  }

  return (
    <li className="list-container">
      <p className="para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-image"
        onClick={onChangeText}
      />
    </li>
  )
}

export default SuggestionItem
