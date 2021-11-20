const userService = {}

userService.getAll = () => {
    return fetch('https://localhost:5001/api/user')
        .then( res => res.json())
        .then( res => res.data)
}

userService.create = (user) => {
    return fetch('https://localhost:5001/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then( res => res.json())
      .then( res => res.data)
}

export default userService