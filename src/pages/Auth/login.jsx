import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoginImage from "../../assets/imgs/login-img.png";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  // حالات الإدخال البسيطة (يمكن تطويرها لاحقًا)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (role) => {
    // تسجيل دخول وهمي
    setUser({
      email: email || "test@hr.com",
      role, // "admin" أو "user"
    });

    // توجيه حسب الدور
    navigate(role === "admin" ? "/admin/dashboard" : "/user/profile");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // مثال: لو بدك تستعمل الادخال من الفورم، ممكن تضيف تحقق هنا
    // هلا بس نستخدم "user" كدور افتراضي للتجربة
    handleLogin("user");
  };

  return (
    <>
      <Helmet>
        <title>Login | HR Dashboard</title>
        <meta name="description" content="Login to the HR management system" />
      </Helmet>
      <div className="flex flex-col md:flex-row min-h-screen font-sans">
        {/* Left Side - Login */}
        <div className="w-full md:w-1/2 bg-white px-[20px] md:pl-[50px] md:pr-10 py-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#61A3BA] font-nunito mb-[40px] md:mb-[68px]">
            Login
          </h2>
          <p className="text-[#B5C8CE] mb-[40px] md:mb-[68px]">
            Login your account
          </p>

          <form onSubmit={onSubmit}>
            {/* Email */}
            <div className="relative mb-[29px]">
              <label
                htmlFor="email"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-[#B5C8CE] z-10"
              >
                E-mail or phone number
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-[#D2D2D2] rounded-[9px] px-3 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#61A3BA]"
              />
            </div>

            {/* Password */}
            <div className="relative mb-[40px] md:mb-[68px]">
              <label
                htmlFor="password"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-[#B5C8CE] z-10"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-[#D2D2D2] rounded-[9px] px-3 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#61A3BA]"
              />
            </div>

            {/* Remember + Reset */}
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center text-sm text-gray-600 mb-[29px] gap-2">
              <label className="flex items-center">
                <input type="checkbox" className="accent-[#61A3BA] mr-1" />
                Remember me
              </label>
              <a href="#" className="text-sky-600 hover:underline">
                Reset Password?
              </a>
            </div>

            {/* Sign in button */}
            <button
              className="w-full h-[60px] bg-[#61A3BA] text-white rounded-[10px] p-[10px] text-lg font-semibold mb-6"
              type="submit"
            >
              Sign in
            </button>
          </form>

          {/* أزرار تسجيل دخول وهمي بدور مختلف */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleLogin("admin")}
              className="bg-blue-600 text-white px-6 py-3 rounded"
              type="button"
            >
              Login as Admin
            </button>

            <button
              onClick={() => handleLogin("user")}
              className="bg-green-600 text-white px-6 py-3 rounded"
              type="button"
            >
              Login as User
            </button>
          </div>
        </div>

        {/* Right Side - Image (hidden on mobile) */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src={LoginImage}
            alt="Login visual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#DAB943]/20"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
