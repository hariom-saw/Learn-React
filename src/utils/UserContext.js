import React, { createContext } from 'react'

const UserContext = createContext({
    loggedInUser: "Default Users",
});

export default UserContext;