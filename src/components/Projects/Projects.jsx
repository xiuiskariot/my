import { Container } from "../Container"
import { Card } from "./Card"
import { learnEx } from "./projectData"
import { realEx } from "./projectData"
import styled from "styled-components"

const TitleS = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 30px
`


export const Projects = () => {
  
  return (
    <Container>
      <section id="projects">
        <TitleS>РЕАЛЬНЫЕ ПРОЕКТЫ</TitleS>
        <div>
          {realEx.map((el) => (
            <Card {...el} />
          ))}
        </div>
        <TitleS>ЛИЧНЫЕ ПРОЕКТЫ</TitleS>
        <div>
          {learnEx.map((el) => (
            <Card {...el} />
          ))}
        </div>
      </section>
    </Container>
  );
}
