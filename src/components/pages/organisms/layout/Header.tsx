import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { MenuIconButton } from "../../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../../molecules/MenuDrawer";

//memoは全体を囲う。
export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  //useCallbackは第二引数必須。変更する変数などを入れる。
  const onClickHome = useCallback(() => {
    history.push("/home");
  }, [history]);
  const onClickUserManagement = useCallback(() => {
    history.push("/home/user_management");
  }, [history]);
  const onClickSetting = useCallback(() => {
    history.push("/home/setting");
  }, [history]);

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
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
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
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>

          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
