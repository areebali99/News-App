import React from "react";import { Card } from "../styles/Card";
import { Heading, Section } from "../styles/Section";

function CategoryDiv({ heading, data }) {
  return (
    <Card>
      <div>
        <Heading>{heading}</Heading>
      </div>

      {data?.map((article, idx) => {
        return (
          <Section>
          <div key={idx}>
            <a href={article.url} target="_blank" rel="noreferrer">
              <div>
                <h3>
                  {article.title.length > 55
                    ? `${article.title.slice(0, 55)}...`
                    : article.title}{" "}
                </h3>
                <p>{article.author || article.source.name}</p>
              </div>
            </a>
          </div>
          </Section>
        );
      })}
    </Card>
  );
}

export default CategoryDiv;
