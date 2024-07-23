'use client'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {ChangeEvent, useState} from 'react'
import Link from 'next/link';
import {Page, pages} from '@/constants/pages';

function Header() {
    const [anchorElNav, setAnchorElNav] = useState<HTMLButtonElement | null>(null);

    const handleOpenNavMenu = (event: ChangeEvent<HTMLButtonElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" sx={{backgroundColor: 'var(--background-dark)'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'var(--font-header)',
                            letterSpacing: '.3rem',
                            fontSize: '40px',
                            color: 'var(--header-color)',
                            textDecoration: 'none',
                        }}
                    >
                        TEST TASK
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Button
                            size="large"
                            aria-label="burger-menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon sx={{
                                color: 'var(--text-color-secondary)'
                            }} />
                        </Button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            variant={'selectedMenu'}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page: Page) => (
                                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                                    <Typography
                                        component={Link}
                                        href={page.link}
                                        textAlign={'center'}
                                        sx={{
                                            fontFamily: 'var(--font-text)',
                                            color: 'var(--background-light)'
                                        }}
                                    >{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'var(--font-header)',
                            letterSpacing: '.3rem',
                            fontSize: '30px',
                            color: 'var(--header-color)',
                            textDecoration: 'none',
                        }}
                    >
                        TEST TASK
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page: Page) => (
                            <Button
                                component={Link}
                                href={page.link}
                                key={page.label}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'var(--text-color-secondary)', display: 'block', fontFamily: 'var(--font-text)' }}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;