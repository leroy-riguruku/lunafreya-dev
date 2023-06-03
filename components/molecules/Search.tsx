import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
const Search = () => {
  return (
    <div className={`bg-neutral w-100 rounded-2xl`}>
      <div className="ml-4 mr-6 flex h-10 items-center ">
        <MagnifyingGlassIcon className="mr-2 h-5 w-5 text-gray-500" />
        <input type="text" placeholder="Search" className="bg-neutral w-full" />
      </div>
    </div>
  );
};

export default Search;
