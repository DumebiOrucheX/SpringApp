import "../css/comp.css";
import comp4 from "../images/comp4+.png";
import searchIcon from "../images/search-icon.png";

const Comp4 = () => {
  return (
    <section className="comp4">
      <img
        src={comp4}
        className="comp4-img"
        alt="Component Image"
      />
      <div className="text-container">
        <p className="text">
          Latest advanced technologies under the hood to ensure that
          everything works like a charm.
        </p>
        <div className="search-bar">
          <input
            type="search"
            placeholder="Learn more"
            className="search-input"
          />
          <button className="search-button">
            <img src={searchIcon} alt="Search Icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comp4;