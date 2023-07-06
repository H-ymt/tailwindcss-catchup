import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: Props) {
  return (
    <button>
      <Link
        href={href}
        className="hover:opacity-80 duration-300 rounded-xl bg-blue-100 text-gray-600 py-2 px-4"
      >
        {children}
      </Link>
    </button>
  );
}
