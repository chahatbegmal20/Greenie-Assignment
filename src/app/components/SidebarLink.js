import Link from "next/link";

function SidebarLink({ href, title }) {
  return (
    <Link
      className="hover:bg-white hover:text-slate-900 bg-slate-800 px-4 py-3 rounded-lg"
      href={href}
    >
      {title}
    </Link>
  );
}

export default SidebarLink;
