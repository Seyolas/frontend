import { Box, Button, Container, TextField } from "@mui/material"
// 
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import { Theme, useTheme } from '@mui/material/styles';
import { useForm } from "react-hook-form";

export async function getServerSideProps(context) {

    const data = await fetch("http://localhost:1337/api/all-field?populate=%2A")
    const response = await data.json();

    return {
        props: { response }, // will be passed to the page component as props
    }
}


const Contact = ({ response }) => {

    const theme = useTheme();
    const [job, setJob] = useState('');
    const [labelOne, setLabelOne] = useState('');
    const [labelTwo, setLabelTwo] = useState('');


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
    const onSubmit = data => console.log(data);

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
        <Container sx={{ my: 16 }}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Box
                    display="flex"
                    flexDirection="column"
                    width={500}
                >

                    <Box>
                        <TextField {...register("firstName", { required: true, maxLength: 70 })} fullWidth label="İsim Soyisim*" variant="outlined" size="small" />
                    </Box>

                    <Box my={1}>
                        <TextField {...register("companyName", { required: true, maxLength: 70 })} fullWidth label="Şirket Adı*" variant="outlined" size="small" />
                    </Box>
                    <Box my={1}>
                        <TextField {...register("companyUrl", { maxLength: 120 })} fullWidth label="Şirketiniz Web Sayfası" variant="outlined" size="small" />
                    </Box>

                    <Box my={1}>
                        <TextField {...register("companyMail", { required: true, maxLength: 50 })} type="email" fullWidth label="Şirket Maili*" variant="outlined" size="small" />
                    </Box>

                    <Box my={1}>
                        <TextField {...register("companyTel", { maxLength: 20 })} type="tel" fullWidth label="Tel No" variant="outlined" size="small" />

                    </Box>
                    <Box display="flex" >
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
                                defaultValue='Ağ Mühendisi'
                                inputProps={register('firstTag', {
                                    required: true,
                                })}
                            >
                                {response?.data?.attributes?.firstField?.map((element) => (
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
                                label="Tech"
                                defaultValue='Google Cloud'
                                inputProps={register('secondTag', {
                                    required: true,
                                })}
                            >
                                {response?.data?.attributes?.secondField?.map((element) => (
                                    <MenuItem key={element?.id} value={element?.item}>
                                        {element?.item}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>

                    </Box>

                </Box>
                <Button type="submit" variant="outlined">Gönder</Button>
            </form>
        </Container>

    )
}

export default Contact
