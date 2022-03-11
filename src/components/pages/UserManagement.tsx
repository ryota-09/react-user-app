/* eslint-disable react-hooks/exhaustive-deps */
import { FC, memo, useCallback, useEffect } from "react";
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { UserCard } from "../../components/pages/organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "./organisms/user/UserDetailModal";
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
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
