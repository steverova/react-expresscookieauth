import unautorizedImage from "../assets/svg/Unauthorized.svg";

function Unauthorized() {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-row justify-center p-12 h-4/6 ">
        <img src={unautorizedImage} alt="Unauthorized" />
      </div>
      <h1>Unauthorized</h1>
      <p>You are not authorized to view this resource.</p>
      <button className="border px-5 py-2 rounded-lg" type="button">
        <a href="/signup">Sign Up</a>
      </button>
    </div>
  );
}

export default Unauthorized;
