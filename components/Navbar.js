import { AppBar, Container, Toolbar, Typography, Box, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery';


const Navbar = () => {
    const mobile = useMediaQuery('(max-width:900px)');

    return (
        <AppBar sx={{
            backgroundColor: "#fff",
            boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
            zIndex: 10,
            position: "static",
            top: 0
        }}>
            <Container maxWidth="lg">
                <Box display="flex"
                    justifyContent={"space-between"}
                    alignItems="center"
                    lineHeight="normal"
                >
                    <Box display="flex"
                        alignItems="center"
                    >
                        <Box sx={{ mr: mobile ? 0 : 5 }}>
                            <Link href="/" >
                                <a data-testid="mainPageLink">
                                    <Image
                                        src="/firat_logo.png"
                                        alt="Firat Logo"
                                        width={150}
                                        height={80}
                                    />
                                </a>
                            </Link>
                        </Box>
                        <Box>
                            <Button data-testid="stajPageLink" href="/staj" variant='text'>
                                Staj
                            </Button>
                            <Button data-testid="isyeriPageLink" href="/isyeri" variant='text' >
                                İşyeri Eğitimi
                            </Button>
                            <Button data-testid="isPageLink" href="/is" variant="text">
                                İş İlanları
                            </Button>
                            <Button data-testid="okuLink" href="/oku" variant="text">
                                BİLGİ
                            </Button>
                        </Box>
                    </Box>

                    <Box>
                        <Button href="/contact" variant="contained" color="info" >
                            İlan Yayınlamak istiyorum
                        </Button>
                    </Box>

                </Box>

            </Container>

        </AppBar >
    )
}

export default Navbar
