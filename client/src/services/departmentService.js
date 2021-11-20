const departmentService = {}

departmentService.getAll = () => {
    return fetch('https://localhost:5001/api/department')
        .then( res => res.json())
        .then( res => res.data)
}

departmentService.create = (department) => {
    return fetch('https://localhost:5001/api/department', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(department)
      })
      .then( res => res.json())
      .then( res => res.data)
}

export default departmentService