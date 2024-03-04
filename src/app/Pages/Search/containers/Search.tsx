import React from 'react'
import AdvanceSearch from '../components/AdvanceSearch/AdvanceSearch'
import QuickSearch from '../components/QuickSearch/QuickSearch'
import { Box } from '@mui/material'
import { COLORS } from '@/constant/color'

const SearchContainer = () => {
  return (
    <div>
       <Box bgcolor={COLORS.dark.main} pt={{md:15,sm:10,xs:15}} textAlign={"center"}>
      <QuickSearch/>
      <AdvanceSearch/>
      </Box>
    </div>
  )
}

export default SearchContainer
