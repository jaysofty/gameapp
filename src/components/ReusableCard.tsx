import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "./services/image-url";
import Emoji from "./Emoji";

interface Props {
  games: Game;
}

const ReusableCard = ({ games }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(games.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={games.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={games.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {games.name}
            <Emoji rating={games.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default ReusableCard;
