import React from "react";
import TitleSection from "./TitleSection";
import Card from "./Card";
import SliderCards from "./SliderCards";
import { CardType, Slide, DB } from "../types/types";
import styled from "styled-components";


const BackgroundSlider = styled.div`
  background-image: url('https://www.exoticca.com/assets/images/bg_short_trips.jpg');
  background-size: cover;
`

const SliderSection = ({ data }:DB ) => {
  return (
    <>
      {data?.map((item: Slide) => (
        <BackgroundSlider key={item.name}>
          <TitleSection name={item.name} />
          <SliderCards>
            {item?.cards?.map((i: CardType) => (
              <Card
                key={i.id}
                days={i.days}
                priceDetail={i.priceDetail}
                images={i.images}
                title={i.title}
                destination={i.destination}
              />
            ))}
          </SliderCards>
        </BackgroundSlider>
      ))}
    </>
  );
};

export default SliderSection;
