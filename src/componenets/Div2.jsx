import {React, useState} from "react";
import { Card } from "../styles/Card";
import { Heading, Section } from "../styles/Section";
import { ArticleHeading, Div2Main, ImageDiv } from "../styles/Div2";

function Div2({ teslaNews }) {
  var newGeneral = [];

  var popularMain = [];

  newGeneral.length = 6;
  popularMain.length = 7;


  return (
    <div>

      <Card>
      <Heading>Articles From WSJ</Heading>
        {teslaNews?.map((article) => {
          return (
            <div>
            <Section>
            <a href={article.url} target="_blank" rel="noreferrer">
                            <div>
                              <h3 style={{fontWeight: '700'}}>
                                {article.source.name.length > 55
                                  ? `${article.source.name.slice(0, 55)}...`
                                  : article.source.name}{" "}
                                
                              </h3>
                              <p>    {article.content
                                  ? `${article.content.slice(0, 200)}...`
                                  : article.title}{" "}</p>
                            </div>
                          </a>
            </Section>
           
            </div>
          );
        })}
      </Card>

      <Div2Main>
        {newGeneral[5]?.title ? (
          <>
            <div>
              <Card>
                <a href={newGeneral[0].url} target="_blank" rel="noreferrer">
                  <ImageDiv>
                    <img
                      src={newGeneral[0].image}
                      alt={`Thumbnail of ${newGeneral[0].title}`}
                    />
                  </ImageDiv>
                  <ArticleHeading>
                    <p>{newGeneral[0].category}</p>
                    <h3>
                      {newGeneral[0].title.length > 75
                        ? `${newGeneral[0].title.slice(0, 75)}...`
                        : newGeneral[0].title}
                    </h3>
                    <p>{newGeneral[0].author || newGeneral[0].source} </p>
                  </ArticleHeading>
                </a>
              </Card>
              <Card>
                <a href={newGeneral[1].url} target="_blank" rel="noreferrer">
                  <ImageDiv>
                    <img
                      src={newGeneral[1].image}
                      alt={`Thumbnail of ${newGeneral[1].title}`}
                    />
                  </ImageDiv>
                  <ArticleHeading>
                    <p>{newGeneral[1].category}</p>
                    <h3>{newGeneral[1].title} </h3>
                    <p>{newGeneral[1].author || newGeneral[1].source} </p>
                  </ArticleHeading>
                </a>
              </Card>
            </div>
            <div>
              <Card>
                <a href={newGeneral[4].url} target="_blank" rel="noreferrer">
                  <ImageDiv>
                    <img
                      src={newGeneral[4].image}
                      alt={`Thumbnail of ${newGeneral[4].title}`}
                    />
                  </ImageDiv>
                  <ArticleHeading>
                    <p>{newGeneral[4].category}</p>
                    <h3>{newGeneral[4].title} </h3>
                    <p>{newGeneral[4].author || newGeneral[4].source} </p>
                  </ArticleHeading>
                </a>
              </Card>
              <div>
                <Card>
                  <a href={newGeneral[2].url} target="_blank" rel="noreferrer">
                    <ImageDiv>
                      <img
                        src={newGeneral[2].image}
                        alt={`Thumbnail of ${newGeneral[2].title}`}
                      />
                    </ImageDiv>
                    <ArticleHeading>
                      <p>{newGeneral[2].category}</p>
                      <h3>
                        {newGeneral[2].title.length > 40
                          ? `${newGeneral[2].title.slice(0, 40)}...`
                          : newGeneral[2].title}
                      </h3>
                      <p>{newGeneral[2].author || newGeneral[2].source} </p>
                    </ArticleHeading>
                  </a>
                </Card>
                <Card>
                  <a href={newGeneral[3].url} target="_blank" rel="noreferrer">
                    <ImageDiv>
                      <img
                        src={newGeneral[3].image}
                        alt={`Thumbnail of ${newGeneral[3].title}`}
                      />
                    </ImageDiv>
                    <ArticleHeading>
                      <p>{newGeneral[3].category}</p>
                      <h3>
                        {newGeneral[3].title.length > 40
                          ? `${newGeneral[3].title.slice(0, 40)}...`
                          : newGeneral[3].title}
                      </h3>
                      <p>{newGeneral[3].author || newGeneral[3].source} </p>
                    </ArticleHeading>
                  </a>
                </Card>
              </div>
            </div>
            <div>
              <Card>
                <a href={newGeneral[5].url} target="_blank" rel="noreferrer">
                  <ImageDiv>
                    <img
                      src={newGeneral[5].image}
                      alt={`Thumbnail of ${newGeneral[5].title}`}
                    />
                  </ImageDiv>
                  <ArticleHeading>
                    <p>{newGeneral[5].category}</p>
                    <h3>
                      {" "}
                      {newGeneral[5].title.length > 55
                        ? `${newGeneral[5].title.slice(0, 55)}...`
                        : newGeneral[5].title}
                    </h3>
                    <p>{newGeneral[5].author || newGeneral[5].source} </p>
                  </ArticleHeading>
                </a>
              </Card>
            </div>
          </>
        ) : (
          ""
        )}
      </Div2Main>
    </div>
  );
}

export default Div2;
