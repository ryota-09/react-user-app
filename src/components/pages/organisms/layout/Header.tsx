import { FC, memo } from "react";

//memoは全体を囲う。
export const Header: FC = memo(() => {
  return (
    <div style={{height: "50px", backgroundColor: "teal"}}></div>
  )
});
