import '../styles/globals.css'
import { wrapper, store } from "./../Store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    
    // <Component {...pageProps} /> 

  )
  
}

export default wrapper.withRedux(MyApp);
// export default MyApp;

