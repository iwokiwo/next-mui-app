/**
 * @author I Wayan Bayu Nugroho
 * @email iwokiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */


import { Card } from "@mui/material";

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
};

const BlankCard = ({ children, className }: Props) => {
  return (
    <Card
      sx={{ p: 0, position: "relative" }}
      className={className!}
      elevation={9}
      variant={undefined}
    >
      {children}
    </Card>
  );
};

export default BlankCard;
