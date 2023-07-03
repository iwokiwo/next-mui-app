/**
 * @author I Wayan Bayu Nugroho
 * @email iwokiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */


import {AppBar, Card, styled, Toolbar} from "@mui/material";

type Props = {
    className?: string;
    children: JSX.Element | JSX.Element[];
};

const HeaderMenu = ({ children, className }: Props) => {
    const AppBarStyled = styled(AppBar)(({ theme }) => ({
        width: '101%',
        marginLeft: -2,
        boxShadow: 'none',
        background: theme.palette.background.paper,
        justifyContent: 'center',
        backdropFilter: 'blur(4px)',
        [theme.breakpoints.up('lg')]: {
            minHeight: '20px',
        },
    }));
    const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
        width: '100%',
        color: theme.palette.text.secondary,
    }));

    return (
        <AppBarStyled position="sticky" color="default">
            <ToolbarStyled>
                {children}
            </ToolbarStyled>
        </AppBarStyled>
    );
};

export default HeaderMenu;
