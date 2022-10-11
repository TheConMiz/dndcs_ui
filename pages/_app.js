import '../styles/globals.css'
import { wrapper, store } from "./../data/Store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    
  )
  
}

export default wrapper.withRedux(MyApp);

