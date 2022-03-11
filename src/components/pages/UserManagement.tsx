/* eslint-disable react-hooks/exhaustive-deps */
import { FC, memo, useCallback, useEffect } from "react";
import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { UserCard } from "../../components/pages/organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
//memoは全体を囲う。
export const UserManagement: FC = memo(() => {
  const { getUsers, loading, userList } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();

  //画面表示時の処理(created(){})
  useEffect(() => {
    getUsers();
  }, []);

  const onClickUser = useCallback(() => {
    onOpen();
  }, []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {userList.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value="鈴木" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value="鈴木" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>mail</FormLabel>
                <Input value="鈴木" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>Tel</FormLabel>
                <Input value="鈴木" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
});
