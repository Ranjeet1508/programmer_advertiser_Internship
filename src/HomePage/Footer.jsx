import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';


function Footer() {
    const theme = true;
    return (
        <Box p={{base:'1rem 1.5rem',md:'3rem 3rem',lg:'4rem 4.5rem'}} >

            <Flex p='3.5rem 0' borderTop='1px solid #696969' justify='space-between' flexDirection={{base:'column', md:'column', lg:'row'}}>
                <Box w={{base:'90%', md:'80%', lg:'35%'}}>
                    <Flex >
                        <Image src='data:image/png;base64,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' w='8rem' />
                        <Heading fontSize="1rem" ml='0.7rem' ></Heading>
                    </Flex>
                    <Text p='2rem 0'>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
                    </Text>
                </Box>

                <Flex w={{base:'90%', md:'80%', lg:'50%'}} p='0 2rem' justify='space-between' flexWrap='wrap'>
                    <Box lineHeight='2.2rem' p={{base:'1rem 0', md:'0',lg:'0'}}>
                        <Heading mb='1.2rem' fontSize="1.2rem" fontWeight='600' >Sitemap</Heading>
                        <Text>Services</Text>
                        <Text>About Us</Text>
                        <Text>Products</Text>
                        <Text>Cancellation</Text>
                    </Box>

                    <Box lineHeight='2.2rem' p={{base:'1rem 0', md:'0',lg:'0'}}>
                        <Heading mb='1.2rem' fontSize="1.2rem" fontWeight='600' >Company</Heading>
                        <Text>Careers</Text>
                        <Text>Our Team</Text>
                    </Box>

                    <Box lineHeight='2.2rem' p={{base:'1rem 0', md:'0',lg:'0'}}>
                        <Heading mb='1.2rem' fontSize="1.2rem" fontWeight='600' >Support</Heading>
                        <Text>Plaza 99</Text>
                        <Text>Pune , Maharashtra</Text>
                        <Text>electronic@gmail.com</Text>
                        <Text>+91 9999999999</Text>
                        <Text>Order now</Text>
                    </Box>
                </Flex>

            </Flex>
            <Box borderBottom='1px solid #696969'>
                <Text mb='1rem' fontSize='0.9rem'>Facebook • Instagram • Youtube</Text>
            </Box>

            <Flex justify='space-between' mt='1rem' flexWrap='wrap'>
                <Text fontSize='0.9rem' p={{base:'1rem 0', md:'0',lg:'0'}}>© 2023 Electronic All Right Reserved</Text>
                <Flex gap='2rem' flexWrap='wrap'>
                    <Text fontSize='0.9rem'>Terms & Condition</Text>
                    <Text fontSize='0.9rem'>Privacy</Text>
                    <Text fontSize='0.9rem'>Policy</Text>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Footer;