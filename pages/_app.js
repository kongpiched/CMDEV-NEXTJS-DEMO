import React from "react";
import App from "next/app";
import Link from "next/link";

export default class CMApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <div>
        {/* Navigation */}
        <nav>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/aboutus/">AboutUs</Link>
        </nav>

        <Component />

        <span>Copyright 2023 by kong.dev</span>
      </div>
    );
  }
}
