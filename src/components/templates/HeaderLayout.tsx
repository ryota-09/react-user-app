import { FC, memo, ReactNode } from "react";
import { Header } from "../pages/organisms/layout/Header";

//childrenの型はreactNodeを指定する。
type Props = {
  children: ReactNode;
}

//memoは全体を囲う。
export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props
  return (
    <>
      <Header />
      { children }
    </>
  )
});
