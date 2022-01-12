import { Form } from "remix";
import { FaSearch } from "react-icons/fa";

export default function SearchBox({ q }: { q: string }) {
  return (
    <Form action="/search" method="get">
      <div className="searchbox__container">
        <div className="searchbox__input-wrapper">
          <input
            placeholder="Enter something to search..."
            type="text"
            name="q"
            className="searchbox__searchbox"
            defaultValue={q}
          />
          <div className="searchbox__search-button-wrapper">
            <button type="submit" className="searchbox__search-button">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
}
