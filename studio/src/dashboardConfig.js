export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "609429e6cd89a70097bfdb89",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-d5ijvxgf",
                  apiId: "3b3dff56-d1e7-47c3-a622-e2c763942b53",
                },
                {
                  buildHookId: "609429e7e92e97371aa8c390",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-snn2px8s",
                  apiId: "451afae5-17da-485e-ba4e-4c96df1e94fd",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/devcoder111/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-snn2px8s.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
