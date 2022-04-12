import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #f3f4f5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Text = styled.div`
  color: black;
`;

const Announcement = () => {
  return (
    <Container>
      <Text>Announc</Text>
    </Container>
  );
};

export default Announcement;
