import Image from 'next/image'
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

export default function Home() {
  return (
    <div className='navbar' style={{ paddingLeft: '50px', paddingRight: '50px', borderBottom: '1px solid black' }}>
      <a className="navbar-link" href="" style={{ fontSize: '20px', textDecoration: 'none', color: 'inherit'}}>
        <i className="bi bi-code-square"></i> Vincent Song
      </a>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <a className='navbar-link' style={{ textDecoration: 'none', color: 'inherit', paddingRight: '15px'}} href="">About</a>
        <a className='navbar-link' style={{ textDecoration: 'none', color: 'inherit', paddingRight: '15px'}} href="">Work</a>
        <a className='navbar-link' style={{ textDecoration: 'none', color: 'inherit', paddingRight: '15px'}} href="">Experience</a>
        <a className='navbar-link' style={{ textDecoration: 'none', color: 'inherit'}} href="">Contact</a>
      </div>
    </div>
  )
}
