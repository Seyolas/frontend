import { Box, Container, Typography } from "@mui/material"
import Image from "next/image"
const Banner = () => {
    return (
        <Container>
            <Image src="/banner.png" width={1200} height={400} quality={100}></Image>
            <Typography my={2} textAlign="center" component="h4" variant="h4" >
                Teknoloji Kariyerine ilk adımı atmak için
                Fırat Üniversitesi öğrencilerine özel
                ilanlara hemen başvur!
            </Typography>
        </Container>
    )
}

export default Banner
