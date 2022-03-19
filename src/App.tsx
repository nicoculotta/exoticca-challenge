import React, { useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { getSlidesData } from "./api/getData";
import SliderSection from './components/SliderSection';
import Filter from './components/Filter';
import data from './mocks/home.json'

export default function App() {
  const [filter, setFilter] = useState("US");

  const API_CA = "https://api-ca.exoticca.com/api/home";
  const API_UK = "https://api-uk.exoticca.com/api/home";

  const { data: slidesCA }: UseQueryResult<any> = useQuery<any>(
    "slidesCA",
    async () => getSlidesData(API_CA),
    { staleTime: 60000 }
  );

  const { data: slidesUK }: UseQueryResult<any> = useQuery<any>(
    "slidesUK",
    async () => getSlidesData(API_UK),
    { staleTime: 60000 }
  );


  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />

      {filter === "US" && (
        <SliderSection data={ data.slides}/>
      )}

      {filter === "CA" && (
        <SliderSection data={ slidesCA }/>
      )}

      {filter === "UK" && (
        <SliderSection data={ slidesUK }/>
      )}
    </>
  );
}
