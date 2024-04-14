import React, { useEffect } from "react";
import { Card } from "../styles/Card";
import { Container } from "../styles/Container";
import {
  ArticleHeading,
  ImageDiv,
  StyledFullDiv,
  StyledMain,
} from "../styles/Main";
import Div1 from "./Div1";
import Div2 from "./Div2";
import FinalDiv from "./FinalDiv";
import VideosDiv from "./VideosDiv";
import Div3 from "./Div3";
import { Heading, Section } from "../styles/Section";

function Main({
  general,
  teslaNews,
  headlines,
  filteredArticles,
  searchTerm,
  setSelectedValue,
  selectedValue,
}) {
  var newTechnology = [];

  const filterByCategory = filteredArticles.filter(
    (article) => article.source.name === selectedValue
  );

  return (
    <StyledMain>
      <Container>
        {searchTerm?.length > 0 ? (
          <Card>
            <Heading>Searched Articles</Heading>
            <br />
            <Section>
            {filteredArticles.map((article, index) => (
               <a href={article.url} target="_blank" rel="noreferrer">
                <p key={index}>{article.title}</p>
               </a>
            
            ))}
            </Section>
          </Card>
        ) : null}

        <Div1
          general={general}
          teslaNews={teslaNews}
          headlines={headlines}

        
        />
        <VideosDiv />

        <Div2
          general={general}
          teslaNews={teslaNews}
          headlines={headlines}
        
        />
        <Div3 general={general} teslaNews={teslaNews} headlines={headlines} />
        <VideosDiv />

        <StyledFullDiv>
        <Card>
            <a href={teslaNews[4].url} target="_blank" rel="noreferrer">
              <ImageDiv>
                <img
                  src={teslaNews[4].image}
                  alt={`Thumbnail of ${teslaNews[4].title}`}
                />
              </ImageDiv>
              <ArticleHeading>
                <p>{teslaNews[4].category}</p>
                <h3>{teslaNews[2].title} </h3>
                <p>{teslaNews[4].author || newTechnology[4].source} </p>
              </ArticleHeading>
            </a>
          </Card>
        </StyledFullDiv>
        <FinalDiv
          general={general}
          teslaNews={teslaNews}
          headlines={headlines}
        
        />
        {filterByCategory?.map((cat) => (
          <p>{cat?.title}</p>
        ))}
      </Container>
    </StyledMain>
  );
}

export default Main;
