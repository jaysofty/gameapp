import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import ReusableCard from "./ReusableCard";
// import SpinnerComponent from "./spinner";
import GameCardSkeleton from "./GameCardSkeleton";
import CardContainer from "./CardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data, loading } = useGames(gameQuery);
  console.log(data);
  const Skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text color="red.100">{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {/* {loading && <SpinnerComponent />} */}
      {loading &&
        Skeletons.map((Skeleton) => (
          <CardContainer key={Skeleton}>
            <GameCardSkeleton />
          </CardContainer>
        ))}
      {data.map((game) => (
        <CardContainer key={game.id}>
          <ReusableCard games={game} />
        </CardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
