import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import * as routes from "utils/constants";

import GameInfoParagraph from "components/SingleGamePageComponents/GameInfoParagraph";
import GameInfoValueList from "components/SingleGamePageComponents/GameInfoValueList";
import MetacriticScore from "components/UI/MetacriticScore";

const GameInfoBlock = ({
  released,
  website,
  metacritic,
  metacritic_url,
  developers,
  publishers,
  platforms,
}) => {
  return (
    <>
      <GameInfoParagraph title={"Release date"}>
        <Link to={`${routes.ROUTE_CALENDAR}/${released},${released}`}>
          {released}
        </Link>
      </GameInfoParagraph>

      {website && (
        <GameInfoParagraph title={"Website"}>
          <a href={website}>{website}</a>
        </GameInfoParagraph>
      )}

      <GameInfoParagraph title={"Developers"}>
        <GameInfoValueList route={routes.ROUTE_DEVELOPERS} array={developers} />
      </GameInfoParagraph>

      <GameInfoParagraph title={"Publishers"}>
        <GameInfoValueList route={routes.ROUTE_PUBLISHERS} array={publishers} />
      </GameInfoParagraph>

      <GameInfoParagraph title={"Platforms"}>
        <GameInfoValueList
          route={routes.ROUTE_PLATFORMS}
          array={platforms}
          objProp={"platform"}
        />
      </GameInfoParagraph>

      {metacritic && metacritic_url && (
        <GameInfoParagraph title={"Metacritic"}>
          <a href={metacritic_url}>
            <MetacriticScore score={metacritic} />
          </a>
        </GameInfoParagraph>
      )}
    </>
  );
};

GameInfoBlock.propTypes = {
  released: PropTypes.string.isRequired,
  website: PropTypes.string,
  metacritic: PropTypes.number,
  metacritic_url: PropTypes.string,
  developers: PropTypes.array.isRequired,
  publishers: PropTypes.array.isRequired,
  platforms: PropTypes.array.isRequired,
};

export default GameInfoBlock;
