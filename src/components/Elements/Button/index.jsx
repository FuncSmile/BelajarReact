const Button = (props) => {
  const { children = "blmDiIsi", classname = "bg-slate-100 text-black" } = props;
  return (
    <button className={`px-4 py-2 ${classname} text-white rounded-lg font-bold`}>
      {children}
    </button>
  );
};
export default Button;
