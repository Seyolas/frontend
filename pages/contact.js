import { Box, Button, Container, TextField, Snackbar, Alert } from "@mui/material"
// 
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { Theme, useTheme } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";

export async function getServerSideProps(context) {

    const data = await fetch("http://localhost:1337/api/all-field?populate=%2A")
    const response = await data.json();

    const firstTagOptions = response?.data?.attributes?.firstField
    const firstTagLabelElement = response?.data?.attributes?.firstField[0]?.item

    const secondTagOptions = response?.data?.attributes?.secondField
    const secondTagLabelElement = response?.data?.attributes?.secondField[0]?.item

    return {
        props: {
            firstTagOptions,
            firstTagLabelElement,
            secondTagOptions,
            secondTagLabelElement
        },
    }
}


const Contact = ({ firstTagOptions, firstTagLabelElement, secondTagOptions, secondTagLabelElement }) => {

    console.log(firstTagOptions)
    console.log(firstTagLabelElement)
    console.log(secondTagOptions);
    console.log(secondTagLabelElement);

    const theme = useTheme();
    const [job, setJob] = useState('');
    const [labelOne, setLabelOne] = useState('');
    const [labelTwo, setLabelTwo] = useState('');
    const [showSnackbar, setShowSnackbar] = useState(false);


    const handleJobTypeChange = (event) => {
        setJob(event.target.value);
    };

    const handleLabelOne = (event) => {
        setLabelOne(event.target.value)
    }
    const handleLabelTwo = (event) => {
        setLabelTwo(event.target.value)
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setShowSnackbar(true)
    }

    const allTypes = [
        {
            id: 1,
            name: "Staj"
        },
        {
            id: 2,
            name: "İşyeri Eğitimi"
        },
        {
            id: 3,
            name: "İş İlanı"
        }
    ]



    return (
        <Layout noBanner>
            <Container sx={{ my: 5 }}>
                <form
                    action="https://formspree.io/f/moqyobzj"
                    // onSubmit={handleSubmit(onSubmit)}
                    method="POST"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        width={500}
                    >

                        <Box my={1.5} >
                            <TextField {...register("firstName", { required: true, maxLength: 70 })} fullWidth label="İsim Soyisim*" variant="outlined" size="small" />
                        </Box>

                        <Box my={1.5}>
                            <TextField  {...register("companyName", { required: true, maxLength: 70 })} fullWidth label="Şirket Adı*" variant="outlined" size="small" />
                        </Box>
                        <Box my={1.5}>
                            <TextField {...register("companyUrl", { maxLength: 120 })} fullWidth label="Şirketiniz Web Sayfası" variant="outlined" size="small" />
                        </Box>

                        <Box my={1.5}>
                            <TextField {...register("companyMail", { required: true, maxLength: 50 })} type="email" fullWidth label="Şirket Maili*" variant="outlined" size="small" />
                        </Box>

                        <Box my={1.5}>
                            <TextField {...register("companyTel", { maxLength: 20 })} type="tel" fullWidth label="Tel No" variant="outlined" size="small" />

                        </Box>
                        <Box display="flex" mb={2} >
                            <Box my={1}>
                                <TextField
                                    select
                                    fullWidth
                                    label="İlan Türü"
                                    defaultValue='Staj'
                                    inputProps={register('type', {
                                        required: true,
                                    })}
                                >
                                    {allTypes.map((option) => (
                                        <MenuItem key={option.id} value={option.name}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>

                            <Box my={1} ml={2}>
                                <TextField
                                    select
                                    fullWidth
                                    label="İlan Alt Başlığı(1)"
                                    defaultValue={firstTagLabelElement}
                                    inputProps={register('firstTag', {
                                        required: true,
                                    })}
                                >
                                    {firstTagOptions.map((element) => (
                                        <MenuItem key={element?.id} value={element?.item}>
                                            {element?.item}
                                        </MenuItem>
                                    ))}
                                </TextField>

                            </Box>

                            <Box my={1} ml={2}>
                                <TextField
                                    select
                                    fullWidth
                                    label="İlan Alt Başlığı(2)"
                                    defaultValue={secondTagLabelElement}
                                    inputProps={register('secondTag', {
                                        required: true,
                                    })}
                                >
                                    {secondTagOptions.map((element) => (
                                        <MenuItem key={element?.id} value={element?.item}>
                                            {element?.item}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>

                        </Box>

                    </Box>
                    <Button type="submit" variant="outlined">Gönder</Button>
                    <Snackbar
                        open={showSnackbar}
                        onClose={() => setShowSnackbar(false)}
                        autoHideDuration={5000}
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        key="formSendSnackbar"
                    >
                        <Alert sx={{ backgroundColor: "#edf7ed" }} variant="outlined" severity="success" color="success">
                            İsteğinizi aldık. Yazmış olduğunuz mail üzerinden geri dönüş sağlayacağız.
                        </Alert>

                    </Snackbar>
                </form>
            </Container>
        </Layout>

    )
}

export default Contact
