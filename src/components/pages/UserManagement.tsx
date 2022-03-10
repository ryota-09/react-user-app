import { FC, memo, useEffect } from "react";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../../components/pages/organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
//memoは全体を囲う。
export const UserManagement: FC = memo(() => {
  const { getUsers, loading, userList } = useAllUsers();

  //画面表示時の処理(created(){})
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} >
          {userList.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
