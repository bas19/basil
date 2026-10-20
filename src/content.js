// All site content lives here. Edit this file to update the portfolio.

export const header = {
    title: "Basil.",
}

// Years of experience are counted from this date (first professional role: JVOS, Mar 2016)
const careerStart = new Date(2016, 2, 1)
const yearsOfExperience = Math.floor((Date.now() - careerStart) / (365.25 * 24 * 60 * 60 * 1000))

export const about = {
    name: "Basilio Abaquita",
    nickname: "Basil",
    role: "Full-Stack Software Developer",
    description: `I have ${yearsOfExperience}+ years of experience building and maintaining web and mobile applications with PHP/Laravel, Vue.js, React, and WordPress. I help businesses turn ideas into reliable, scalable software — from the first release to long-term support.`,
    picture: "avatar.jpg",
    // Link to a PDF in public/ (e.g. "resume.pdf") to show a Resume button
    resume: null,
    social: {
        github: "https://github.com/bas19",
        linkedin: "https://www.linkedin.com/in/basilio-abaquita/",
    },
}

export const services = [
    {
        icon: "code",
        title: "Website Development",
        description:
            "Custom WordPress themes and plugins, Laravel web applications, WooCommerce stores, and responsive frontends built from Figma designs.",
    },
    {
        icon: "phone",
        title: "Mobile App Development",
        description:
            "React Native and hybrid mobile apps — from job application flows to in-app camera capture — connected to secure backend APIs.",
    },
    {
        icon: "build",
        title: "Maintenance & Support",
        description:
            "Bug fixes, database and query optimization, security hardening against XSS, CSRF, and SQL injection, cross-browser fixes, and ongoing feature work.",
    },
    {
        icon: "sync",
        title: "API & System Integration",
        description:
            "REST and headless WordPress APIs, serverless APIs on AWS, Stripe payments, Twilio SMS, and other third-party services.",
    },
]

export const projects = [
    {
        name: "Vinocrat",
        description:
            "Website for Professor Reinders Wine Academy at The Northern Club, Auckland — WSET wine courses, instructor profile, curriculum, and enrollment enquiries.",
        stack: ["Website", "Education", "Landing Page"],
        image: "projects/vinocrat.webp",
        livePreview: "https://vinocrat.wine",
    },
    {
        name: "Othership",
        description:
            "Workspace discovery and booking platform with location search, filtering, instant booking, and an interactive map of listings across the UK.",
        stack: ["Web App", "Booking", "Maps"],
        image: "projects/othership.webp",
        livePreview: "https://othership.com",
    },
    {
        name: "Ethesia",
        description:
            "Career hub for anesthesia professionals — job search by profession and location, employer job posting, and paid subscription plans.",
        stack: ["Job Board", "Subscriptions", "Payments"],
        image: "projects/ethesia.webp",
        livePreview: "https://www.ethesia.com",
    },
    {
        name: "SMS Management System",
        description:
            "SMS management and automation for a vehicle licensing company — inbox, scheduled and automated messages, contacts, keywords, credit tracking, and exportable reports. Integrated with Twilio.",
        stack: ["Twilio", "SMS Automation", "Dashboard"],
        image: "projects/sms-system.webp",
    },
    {
        name: "Hire Trades",
        description:
            "Hybrid mobile app connecting tradespeople with businesses, featuring business accounts and a job application flow.",
        stack: ["Hybrid Mobile", "Job Applications"],
        image: "projects/hire-trades.webp",
    },
    {
        name: "Pacific Resort",
        description:
            "Resort group website with property selection, date-based booking, featured stay packages, and partner hotel listings.",
        stack: ["Website", "Booking"],
        image: "projects/pacific-resort.webp",
        livePreview: "https://www.pacificresort.com",
    },
    {
        name: "7D Mangoes",
        description:
            "Brand website for a Philippine dried-mango producer covering the company story, product catalog, distributors, and where to buy.",
        stack: ["Website", "Catalog"],
        image: "projects/7d-mangoes.webp",
        livePreview: "https://www.7dfoods.com",
    },
]

