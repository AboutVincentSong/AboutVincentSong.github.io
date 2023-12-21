import Link from "next/link"
import Image from "next/image"
import { FaCode } from "react-icons/fa6";
import '../app/globals.css'

const Logo = () => {
  return (
    <Link href="/" style={{ fontSize: "22px", display: "flex" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <FaCode style={{ marginRight: "5px" }} />
        </div>
        <div>
          <strong>
            <span className="tablet-phone">VS</span>
            <span className="web">Vincent Song</span>
          </strong>
        </div>
      </div>
    </Link>
  )
}

export default Logo