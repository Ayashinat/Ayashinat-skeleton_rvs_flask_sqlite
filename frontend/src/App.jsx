import { ChakraProvider, Flex } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import Header from './maincomponents/header';
import Main from './maincomponents/main';
import Footer from './maincomponents/footer';


function App() {

  const appstyle={
    "display": "flex",
    "flexDirection": "column",
    "minHeight": "100vh",
  }

  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <div style={appstyle}  >
            <Header />
            <Main />
            <Footer />
          </div>
        </BrowserRouter>
      </ChakraProvider>


    </>
  )
}

export default App
