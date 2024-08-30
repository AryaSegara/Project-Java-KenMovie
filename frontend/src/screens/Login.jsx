import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { FiLogIn } from "react-icons/fi";

export default function Login() {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-2 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <p className="text-lg font-semibold text-subMain">L O G I N</p>

          <div className="w-full text-sm">
            <label className="text-border font-semibold">Email</label>
            <input
              type="email"
              placeholder="kenmovie@gmail.com"
              className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            />
          </div>
          <div className="w-full text-sm">
            <label className="text-border font-semibold">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            />
          </div>

          <Link
            to="/dashboard"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full "
          >
            <FiLogIn />
            Login
          </Link>

          <p className="text-center text-border">
            Dont have an account?{" "}
            <Link to="/register" className="text-dryGray font-semibold ml-2 ">
              Register
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
