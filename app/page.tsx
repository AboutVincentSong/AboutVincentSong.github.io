import Image from 'next/image'
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

export default function Home() {
  return (
      <div className="container">
        <br></br>
        <a href="" style={{ fontSize: '20px', textDecoration: 'none', color: 'inherit', marginTop: '5px' }}>
          <i className="bi bi-code-square"></i> Vincent Song
        </a>
      </div>
  )
}
