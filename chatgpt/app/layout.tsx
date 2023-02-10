import SessionProvider from "../components/SessionProvider";
import "../styles/globals.css";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";
import Sidebar from "../components/SideBar";
import { getServerSession } from "next-auth";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  console.log(session);
  
  
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] max-w-xs md:h-screen  md:overflow-y-auto md:min-w-[20rem]">
                <Sidebar />
              </div>
              {/* Client Provider - Notification */}
              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
