import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

//IMPORT FETCHING DATA FROM fetchApi folder
import { baseUrl, fetchApi } from '../services/fetchApi'

//IMPORT PROPERTY DATAS FROM property folder
import Property from '../components/Property'

const Banner = ({ purpose, title, subTitle, linkName, buttonText, desc1, desc2, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner"/>
      <Box p="5">
          <Text color="gray.500" fontSize="sm" fontWeight="medium"> {purpose} </Text>
          <Text fontSize="3xl" fontWeight="bold"> {title} <br /> {subTitle} </Text>
          <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700" > {desc1}<br />{desc2} </Text>
          <Button fontSize="xl" >
              <Link href={linkName}>{buttonText}</Link>
          </Button>
      </Box>
  </Flex>
)

export default function Home({ propertiesForSale,  propertiesForRent }) {
  console.log(propertiesForRent, propertiesForSale);
  return (
    <Box>
      <Banner 
      purpose="RENT A LOT" 
      title="Rental Lots for"
      subTitle="Every Citizen"
      desc1="Explore Building Lots, Villas, Homes"
      desc2='and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      imageUrl="https://nairametrics.com/wp-content/uploads/2021/12/Metaverse-land.jpg?w=800"
      />

   {/* FETCH AND MAP OVER DATA FOR RENT */}
      <Flex flexWrap="wrap">
       {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex>

      <Banner 
      purpose="BUY A LOT" 
      title="Find, Buy & Own Your"
      subTitle="NFT's Dream Lot"
      desc1="Explore Building Lots, Villas, Homes"
      desc2='and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageUrl="https://storeys.com/wp-content/uploads/2022/01/The-MetaReal-Mansion.png"
      /> 
       {/* FETCH AND MAP OVER DATA FOR SALE */}
       <Flex flexWrap="wrap">
       {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
    </Box>
  )
}

//APi CALLS WITH A SPECIAL COMMAND MADE FOR NEXTjs : export async + return using Props
export async function getStaticProps() {
  // hitsperpage = nbr of info by data ex: 6 = 6 pictures
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
 }


