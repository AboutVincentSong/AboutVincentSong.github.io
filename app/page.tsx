import Image from 'next/image'
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

export default function Home() {
  return (
      <div className='navbar' style={{ padding: '22px'}}>
        <a className="navbar-link" href="" style={{ fontSize: '20px', textDecoration: 'none', color: 'inherit'}}>
          <i className="bi bi-code-square"></i> Vincent Song
        </a>
      </div>
  )
}
