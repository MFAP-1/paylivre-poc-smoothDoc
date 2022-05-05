module.exports = {
  plugins: [
    {
      resolve: "smooth-doc",
      options: {
        name: "Paylivre POC - smooth DOC",
        description: "Este é uma POC para conhecer o smooth DOC",
        siteUrl: "https://paylivre-documentation-sdk.com",
        author: "Paylivre",
        sections: ["Basics", "Android", "iOS"],
        githubRepositoryURL: "https://github.com/MFAP-1/paylivre-poc-smoothDoc",
        twitterAccount: "Paylivre",
      },
    },
  ],
  pathPrefix: "/paylivre-poc-smoothDoc",
};
