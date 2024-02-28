import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh-emoji.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  //index signature. telling the compiler this object can have different types of keys which can be numbers
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "22px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "22px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
