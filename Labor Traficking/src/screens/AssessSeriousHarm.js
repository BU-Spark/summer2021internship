import React from "react";
import { Container } from "react-bootstrap";
// import { View } from 'react-native';
import "./AssessSeriousHarm.css";
// import { Grid } from '@material-ui/core';

const AssessSeriousHarm = () => {
  return (
    <div class="row">
      <div class="col-md-3 col-sm-4 col-xs-6">mmm delicious placeholder content</div>
      <div class="col s12 m4">
        <className titlebox>
          <hr />
          <Container>
            <img alt="seriousharm" src="/icons/SeriousHarm.svg"></img>
          </Container>
          <img alt="yellowline" src="/icons/yellowline.svg"></img>
          <div>
            <label>
              Physically restrains or threatens to physically restrain another
              person.
            </label>
          </div>
          <hr />
          <p>Lay Definition</p>
          Serious harm may be physical and nonphysical, including psychological,
          financial, or reputational harm. Generally, the test contemplates
          whether it is sufficiently serious, under all the surrounding
          circumstances, to compel a reasonable person of the same background
          and in the same circumstances to perform or to continue performing
          labor or services in order to avoid incurring that harm.
          <p>Legal Definition</p>
          There is currently no statutory or case law definition of serious harm
          under Massachusetts law. Serious harm is defined under federal law as
          any harm, whether physical or nonphysical, including psychological,
          financial, or reputational harm, that is sufficiently serious, under
          all the surrounding circumstances, to compel a reasonable person of
          the same background and in the same circumstances to perform or to
          continue performing labor or services in order to avoid incurring that
          harm. 18 USC § 1589(c)(2).
          <p>Evaluate</p>
        </className>
      </div>
    </div>
  );
};

export default AssessSeriousHarm;
