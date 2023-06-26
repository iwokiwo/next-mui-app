/**
 * @author I Wayan Bayu Nugroho
 * @email iwokiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */
import { createTheme } from '@mui/material/styles'

import './style.css'

declare module '@mui/material/styles' {
    interface TypographyVariants {
        body3: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        body3?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        body3: true;
    }
}

const theme = createTheme()

const palette = {
    primary: {
        main: 'rgba(131, 71, 173, 1)',
        light: 'rgba(131, 71, 173, 0.5)',
        dark: 'rgba(255, 95, 0, 1)',
        contrastText: '#fff'
    },
    secondary: {
        main: 'rgba(255, 95, 0, 1)',
        light: 'rgba(255, 95, 0, 0.5)',
        dark: 'rgba(131, 71, 173, 1)',
        contrastText: '#fff'
    },
    tertiary: {
        main: 'rgba(112, 212, 75, 1)',
        light: 'rgba(112, 212, 75, 0.5)',
        dark: 'rgba(131, 71, 173, 1)',
        contrastText: '#fff'
    },
    success: {
        main: 'rgba(5, 150, 105, 1)',
        light: 'rgba(5, 150, 105, 0.5)',
    },
    text: {
        primary: 'rgba(68, 79, 88, 1)',
        secondary: 'rgba(68, 79, 88, 0.75)',
        disabled: 'rgba(68, 79, 88, 0.5)',
    }
}

export const colors = {
    primary: {
        main: 'rgba(131, 71, 173, 1)',
        o75: 'rgba(131, 71, 173, 0.75)',
        o50: 'rgba(131, 71, 173, 0.50)',
        o25: 'rgba(131, 71, 173, 0.25)'
    },
    secondary: {
        main: 'rgba(255, 95, 0, 1)',
        o75: 'rgba(255, 95, 0, 0.75)',
        o50: 'rgba(255, 95, 0, 0.50)',
        o25: 'rgba(255, 95, 0, 0.25)'
    },
    tertiary: {
        main: 'rgba(112, 212, 75, 1)',
        o75: 'rgba(112, 212, 75, 0.75)',
        o50: 'rgba(112, 212, 75, 0.50)',
        o25: 'rgba(112, 212, 75, 0.25)'
    },
    text: {
        primary: 'rgba(50, 62, 72, 1)',
        o75: 'rgba(50, 62, 72, 0.75)',
        o50: 'rgba(50, 62, 72, 0.50)',
        o25: 'rgba(50, 62, 72, 0.25)'
    },
    error: {
        primary: 'rgba(177, 32, 40, 1)',
        o75: 'rgba(177, 32, 40, 0.75)',
        o50: 'rgba(177, 32, 40, 0.50)',
        o25: 'rgba(177, 32, 40, 0.25)'
    },
    warning: {
        primary: 'rgba(255, 199, 0, 1)',
        o75: 'rgba(255, 199, 0, 0.75)',
        o50: 'rgba(255, 199, 0, 0.50)',
        o25: 'rgba(255, 199, 0, 0.25)'
    },
    info: {
        primary: 'rgba(42, 94, 157, 1)',
        o75: 'rgba(42, 94, 157, 0.75)',
        o50: 'rgba(42, 94, 157, 0.50)',
        o25: 'rgba(42, 94, 157, 0.25)'
    },
    success: {
        primary: 'rgba(5, 150, 105, 1)',
        o75: 'rgba(5, 150, 105, 0.75)',
        o50: 'rgba(5, 150, 105, 0.50)',
        o25: 'rgba(5, 150, 105, 0.25)'
    },
    border: {
        primary: '#EAE7F0'
    },
    body: {
        primary: 'white',
        secondary: '#F8F8F8'
    },
    magnolia: 'rgba(234, 231, 240, 1)',
    cultured: 'rgba(248, 248, 248, 1)'
}

const shape = {
    borderRadius: 5
}

