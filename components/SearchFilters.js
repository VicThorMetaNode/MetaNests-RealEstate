import React, { useEffect, useState } from 'react'
import  { Flex, Box, Select, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdCancel } from 'react-icons/md'

import Image from 'next/image'

import { filterData, getFilterValues } from '../services/filterData'

const SearchFilters = () => {
    const [filters] = useState(filterData);
    const router = useRouter();
    
    // update url with filter values
    const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
 //let's make sure we can select the info we want, not all of them at once w/ if statement && filterValues based on item names
        if(item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
        }       
    })

    router.push({ pathname: path, query: query });
    };


  return (
    <Flex
    bg='gray.100' 
    p='4'
    justifyContent='center'
    flexWrap='wrap'
    >
    {filters.map((filter) => (
        <Box key={filter.queryName}>
            <Select 
            placeholder={filter.placeholder}
            w='fit-content'
            p='2'
            onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}>
    {/* render all filter items using a dynamic block inside filter */}
    {filter?.items?.map((item) => (
        <option value={item.value} key={item.value}>
        {item.name}
        </option>
    ))}
            </Select>
        </Box>
        ))}
    </Flex>
  )
}

export default SearchFilters