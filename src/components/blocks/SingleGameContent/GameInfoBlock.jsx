import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import * as routes from "utils/constants";

import GameInfoParagraph from "./GameInfoParagraph";
import GameInfoValueList from "./GameInfoValueList";
import SectionTitle from "components/UI/SectionTitle";

const GameInfoBlock = ({
  released,
  website,
  developers,
  publishers,
  platforms,
}) => {
  return (
    <div>
      <SectionTitle bottom={10}>Game info</SectionTitle>

      {released && (
        <GameInfoParagraph title={"Release date"}>
          <Link
            to={`${routes.ROUTE_RELEASE_CALENDAR}?dates=${released},${released}`}
          >
            {released}
          </Link>
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
          <GameInfoValueList queryParam={"developers"} array={developers} />
        </GameInfoParagraph>
      )}

      {!!publishers.length && (
        <GameInfoParagraph title={"Publishers"}>
          <GameInfoValueList queryParam={"publishers"} array={publishers} />
        </GameInfoParagraph>
      )}

      {!!platforms.length && (
        <GameInfoParagraph title={"Platforms"}>
          <GameInfoValueList
            queryParam={"platforms"}
            array={platforms}
            objProp={"platform"}
          />
        </GameInfoParagraph>
      )}
    </div>
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
