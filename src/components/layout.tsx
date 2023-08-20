import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ pageTitle, children }: any) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const social_media = [
    {
      logo: <StaticImage src="../assets/linkedin-icon.png" alt="pg4" />,
      link: "https://www.linkedin.com/in/ian-mlolwa-b18195215/",
      alt: "",
    },
    {
      logo: <StaticImage src="../assets/facebook-icon.png" alt="pg4" />,
      link: "https://www.facebook.com/ian.mwamburi/",
      alt: "",
    },
    {
      logo: <StaticImage src="../assets/instagram-icon.png" alt="pg4" />,
      link: "https://www.instagram.com/ianmlolwa/",
      alt: "",
    },
    {
      logo: <StaticImage src="../assets/twitter-icon.png" alt="pg4" />,
      link: "https://twitter.com/ianmlolwa",
      alt: "",
    },
  ];

  return (
    <div className="bg-slate-800 h-screen">
      <nav>
        <ul className="flex px-0 justify-between p-4 text-2xl text-white">
          <li className="p-2 hover:text-amber-600">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 hover:text-amber-600 font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="  font-semibold flex justify-between">
            {social_media?.map((media) => (
              <div className="hover:bg-amber-600 cursor-pointer">
                <a href={media.link} target="_blank">
                  {media.logo}
                </a>
              </div>
            ))}
          </li>
        </ul>
      </nav>
      {children}
      <main></main>
    </div>
  );
};

export default Layout;
