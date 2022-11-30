import "./Search.css";
import { useRef, useState } from "react";
import { getActiveToken } from "../utils/getActiveToken";
import { useSearchBox } from "react-instantsearch-hooks";
// import { Autocomplete } from "./Autocomplete.jsx";
import getCaretCoordinates from "textarea-caret";
import AutoComplete from "./AutoComplete";
function Search({ hideSearchHandler }) {
  const inputRef = useRef();
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const { refine } = useSearchBox();

  const { top, height } = inputRef.current
    ? getCaretCoordinates(inputRef.current, inputRef.current.selectionEnd)
    : { top: 0, height: 0 };

  const handleInput = () => {
    const { value, selectionEnd = 0 } = inputRef.current;
    const { word } = getActiveToken(value, selectionEnd);
    const shouldOpenAutocomplete = /^@\w{1,15}$/.test(word);
    setShowAutocomplete(shouldOpenAutocomplete);
    shouldOpenAutocomplete && refine(word.slice(1));
  };

  const handleSelection = (userHandle) => {
    const { value, selectionEnd = 0 } = inputRef.current;
    const { word, range } = getActiveToken(value, selectionEnd);
    const [index] = range;

    const prefix = value.substring(0, index);
    const suffix = value.substring(index + word.length);

    const newText = prefix + `@${userHandle}` + suffix;

    inputRef.current.value = newText;
    inputRef.current.focus();

    setShowAutocomplete(false);
  };

  return (
    <>
      <div className="blur-effect" onClick={hideSearchHandler}></div>
      <div className="searchModal">
        <header className="search-header">
          <form className="search-form">
            <label htmlFor="search" className="search-label">
              <svg
                width="20"
                height="20"
                className="Search-Icon"
                viewBox="0 0 20 20"
              >
                <path
                  d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                  stroke="currentColor"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
            <input
              type="search"
              className="search-input"
              onKeyUp={handleInput}
              ref={inputRef}
              placeholder="Search Here..."
            />

            <button type="reset" className="search-reset" />
          </form>
          <button type="reset" className="search-cancel" aria-label="Cancel" />
        </header>
        {/* search down */}
        <div className="DocSearch-Dropdown">
          <div className="DocSearch-Hit-source">Recent</div>
          {showAutocomplete && (
            <AutoComplete
              handleSelection={handleSelection}
              top={`${top + height}px`}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
