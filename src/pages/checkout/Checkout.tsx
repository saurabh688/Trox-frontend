import React, { useState } from 'react';

import { makeStyles } from '@mui/material/styles';
import { Stepper, Step, StepLabel, Typography, Button } from '@mui/material';

import Address from './Address/Address';
import Review from './Review/Review';
import Payment from './Payment/Payment';
import Confirm from './Confirm/Confirm';

const CheckoutProcess = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            key: "Address",
            label: "Select Address"
        },
        {
            key: "Review",
            label: "Review Order"
        },
        {
            key: "Payment",
            label: "Select Payment Method"
        },
        {
            key: "Confirm",
            label: "Place Your Order & Pay"
        }
    ]

    const handleNext = () => {
        setActiveStep(prevStep => prevStep + 1)
    }

    const getStepsContent = (activeStep : any) => {
        switch (activeStep) {
            case 0:
                return <Address/>;
            case 1:
                return <Review productList={[{ title: 'Air Jordan 1 Lost and Found', description: 'Air Jordan 1 Chicago Limited Edition Lost and Found', price: 400.65, img: 'https://solesavy.com/wp-content/uploads/2022/08/Air-Jordan-1-Lost-and-Found-DZ5485-612-Release-Date-731x770.jpeg' }, { title: 'Google Pixel 7 Pro', description: 'Google Pixel 7 pro 512 GB TelePhoto Lens', price: 1100.35, img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6519/6519935_sd.jpg' }]} />;
            case 2:
                return <Payment/>;
            case 3:
                return <Confirm/>;
        }
    }

    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep} sx={{
                width: "50%",
                margin: "6rem auto",
                border: "1px solid #999"
            }}>
                {
                    steps.map((ele) => (
                        <Step key={ele.key}>
                            <StepLabel>
                                {ele.label}
                            </StepLabel>
                        </Step>
                    ))
                }
                <>
                    {activeStep == steps.length ? "The Steps Complete" : (
                        <>
                            {getStepsContent(activeStep)}
                            <Button onClick={handleNext}>
                                {activeStep == steps.length ? 'Finish' : 'Continue'}
                            </Button>
                        </>
                    )}
                </>
            </Stepper>
        </div>
    );
};

export default CheckoutProcess;


/*
const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            key: "Address",
            label: "Select Address"
        },
        {
            key: "Review",
            label: "Review Order"
        },
        {
            key: "Payment",
            label: "Select Payment Method"
        },
        {
            key: "Confirm",
            label: "Place Your Order & Pay"
        }
    ]

    const DisplayPage = (key: String) => {

        if (key == 'Address' && activeStep == 0) {
            return <Address onChange={(e: any) => {
                e.preventDefault();
                setActiveStep(1)
                console.log('ss')
            }} />
        }
        if (key == 'Review' && activeStep == 1) {
            return <Review productList={[{ title: 'Air Jordan 1 Lost and Found', description: 'Air Jordan 1 Chicago Limited Edition Lost and Found', price: 400.65, img: 'https://solesavy.com/wp-content/uploads/2022/08/Air-Jordan-1-Lost-and-Found-DZ5485-612-Release-Date-731x770.jpeg' }, { title: 'Google Pixel 7 Pro', description: 'Google Pixel 7 pro 512 GB TelePhoto Lens', price: 1100.35, img:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6519/6519935_sd.jpg' }]} onChange={(e: any) => {
                e.preventDefault();
                setActiveStep(2)
                console.log('ss')
            }} />
        }
        if (key == 'Payment' && activeStep == 2) {
            return <Payment onChange={(e: any) => {
                e.preventDefault();
                setActiveStep(3)
                console.log('ss')
            }} />
        }
        if (key == 'Confirm' && activeStep == 3) {
            return <Confirm />
        }
    }
    
    return (
        <Box sx={{ width: '100%', marginTop: '10px' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((ele) => (
                    <>
                        <Step key={ele.key}>
                            <StepLabel>{ele.label}</StepLabel>
                        </Step>
                        <>
                            {
                                DisplayPage(ele.key)
                            }
                        </>
                    </>
                ))}
            </Stepper>
        </Box>
    );
};
*/