import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render(): JSX.Element {
		return (
			<Html lang='en'>
				<Head>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap'
						rel='stylesheet'
					/>
					<meta charSet='utf-8' />
					<meta
						name='description'
						content='Web app for observing independent rating of schools and courses'
					/>
					<meta
						name='keywords'
						content='rating, online, courses, schools, observing'
					/>
					<meta name='author' content='Artem Shchirov' />
					<meta name='robots' content='index, follow' />
					<meta name='googlebot' content='index, follow' />
					<meta name='referrer' content='no-referrer-when-downgrade' />
					{/* TODO globally for website all above and below tags
					<link rel='canonical' href='https://current-page' />
					<meta property='og:title' content='#' />
					<meta property='og:type	' content='#' />
					<meta property='og:description' content='#' />
					<meta property='og:image' content='#' />
					<meta property='og:url' content='#' />
					<meta name="google-site-verification" content="" */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
