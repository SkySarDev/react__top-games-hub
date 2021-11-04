import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import * as routes from "utils/constants";

import GameInfoParagraph from "components/SingleGamePageComponents/GameInfoParagraph";
import GameInfoValueList from "components/SingleGamePageComponents/GameInfoValueList";

const GameInfoBlock = ({
  released,
  website,
  developers,
  publishers,
  platforms,
}) => {
  return (
    <>
      {released && (
        <GameInfoParagraph title={"Release date"}>
          <Link to={`${routes.ROUTE_CALENDAR}/${released}`}>{released}</Link>
        </GameInfoParagraph>
      )}

      {website && (
        <GameInfoParagraph title={"Website"}>
          <a href={website} target={"_blank"} rel={"noreferrer"}>
            {website}
          </a>
        </GameInfoParagraph>
      )}

      {!!developers.length && (
        <GameInfoParagraph title={"Developers"}>
          <GameInfoValueList
            route={routes.ROUTE_DEVELOPERS}
            array={developers}
          />
        </GameInfoParagraph>
      )}

      {!!publishers.length && (
        <GameInfoParagraph title={"Publishers"}>
          <GameInfoValueList
            route={routes.ROUTE_PUBLISHERS}
            array={publishers}
          />
        </GameInfoParagraph>
      )}

      {!!platforms.length && (
        <GameInfoParagraph title={"Platforms"}>
          <GameInfoValueList
            route={routes.ROUTE_PLATFORMS}
            array={platforms}
            objProp={"platform"}
          />
        </GameInfoParagraph>
      )}
    </>
  );
};

GameInfoBlock.propTypes = {
  released: PropTypes.string,
  website: PropTypes.string,
  metacritic: PropTypes.number,
  metacritic_url: PropTypes.string,
  developers: PropTypes.array,
  publishers: PropTypes.array,
  platforms: PropTypes.array,
};

export default GameInfoBlock;
