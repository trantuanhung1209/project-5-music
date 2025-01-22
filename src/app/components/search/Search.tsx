"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export const Search = (event: any) => {
    const router = useRouter();
    const searchParams = useSearchParams();
  
    const handleSearch = (event: any) => {
      event.preventDefault();
      const keyword = event.target.keyword.value;
      router.push(`/search?keyword=${keyword}`);
    }
  
    const defaultKeyword = searchParams.get("keyword") || "";

  return (
    <>
      <form
        className="inner-search mt-[20px] mb-[30px] w-full py-[15px] px-[32px] bg-background-secondary flex items-center gap-[20px] rounded-[50px] "
        onSubmit={handleSearch}
      >
        <input
          type="text"
          name="keyword"
          placeholder="Tìm kiếm..."
          className="flex-1 bg-transparent text-white placeholder:text-white outline-none order-2 autofill:bg-background-secondary"
          defaultValue={defaultKeyword}
        />
        <button className="font-[700] text-[22px] order-1 text-white">
          <FaSearch />
        </button>
      </form>
    </>
  );
};
