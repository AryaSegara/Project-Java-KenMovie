/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "../layout/Layout";
import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookies"

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const redirectUrl = "/dashboard";

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/auth/login?email=` +
        user.email +
        "&password=" +
        user.password +
        "",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
          const expire = new Date()
          expire.setDate(expire.getDate() + 1)
          Cookies.setItem("token", data, { expires: expire });
          navigate(redirectUrl);
        } else {
          alert("Email atau Password salah");
        }
      });
  };

  if (localStorage.getItem("user") !== null) {
    useEffect(() => {
      navigate(redirectUrl);
    });
  } else
    return (
      <Layout>
        <div className="container mx-auto px-2 my-2 flex-colo">
          <div 
          className="w-full 2xl:w-2/5 gap-8 flex-colo p-14 md:w-3/5 bg-dry rounded-lg border borderborder">
            <p className="text-lg font-semibold text-subMain">L O G I N</p>

            <form
              onSubmit={handleSubmit}
              className="w-full flex-col gap-6 space-y-6"
            >
              <div className="w-full text-sm">
                <label className="text-border font-semibold">Email</label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  placeholder="kenmovie@gmail.com"
                  className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
                  value={user.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="w-full text-sm">
                <label className="text-border font-semibold">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  value={user.password}
                  onChange={handleInputChange}
                  className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
                />
              </div>

            <button
              type="submit"
              className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
              >
                <FiLogIn />
                Login
              </button>
            </form>
          </div>
        </div>
      </Layout>
    );
}
