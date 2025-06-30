import { Link } from 'react-router'

export function Nav() {
  return (
    <ul>
        <li>
          <Link to="/">Page One</Link>
        </li>
        <li>
          <Link to="/two">Page Two</Link>
        </li>
    </ul>
  )
} 