import React from 'react'
import AdvanceSearch from '../components/AdvanceSearch/AdvanceSearch'
import QuickSearch from '../components/QuickSearch/QuickSearch'

const SearchContainer = () => {
  return (
    <div>
      <QuickSearch/>
      <AdvanceSearch/>
    </div>
  )
}

export default SearchContainer
