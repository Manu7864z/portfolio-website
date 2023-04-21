import styled, { css } from "styled-components";
import Lottie from "lottie-react";
import arrowDownAnimation from "../public/arrowDown.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function Home() {
  const handleClickScroll = () => {
    const element = document.getElementById("section-2");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToHome = () => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToProjects = () => {
    const element = document.getElementById("section-2");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [projectImage, setProjectImage] = useState(0);

  const handleNextProjectImage = () => {
    if (projectImage === 0 || projectImage === 1 || projectImage === 2) {
      setProjectImage(projectImage + 1);
    } else {
      setProjectImage(0);
    }
  };

  const handlePreviousProjectImage = () => {
    if (projectImage === 1 || projectImage === 2 || projectImage === 3) {
      setProjectImage(projectImage - 1);
    } else {
      setProjectImage(3);
    }
  };

  return (
    <main>
      <Header>
        <Heading>Portfolio by Manuel Zropf</Heading>
        <StyledNav>
          <StyledNavList>
            <StyledNavListItem $home onClick={handleScrollToHome}>
              Home
            </StyledNavListItem>
            <StyledNavListItem onClick={handleScrollToProjects}>
              Projects
            </StyledNavListItem>
            <StyledNavListItem>Skills</StyledNavListItem>
            <StyledNavListItem>Contact</StyledNavListItem>
          </StyledNavList>
        </StyledNav>
      </Header>
      <StyledSection1 id="section-1">
        <StyledDiv>
          <StyledIntroHeading>Hello World!</StyledIntroHeading>
          <StyledIntro>
            Welcome to my portfolio website!
            <br />
            My name is Manuel and I am a 25-year-old front-end/web developer who
            is passionate about creating clean, user-friendly, and visually
            appealing websites. <br />I have always been fascinated by the world
            of web development and am constantly seeking to learn new skills and
            stay up-to-date with the latest industry trends.
            <br />
            <br />I am an ambitious individual with a strong work ethic and a
            dedication to producing high-quality work. Whether I am working on a
            personal project or collaborating with a team, I always strive to
            exceed expectations and deliver exceptional results. <br />
            <br />
            On this website, you will find examples of my work as well as
            information about my skills, experience, and education. I invite you
            to take a look around and get to know me better. If you have any
            questions or would like to discuss a potential project, please do
            not hesitate to get in touch.
          </StyledIntro>
        </StyledDiv>
        <StyledLottie
          animationData={arrowDownAnimation}
          loop={true}
          onClick={handleClickScroll}
        />

        <CustomShapeDivider>
          <StyledSvg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <StyledPath d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></StyledPath>
          </StyledSvg>
        </CustomShapeDivider>
      </StyledSection1>
      <StyledSection2 id="section-2">
        <h3>My latest Projects: </h3>
        <StyledProjects>
          <StyledProject>
            <StyledBlob src="/blob.svg" width={600} height={390} alt="blob" />
            <StyledNavButton type="button" onClick={handlePreviousProjectImage}>
              <GrPrevious
                style={{ color: "white", height: "50px", width: "50px" }}
              />
            </StyledNavButton>
            {projectImage === 0 && (
              <StyledProjectImage
                src="/weatherplanar0.png"
                width={300}
                height={800}
                alt="WeatherPlanar"
              />
            )}
            {projectImage === 1 && (
              <StyledProjectImage
                src="/weatherplanar1.png"
                width={300}
                height={800}
                alt="WeatherPlanar"
              />
            )}
            {projectImage === 2 && (
              <StyledProjectImage
                src="/weatherplanar2.png"
                width={300}
                height={800}
                alt="WeatherPlanar"
              />
            )}
            {projectImage === 3 && (
              <StyledProjectImage
                src="/weatherplanar3.png"
                width={300}
                height={800}
                alt="WeatherPlanar"
              />
            )}
            <StyledNavButton type="button" onClick={handleNextProjectImage}>
              <GrNext
                style={{ color: "white", height: "50px", width: "50px" }}
              />
            </StyledNavButton>
            <StyledProjectDescription>
              <h3>WeatherPlanar</h3>
              <StyledProjectDescriptionText>
                This is my Web-App called WeatherPlanar. It is a web app that
                shows the current weather and the forecast for the next 3 days.
                The user can create new tasks and appointments and plan their
                days. It is built with React and uses the API from{" "}
                <Link href="https://www.weatherapi.com/">WeatherAPI.com</Link>.
              </StyledProjectDescriptionText>
              <TechStackList>
                <li>Tech Stack: </li>
                <TechStackItem>
                  <p>React</p>
                </TechStackItem>
                <TechStackItem>
                  <p>Styled Components</p>
                </TechStackItem>
                <TechStackItem>
                  <p>Next.js</p>
                </TechStackItem>
                <TechStackItem>
                  <p>Framer-Motion</p>
                </TechStackItem>
              </TechStackList>
            </StyledProjectDescription>
          </StyledProject>
        </StyledProjects>
      </StyledSection2>
    </main>
  );
}

const Heading = styled.h1`
  font-size: 1.5rem
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 1.15;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 15%;
  transform: translate(-50%, -50%);
  ;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  `;

const Header = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  color: white;
  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 100%;
  right: 0;
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0 2rem;
`;

const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid blue;
`;

const StyledNavListItem = styled.li`
  display: flex;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.$home &&
    css`
      &:hover::after {
        width: 22%;
        left: 6%;
      }
      &::after {
        position: absolute;
        transition: 0.3s;
        content: "";
        width: 0;
        left: 50px;
        bottom: 0;
        height: 3px;
        background: #f7f7f7;
      }
    `};
`;

const StyledSection1 = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  position: relative;
  margin: 0;
  padding: 0;
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
`;

const StyledSection2 = styled.section`
  height: 200vh;
  width: 100%;
  display: flex;
  position: relative;
  margin: 0;
  padding: 0;
  background-color: #282c34;

  h3 {
    font-size: 2rem;
    color: white;
    font-family: sans-serif;
    font-weight: 400;
    line-height: 1.15;
    text-align: center;
    position: absolute;
    top: 7%;
    left: 20%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    z-index: 1;
    @media (max-width: 768px) {
      font-size: 1.2rem;
      position: relative;
      top: 0;
      left: 0;
      transform: translate(0, 0);
    }
  }
`;

const StyledIntroHeading = styled.h2`
  font-size: 2rem;
  color: white;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 1.15;
  text-align: center;
  position: absolute;
  top: 10%;
  left: 21%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  width: 80%;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StyledIntro = styled.p`
  font-size: 1.3rem;
  color: white;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 1.15;
  text-align: block;
  margin: 0;
  padding: 20px;
  height: 40vh;
  width: 80%;
  overflow: scroll;

  @media (max-width: 768px) {
    font-size: 1rem;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
`;

const StyledDiv = styled.div`
  height: 60vh;
  width: 70vw;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-border-radius: 0px;
  border-radius: 10px;
  background-image: linear-gradient(to bottom, #30cfd0 0%, #330867 100%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

const CustomShapeDivider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
`;

const StyledSvg = styled.svg`
  position: relative;
  display: block;

  width: calc(123% + 1.3px);
  height: 140px;
`;
const StyledPath = styled.path`
  margin: 0;
  padding: 0;
  fill: #282c34;
`;

const StyledLottie = styled(Lottie)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  width: 80px;
  height: 80px;
  z-index: 1;
  cursor: pointer;
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`;

const StyledProjects = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  margin: 0;
  padding: 0;
  background-color: #282c34;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
`;

const StyledProject = styled.div`
  height: 50vh;
  width: 80vw;
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
  justify-content: space-between;
  color: white;
  gap: 10px;
  @media (max-width: 768px) {
    height: 100vh;
    flex-direction: column;
  }
`;

const StyledProjectDescription = styled.article`
  height: 60vh;
  width: 40%;
  gap: 10px;
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 1080px) {
    width: 50%;
  }

  h3 {
    font-size: 1.5rem;
    color: white;
    font-family: sans-serif;
    font-weight: 400;
    line-height: 1.15;
    text-align: center;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    width: 80%;
  }

  @media (max-width: 768px) {
    height: 50vh;
    width: 100%;
  }
`;
const StyledProjectDescriptionText = styled.p`
  font-size: 1.3rem;
  color: white;
  font-family: sans-serif;
  font-weight: 300;
  line-height: 1.15;
  text-align: center;
  display: block;
  margin: 0;
  width: 80%;
  padding: 80px 0 0 0;
`;

const TechStackList = styled.ul`
  margin: 0;
  font-weight: 400;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  list-style: none;
  padding: 5%;
  margin: 3rem 0 0 0;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: fill;
  gap: 10px;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
const TechStackItem = styled.li`
  font-size: 1rem;
  color: white;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 1.15;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 5px;
  height: 3rem;
  width: fill;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.1);
    p {
      background: rgb(131, 58, 180);
      background: linear-gradient(
        90deg,
        rgba(131, 58, 180, 1) 0%,
        rgba(253, 29, 29, 1) 50%,
        rgba(252, 176, 69, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    background-color: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledProjectImage = styled(Image)`
  height: 38rem;
  width: 22rem;
  border-radius: 10px;
  z-index: 1;
  margin: 0;
  padding: 0;
  transition: ease-in-out 0.5s;

  &:hover {
    transform: scale(1.04);
  }

  @media (max-width: 768px) {
    height: 38rem;
    width: 22rem;
  }
`;

const StyledBlob = styled(Image)`
  position: absolute;
  top: 20%;
  left: 90%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  width: 500px;
  height: 500px;
  z-index: 0;
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    top: 60%;
    left: 90%;
  }
`;

const StyledNavButton = styled.button`
  margin: 0;
  padding: 0;
  width: 50px;
  color: white;
  height: 50px;
  z-index: 1;
  border: none;
  background-color: transparent;
  position: relative;
  top: 60%;
  transform: translate(-50%, -50%);
  transition: ease-in-out 0.3s;
  cursor: pointer;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    top: 10%;
    left: 10%;
  }
`;
