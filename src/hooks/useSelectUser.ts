import { useCallback, useState } from "react"
import { User } from "../types/api/user";

type Props = {
  id: number;
  userList: Array<User>;
  onOpen: () => void;
}

export const useSelectUser = () => {
  //型でも、または｜の書き方ができる。
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, userList, onOpen } = props;
    console.log(id, userList);
    const targetUser = userList.find((user) => user.id === id);
    //findは見つからない場合undefindを返すから。エラーが出る。??は左辺がundefindだったら、右辺を実行するという意味。
    setSelectedUser(targetUser ?? null);
    onOpen();
  },[])
  return {selectedUser, onSelectUser}
}
