import { FC, memo } from "react";

//memoは全体を囲う。
export const Home: FC = memo(() => {
  return (
    <p>Homeです</p>
  )
});
