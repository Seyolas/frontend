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

    const data = await fetch("http://localhost:1337/api/events?populate=%2A")
    const response = await data.json();

    return {
        props: { response }, // will be passed to the page component as props
    }
}


const Contact = () => {

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
                        <TextField {...register("companyName", { required: true, maxLength: 70 })} fullWidth label="Şirket Adı" variant="outlined" size="small" />
                    </Box>
                    <Box my={1}>
                        <TextField {...register("companyUrl", { required: true, maxLength: 120 })} fullWidth label="Şirketiniz Web Sayfası" variant="outlined" size="small" />
                    </Box>

                    <Box my={1}>
                        <TextField {...register("companyMail", { required: true, maxLength: 50 })} type="email" fullWidth label="Şirket Maili" variant="outlined" size="small" />
                    </Box>

                    <Box my={1}>
                        <TextField {...register("companyTel", { required: true, maxLength: 20 })} type="tel" fullWidth label="Tel No" variant="outlined" size="small" />

                    </Box>
                    <Box display="flex" >
                        <Box my={1}>
                            <TextField
                                select
                                fullWidth
                                label="İlan Türü"
                                defaultValue=''
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
                            {/* <FormControl sx={{ minWidth: 150 }}>
                                <InputLabel >İlan Türü</InputLabel>
                                <Select
                                    value={job}
                                    onChange={handleJobTypeChange}
                                    autoWidth
                                    label="İlan Türü"
                                    {...register("type", { required: true })}
                                >
                                    <MenuItem value="Staj">Staj</MenuItem>
                                    <MenuItem value="İşyeri Eğitimi">İşyeri Eğitimi</MenuItem>
                                    <MenuItem value="İş İlanı">İş İlanı</MenuItem>
                                </Select>
                            </FormControl> */}
                        </Box>
                        <Box my={1} ml={3}>
                            {/* <FormControl sx={{ minWidth: 150 }}>
                                <InputLabel >İlan Alt Başlığı(1)</InputLabel>
                                <Select
                                    value={labelOne}
                                    onChange={handleLabelOne}
                                    autoWidth
                                    label="İlan Alt Başlığı(1)"
                                    {...register("subtitle", { required: true })}
                                >
                                    <MenuItem value="Ağ Mühendisi">Ağ Mühendisi</MenuItem>
                                    <MenuItem value="Blokzincir / Web3">Blokzincir / Web3</MenuItem>
                                    <MenuItem value="Borsa / Bot">Borsa / Bot</MenuItem>
                                    <MenuItem value="Gömülü Sistemler">Gömülü Sistemler</MenuItem>
                                    <MenuItem value="Görüntü İşleme">Görüntü İşleme</MenuItem>
                                    <MenuItem value="Mobil Oyun programlama">Mobil Oyun programlama</MenuItem>
                                    <MenuItem value="Mobil Programlama / Flutter">Mobil Programlama / Flutter</MenuItem>
                                    <MenuItem value="Mobil Programlama / Java">Mobil Programlama / Java</MenuItem>
                                    <MenuItem value="Mobil Programlama / Kotlin">Mobil Programlama / Kotlin</MenuItem>
                                    <MenuItem value="Mobil Programlama / React Native">Mobil Programlama / React Native</MenuItem>
                                    <MenuItem value="Mobil Programlama / Swift">Mobil Programlama / Swift</MenuItem>
                                    <MenuItem value="Oyun programlama">Oyun programlama</MenuItem>
                                    <MenuItem value="Quantum programlama">Quantum programlama</MenuItem>
                                    <MenuItem value="Siber Güvenlik">Siber Güvenlik</MenuItem>
                                    <MenuItem value="Test/Otomasyon">Test/Otomasyon</MenuItem>
                                    <MenuItem value="UI/UX Designer">UI/UX Designer</MenuItem>
                                    <MenuItem value="Veri Bilimi">Veri Bilimi</MenuItem>
                                    <MenuItem value="Web Programlama / Backend">Web Programlama / Backend</MenuItem>
                                    <MenuItem value="Web Programlama / Frontend">Web Programlama / Frontend</MenuItem>
                                    <MenuItem value="Web Programlama / Full Stack">Web Programlama / Full Stack</MenuItem>
                                </Select>
                            </FormControl> */}
                        </Box>
                    </Box>

                    <Box my={1}>
                        {/* <FormControl sx={{ minWidth: 150 }}>
                            <InputLabel >İlan Alt Başlığı(2)</InputLabel>
                            <Select
                                value={labelTwo}
                                onChange={handleLabelTwo}
                                autoWidth
                                label="İlan Alt Başlığı(2)"
                                {...register("subtitle2", { required: true })}
                            >
                                <MenuItem value="AWS">AWS</MenuItem>
                                <MenuItem value="Amazon Lumberyard">Amazon Lumberyard</MenuItem>
                                <MenuItem value="Angular.js">Angular.js</MenuItem>
                                <MenuItem value="Anime.js">Anime.js</MenuItem>
                                <MenuItem value=">Ansible">Ansible</MenuItem>
                                <MenuItem value="AppGameKit">AppGameKit</MenuItem>
                                <MenuItem value="C++">C++</MenuItem>
                                <MenuItem value="Cisco ACI & Cisco CCSP">Cisco ACI & Cisco CCSP</MenuItem>
                                <MenuItem value="CryEngine">CryEngine</MenuItem>
                                <MenuItem value="D3.js">D3.js</MenuItem>
                                <MenuItem value="Django">Django</MenuItem>
                                <MenuItem value="Figma">Figma</MenuItem>
                                <MenuItem value="Flask">Flask</MenuItem>
                                <MenuItem value="GameMaker">GameMaker</MenuItem>
                                <MenuItem value="Godot">Godot</MenuItem>
                                <MenuItem value="Google Cloud">Google Cloud</MenuItem>
                                <MenuItem value="Hypervisor">Hypervisor</MenuItem>
                                <MenuItem value="Java">Java</MenuItem>
                                <MenuItem value="Jquery">Jquery</MenuItem>
                                <MenuItem value="Larevel">Larevel</MenuItem>
                                <MenuItem value="LibGDX">LibGDX</MenuItem>
                                <MenuItem value="Linux">Linux</MenuItem>
                                <MenuItem value="MVC">MVC</MenuItem>
                                <MenuItem value="Next.js">Next.js</MenuItem>
                                <MenuItem value="Node.js">Node.js</MenuItem>
                                <MenuItem value="Nuxt.js">Nuxt.js</MenuItem>
                                <MenuItem value="Php">Php</MenuItem>
                                <MenuItem value="Python">Python</MenuItem>
                                <MenuItem value="RPG Maker">RPG Maker</MenuItem>
                                <MenuItem value="React.js">React.js</MenuItem>
                                <MenuItem value="Restfull">Restfull</MenuItem>
                                <MenuItem value="SQL/PL">SQL/PL</MenuItem>
                                <MenuItem value="SQL/TSQL">SQL/TSQL</MenuItem>
                                <MenuItem value="Selenium">Selenium</MenuItem>
                                <MenuItem value="Svelte.js">Svelte.js</MenuItem>
                                <MenuItem value="Three.jsı">Three.js</MenuItem>
                                <MenuItem value="Unity">Unity</MenuItem>
                                <MenuItem value="Unreal Engine">Unreal Engine</MenuItem>
                                <MenuItem value="Urho3D">Urho3D</MenuItem>
                                <MenuItem value="VMWare">VMWare</MenuItem>
                                <MenuItem value="Vue.js">Vue.js</MenuItem>
                                <MenuItem value="Xen">Xen</MenuItem>
                                <MenuItem value="Zeplin">Zeplin</MenuItem>
                            </Select>
                        </FormControl> */}
                    </Box>

                </Box>
                <Button type="submit" variant="outlined">Gönder</Button>
            </form>
        </Container>

    )
}

export default Contact
