const AuthLayout = (props) => {
    const {children, heading} = props
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-50">
        <div className="w-full max-w-xs md:max-w-[450px] p-6  border border-slate-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">{heading}</h1>
            <p className="font-medium text-slate-500 mb-8">
                Welcome, plis enter your details
            </p>
            {children}
        </div>
        </div>
    );
};
export default AuthLayout