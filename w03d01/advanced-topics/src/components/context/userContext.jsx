import React from 'react';

const UserContext = React.createContext();
console.log('UserContext', UserContext);

UserContext.displayName = 'UserContext';
export default UserContext;