import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux"
import { addUser, deleteUser, updateUser } from './Redux/Users'
function App() {
  const userList = useSelector((state) => state.users.value)
  const [user, setUser] = useState({})
  const [newUser, setNewUser] = useState(null)
  const dispatch = useDispatch()
  function handleChange(e) {
    e.preventDefault()
    let { name, value } = e.target
    setUser({ ...user, [name]: value })
  console.log(user)
  }
  return (
    <>

      <div className='addUser'>
        <input type="text" name="name" onChange={handleChange} placeholder='Name..' />
        <input type="text" name='username' onChange={handleChange} placeholder='UserName..' />
        <button onClick={() => {
          dispatch(addUser({
            id: userList[userList.length-1].id+1,
            name: user.name,
            username: user.username
          }))
        }}>add user</button>
      </div>
      <div className='displayUsers'>
        {userList.map((user, ele) => {
          return <div key={ele}>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
        <input type="text" name='newusername' onChange={(e)=>{
          setNewUser(e.target.value)
          
        }} placeholder='newusername..' />
        <button onClick={
          ()=>{
            dispatch(updateUser({
              id:user.id,
              newusername:newUser
            }))
          }
        }
        
        >Update username</button>
        <button onClick={
          ()=>{
            dispatch(deleteUser({id:user.id}))
          }
        }>Delete</button>
      

          </div>
        }
        )}
      </div>
    </>
  )
}

export default App
