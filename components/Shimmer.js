const Shimmer = () => {
  const shimmerCard = Array(12).fill(null);
  return (
    <div className="shimmer">
      {/* <div className="contents">
        
        <img
          src="http://static.demilked.com/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-11.gif"
          className="shimmer-gif"
        ></img>
      </div> */}
      {shimmerCard.map((_, index) => (
        <div key={index} className="shimmer-cards"></div>
      ))}
    </div>
  );
};
export default Shimmer;
