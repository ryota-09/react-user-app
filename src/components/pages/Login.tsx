import {
  Box,
  Flex,
  Heading,
  Divider,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react";
import { FC, memo } from "react";

//memoは全体を囲う。
export const Login: FC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        {/* my...Y軸(縦方向)のマージン */}
        <Divider my={4} />
        {/* stackは囲った中を等間隔に配置してくれる。 */}
        <Stack spacing={6} py={4} px={10} >
          <Input placeholder="ユーザーID" />
          <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>ログイン</Button>
        </Stack>
      </Box>
    </Flex>
  );
});
