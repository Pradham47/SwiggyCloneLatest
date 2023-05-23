const Search = (props) => {
  const { useList, useSetFilteredList } = props;
  return (
    <div className="Search">
      <input
        type="search"
        className="search-box"
        id="search-id"
        name="search-box"
        placeholder="Search for Restro Here!"
      ></input>
      <button
        type="submit"
        onClick={() => {
          const box = document.getElementById("search-id");
          const filtered = useList.filter((x) =>
            x?.data?.data?.id != null
              ? x.data.data.name.toLowerCase().includes(box.value.toLowerCase())
              : null
          );
          useSetFilteredList(filtered);
          console.log(filtered);
        }}
      >
        Search
      </button>
    </div>
  );
};
export default Search;