export const experience = [
    {
        role: "Web Engineer",
        company: "Appyugo",
        period: "Aug 2024 – Present",
        highlights: [
            "Rebuild, optimize, and extend legacy systems with new features while preserving stability",
            "Diagnose and resolve bugs across multiple production e-commerce websites",
            "Integrate third-party services, including payment gateways and video platforms",
            "Deploy and maintain new features in production environments",
            "Support and mentor teammates through code reviews and technical guidance",
        ],
    },
    {
        role: "Full-Stack Software Developer",
        company: "Changing Digital",
        period: "Oct 2021 – Jun 2024",
        location: "Remote",
        highlights: [
            "Developed headless WordPress RESTful APIs and custom WooCommerce plugins",
            "Built serverless APIs on AWS using SAM, Lambda, and API Gateway",
            "Migrated data from a WordPress MySQL database to MongoDB",
            "Integrated Auth0 for authentication and user management",
            "Added features to mobile applications and published releases to the App Store",
            "Implemented pixel-accurate UI updates from Figma designs",
            "Collaborated across project teams and onboarded new developers",
        ],
    },
    {
        role: "Back-End Software Developer",
        company: "Next65 Solutions",
        period: "Aug 2020 – Aug 2021",
        location: "Remote",
        highlights: [
            "Restructured the codebase and database of a loan application platform, covering file management, consultant-to-borrower assistance, role-based dashboards, and authentication",
            "Optimized database performance and eliminated N+1 query issues",
            "Built a selfie-capture feature for the application process in React Native (iOS and Android)",
            "Supported front-end developers and QA teams on API endpoint design and troubleshooting",
        ],
    },
    {
        role: "Front-End Web Developer",
        company: "BlaqClouds Inc.",
        period: "Oct 2018 – Mar 2020",
        location: "Onsite",
        highlights: [
            "Rebuilt web security features to protect against XSS, CSRF, SQL injection, and spam, including country-based access blocking",
            "Converted front-end designs and developed back-end features such as plan subscriptions for a job-posting platform",
            "Integrated the Stripe payment gateway",
        ],
    },
    {
        role: "Software Engineer",
        company: "1722 IT Services",
        period: "Apr 2017 – May 2018",
        location: "Onsite",
        highlights: [
            "Developed hybrid mobile apps with features such as job applications",
            "Built automated and manual SMS notification management for a vehicle licensing company, integrated with Twilio",
            "Designed the user interface for the production module of an ERP system",
            "Built custom WordPress plugins and websites; guided junior developers and interns",
        ],
    },
    {
        role: "WordPress Web Developer",
        company: "JVOS",
        period: "Mar 2016 – Feb 2017",
        highlights: [
            "Customized WordPress themes and maintained websites for several universities",
            "Created custom plugins, including a crime-statistics plugin by city or country and a Google Maps–based plugin",
            "Built web pages from scratch, converted PSD designs to HTML, and developed helper tools in JavaScript and PHP",
        ],
    },
]

export const skills = [
    { group: "Core", items: ["Laravel", "Vue.js", "WordPress", "React", "React Native"] },
    { group: "Programming", items: ["PHP", "JavaScript", "TypeScript", "Python", "Java", "C#"] },
    {
        group: "Front-End",
        items: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Nuxt.js", "Inertia.js", "Livewire", "jQuery"],
    },
    {
        group: "Back-End & APIs",
        items: ["Node.js", "Express.js", "REST", "GraphQL", "SOAP", "Swagger/OpenAPI", "Headless CMS"],
    },
    {
        group: "Auth & Security",
        items: ["JWT", "OAuth", "Auth0", "AWS Cognito", "XSS/CSRF/SQL Injection Prevention"],
    },
    { group: "Databases", items: ["MySQL", "MongoDB", "SQL Query Optimization"] },
    {
        group: "Cloud & DevOps",
        items: ["AWS EC2", "AWS Lambda", "AWS SAM", "API Gateway", "CloudWatch", "Route 53", "Docker", "Nginx", "Apache", "CI/CD"],
    },
    { group: "Testing", items: ["Unit", "Integration", "End-to-End", "Test Automation", "TDD"] },
    { group: "Practices", items: ["Agile", "SOLID", "MVC", "Domain-Driven Design", "Microservices", "Design Patterns"] },
    { group: "Tools", items: ["Git", "Postman", "Figma", "Claude", "GitHub Copilot", "ChatGPT"] },
    { group: "Languages", items: ["English (Professional)", "Filipino (Native)", "Cebuano/Bisaya (Native)"] },
]

export const education = [
    {
        title: "Bachelor of Science in Information Technology",
        school: "Asian College of Technology, Cebu",
        period: "2014",
    },
]

export const training = [
    { title: "Web Developer Trainee", school: "Coding Avenue", period: "Jul – Nov 2015 · 4 months" },
    { title: "Web Developer, On-the-Job Training", school: "Talleco", period: "Jun – Sep 2014 · 3 months" },
    { title: "Java Programming", school: "TESDA", period: "2010 · 240 hours" },
]

export const contact = {
    email: "basil.softdev@gmail.com",
}
