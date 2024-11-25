import type { SearchableEntry } from "@/types"
import Fuse from "fuse.js";
import React, { useEffect, useRef, useState } from "react";
import config from "@/config/config.json";
import { plainify } from "@/lib/utils/textConverter";

interface Props {
  searchList: SearchableEntry[];
}

interface SearchResult {
  item: SearchableEntry;
  refIndex: number;
}

// This is used because docs doesn't use the {collection}/{id} structure
const getPath = (path: string) => {
  return path.replace("src/content/", "").replace("/index", "").replace(/\.mdx?$/, "");
};

const Search = ({ searchList }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

  const fuse = new Fuse(searchList, {
    keys: ["data.title", "data.description", "id", "collection", "body"],
    includeMatches: true,
    minMatchCharLength: 3,
    threshold: 0.5,
  });

  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr) setInputVal(searchStr);

    setTimeout(function () {
      inputRef.current!.selectionStart = inputRef.current!.selectionEnd =
        searchStr?.length || 0;
    }, 50);
  }, []);

  useEffect(() => {
    let inputResult = inputVal.length > 2 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);

    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    } else {
      history.pushState(null, "", window.location.pathname);
    }
  }, [inputVal]);

  return (
    <section className="section-sm">
      <div className="container">
        <div className="row mb-10 justify-center">
          <div className="lg:col-8 px-0">
            <div className="flex flex-nowrap">
              <input
                className="w-full glass rounded px-6 py-4 text-dark placeholder:text-light dark:placeholder:text-darkmode-light focus:border-darkmode-light focus:ring-transparent dark:text-darkmode-light"
                placeholder="search posts"
                type="search"
                name="search"
                value={inputVal}
                onChange={handleChange}
                autoComplete="off"
                autoFocus
                ref={inputRef}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {searchResults?.length < 1 ? (
            <div className="lg:col-8 mx-auto p-2 text-center glass rounded-md">
              <p>
                {inputVal.length < 1
                  ? "Looking for something?"
                  : "We couldn't find what you searched for. Try searching again."}
              </p>
            </div>
          ) : (
            searchResults?.map(({ item }, index) => (
              <div className="py-2 px-2 md:col-6 " key={`search-${index}`}>
                <div className="h-full glass rounded-lg p-4">
                  <h4 className="mb-2">
                    <a href={getPath(item.filePath)}>
                      {item.data.title}
                    </a>
                  </h4>
                  { item.data.description && (
                    <p className="">{item.data.description}</p>
                  )}
                  {  !item.data.description && item.data.autodescription && (
                    <p className="">{plainify(item.body?.slice(0, Number(config.settings.summary_length)))}</p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
