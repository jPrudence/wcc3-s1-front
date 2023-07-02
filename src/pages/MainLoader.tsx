import { Balance } from '@mui/icons-material'
import { Box, LinearProgress, ThemeProvider, Typography, createTheme } from '@mui/material'
import IconAndText from './IconAndText'

const MainLoader = () => {
    const defaultTheme = createTheme();
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ width: '100%', height: '80vh' }}
                display="flex" justifyContent="center" alignItems="center"
            >
                <Box>

                    <IconAndText
                        icon={<Balance sx={{ fontSize: "70px", color: '#000000' }} />}
                        name={<Typography variant='h2' sx={{ color: '#000000' }}>AMBANILANANA</Typography>}
                    />
                    <Box px={1.5}>
                        <LinearProgress color='secondary' />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default MainLoader