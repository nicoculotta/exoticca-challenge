import React from 'react'
import styled from 'styled-components'
import { FilterResult } from '../types/types'


const SelectStyles = styled.select`
    padding: 8px;
    margin-left: 12px;
`


const FilterContainer = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    padding: 16px 16px 0;
    display:flex;
    justify-content: flex-end;
    align-items: center;
`


const Filter = ({ filter, setFilter }:FilterResult) => {
  return (
      <FilterContainer>
        <p>Filter by market</p>
        <SelectStyles value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="US">United State</option>
            <option value="CA">Canada</option>
            <option value="UK">United Kingdom</option>
        </SelectStyles>
      </FilterContainer>
  )
}

export default Filter