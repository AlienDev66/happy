import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  ContentWrapper,
  ImageLogo,
  Location,
  Main,
  PageLanding,
} from "./styles";
import logoImg from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  return (
    <PageLanding>
      <ContentWrapper>
        <ImageLogo src={logoImg} alt="Happy" />

        <Main>
          <h1>Leve a felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Main>

        <Location>
          <strong>Luanda</strong>
          <span>Cazenga</span>
        </Location>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0, 0.6)" />
        </Link>
      </ContentWrapper>
    </PageLanding>
  );
};

export default Landing;
