import CartContextProvider from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";

const GlobalsStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  body{
    background-color: #eee;
    padding:0;
    margin: 0;
    font-family: "Poppins", sans-serif;
  }
`;

export default function App({ Component, pageProps}) {
  return (
    <>  
      <GlobalsStyles/>
        <CartContextProvider>
          <Component {...pageProps}/>
        </CartContextProvider>
      
    </>
  );
}
