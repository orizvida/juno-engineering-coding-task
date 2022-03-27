import React, { useEffect, useState } from "react";
import { fetchImageUrls } from "../api/index";
import { Box, IconButton, Skeleton, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';

const ImageCarousel = () => {
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [loadingState, setLoadingState] = useState(true);
    const handleNext = () => {
        setLoadingState(true)
        if (currentImage === images.length - 1)
            setCurrentImage(0);
        else
            setCurrentImage(currentImage + 1);
    }
    const handlePrev = () => {
        setLoadingState(true)
        if (currentImage === 0)
            setCurrentImage(images.length - 1);
        else
            setCurrentImage(currentImage - 1);
    }
    useEffect(() => {
        fetchImageUrls().then(result => {
            setImages(result);
            if (images.length === 0) setLoadingState(false);
        }).catch(err => {
            console.log(err);
            setLoadingState(false);
        })
        // eslint-disable-next-line
    }, [])
    const emptyView = () => {
        return (
            <Box>
                {images.length === 0 && loadingState === false && (
                    <Box display='flex'
                        justifyCoutent='center' flexDirection='column'>
                        <Box display='flex' width='100%' justifyContent='center'>
                            <SearchIcon sx={{ fontSize: '80px' }} />

                        </Box>
                        <Typography
                            marginTop={1}
                            variant='subtitle1'
                        >
                            There are no available images
                        </Typography>
                    </Box>
                )}
            </Box>
        )
    }
    return (
        <Box className="main-box">
            <Box>
                <IconButton
                    data-testid="prevbtn"
                    disabled={images.length === 0}
                    onClick={handlePrev}>
                    <ArrowBackIosNewIcon />
                </IconButton>
            </Box>
            {loadingState && (
                <Box >
                    <Skeleton
                        animation='wave'
                        data-testid="placeholder"
                        variant="rectangular"
                        width={400}
                        height={400}
                    />
                </Box>
            )}
            {emptyView()}
            <Box display={(loadingState || images.length === 0) ? 'none' : 'block'}>

                <img
                    className='main-img'
                    onLoad={() => setLoadingState(false)}
                    src={images[currentImage]} alt='carousel' />
            </Box>


            <Box>
                <IconButton
                    data-testid="nextbtn"
                    disabled={images.length === 0}
                    onClick={handleNext}
                    sx={{ transform: 'rotate(180deg)' }}>
                    <ArrowBackIosNewIcon />

                </IconButton>
            </Box>
        </Box>
    );
};
export default ImageCarousel;