const fontSettings = {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    [theme.breakpoints.up('md')]: {
        fontSize: 16
    },
    h1: {
        fontWeight: 600,
        fontSize: '4.0625rem',
        lineHeight: '5.625rem'
    },
    h2: {
        fontWeight: 600,
        fontSize: '3.125rem',
        lineHeight: '4.375rem'
    },
    h3: {
        fontWeight: 600,
        fontSize: '1.75rem',
        lineHeight: '2.5rem'
    },
    h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: '2.125rem'
    },
    h5: {
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: '1.5625rem'
    },
    h6: {
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: '1.375rem'
    },
    subtitle1: {
        fontWeight: 600,
        fontSize: '0.875rem',
        lineHeight: '1.25rem'
    },
    subtitle2: {
        fontWeight: 600,
        fontSize: '0.75rem',
        lineHeight: '1.0625rem'
    },
    body1: {
        fontSize: '1rem',
        lineHeight: '1.375rem'
    },
    body2: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem'
    },
    body3: {
        fontSize: '0.75rem',
        lineHeight: '1.0625rem',
    },
    caption: {
        fontSize: '0.625rem',
        lineHeight: '0.875rem'
    }
}

const overrides = {
    'html': {
        fontSize: '14px',
        [theme.breakpoints.up('md')]: {
            fontSize: '16px'
        },
    },
    'body': {
        color: palette.text.primary
    },
    '.print-out': {
        zoom: 1
    },
    a: {
        textDecoration: 'none',
        color: palette.primary.main,
        '&:hover': {
            color: palette.primary.dark
        },
        '&.text': {
            color: palette.text.primary,
            '&:hover': {
                color: 'inherit'
            },
        }
    },
    '.middle-border': {
        flexShrink: 0,
        borderWidth: 0,
        borderStyle: 'solid',
        borderBottomWidth: 0,
        height: 'auto',
        borderRightWidth: 'thin',
        borderColor: colors.border.primary
    },
    ':focus-visible': {
        outline: 'none'
    },
    '.btn-text': {
        padding: '0 !important',
        textTransform: 'none !important',
        fontSize: '1rem !important',
        fontWeight: '400 !important',
        '&:hover': {
            color: palette.primary.dark,
            backgroundColor: 'transparent !important'
        }
    },
    '.react-tel-input .form-control:focus': {
        borderColor: `${palette.primary.main} !important`,
        boxShadow: `0 0 0 1px ${palette.primary.main} !important`
    },
    '.d-none': {
        display: 'none !important'
    },
    '.no-margin': {
        margin: '0 !important'
    },
    '.sticky-cell': {
        position: 'sticky',
        left: 0,
        zIndex: `3 !important`,
        backgroundColor: 'white'
    },
    '::-webkit-scrollbar': {
        width: 8,
        height: 8
    },
    '::-webkit-scrollbar-track': {
        boxShadow: `inset 0 0 5px ${colors.border.primary}`,
        borderRadius: 4
    },
    '::-webkit-scrollbar-thumb': {
        background: palette.primary.main,
        borderRadius: 4,
    },
    '.PrivatePickersToolbar-dateTitleContainer': {
        alignItems: 'flex-start'
    },
    '.PrivateTimePickerToolbar-hourMinuteLabel': {
        '.MuiTypography-root': {
            fontSize: '3rem'
        },
        '.MuiTypography-root.Mui-selected': {
            color: colors.primary.main
        }
    },
    '.PrivateTimePickerToolbar-ampmSelection': {
        '& button': {
            padding: theme.spacing(1)
        },
        '.MuiTypography-root.Mui-selected': {
            color: colors.primary.main
        }
    },
    '.ReactCrop .ReactCrop__crop-selection': {
        borderColor: colors.text.primary
    }
}

