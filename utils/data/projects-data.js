import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";
import ayla from "/public/image/ayla.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Iwant (Social Network App)",
    description:
      "Iwant is a feature-rich social networking application built with React Native CLI. The app enables users to connect, share content, and interact in real-time. Key features include user profiles, posts with media sharing, friend connections, real-time notifications, and personalized feeds. The application implements GraphQL for efficient data fetching and mutations, providing a smooth user experience with optimized network requests. The backend, built with Node.js, handles authentication, data persistence, and real-time features, creating a comprehensive social platform for seamless user interaction.",
    tools: [
      "React Native (CLI)",
      "GraphQL",
      "Node.js",
      "Express",
      "MongoDB",
      "Apollo Client",
      "JWT Authentication"
    ],
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "eKuponi 3D BOX (E-Gift Card Shopping App)",
    description:
      "eKuponi 3D BOX is a sophisticated e-gift card marketplace developed with React Native Expo. This application allows users to browse, purchase, and send digital gift cards from various retailers. The platform features an intuitive 3D interface for showcasing gift cards, secure payment processing, personalized messaging for recipients, and digital delivery options. Users can manage their purchased cards, track usage, and receive notifications about special offers. The app's streamlined UX/UI ensures a seamless shopping experience while maintaining robust security for financial transactions.",
    tools: [
      "React Native (Expo)",
      "Redux",
      "React Navigation",
      "Stripe Integration",
      "Firebase",
      "Expo Notifications",
      "Expo GL for 3D rendering"
    ],
    code: "https://github.com/markostupar98/ekuponi-giftcards",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Zesty Bet (Online Casino Platform)",
    description:
      "Zesty Bet is a comprehensive online casino platform built with Next.js and Prisma. This web application offers users a secure and engaging gambling experience with various casino games integrated through the Softswiss API. The platform includes user account management, deposit and withdrawal functionality, game history tracking, and personalized recommendations. Advanced features include real-time game updates, responsible gambling tools, and comprehensive analytics for platform administrators. The application's responsive design ensures a consistent experience across devices, while server-side rendering provides optimal performance and SEO benefits.",
    tools: [
      "Next.js",
      "Prisma",
      "Softswiss API",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "NextAuth.js",
      "Vercel Deployment"
    ],
    code: "https://github.com/markostupar98/zesty-bet-casino",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "RU4M (Business Connection Platform)",
    description:
      "RU4M is an innovative business connection platform that facilitates networking between professionals and companies. Built with tRPC, Tanstack Query, React Native (Expo), and Node.js, this application streamlines the process of finding business partners, clients, and collaborators. Key features include business profile creation, advanced search and filtering, direct messaging, connection recommendations, and event organization. The platform leverages a robust backend API with tRPC for type-safe communication between client and server, while Tanstack Query ensures efficient data fetching and caching for optimal performance.",
    tools: [
      "tRPC",
      "Tanstack Query",
      "React Native (Expo)",
      "Node.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Push Notifications"
    ],
    code: "https://github.com/markostupar98/ru4m-business-platform",
    demo: "",
    image: ayla,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
