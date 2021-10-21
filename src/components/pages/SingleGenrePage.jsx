import React from "react";
import PropTypes from "prop-types";

const SingleGenrePage = ({ data }) => {
  return (
    <div>
      <h1 style={{ fontSize: 30 }}>{data.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.description }} />
      <ul>
        {data.results.map((game) => {
          return (
            <li key={game.id} style={{ border: "1px solid grey", padding: 10 }}>
              {game.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SingleGenrePage;

SingleGenrePage.propTypes = {
  data: PropTypes.object.isRequired,
};
