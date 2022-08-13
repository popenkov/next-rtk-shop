import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="py-7 px-5">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
