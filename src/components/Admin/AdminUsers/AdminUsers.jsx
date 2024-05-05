import React, { useEffect, useState } from 'react';
import './AdminUsers.css'; 

import CardUser from './CardUser';



function AdminUsers() {
  const [users, setUsers] = useState([]);
      
  const getDataAPI = async () => {
    
   
    const response = await fetch(
      `https://api-unas.vercel.app/users/pruebaAll`
    );
    
    const res = await response.json();
setUsers(res)
    console.log(res);
  
  }; 

  useEffect(() => {
    getDataAPI();
  }, []);

  const renderList = () => {
    return users.map((user) => {
        return (<li key={user._id} >
            
                <CardUser itemm={user} className="article_activity" />
           
        </li>
        )
    })
  }
  const handleGoBack = () => {
    window.history.back();
  }

    
  return (
    <div className="container">
      <h1>Listado de clientes</h1>
     
      <ul>
            {renderList()}
        </ul>
        <button onClick={handleGoBack} className="goBackButton">Volver atrás</button>
    
    </div>
  );

}


export default AdminUsers;


