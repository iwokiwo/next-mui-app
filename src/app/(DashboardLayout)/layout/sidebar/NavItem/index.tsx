/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import React from "react";
// mui imports
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  useTheme,
  ListItemButton, Collapse,
} from "@mui/material";

import Link from "next/link";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import { IconPoint } from "@tabler/icons-react";
import {useTranslation} from "react-i18next";

type NavGroup = {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: any;
  type?: any;
  children?: Array<any>;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
};

interface ItemType {
  item: NavGroup;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  hideMenu?: any;
  level?: number | any;
  pathDirect: string;
}

const NavItem = ({ item, level, pathDirect, onClick }: ItemType) => {
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon = <Icon stroke={1.5} size="1.3rem" />;

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const renderIcon = ({data}:any) => {
    console.log("data",data)
    // const Icon = data;
    // const itemIcon = <Icon stroke={1.5} size="1.3rem" />;
    return data
  };

  const ListItemStyled = styled(ListItem)(() => ({
    padding: 0,
    ".MuiButtonBase-root": {
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "8px 10px",
      borderRadius: "8px",
      backgroundColor: level > 1 ? "transparent !important" : "inherit",
      color: theme.palette.text.secondary,
      paddingLeft: "10px",
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: "white",
        },
      },
    },
  }));

  const { t } = useTranslation()

  return (
      <List component="div" disablePadding key={item.id}>
        <ListItemStyled>
          {item.type ==="group" ?
              <List
                  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
              >
                <ListItemButton
                    disabled={item.disabled}
                    selected={pathDirect === item.href}
                    onClick={handleClick}>
                  <ListItemIcon
                      sx={{
                        minWidth: "36px",
                        p: "3px 0",
                        color: "inherit",
                      }}
                  >
                    {itemIcon}
                  </ListItemIcon>
                  <ListItemText>
                    <>{t(`${item.title}`)}</>
                  </ListItemText>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" sx={{ml: 1}}>
                    {item.children?.map( data =>

                        <ListItemButton
                            component={Link}
                            href={data.href}
                            disabled={data.disabled}
                            selected={pathDirect === data.href}
                            target={data.external ? "_blank" : ""}
                            onClick={onClick}
                        >
                          <ListItemIcon
                              sx={{
                                minWidth: "36px",
                                p: "3px 0",
                                color: "inherit",
                              }}
                          >
                            {/* {renderIcon(data)} */}
                            <IconPoint />

                          </ListItemIcon>
                          <ListItemText>
                            <>{t(`${data.title}`)}</>
                          </ListItemText>
                        </ListItemButton>
                    )}
                  </List>
                </Collapse>
              </List>
              :
              <ListItemButton
                  component={Link}
                  href={item.href}
                  disabled={item.disabled}
                  selected={pathDirect === item.href}
                  target={item.external ? "_blank" : ""}
                  onClick={onClick}
              >
                <ListItemIcon
                    sx={{
                      minWidth: "36px",
                      p: "3px 0",
                      color: "inherit",
                    }}
                >
                  {itemIcon}
                </ListItemIcon>
                <ListItemText>
                  <>{t(`${item.title}`)}</>
                </ListItemText>
              </ListItemButton>
          }



        </ListItemStyled>
      </List>
  );
};

export default NavItem;
