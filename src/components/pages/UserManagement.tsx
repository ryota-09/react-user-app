import { FC, memo } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../../components/pages/organisms/user/UserCard"
//memoは全体を囲う。
export const UserManagement: FC = memo(() => {
  return (
    <Wrap p={{base: 4, md: 10}}>
      <WrapItem>
        <UserCard imageUrl="https://source.unsplash.com/random" userName="鈴木" fullName="たろう"/>
      </WrapItem>
    </Wrap>
  );
});
