import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col justify-center items-center bg-slate-100 min-h-screen gap-8">
            <h1 className="text-5xl font-bold text-red-500">Oops!</h1>
            <p className=" text-gray-400">Sorry, an unexpected error has occurred.</p>
            <p>{error.statusText || error.message}</p>
            <Link to="/" className="text-blue-500 underline ">Go to Home</Link>  
        </div>
    );
};
export default ErrorPage;
