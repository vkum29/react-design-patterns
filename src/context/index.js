
import React from 'react';

//const userInfo = { 'isLoggedIn': false, 'displayName': 'Guest' };

const AppContext = React.createContext({ 'isLoggedIn': false, 'displayName': 'Guest' })

export default AppContext;
