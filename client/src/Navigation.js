import { NavLink } from "react-router-dom";

function Navigation({ setIsAuthenticated, setUser, user }) {
  console.log(user);

  const logout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setIsAuthenticated(false);
      setUser(null);
    });
  };
  return (
    <div className="shadow-md p-1 grid grid-cols-2 grid-rows-2 border-2">
      <h1 className="text-4xl p-1 col-start-1 row-start-1 font-bold underline underline-offset-4">Mutts Cutts</h1>
      <div className="col-start-2 text-right self-center pr-1">
        <button
          className="bg-slate-600 text-white px-3 py-1 rounded hover:bg-red-600"
          onClick={logout}
        >Logout
        </button>
      </div>
        <div className="row-start-2 self-center p-1">
            <nav>
                <NavLink to="/" className={({ isActive }) => [
                    isActive ? "animate-pulse font-bold hover:text-blue-600" : "text-slate-600 hover:text-blue-600 active:font-bold"
                ]}>Home &nbsp;</NavLink>

                <NavLink to="/appointments" className={({ isActive }) => [
                    isActive ? "animate-pulse font-bold hover:text-blue-600" : "text-slate-600 hover:text-blue-600 active:font-bold"
                ]}>Appointments &nbsp;</NavLink>

                <NavLink to="/book" className={({ isActive }) => [
                    isActive ? "animate-pulse font-bold hover:text-blue-600" : "text-slate-600 hover:text-blue-600 active:font-bold"
                ]}>Book &nbsp;</NavLink>
            </nav>
        </div>
    </div>
  );
}


export default Navigation;

// UNUSED OR MAYBE SAVE FOR LATER-----------------


{/* <NavLink to="/" className="active:font-bold hover:text-blue-600">Home &nbsp;</NavLink> */}
{/* <NavLink to="/appointments" className="active:font-bold hover:text-blue-600">Appointments &nbsp;</NavLink> */}

{/* <h1>
  <Link to="/"> Home</Link>
</h1> */}
{/* {user && user.admin ? (
  <h1>
    <Link to="/newappointment">New Appointment</Link>
  </h1>
) : null} */}
