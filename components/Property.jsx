//IMPORT NEXT TOOLS
import Link from 'next/link'
import Image from 'next/image'

//IMPORT CHAKRA TOOLS
import { Box, Flex, Text, Avatar } from '@chakra-ui/react'

//IMPORT ICONS & CO
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'

import millify from 'millify'

//IMPORT IMG
import DefaultImage from '../assets/img/House.png'


const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId } }) => (
    <Link href={`/property/${externalId}`} passHref>
    <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
    <Box >
        <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width="400px" height="260" alt="house" />
    </Box>
    <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between" >
            <Flex alignItems="center">
                <Box paddingRight="3" color="green">{isVerified && <GoVerified />}</Box>
                <Text fontSize="lg">${millify(price)}{rentFrequency && `/${rentFrequency}`} </Text>
            </Flex>
            <Box>
                <Avatar size="md" src={agency?.logo?.url}/>
            </Box>
        </Flex>
        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color='#718096' >
            {rooms} <FaBed /> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Text>
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Text>
    </Box>
    </Flex>
    </Link>
);

export default Property