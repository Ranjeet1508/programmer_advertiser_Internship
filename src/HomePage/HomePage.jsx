import React, { useState, useEffect, useRef } from 'react'
import {
    Box,
    Button,
    Center,
    Image,
    Text,
    Flex,
    Spacer,
    Card,
    CardBody,
    Stack,
    Heading,
    CardFooter,
    Divider,
    ButtonGroup,
    useToast
}
    from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import Footer from './Footer';
import Testimonials from './Testimonial';
import { TweenMax, Power3 } from 'gsap';
import tv from './images/internimg.jpg'
import { gsap } from 'gsap';
import styles from './home.module.css';

const HomePage = () => {
    const logoItem1 = useRef(null);
    const logoItem2 = useRef(null);
    const logoItem3 = useRef(null);
    const txt = useRef(null);
    const btn1 = useRef(null);

    //toast part
    const toast = useToast()

    useEffect(() => {
        let myAnime1 = logoItem1.current;
        let myAnime2 = logoItem2.current;
        let myAnime3 = logoItem3.current;
        let txtAnime = txt.current;
        let btnAnime = btn1.current;

        gsap.from(
            myAnime2,
            1, {
            opacity: 0,
            x: -40,
            ease: Power3.easeOut,
            delay: 1
        }
        )
        gsap.from(
            myAnime1,
            1, {
            opacity: 0,
            y: 40,
            ease: Power3.easeOut,
            delay: 0.5
        }
        )
        gsap.from(
            myAnime3,
            1, {
            opacity: 0,
            x: 40,
            ease: Power3.easeOut,
            delay: 1.5
        }
        )
        gsap.from(
            txtAnime,
            1, {
            opacity: 0,
            y: -40,
            ease: Power3.easeOut,
            delay: 2
        }
        )
        gsap.to(
            btnAnime,
            1, {
            css: { visibility: "visible" },
            opacity: 1,
            y: 40,
            ease: Power3.easeOut,
            delay: 2.5,
        }
        )
    }, [])

    return (
        <Box>
            {/* ---------------Sliding box section---------------- */}
            <Box position="relative" mt={10} p={5}>
                <Flex className={styles.gsapImage}>
                    <Box className={styles.coffee4}>
                        <Image
                            ref={logoItem2}
                            src='https://m.media-amazon.com/images/I/61xG7NUYSML._AC_UY327_QL65_.jpg'
                            alt='image2'
                        />
                    </Box>
                    <Spacer />
                    <Box className={styles.coffee1}>
                        <Image
                            ref={logoItem1}
                            src={tv}
                            alt={`Slideshow Image`}
                        />
                    </Box>
                    <Spacer />
                    <Box className={styles.coffee5}>
                        <Image
                            ref={logoItem3}
                            src='https://m.media-amazon.com/images/I/31l5yy7Ew5L._AC_SR320,320_.jpg'
                            alt='image3'
                        />
                    </Box>

                </Flex>
            </Box>

            <Text ref={txt} fontSize='xl' as='b'>THE REAL RELIABLE ELECTRONICS EXPERIENCE,
                <br />
                NOW ACCESSABLE FOR EVERYBODY
            </Text>
            <br />
            <Button className={styles.findBtn} colorScheme='blue' ref={btn1} >FIND OUT MORE <ChevronRightIcon /></Button>

            {/* ------------------Three Product Section-------------------- */}
            <Flex p={4} className={styles.productImage}>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://m.media-amazon.com/images/I/514M-7zz0CL._AC_UY327_FMwebp_QL65_.jpg'
                            alt='powerbank'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>HUION HS64 Graphics Drawing Tablet</Heading>
                            <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button
                            onClick={() =>
                                toast({
                                position: 'bottom-left',
                                render: () => (
                                    <Box color='white' p={3} bg='blue.500'>
                                    Added to cart Successfully
                                    </Box>
                                ),
                                })
                            }
                            >
                            Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Spacer />
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://m.media-amazon.com/images/I/51dAV1h36zL._AC_UY327_FMwebp_QL65_.jpg'
                            alt='Digital drawing pad'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>HUION HS64 Graphics Drawing Tablet</Heading>
                            <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button
                            onClick={() =>
                                toast({
                                position: 'bottom-left',
                                render: () => (
                                    <Box color='white' p={3} bg='blue.500'>
                                    Added to cart Successfully
                                    </Box>
                                ),
                                })
                            }
                            >
                            Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                <Spacer />

                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://m.media-amazon.com/images/I/51WUHlne1FL._AC_UY327_FMwebp_QL65_.jpg'
                            alt='telescope'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Cezo 40X60 Magnification Zoom HD</Heading>
                            <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button
                            onClick={() =>
                                toast({
                                position: 'bottom-left',
                                render: () => (
                                    <Box color='white' p={3} bg='blue.500'>
                                    Added to cart Successfully
                                    </Box>
                                ),
                                })
                            }
                            >
                            Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Flex>

            {/* -----------------------Essence of italian coffee culutre--------------------- */}
            <Box mt={10}>
                <Heading size='3xl'>THE ESSENCE <br /> OF LUXURY ELECTRONICS CULTURE</Heading>
                <Center>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        p={10}
                        mt={10}
                    >
                        <Image
                            objectFit='cover'
                            width="30%"
                            src='https://m.media-amazon.com/images/I/41GzlKm9UaL._AC_SR320,320_.jpg'
                            alt='Caffe Latte'
                        />

                        <Stack>
                            <CardBody>
                                <Heading size='md'>DIFFERENT VARIETY OF PRINTERS</Heading>
                                <Heading size='sm'>SINCE 1993 THE BELEIVE, THAT BRINGS US TOGETHER</Heading>

                                <Text fontFamily="Arial, sans-serif" py='2'>
                                    Epson EcoTank: the original printing marvel, an emblem of precision engineering,
                                    is now also optimized for use with all modern computer systems.
                                    Epson EcoTank delivers the quintessential printing experience while introducing groundbreaking dual-layer ink technology,
                                    ensuring superior performance and dependability for all your printing needs.
                                </Text>
                                <Button variant='solid' colorScheme='blue'>
                                    Find Out More <ChevronRightIcon />
                                </Button>
                            </CardBody>
                        </Stack>
                    </Card>
                </Center>
            </Box>

            {/* ----------------Inspiration and News Section----------------- */}
            <Box p={4}>
                <Heading size='3xl'>INSPIRATION</Heading>
                <Heading size='xl' >& News</Heading>
                <Flex className={styles.inspirationBox}>
                    <Box className={styles.inspirationPara} >
                        <Text fontSize='3xl' fontFamily="Arial, sans-serif" color='brown' mt={20}>"THERE IS ONLY ONE SECRET TO THE PERFECT ELECTRONIC BUSINESS: SHARING"</Text>
                        <Text fontSize='xl' fontFamily="Arial, sans-serif" mt={5}>We all adore technology, but we cherish sharing our gadgets with our loved ones even more.
                            And when our devices perform just right, this act of sharing creates a truly delightful experience to relish.</Text>


                        <Text fontSize='3xl' fontFamily="Arial, sans-serif" color='brown' mt='30%'>PERFECT PERFORMANCE</Text>
                        <Text fontSize='xl' fontFamily="Arial, sans-serif" mt={5}>A perfect electronic gadget has to deliver impeccable performance,
                            above all. This requires meticulous engineering, with a precise selection of the finest components (crafted with utmost precision),
                            and functional features to offer the perfect synergy with the gadget's characteristics. Because,
                            to create the ultimate gadget for an iconic brand like ours, everything has to be perfect from inception to completion.</Text>
                    </Box>
                    <Spacer />
                    <Box>
                        <Image src='https://plus.unsplash.com/premium_photo-1664194584355-25196f114804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdhZGdldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='news image' />
                    </Box>
                </Flex>
            </Box>
            <Testimonials />
            <Footer />
        </Box>

    )
}


export default HomePage


