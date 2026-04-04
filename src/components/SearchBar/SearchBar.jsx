
import { useState } from "react";
import "./SearchBar.scss";

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export default function SearchBar({ onSearch }) {
  const [activeField, setActiveField] = useState(null);
  const [where, setWhere] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = () => {
    onSearch?.({ where, checkIn, checkOut, guests });
  };

  const fieldClass = (name) =>
    ["search-bar__field", activeField === name ? "search-bar__field--active" : ""]
      .filter(Boolean)
      .join(" ");

  return (
    <div className="search-bar">
      {/* Where */}
      <div
        className={fieldClass("where")}
        onClick={() => document.getElementById("sb-where").focus()}
      >
        <div className="search-bar__label">Where</div>
        <input
          id="sb-where"
          className="search-bar__input"
          placeholder="Search destinations"
          value={where}
          onChange={(e) => setWhere(e.target.value)}
          onFocus={() => setActiveField("where")}
          onBlur={() => setActiveField(null)}
        />
      </div>

      <div className="search-bar__divider" />

      {/* Check in */}
      <div
        className={`${fieldClass("checkin")} search-bar__field--compact`}
        onClick={() => document.getElementById("sb-checkin").focus()}
      >
        <div className="search-bar__label">Check in</div>
        <input
          id="sb-checkin"
          className="search-bar__input search-bar__input--short"
          placeholder="Add dates"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          onFocus={() => setActiveField("checkin")}
          onBlur={() => setActiveField(null)}
        />
      </div>

      <div className="search-bar__divider" />

      {/* Check out */}
      <div
        className={`${fieldClass("checkout")} search-bar__field--compact`}
        onClick={() => document.getElementById("sb-checkout").focus()}
      >
        <div className="search-bar__label">Check out</div>
        <input
          id="sb-checkout"
          className="search-bar__input search-bar__input--short"
          placeholder="Add dates"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          onFocus={() => setActiveField("checkout")}
          onBlur={() => setActiveField(null)}
        />
      </div>

      <div className="search-bar__divider" />

      {/* Who + Search */}
      <div
        className={`${fieldClass("who")} search-bar__field--last`}
        onClick={() => document.getElementById("sb-guests").focus()}
      >
        <div className="search-bar__who">
          <div className="search-bar__label">Who</div>
          <input
            id="sb-guests"
            className="search-bar__input search-bar__input--guests"
            placeholder="Add guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            onFocus={() => setActiveField("who")}
            onBlur={() => setActiveField(null)}
          />
        </div>

        <button
          className="search-bar__btn"
          onClick={(e) => {
            e.stopPropagation();
            handleSearch();
          }}
          aria-label="Search"
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}