import React, { FunctionComponent } from 'react';
import { TextField, Grid, Box, Button, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Address  = (props:any) => {
    return (
        <form>
            <h3>Shipping Address</h3>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField  className="checkout-textfield" label="Full Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField  className="checkout-textfield" label="Address line 1" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField  className="checkout-textfield" label="Address line 2" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField  className="checkout-textfield" label="Postal/Zip Code" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField  className="checkout-textfield" label="City" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField  className="checkout-textfield" label="County" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField  className="checkout-textfield" label="Province/State" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField  className="checkout-textfield" label="Country" variant="outlined" fullWidth />
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