import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, memo } from "react";

import { MenuIconButton } from "../../../atoms/button/MenuIconButton";

//memoは全体を囲う。
export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* // asでHTMLタグを指定。 */}
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        // この数字はchakuraUI特有のもの。Spacingに書かれている。
        padding={{ base: 3, md: 5 }}
      >
        {/* HTMLのh1,h2みたいな表現ができるコンポーネント。md はchakuraUI特有の画面サイズ管理単位。 プロパティのmdはレスポンシブのブレイクポイント。*/}
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          {/* これはdivタグみたいな役割 pr...padding-right*/}
          <Box pr={4}>
            {/* これはchakuraUIのLINKタグ(react-routerの方ではない) */}
            <Link>ユーザー一覧</Link>
          </Box>

          <Link>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      {/* placementはどこから出現させるかを表す。 */}
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        {/* これはドロアーを開いた時、後ろを暗くする。 */}
        <DrawerOverlay>
          <DrawerContent>
            {/* p...padding  w...width */}
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%">TOP</Button>
              <Button w="100%">ユーザー一覧</Button>
              <Button w="100%">設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
