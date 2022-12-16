import React, { FunctionComponent } from 'react';
import { TextField, Grid, Box, Button, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Address  = (props:any) => {
    return (
        <form noValidate autoComplete="off">
            <Typography variant='h5' gutterBottom>Shipping Address</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField label="Full Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Address line 1" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Address line 2" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Postal/Zip Code" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="City" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="County" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Province/State" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Country" variant="outlined" fullWidth />
                </Grid>
            </Grid>
            {/* <Box textAlign="right" mt={2}>
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
    )
};

export default Address;