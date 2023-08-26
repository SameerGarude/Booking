import { useNavigate } from "react-router-dom";
import "./searchItem.css";

const SearchItem = () => {
  const navigate = useNavigate();

  const handleAvailability = () => {
    navigate("/hotels/:id");
  };
  return (
    <div className="SearchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=33621634dada92e85921bb6f35dec74fb6123d58e193940033ed108b7fe9db1e&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from Airport</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 22m² 1 large double bed
        </span>
        <span className="siCancelOp">FREE cancellation</span>
        <span className="siCancelOpSubtitle ">
          You can cancel later , so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹2,10,000</span>
          <span className="siTaxOp">Includes GST and fees.</span>
          <button onClick={handleAvailability} className="siCheckButton">
            See availability{" >"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
