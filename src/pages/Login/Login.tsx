import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                fkt-ambanilanana
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function SignInSide() {

    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (

        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item xs={false} sm={4} md={7} sx={{
                    backgroundImage: 'url(./assets/menabe.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8, mx: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Grid container flexDirection='row'>
                        <Grid item xs={'auto'} >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                        </Grid>
                        <Grid item xs={8} sm={8} md={8}>
                            <Typography component="h1" variant="h5" >
                                MILIRA
                            </Typography>
                            <Typography variant="caption">
                                MILIRA : soraty ty anaranao miampy teni-miafy
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Anaranao"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Teni-miafy"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="ka halino zaho"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => navigate('/dashboard')}
                        >
                            HILITSY
                        </Button>
                        <Grid container justifyContent='center'>
                            <Grid item xs={6}>
                                <Link href="#" variant="body2">
                                    Haliniko teni-miafy
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <Link href="#" variant="body2">
                                    {"Tsy mana kaonty zaho"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}