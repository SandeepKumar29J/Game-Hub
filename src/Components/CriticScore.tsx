import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} paddingX="4px" borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
