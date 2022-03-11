import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  //引数のid.押されたときにどのユーザーが押されたかを認識するため。
  onClick: (id: number) => void;
};

//memoは全体を囲う。
export const UserCard: FC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: 0.8 }}>
    <Stack textAlign="center">
      <Image
        boxSize="160px"
        borderRadius="full"
        alt={userName}
        m="auto"
        src={imageUrl}
        onClick={() => onClick(id)}
      />
      <Text fontSize="lg" fontWeight="bold" >{userName}</Text>
      <Text fontSize="sm" color="gray">{fullName}</Text>
    </Stack>
  </Box>
  );
});
