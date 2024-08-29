import { Link } from "react-router-dom";
const RenderNavigationLinks = (items,classNames ,mobile = false) => (
    items.map(({ name, link }) => (
      <Link
        key={name}
        to={link}
        className={classNames(
          mobile
            ? 'block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white text-left'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
        )}
      >
        {name}
      </Link>
    ))
  );
export default RenderNavigationLinks;