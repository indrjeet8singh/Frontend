import React from 'react';
import { backendurl } from '../../Servicepage';
import { useNavigate } from 'react-router-dom';


function Logoutpage(){
    
        const navigate = useNavigate();
      
        const handleLogout = async () => {
          try {
            // Send POST request to the backend for logging out
            const response = await fetch(`${backendurl}/logout`, {
              method: 'POST',
              credentials: 'include', // Ensure cookies are sent with the request
            });
      
            if (response.ok) {
              // Redirect to home page or login page after successful logout
              navigate('/');
            } else {
              console.error('Logout failed');
            }
          } catch (error) {
            console.error('Logout request failed', error);
          }
        };
      
        return (
          <div className='mt-5'>
            <button onClick={handleLogout}>Logout</button>
          </div>
        );
      }
    
export default Logoutpage;