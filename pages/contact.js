import { Box, Container, TextField } from "@mui/material"
// 
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useState } from "react";
import { Theme, useTheme } from '@mui/material/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Veri Bilimi - Yapay Zeka',
    'Oyun Geliştirme',
    'Gömülü Sistemler',
    'Back End - Web',
    'Front End - Web',
    'Full Stack - Web',
    'Full Stack - Mobil',
    'Mobil Uygulama',
    'Mobil Oyun',
    'IOT',
    'Blockchain',
    'Web3',
    'Quantum Programlama',
    'Tasarım - Figma/Abode',
    "Sosyal Medya Uzmanı",
    "İnsan Kaynakları"
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const contact = () => {

    const theme = useTheme();
    const [personName, setPersonName] = useState([])
    const [age, setAge] = useState('');


    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <Container sx={{ my: 16 }}>
            <Box
                display="flex"
                flexDirection="column"
                width={500}

            >

                <Box>
                    <TextField fullWidth label="İsim Soyisim*" variant="outlined" size="small" />
                </Box>

                <Box my={1}>
                    <TextField fullWidth label="Şirket Adı" variant="outlined" size="small" />
                </Box>
                <Box my={1}>
                    <TextField fullWidth label="Şirketiniz Web Sayfası" variant="outlined" size="small" />
                </Box>

                <Box my={1}>
                    <TextField fullWidth label="Şirket Maili" variant="outlined" size="small" />
                </Box>

                <Box my={1}>
                    <TextField type="tel" fullWidth label="Tel No" variant="outlined" size="small" />

                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Box my={1}>
                        <FormControl sx={{ minWidth: 150 }}>
                            <InputLabel >İlan Türü</InputLabel>
                            <Select
                                value={age}
                                onChange={handleAgeChange}
                                autoWidth
                                label="İlan Türü"
                            >
                                <MenuItem value="Staj">Staj</MenuItem>
                                <MenuItem value="İşyeri Eğitimi">İşyeri Eğitimi</MenuItem>
                                <MenuItem value="İş İlanı">İş İlanı</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box my={1}>
                        <FormControl sx={{ width: 300 }}>
                            <InputLabel>İlan Alt Başlığı</InputLabel>
                            <Select
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="İlan Alt Başlığı" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}

                            >
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>

            </Box>
        </Container>

    )
}

export default contact
