import React from "react";
import { useHits } from "react-instantsearch-hooks";

export const AutoComplete = () => {
  const { hits } = useHits();
  return (
    <>
      {hits.map((hit) => (
        <ul
          role="listbox"
          aria-labelledby="docsearch-label"
          id="docsearch-list"
        >
          <li
            className="DocSearch-Hit"
            id="docsearch-item-0"
            role="option"
            aria-selected="false"
          >
            <a
              data-no-markdown-link="true"
              className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone css-181jdww"
              href="/search"
            >
              <div className="DocSearch-Hit-Container">
                <div className="DocSearch-Hit-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path
                      d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4"
                      stroke="currentColor"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="DocSearch-Hit-content-wrapper">
                  <span className="DocSearch-Hit-title">{hit.index_name}</span>
                </div>
                <div className="DocSearch-Hit-action">
                  <svg
                    className="DocSearch-Hit-Select-Icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <g
                      stroke="currentColor"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M18 3v4c0 2-2 4-4 4H2" />
                      <path d="M8 17l-6-6 6-6" />
                    </g>
                  </svg>
                </div>
              </div>
            </a>
          </li>

          <li
            className="DocSearch-Hit DocSearch-Hit--Child"
            id="docsearch-item-1"
            role="option"
            aria-selected="false"
          >
            <a
              data-no-markdown-link="true"
              className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone css-181jdww"
              href="/x/react-data-grid/components/#overriding-components"
            >
              <div className="DocSearch-Hit-Container">
                <svg className="DocSearch-Hit-Tree" viewBox="0 0 24 54">
                  <g
                    stroke="currentColor"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M8 6v42M20 27H8.3" />
                  </g>
                </svg>
                <div className="DocSearch-Hit-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path
                      d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z"
                      stroke="currentColor"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="DocSearch-Hit-content-wrapper">
                  <span className="DocSearch-Hit-title">
                    {hit.selectors.lvl0}
                  </span>
                  {/* <span className="DocSearch-Hit-path">{hit.hierarchy.text}</span> */}
                </div>
                <div className="DocSearch-Hit-action">
                  <svg
                    className="DocSearch-Hit-Select-Icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <g
                      stroke="currentColor"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M18 3v4c0 2-2 4-4 4H2" />
                      <path d="M8 17l-6-6 6-6" />
                    </g>
                  </svg>
                </div>
              </div>
            </a>
          </li>
        </ul>
      ))}
    </>
  );
};
export default AutoComplete;
