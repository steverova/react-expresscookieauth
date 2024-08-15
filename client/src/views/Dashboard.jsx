import dashboard from "../assets/ilustrations/dashboard.svg";
import useAuth from "../auth/useAuth";

function Dashboard() {
  const { logOut } = useAuth();
  return (
    <div className="relative h-screen w-screen">
      <button
        onClick={() => logOut()}
        className="absolute top-4 right-4 border bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-lg"
        type="button"
      >
        <a href="/signup">Log out</a>
      </button>
      <div className="flex flex-row justify-center p-12 h-4/6">
        <img src={dashboard} alt="Unauthorized" />
      </div>
      <h1>
        This view can only be seen if the user is logged in, and the
        authentication was correct
      </h1>
    </div>
  );
}

export default Dashboard;
