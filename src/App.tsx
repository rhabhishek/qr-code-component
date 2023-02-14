import React from 'react';
import {QRCode} from "./Components/QRCode";
import {StyledContent} from "./Components/styles/StyledContent";
import {StyledContainer} from "./Components/styles/StyledContainer";

function App() {
    return (
    <StyledContainer>
      <QRCode/>
        {/*@ts-ignore*/}
      <StyledContent>
        <h1>Improve your front-end skills by building projects</h1>

        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </StyledContent>
    </StyledContainer>
  );
}

export default App;
