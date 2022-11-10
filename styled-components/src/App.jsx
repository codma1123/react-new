import { useState } from "react";
import styled, { ThemeProvider } from "styled-components"
import Button from './components/Button'
import Dialog from "./components/Dialog"

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {  
  blue: '#228be6',
  gray: '#495057',
  pink: '#f06595'
}

const App = () => {

  const [visible, setVisible] = useState(false)

  const onConfirm = () => {
    console.log('확인')
    setVisible(false)
  }

  const onCancel = () => {
    console.log('취소')
    setVisible(false)
  }

  return (
    <ThemeProvider theme={{ palette }}>
      <>
        <AppBlock>
          <ButtonGroup>
            <Button>Button</Button>
            <Button color="gray" outline>Button</Button>
            <Button color="pink" size="large" outline fullWidth>Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>Button</Button>
            <Button color="gray" outline>Button</Button>
            <Button color="pink" size="large" outline fullWidth onClick={() => setVisible(true)}>삭제</Button>
          </ButtonGroup>
        </AppBlock>

        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          onConfirm={(onConfirm)}
          onCancel={onCancel}
          visible={visible}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>
  )
}

export default App
