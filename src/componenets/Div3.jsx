import React from "react";
import { Card } from "../styles/Card";
import { Heading, Section } from "../styles/Section";
const Div3 = ({ headlines }) => {
  return (
    <Card>
      <div>
        <Heading>Articles From Tech Chrunch</Heading>
      
        {headlines.map((techCrunch, key) => {
          return (
            <>
              <Section>
              <h3  style={{fontWeight: '700'}}>{techCrunch?.title}</h3>

              <a href={techCrunch?.url} target="_blank" rel="noreferrer">
                <p>{techCrunch?.description}</p>
              </a>
              <p>Author:{techCrunch.author}</p>
              
        </Section>
            </>
          );
        })}
   
      </div>
    </Card>
  );
};

export default Div3;
