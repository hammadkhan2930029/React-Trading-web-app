import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const Navbar = () => {
  const navigate = useNavigate();
  const goToDetails = () => {
    navigate('/details')
  }

  return (
    <div id='root'>
      <div className='main'>
        <div className='logo-style'>
          <AccountBalanceIcon style={{ color: 'white', fontSize: 40 }} />
        </div>
        <div className='menu-style'>
          <p className='text'>Home</p>
          <p className='text'>About</p>
          <p className='text'>Conatct</p>
          <p className='text' onClick={goToDetails}>Details</p>




        </div>

      </div>

    </div>

  )
}
export default Navbar;

// export default Navbar;
// import React from 'react';
// import './style.css';
// import logo from '../../../assets/logo.png';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div id='root'>
//       <div className='main'>
//         <div className='logo-style'>
//           <img className='logo' src={logo} alt="Logo" />
//         </div>
//         <div className='menu-style'>
//           <Link className='text' to="/">Form</Link>
//           <Link className='text' to="/details">Details</Link>
//           <Link className='text' to="/home">Home</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

