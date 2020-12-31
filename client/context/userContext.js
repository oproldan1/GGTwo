import React, {createContext, useState} from 'react';

// create context
export const UserContext = React.createContext({
  user: '',
  setUser: () => {}
})

export const UserContextProvider = (props) => {

  const [user, setUser] = useState(initUser)

  const updateUser = (user) => {
    setUser({...user})
  }

  const initUser = {
    user: '',
    setUser: updateUser
  } 

  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  )
}

