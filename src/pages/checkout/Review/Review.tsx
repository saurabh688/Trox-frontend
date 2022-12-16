import React, {useEffect} from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Review = (props:any) => {
    // const { productList, onChange } = props;

    useEffect(() => {
        console.log('ProductList:', props.productList);
    }, [])

    return (
        <>
            <div style={{ display:'flex' }}>
                {
                    props.productList.length > 0 && props.productList.map((product: any) => (
                        <Card sx={{ maxWidth: 345, marginRight: '75px' }}>
                            <CardHeader
                                title={product.title}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={"https://solesavy.com/wp-content/uploads/2022/08/Air-Jordan-1-Lost-and-Found-DZ5485-612-Release-Date-731x770.jpeg"}
                                alt="Product img"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Price: {product.price}
                                </Typography>
                            </CardContent>
                        </Card>

                    ))
                }
            </div>
            {/* <div>
                <Box
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
                </Box>
            </div> */}
        </>
    );
};

export default Review;