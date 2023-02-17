import Link from "next/link";
import Login from "./Login";
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import Logged from "./Logged";


export default async function Nav() {
  const session = await getServerSession(authOptions)

  return (
    <nav className="flex justify-between items-center py-8 px-6">
        <Link href={'/'}>
            <h1 className="text-black font-bold text-xl">Send it.</h1>
        </Link>
        <ul className="flex items-center">
          {!session?.user && <Login />}
          {session?.user && <Logged image={session.user?.image || " "}   />}
        </ul>
    </nav>
  );
}
