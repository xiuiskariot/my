import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin-bottom: 30px;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .title {
    font-weight: bold;
    margin-bottom: 6px;
  }

  img {
    border-radius: 15px;
    height: 100%;
    width: 100%;
  }

  .pics {
    height: 215px;
    width: 450px;
  }

  .tech {
    margin-bottom: 7px;
    min-height: 40px;
  }

  .desc {
    font-size: 13px;
    width: 100%
  }

  span {
    background: lavender;
    line-height: 20px;
    padding: 2px;
    border-radius: 5px;
    margin-right: 3px;
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: bold;
    white-space: wrap;
  }
  .link {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 14px;
    font-family: "Space Mono", monospace;
    min-width: 146px;
    height: 38px;
    background: #23024e;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    color: rgb(241, 241, 241);
    box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
    transition: box-shadow 0.2s;
  }

  .link:hover {
    transform: scale(1.03);
    transition: 0.8ms;
  }
  // @media (max-width: 658px) {
  //   width: 400px
  // }

  @media (max-width: 702px) {
    grid-template-columns: 1fr;
    width: 400px;
    margin: 0 auto 50px;

    img {
      width: 100%;
    }

    .desc {
      margin-bottom: 20px;
    }
  }
`;



export const Card = ({ name, pic, link, desciption, stack }) => {
  return (
    <CardStyled>
      <div className="pics">
        <img src={pic} alt={name} />
      </div>

      <div className="info">
        <h3 className="title">{name}</h3>
        <div className="tech">
          {stack.map((el, i) => (
            <span key={i}>{el} </span>
          ))}
        </div>
        <div className="desc">{desciption}</div>
        <a href={link} className="link">
          ПОСМОТРЕТЬ
        </a>
      </div>
    </CardStyled>
  );
};
