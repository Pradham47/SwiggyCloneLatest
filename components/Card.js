const Card = (props) => {
    const restro = props;
    const imageId = restro.restro.data.data.cloudinaryImageId;
    return (
      <div className="card">
        <div className="image-container">
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              imageId
            }
          ></img>
        </div>
        <div className="content">
          <h4 className="name">{restro?.restro?.data?.data?.name}</h4>
          <p className="cuisines">
            {restro?.restro?.data?.data?.cuisines.join(",")}
          </p>
          <p className="rating">{restro?.restro?.data?.data.avgRating}⭐</p>
          <p className="rating">₹{restro?.restro?.data?.data.costForTwo/100}</p>
        </div>
      </div>
    );
  };
  
export default Card;
