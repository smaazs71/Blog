export const blogs = [
  {
    id: "abcd1",
    slug: "abcde",
    author_id: "efgh1",
    title: "First Blog",
    meta_title: "",
    excerpt: "Summary",
    content: `<p>IMHO, whether a system architecture and design is the best design is very subjective and tends to court some arguments. It is analogous to asking the question of which programming language(s) is best-suited to create a web portal or web services, regardless of whether it is a consumer-facing application or enterprise application. Should we use Java, C# with .NET, Ruby, Rust, Golang and so on? Same applies to machine learning and data science applications, whether we should use R or Python, or Julia? In terms of database servers, should we use MS Sql Server, Oracle, PostgreSQL, MySQL and so on? The list goes on …..

    Anyway, i still think for small and medium size applications (i believe that majority of B2B and SaaS applications probably fall into this category’s size), “simple” and maintainable design with “simple” scalability mechanism are more than enough. In reality, how to design a “simple” yet maintainable and scalable application is rather challenging. Too much embellishment makes the system looks good on the paper, but in most of the cases, poses huge challenge to maintain. So, what components/modules are indispensable in a typical SaaS and B2B applications, especially we are referring to system which also requires certain extent of security management? The following shows what i think it should entail:
    <a href=''>link to someplace</a>
    Logging and Monitoring Mechanism
    Key Management
    Multi-Tenancy Design
    Data Denormalization for Data Warehouse/ Analytics which in turn for Reporting
    Caching
    If i were the one designing the SaaS/B2B solution, this will be my high-level architectural diagram:</p>`,

    status: false,
    category: "",
    type: "",
    comment_count: "",
    published_at: "",
    timestamps: "",
  },
];
