// pages/_app.js
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ backgroundColor: '#001f3d', minHeight: '100vh' }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
