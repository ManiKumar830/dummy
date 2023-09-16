import React, {useState} from 'react'

const UserRegistration = ({onStartGame}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    difficulty: 'Easy',
  })

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    onStartGame(formData)
  }

  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <select
          name="difficulty"
          onChange={handleChange}
          value={formData.difficulty}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <button type="submit">Start Game</button>
      </form>
    </div>
  )
}

export default UserRegistration
