import {
  Link
} from "react-router-dom"
const AuthLayout = (props) => {
  const {
    children,
    heading,
    type
  } = props
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50">
      <div className="w-full max-w-xs md:max-w-[450px] p-6  border border-slate-200 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{heading}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, plis enter your details
        </p>
        {children}
        <p className="text-center text-sm mt-8">
          {type === 'login'? "Don't have an account? ": "Have an account? "}
          <Link to={type === 'login' ? "/register": "/login"} className="font-bold text-blue-700"> {type === "login" ? "Register": "Login"}</Link>
        </p>
      </div>
    </div>
  );
};
export default AuthLayout