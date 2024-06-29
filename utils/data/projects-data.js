import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";
import ayla from "/public/image/ayla.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Task Master",
    description:
      "Task master is a robust project management application inspired by Trello. It allows users to create and manage boards, lists, and cards to organize their tasks efficiently. The app supports drag-and-drop functionality for seamless task prioritization and movement. TaskMaster includes features such as real-time collaboration, user authentication, and customizable board backgrounds. Built with a focus on user experience, it provides an intuitive and visually appealing interface for teams and individuals to track their project progress and stay organized.",
    tools: [
      "Express",
      "MongoDB",
      "OpenAI API",
      "AWS SES",
      "AWS S3",
      "Node Mailer",
      "Joi",
      "Puppeteer",
      "EC2",
      "PM2",
      "Nginx",
    ],
    code: "https://github.com/markostupar98/app-like-trello",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "ChatterBox",
    description:
      "ChatterBox is a comprehensive messenger application designed to facilitate instant communication between users. This clone of popular messaging apps features real-time text messaging, user presence indicators, and group chat capabilities. ChatHub offers a smooth and responsive interface with support for media sharing, including images and videos. The app incorporates user authentication and encryption to ensure secure and private conversations. Built with modern web technologies, ChatHub provides a reliable platform for personal and professional communication.",
    tools: [
      "NextJS",
      "Tailwind CSS",
      "Google Maps",
      "NestJS",
      "TypeScript",
      "MySQL",
      "AWS S3",
      "Sun-Editor",
      "Gmail Passkey",
    ],
    code: "https://github.com/markostupar98/app-like-messenger",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "FoodieGo",
    description:
      "FoodieGo is a feature-rich food delivery application developed with React Native. The app provides users with a seamless experience to browse and order from a wide variety of restaurants. Key features include dynamic calculation of delivery costs and estimated delivery times based on real-time data, GPS tracking for order delivery, and push notifications for order updates. FastFoodExpress supports multiple payment methods, user authentication, and a user-friendly interface for easy navigation. The app is designed to handle high traffic and ensure fast and reliable performance, making it an essential tool for food lovers looking for quick and convenient meal deliveries",
    tools: [
      "React",
      "Bootstrap",
      "SCSS",
      "Stripe",
      "Express",
      "TypeScript",
      "MongoDB",
      "Azure Blob",
      "OpenAI API",
      "Replicate AI",
      "Cronjob",
      "JWT",
    ],
    code: "https://github.com/markostupar98/foodie",
    demo: "",
    image: realEstate,
  },
  // {
  //   id: 4,
  //   name: "Newsroom Management",
  //   description:
  //     "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
  //   tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
  //   code: "",
  //   demo: "",
  //   image: ayla,
  //   role: "Full Stack Developer",
  // },
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
