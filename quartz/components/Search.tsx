import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/search.scss"
// @ts-ignore
import script from "./scripts/search.inline"
import { classNames } from "../util/lang"

export default (() => {
  function Search({ displayClass }: QuartzComponentProps) {
    return (
      <div class={classNames(displayClass, "search")}>
        <div id="search-icon">
          <p>Buscar</p>
          <div></div>
          <svg
            tabIndex={0}
            aria-labelledby="title desc"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.9 19.7"
          >
            <title id="title">Buscar</title>
            <desc id="desc">Buscar</desc>
            <g class="search-path" fill="none">
              <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
              <circle cx="8" cy="8" r="7" />
            </g>
          </svg>
        </div>
        <div id="search-container">
          <div id="search-space">
            <input
              autocomplete="off"
              id="search-bar"
              name="search"
              type="text"
              aria-label="Busca sobre algo"
              placeholder="Busca sobre algo"
            />
            <div id="results-container"></div>
          </div>
        </div>
      </div>
    )
  }

  Search.afterDOMLoaded = script
  Search.css = style

  return Search
}) satisfies QuartzComponentConstructor
