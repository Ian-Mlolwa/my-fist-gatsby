import * as React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/soe";

const Shopify = () => {
  return (
    <>
      <title>Shopify</title>

      <Layout pageTitle="About">
        <div style={{ display: "grid" }} className="h-screen">
          <StaticImage
            style={{
              gridArea: "1/1",
            }}
            alt=""
            src={"../assets/bg3.jpg"}
          />

          <div
            className="bg-slate-700 opacity-90"
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            <div className="text-white mt-10 w-2/3">
              <h1 className="text-5xl font-semibold mb-11">Shopify</h1>
              <br />
              <br />
              <p className="mb-10 text-lg">
                Hi, thanks for visiting my projects presentation! You can find
                more info of the projects at and visit my{" "}
                <a
                  href="http://my-portfolio-ian.netlify.app"
                  className="text-amber-600"
                >
                  personal website
                </a>{" "}
                to learn more about my skills and about myself. Minimalistic
                portfolio with full-width grid, page transitions, support for
                additional MDX pages, and a focus on large images.
              </p>

              <div>
                <StaticImage src="../assets/shoopweb.png" alt="pg4" />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const Head = () => <Seo title="Shopify" />;

export default Shopify;
