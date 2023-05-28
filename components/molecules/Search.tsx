import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const Search = () => {
  return (
    <div className={`bg-neutral rounded-2xl w-100`}>
      <div className="h-10 ml-4 mr-6 flex items-center ">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2" />
        <input type="text" placeholder="Search" className="bg-neutral w-full" />
      </div>
    </div>
  );
};

export default Search;
