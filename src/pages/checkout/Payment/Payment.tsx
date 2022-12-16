import React, { FunctionComponent } from 'react';
import { Box, Button, Typography, Grid, TextField } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Payment = (props:any) => {
    return (
        <form noValidate autoComplete="off">
            <Typography variant='h5' gutterBottom>Payment Details</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField label="Email address" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Card number" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField label="MM / YY" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField label="CVC" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Name on card" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Billing address" variant="outlined" fullWidth />
                </Grid>
            </Grid>
            {/* <Box
                textAlign="right"
                display="flex"
                justifyContent="space-between"
                mt={2}
            >
                <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    endIcon={<ArrowBackIcon />}
                    size="large"
                >
                    Previous
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowRightAltIcon />}
                    size="large"
                    onClick={props.onChange}
                >
                    Continue
                </Button>
            </Box> */}
        </form>
    );
};

export default Payment;