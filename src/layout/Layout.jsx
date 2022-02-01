import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10 md:min-h-screen">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clients
        </h2>
        <nav className="mt-10">
          <Link
            to="/"
            className={
              location.pathname === "/clientes"
                ? "text-blue-300 text-2xl block mt-2"
                : "text-white text-2xl block mt-2 hover:text-blue-300"
            }
          >
            Clients
          </Link>
          <Link
            to="/nuevo"
            className={
              location.pathname === "/clientes/nuevo"
                ? "text-blue-300 text-2xl block mt-2"
                : "text-white text-2xl block mt-2 hover:text-blue-300"
            }
          >
            New client
          </Link>
        </nav>
      </div>
      <div className="md:w-3/4 p-10 overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
}
