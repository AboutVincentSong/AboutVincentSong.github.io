import Image from 'next/image'
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

export default function Home() {
  return (
    <div>
      <div className='navbar' style={{ backgroundColor: '#64748b', paddingLeft: '150px', paddingRight: '150px', paddingTop: '20px', paddingBottom: '20px' }}>
        <a className="navbar-link" href="" style={{ fontSize: '20px', textDecoration: 'none', color: '#f1f5f9'}}>
          <strong><i className="bi bi-code-slash"></i> Vincent Song</strong>
        </a>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <a className='navbar-link' style={{ textDecoration: 'none', color: '#f1f5f9', paddingRight: '15px'}} href="">Projects</a>
          <a className='navbar-link' style={{ textDecoration: 'none', color: '#f1f5f9', paddingRight: '15px'}} href="">Skills</a>
          <a className='navbar-link' style={{ textDecoration: 'none', color: '#f1f5f9'}} href="">Resume</a>
        </div>
      </div>
      <div className='container-fluid text-center' style={{ backgroundColor: '#e5e7eb', paddingTop: '50px', paddingBottom: '50px', height: '600px' }}>
        <h5>Hello, my name is...</h5>
        <h2>Vincent Song</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Image style={{ borderRadius: '50%', objectFit: 'cover', width: '250px', height: '250px' }}
            src="/Vincent Song Headshot.JPG" alt="Vincent's Headshot" width={250} height={250} className="mb-3" />
          <p className="mb-4" style={{ maxWidth: '400px', margin: '0 auto' }}>Software Developer, Test Engineer,<br></br> Cloud Enthusiast</p>
        </div>
      </div>
      <div style={{ textAlign: 'center'}}>
        <div>© 2023 Vincent Song</div>
      </div>
    </div>
    
  )
}
