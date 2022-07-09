import "../styles/globals.css";
import "tailwindcss/tailwind.css";


function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (


    <Component {...pageProps} />


  );
}

export default MyApp;
