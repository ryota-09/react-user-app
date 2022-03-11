import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    async (id: string): Promise<void> => {
      try {
        const response = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (response.data) {
          //グローバルに保持できる。
          setLoginUser(response.data);
          showMessage({ title: "ログインしました。", status: "success" });
          history.push("/home");
        } else {
          showMessage({ title: "ユーザーが見つかりません。", status: "error" });
          setLoading(false);
        }
      } catch (error) {
        showMessage({ title: "ログインできません。", status: "error" });
        setLoading(false);
      }
    },
    [history, showMessage, setLoginUser]
  );
  return { login, loading };
};
