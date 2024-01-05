import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-5 w-full flex justify-between border-2">
      <div>
        <Link href="/">
          <span>Logo</span>
        </Link>
      </div>
      <div className="flex gap-5">
        <div>
          <Link href="/dashboard">
            <span>Dashborad</span>
          </Link>
        </div>
        <div>
          <Link href="/monster">
            <span>Monster</span>
          </Link>
        </div>
        <div>
          <Link href="/list">
            <span>List</span>
          </Link>
        </div>
        <div className="border-2" />
        <div className="">Login</div>
      </div>
    </div>
  );
};

export default Navbar;
