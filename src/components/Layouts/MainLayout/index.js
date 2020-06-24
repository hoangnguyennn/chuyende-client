import React from "react";

import Header from "../../Header";
import Container from "../../Container";
import { Section } from "../../Section";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />

      <Section>
        <Container>{children}</Container>
      </Section>
    </div>
  );
};

export default MainLayout;
