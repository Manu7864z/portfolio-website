import styled from "styled-components";

export default function Home() {
  return (
    <main>
      <Header>
        <Heading>Web Development - Manuel Zropf</Heading>
      </Header>
      <StyledSection1>
        <StyledDiv>
          <p>Hello World!</p>
        </StyledDiv>
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
      <StyledSection2>
        <p>My latest Projects: </p>
      </StyledSection2>
    </main>
  );
}

const Heading = styled.h1`
  font-size: 1.5rem
  color: red
  text-align: center
  margin: 0
  padding: 0
  font-family: sans-serif
  font-weight: 400
  line-height: 1.15
  text-align: center
  margin: 0; 
  padding: 10px 0 0 20px ;
  ;

  @media (min-width: 768px) {
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
  z-index: 1;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
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
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  margin: 0;
  padding: 0;
  background-color: #282c34;

  p {
    font-size: 2rem;
    color: white;
    font-family: sans-serif;
    font-weight: 400;
    line-height: 1.15;
    text-align: center;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  align-items: center;
  p {
    font-size: 2rem;
    color: white;
    font-family: sans-serif;
    font-weight: 400;
    line-height: 1.15;
    text-align: center;
    margin: 0;
    padding: 0;
  }
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
