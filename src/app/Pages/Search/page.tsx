import React from 'react'
import {Box} from '@mui/material'
import {COLORS} from '@/constant/color'
import SearchContainer from './containers/Search'

const Search = () => {
  return (
    <div>
       <Box bgcolor={COLORS.dark.main} pt={{md:15,sm:10,xs:15}} textAlign={"center"}>
        <SearchContainer/>
       </Box>
    </div>
  )
}

export default Search
