import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/soe";
import Footer from "../components/footer";

const HomePage = () => {
  const projects = [
    {
      image: <StaticImage src="../assets/demo.png" alt="pg1" />,
      title: "Portfolio",
      link: "/portfolio",
      tech: "React typescript",
      style:
        "hover:bg-pink-600 absolute group/edit invisible group-hover/item:visible h-full w-full transition-transform ease-in-out",
    },
    {
      image: <StaticImage src="../assets/recommender.png" alt="pg2" />,
      title: "Book recommender system",
      link: "/recommender",
      tech: "Jupyter + Python",
      style:
        "hover:bg-violet-600 absolute group/edit invisible group-hover/item:visible h-full w-full",
    },
    {
      image: <StaticImage src="../assets/shoopweb.png" alt="pg3" />,
      title: "Shopping Web",
      link: "/shop",
      tech: "HTML + CSS + Js",
      style:
        "hover:bg-lime-600 absolute group/edit invisible group-hover/item:visible h-full w-full",
    },
    {
      image: <StaticImage src="../assets/statup.png" alt="pg4" />,
      title: "Organistion Web",
      link: "/startup",
      tech: "HTML + Bootstrap + Js",
      style:
        "hover:bg-amber-600 absolute group/edit invisible group-hover/item:visible h-full w-full",
    },
  ];

  return (
    <main>
      <title>Home Page</title>
      <div>
        <Layout
          pageTitle="Home Page"
          className="transition-transform hover:-translate-y-4"
        >
          <ul className="flex transition translate-y-4">
            {projects?.map((project, i) => (
              <li
                className="grid h-96 relative group/item transition-transform hover:-translate-y-4"
                key={i}
              >
                {project.image}

                <a href={project.link} className={project.style}>
                  <p className="text-white absolute text-center w-60 mt-16 text-3xl font-semibold">
                    {project.title}
                    <br />
                    <span className="text-base font-normal ">
                      {project.tech}
                    </span>
                  </p>
                </a>
              </li>
            ))}
          </ul>

          <Footer />
        </Layout>

        <StaticImage src="" alt="image" />
      </div>
    </main>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default HomePage;
