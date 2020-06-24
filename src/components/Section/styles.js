import styled from "styled-components";

const Section = styled.div`
  margin: 40px 0 20px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;

  span {
    font-size: 16px;
    font-weight: 300;
    text-transform: lowercase;
  }
`;

export { Section, SectionTitle };
