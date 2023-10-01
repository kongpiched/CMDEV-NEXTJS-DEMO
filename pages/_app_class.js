import React from "react";
import App from "next/app";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";
import "../assets/css/index.css";

export default class CMApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <div>
        <Head>
          <title>test</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossOrigin="anonymous"
          />
        </Head>
        <Nav />
        <div className="index-content">
          <Component />
        </div>
        <Footer />
      </div>
    );
  }
}
