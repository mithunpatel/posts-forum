import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";

const Search = (props) => {
    const [search, setSearch] = useState("");
    const [searched, setSearched] = useState("");
    const [error, setError] = useState("")
    useEffect(() => {
        if (search.length > 1) {
            axios
              .get(`https://jsonplaceholder.typicode.com/users?name=${search}`)
              .then(
                (response) => {
                  if (response.data.length) {
                    setSearched(response.data);
                  } else {
                    setSearched("");
                    setError("No search found");
                  }
                },
                (error) => {
                  console.log(error);
                }
              );
            return () => {
              // cleanup
            };
        }
    }, [search])

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by name..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          {searched.length ? (
            <div>
              {searched.map((ele, i) => (
                <div key={i} className="searched-item">
                  <h4>{searched[0].username}</h4>
                  <h6>{searched[0].email}</h6>
                </div>
              ))}
            </div>
          ) : <p>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Search;
