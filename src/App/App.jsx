import { BoldText, Container, Image, Text, TextWrapper } from "./styled";
import QRCODE from "./assets/qrCode.png";

function App() {
  return (
    <Container>
      <Image src={QRCODE} />
      <TextWrapper>
        <BoldText>Improve your front-end skills by building projects</BoldText>
        <Text>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Text>
      </TextWrapper>
    </Container>
  );
}

export default App;
