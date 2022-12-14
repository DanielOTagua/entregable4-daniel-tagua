

import { useState, useEffect } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'

function App() {

  const [closeForm, setCloseForm] = useState(true)
  const {users, 
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById} 
    = useCrud()
    
  const [updateInfo, setupdateInfo] = useState()

  useEffect(() => {
    getAllUsers()
  }, [])

  console.log(updateInfo);


  return (
    <div className="App">
      <h1 className='App__title'>Users</h1>
      <button onClick={() => setCloseForm(false)} className='App__btn'>Open Form</button>
      <div className={`form-container ${closeForm && 'close__form'}`}>
      <FormUsers
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setupdateInfo={setupdateInfo}
        setCloseForm = {setCloseForm}
      />
      </div>
      <div className='user-container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setupdateInfo={setupdateInfo}
              
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
