import * as React from "react";
import Layout from "../components/layout";
import { SyloperLogo } from '../images';

import { MainLoginStyled, mainStyled, headingOneStyled, paragraphStyled, codeStyled, contain404Styled } from "./styles/MainLoginStyled";

// markup
const NotFoundPage = () => {

  return (
    <Layout>
      <MainLoginStyled>
        <contain404Styled>
          <div>
            <SyloperLogo />
          </div>

          <h2>error 404</h2>
          <p>Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.</p>

        </contain404Styled>
      </MainLoginStyled>
    </Layout>
     
  )


}

export default NotFoundPage