const components = {
    MuiCssBaseline: {
        styleOverrides: {
            ...overrides
        }
    },
    MuiInput: {
        styleOverrides: {
            underline: {
                marginTop: `${theme.spacing(1)} !important`
            }
        },
    },
    MuiInputBase: {
        styleOverrides: {
            root: {
                fontSize: '0.875rem'
            }
        },
    },
    MuiInputLabel: {
        styleOverrides: {
            root: {
                transform: 'none',
                position: 'relative' as const
            }
        },
    },
    MuiCard: {
        styleOverrides: {
            root: {
                boxShadow: 'none',
                border: `1px solid ${colors.border.primary}`
            }
        },
    },
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: 'none' as const,
                '&.wide': {
                    minWidth: 100
                }
            },
            outlinedPrimary: {
                '&:hover': {
                    color: palette.primary.dark,
                    backgroundColor: 'transparent',
                    borderColor: palette.primary.dark
                }
            }
        },
    },
    MuiMenuItem: {
        styleOverrides: {
            root: {
                '&:hover': {
                    backgroundColor: colors.magnolia
                }
            }
        },
    },
    MuiFormLabel: {
        styleOverrides: {
            root: {
                marginBottom: 8,
                color: 'inherit',
                fontWeight: 600,
                fontSize: '0.875rem'
            }
        },
    },
    MuiFormControl: {
        styleOverrides: {
            root: {
                backgroundColor: 'white'
            }
        },
    },
    MuiFormHelperText: {
        styleOverrides: {
            root: {
                marginLeft: 0,
                marginRight: 0,
                '&.Mui-error': {
                    fontStyle: 'italic'
                }
            }
        }
    },
    MuiIconButton: {
        styleOverrides: {
            colorPrimary: {
                '&:hover': {
                    backgroundColor: 'transparent',
                    color: colors.primary.main
                },
                '&.bg': {
                    backgroundColor: colors.primary.o25,
                    '&:hover': {
                        color: colors.secondary.main,
                        backgroundColor: colors.secondary.o25
                    },
                }
            }
        }
    },
    MuiTabs: {
        styleOverrides: {
            root: {
                '& > .Mui-disabled': {
                    display: 'none'
                }
            }
        },
    },
    MuiTab: {
        styleOverrides: {
            root: {
                fontSize: '1rem',
                textTransform: 'none' as const,
                minWidth: 0,
                border: `1px solid ${colors.border.primary}`,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                color: colors.primary.o50,
                '&.Mui-selected': {
                    backgroundColor: 'white'
                }
            }
        },
    },
    MuiTabScrollButton: {
        styleOverrides: {
            root: {
                border: `1px solid ${colors.border.primary}`,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                color: colors.primary.main
            }
        },
    },
    MuiPagination: {
        styleOverrides: {
            outlined: {
                '& li': {
                    '& .MuiPaginationItem-root': {
                        color: colors.primary.main,
                    },
                    '& .MuiPaginationItem-root:hover': {
                        color: 'white',
                        backgroundColor: colors.secondary.main,
                        borderColor: colors.secondary.main
                    },
                    '& .Mui-selected': {
                        color: 'white',
                        backgroundColor: colors.primary.main
                    }
                }
            }
        },
    },
    MuiPaper: { defaultProps: { sx: { '& *:focus': { outline: 'none' } }, }, }
}

// export const authenticationTheme = createTheme({
//     palette: palette,
//     shape: shape,
//     typography: {
//         ...fontSettings,
//         fontFamily: '"TitilliumWeb", "HeroNew", sans-serif'
//     },
//     components: components
// })
//
// export const dashboardTheme = createTheme({
//     palette: palette,
//     shape: shape,
//     typography: {
//         ...fontSettings,
//         fontFamily: '"HeroNew", sans-serif',
//     },
//     components: components
// })

export const centered = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export const verticalCentered = {
    display: 'flex',
    alignItems: 'center',
}

export const horizontalCentered = {
    display: 'flex',
    justifyContent: 'center'
}

export const flexColumn = {
    display: 'flex',
    flexDirection: 'column' as const
}

export const withBorder = {
    border: `1px solid ${colors.border.primary}`
}
