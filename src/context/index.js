
import React from 'react';

const userInfo = { 'isLoggedIn': false, 'displayName': 'Guest' };

const AppContext = React.createContext(userInfo)

export default AppContext;
