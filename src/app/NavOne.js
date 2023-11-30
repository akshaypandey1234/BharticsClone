import Link from 'next/link';

const NavOne = () => {
  return (
    <div className="navone flex flex-col space-x-3 md:flex-row md:justify-start items-center py-2 bg-black text-white">
      <Link href="/newcar">New Car</Link>
      <Link href="/usedcar">Used Car</Link>
      <Link href="/exchange">Exchange Car</Link>
      <Link href="/deal">Today's Deal</Link>
      <Link href="/loan">Loan</Link>
      <Link href="/service">Service</Link>
      <Link href="/insurance">Insurance</Link>
      <Link href="/testdrive">Test Drive</Link>
      <Link href="/accessories">Accessories</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default NavOne;
