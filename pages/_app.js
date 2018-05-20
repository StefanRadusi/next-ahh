;
import App, { Container } from 'next/app';
import React from 'react';
import Layout from '../components/Layout/Layout';

import { PageTransition } from 'next-page-transitions';

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      let pageProps = {}
  
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
  
      return { pageProps }
    }

    render() {
        const {Component, pageProps} = this.props
        return (
            <Layout> 
                <Container>
                    <PageTransition timeout={600} classNames="page-transition">
                        <Component {...pageProps} />
                    </PageTransition>
                </Container>
            </Layout>
        )
    }
}