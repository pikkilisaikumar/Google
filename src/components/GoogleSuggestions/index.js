import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
//   here my thinging is onChangeSearchInput is not defined............because  onChangeSearchInput before we don't use any let or const so that' why? 
//even in  UpdateBtn before also we don't use........... 
  onUpdateBtn = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state

    const searchInformation = suggestionsList.filter(eachOne =>
      eachOne.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="background-color">
        <div className="finalcontainer">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
              className="imageUrl"
            />
          </div>
          <div className="card-box">
            <div className="card-box-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="imagerelated"
                value={searchInput}
              />
              <input
                type="search"
                className="inputelement"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="unorderlist">
              {searchInformation.map(each => (
                <SuggestionItem
                  each={each}
                  key={each.id}
                  onUpdateBtn={this.onUpdateBtn}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
