import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: () => void;
};

//memoは全体を囲う。
export const UserCard: FC<Props> = memo((props) => {
  const { imageUrl, userName, fullName, onClick } = props;
  return (
    <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: 0.8 }}>
    <Stack textAlign="center">
      <Image
        boxSize="160px"
        borderRadius="full"
        alt={userName}
        m="auto"
        src={imageUrl}
        onClick={onClick}
      />
      <Text fontSize="lg" fontWeight="bold" >{userName}</Text>
      <Text fontSize="sm" color="gray">{fullName}</Text>
    </Stack>
  </Box>
  );
});
