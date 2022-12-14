import './index.css'

const passwordDetails = props => {
  const {userPasswordDetails} = props
  const {id, website, username, userPassword} = userPasswordDetails

  const onDeletePassword = () => {
    const {deletePassword} = props
    deletePassword(id)
  }

  return (
    <li>
      <div>
        <h1>{username[0].toUpperCase()}</h1>
        <div>
          <h1>{website}</h1>
          <p>{username}</p>
          <img
            alt=" stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          />
        </div>
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </div>
    </li>
  )
}

export default passwordDetails
