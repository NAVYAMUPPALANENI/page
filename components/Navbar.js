// components/Navbar.js
import Link from 'next/link'; // Import the Link component from Next.js for navigation

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <Link href="/">Home</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link href="/about">About</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
