import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState<Array<User>>([]);
  const { showMessage } = useMessage();

  const getUsers = useCallback(async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.get<Array<User>>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserList(response.data);
    } catch (error) {
      showMessage({ title: "ユーザーの取得に失敗しました。", status: "error" });
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { getUsers, loading, userList };
};
