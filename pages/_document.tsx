import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang='en'>
                <Head >
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"  />
                    <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
                </Head>
                <body className="bg-gradient-to-r from-green-500 to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white " >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument