import { codingicons, jscript, mysql2, nodejs, react } from '../assets/icons';

import { driver, gear, ohs, supportrep, trashcan1, wallet, rating2, rating3 } from "../assets/images";

export const menuList = [
  {
    id: 1,
    href: "",
    name: "About Me"
  },
  {
    id: 2,
    href: "/projects",
    name: "Projects"
  },
  {
    id: 3,
    href: "/work_experience",
    name: "Work Experience"
  },
  {
    id: 3,
    href: "/contact_me",
    name: "Contact Me!"
  },
];

export const skills = [
  {
    id: 1,
    technology: "javascript",
    icon: jscript,
    level: rating3,
  },
  {
    id: 2,
    technology: "NodeJs",
    icon: nodejs,
    level: rating3,
  },
  {
    id: 3,
    technology: "reactJs",
    icon: react,
    level: rating2
  },
  {
    id: 4,
    technology: "MySQL",
    icon: mysql2,
    level: rating3
  },
  {
    id: 5,
    technology: "NGINX",
    icon: mysql2,
    level: rating2
  },
  {
    id: 6,
    technology: "all Icons",
    icon: codingicons,
    level: "",
  },
];

export const experience = [
  {
    id: 1,
    image: driver,
    title: "Heavy Truck Driver",
    company: "Himmah for Container Rentals",
    location: "Riyadh, Saudi Arabia",
    description: "",
  },
  {
    id: 2,
    image: ohs,
    title: "Project Coordinator",
    company: "Digital Telematics LTD",
    location: "Nairobi",
    description: "",
  },
  {
    id: 3,
    image: supportrep,
    title: "Technical Support Representative",
    company: "Digital Telematics LTD",
    location: "Nairobi",
    description: "",
  },
];

export const projects = [
    {
      id: 1,
      image: trashcan1,
      title: "Clean City",
      about: "A customer, order, and asset management system for a company offering waste management services.",
      description: "This is a MERN application project that aims to assist companies to keep track and update their orders. It aims to integrate an alternative communication portal for client and company interaction. <br /> It will provide an avenue for clients to place and monitor their order progress. Clients are able to download e-receipts and communicate with the dispatch or support team. In addition, It provides avenues to easily update clients on the delivery progress.<br /> Dispatchers are able to monitor orders in a categorised manner from the management dashboard. It will facilitate keeping and updating orders, and client informations for efficient record keeping. Dispatchers are able to create new orders and client information.<br /> Moreover, the system facilitates asset management. It is possible through the rights given to add, assign, and/or delete assets. This is to facilitate ease monitoring and tracking of container rotation, and driver-truck pairing. It will make it easier to identify a truck assigned to a driver, and maintain all vehicle servicing and traffic violations.<br /> The system will facilitate monitoring of orders throughout the year. This will provide the company with an avenue for evaluating its sales, having a detailed graphical data representation of company performnce for self evaluation. The data can be queried on a periodic approach."
    },
    {
      id: 2,
      image: gear,
      title: "Chen-Gek: Autosolutions",
      about: "An e-commerce platform for vehicle spare parts, accessories, and vehicle servicing services",
      description: "The application aims to provide an avenue for vehicle owners to obtain services from one place. It enable client to interact with spare part merchants and vehicle maintence service providers. The intention is to improve the experience of vehicle owners while sourcing for services.<br /> Clients are able to search, order, and pre-order spare parts or any other vehicle accessory. They can schedule for a shop visit to collect the item or request for deliveries. The platform will facilite transparency and client protection, through online transactions. The item listings will facilitate searching for items basing on part number, chasis number, vehicle model, and compatibility.<br /> For vehicle servicing and maintenance, the platform will enable access to three types of services. Shop visits: which clients will schedule and book to have their vehicles serviced from our service bay. Pick-up and drop-off: This service allows clients to schedule and book for their cars to be collected by a flatbed, taken to the service centre, and returned upon completion. Finally, On-site servicing: Clients will be able to book and schedule for mechanics to visit their location to service their vehicles at their convinience."
    },
    {
      id: 3,
      image: wallet,
      title: "Fulus",
      about: "An application intended to guide users on financial management and investment plans",
      description: "The appication will have two plans. The free and the paid plan."
    },
  ];
