import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { User } from "../types/api/user";

type LoginUserContextType = {
  loginUser: User | null;
  //contextの更新関数の書き方。
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};
//asを使って強制的にこの型を指定している。
const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);
//直接typeを作っているイメージ。
export const LoginUserProvider = ( props: { children: ReactNode } ) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);
  return (
    //setLoginUserの再レンダリング問題があるので、必要に応じて、コンテキストを複数作っても良い。
    // コンテキストはvalueで変数と更新関数を渡す必要がある。
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }} >
      { children }
    </LoginUserContext.Provider>
  );
}
