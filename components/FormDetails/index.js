import {Component} from 'react'
import {v4} from 'uuid'
import passwordDetails from '../passwordDetails'

import './index.css'

class FormDetails extends Component {
  state = {
    websiteName: '',
    userName: '',
    password: '',

    passwordList: [],
  }

  deletePassword = passwordId => {
    const {passwordList} = this.state

    this.setState({
      passwordList: passwordList.filter(password => password.id !== passwordId),
    })
  }

  renderPasswordsList = () => {
    const {passwordList} = this.state

    return passwordList.map(eachPassword => (
      <passwordDetails
        key={eachPassword.id}
        userPasswordDetails={eachPassword}
        deletePassword={this.deletePassword}
      />
    ))
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteName, userName, password} = this.state

    const newPassword = {
      id: v4(),
      website: websiteName,
      username: userName,
      userPassword: password,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      websiteName: '',
      userName: '',
      password: '',
    }))
  }

  onChangeWebsiteNameInput = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangeUserNameInput = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {websiteName, userName, password, passwordList} = this.state

    return (
      <div className="main-container">
        <img
          className="app-logo"
          alt=" app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="form-container">
          <div className="user-details-form">
            <form onSubmit={this.onAddPassword}>
              <h1>Add New Password</h1>
              <div className="website-container">
                <img
                  className="image"
                  alt="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                />
                <input
                  type="text"
                  value={websiteName}
                  onChange={this.onChangeWebsiteNameInput}
                  placeholder="Enter Website"
                  className="website-text"
                />
              </div>
              <div className="website-container">
                <img
                  className="image"
                  alt="username"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                />
                <input
                  type="text"
                  value={userName}
                  onChange={this.onChangeUserNameInput}
                  placeholder="Enter Username"
                  className="website-text"
                />
              </div>
              <div className="website-container">
                <img
                  className="image"
                  alt="password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                />
                <input
                  type="password"
                  value={password}
                  onChange={this.onChangePassword}
                  placeholder="Enter Password"
                  className="website-text"
                />
              </div>
              <div className="button">
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            alt="password manager"
            className="password-manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          />
        </div>
        <div className="password-container">
          <div className="password-element">
            <h1>Your passwords</h1>
            <p className="count">{passwordList.length}</p>
            <div className="search-container">
              <img
                alt="search"
                className="search-image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                className="search-element"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkbox-container">
            <input type="checkbox" id="Show Passwords" className="checkbox" />
            <label htmlFor="Show Passwords" className="checkbox-text">
              Show Passwords
            </label>
          </div>
          <ul>{this.renderPasswordsList()}</ul>
        </div>
      </div>
    )
  }
}

export default FormDetails
