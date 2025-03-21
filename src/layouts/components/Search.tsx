import { CiSearch } from 'react-icons/ci'
export const Search = () => {
    return (
        <div className="mr-0 flex h-[54px] w-[520px] items-center rounded-full bg-[#F8F9FB] px-2 shadow-md">
            <input
                type="text"
                className="my-2 ml-4 w-full border-none outline-none"
                placeholder="Tìm kiếm"
            />
            <button className="m-4 flex items-center justify-center">
                <CiSearch className="text-xl" />
            </button>
        </div>
    )
}
