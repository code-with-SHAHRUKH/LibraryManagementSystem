
const Button = ({ type, label, additionalClasses = "", onClick }) => (
    <button
      type={type}
      className={`rounded-md px-7 py-2 text-lg font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 ${additionalClasses}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
  export default Button