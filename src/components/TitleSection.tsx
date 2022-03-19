import React from 'react'
import styled from 'styled-components'

const ContainerHeading = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 24px;
`

const HeadingH2 = styled.h2`
   font-family: 'Playfair Display', serif;
   font-size: 46px;
   font-weight: 400;
   @media (max-width: 600px) {
    font-size: 26px;
  }
`

const TitleSection = ({ name }: {name: string}) => {
  return (
    <ContainerHeading>
      <HeadingH2>{ name }</HeadingH2>
    </ContainerHeading>
  )
}

export default TitleSection