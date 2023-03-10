import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Owl Top</title>
				<link rel='icon' href='/favicon.ico' />
				{/* TODO on every page all above and below tags
				<link rel='canonical' href='#' />
				<meta name='keywords' content='#' />
				<meta name='robots' content='#' />
				<meta name='google-site-verification' content='#' /> */}
			</Head>
			<Component {...pageProps} />
		</>
	);
}
