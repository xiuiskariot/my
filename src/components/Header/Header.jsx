import { Container } from "../Container";
import styled from "styled-components"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import s from './Header.module.css'


const HeaderStyled = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #23024e;
  cursor: pointer;
  position: relative;

  :hover {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 1ms;
  }

  a {
    text-decoration: none;
  }
  a: visited {
    color: #23024e;
  }
  a: link {
    color: #23024e;
  }

  .mobile_btn {
    display: none;
  }

  .open {
    position: fixed;
    background-color: white;
    top: 66px;
    right: 28px;
    position: fixed;
    width: 50px;
    height: 50px;
    z-index: 500;
    cursor: pointer;
  }

  @media (max-width: 765px) {
    padding-top: 70px;
    flex-direction: column;
    justify-content: start;
    align-items: end;
    border: none;
    height: 100vh;
    background-color: #f8c1e3;
    position: fixed;
    // left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    // width: 100%;

    z-index: 180;
    transition: left 1s;

    .li {
      margin-bottom: 30px;
      // margin-left: auto;
      margin-right: 60px;
    }

    .mobile_btn {
      display: block;
      position: absolute;
      right: 10px;
      top: 27px;
      cursor: pointer;
      z-index: 10;
    }

    .open {
      position: fixed;
      background: white;
      top: 66px;
      right: 28px;
      position: fixed;
      width: 50px;
      height: 50px;
      z-index: 500;
      cursor: pointer;
    }
  }
`;



export const Header = () => {
  const [nav, setNav] = useState(false)

  return (
    <>
      {/* <div onClick={() => setNav(!nav)} className={s.open}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div> */}
      <Container>
        {nav && (
          <HeaderStyled>
            <div className="li">Главная</div>
            <div className="li">Обо мне</div>
            <a href="#projects" className="li">
              Проекты
            </a>
            <a href="#contacts" className="li">
              Контакты
            </a>
            {/* <div className="mobile_btn">
          <AiOutlineClose size={25} />
        </div> */}
            <div onClick={() => setNav(!nav)} className="mobile_btn">
              {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
          </HeaderStyled>
        )}
      </Container>
    </>
  );
};
