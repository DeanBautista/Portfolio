import flavor_find_1 from "../assets/flavor_find/flavor_find_1.jpeg"
import flavor_find_2 from "../assets/flavor_find/flavor_find_2.jpeg"
import flavor_find_3 from "../assets/flavor_find/flavor_find_3.jpeg"
import flavor_find_4 from "../assets/flavor_find/flavor_find_4.jpeg"
import flavor_find_5 from "../assets/flavor_find/flavor_find_5.jpeg"
import flavor_find_6 from "../assets/flavor_find/flavor_find_6.jpeg"
import flavor_find_7 from "../assets/flavor_find/flavor_find_7.jpeg"
import flavor_find_8 from "../assets/flavor_find/flavor_find_8.jpeg"
import flavor_find_9 from "../assets/flavor_find/flavor_find_9.jpeg"
import flavor_find_10 from "../assets/flavor_find/flavor_find_10.jpeg"

import devblog_1 from "../assets/devblog/devblog_1.jpeg"
import devblog_2 from "../assets/devblog/devblog_2.jpeg"
import devblog_3 from "../assets/devblog/devblog_3.png"
import devblog_4 from "../assets/devblog/devblog_4.png"
import devblog_5 from "../assets/devblog/devblog_5.jpeg"
import devblog_6 from "../assets/devblog/devblog_6.png"
import devblog_7 from "../assets/devblog/devblog_7.jpeg"
import devblog_8 from "../assets/devblog/devblog_8.jpeg"
import devblog_9 from "../assets/devblog/devblog_9.jpeg"

import atmos_1 from "../assets/atmos/atmos_1.jpeg"

// bulsuspace
import home from "../assets/bulsu_space/homepage.png"
import nineRoles from "../assets/bulsu_space/9roles.png"
import mfa from "../assets/bulsu_space/mfa.png"
import normalPost from "../assets/bulsu_space/normal_post.png"
import announcementPost from "../assets/bulsu_space/announcement_post.png"
import sharePost from "../assets/bulsu_space/share_post.png"
import postInteraction from "../assets/bulsu_space/post_interaction.png"
import profilePage from "../assets/bulsu_space/profile_page.png"
import eventPage from "../assets/bulsu_space/event_page.png"
import space1 from "../assets/bulsu_space/space_1.png"
import space2 from "../assets/bulsu_space/space_2.png"
import normalChat from "../assets/bulsu_space/normal_chat.png"
import groupChat from "../assets/bulsu_space/group_chat.png"

import accountCreation from "../assets/bulsu_space/super_admin_account_creation.png"
import communityAccess from "../assets/bulsu_space/super_admin_community_access.png"
import notification from "../assets/bulsu_space/super_admin_notification.png"
import postReports from "../assets/bulsu_space/super_admin_post_reports.png"

import portfolioHomePage from "../assets/portfolio/homepage.png"
import portfolioProjectPage from "../assets/portfolio/project_page.jpeg"

export const PROJECTS = [
  {
    slug: "flavorfind",
    name: ["Flavor", "Find"],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind", "Cloudinary", "JWT Auth", "REST APIs"],
    description:
      "A recipe discovery platform with intelligent ingredient-based search, user collections, and real-time cooking timers. Built with a React frontend and a RESTful Node.js API.",
    // TODO: fill these in with real details — placeholders for now
    stats: [
      { label: "Features", value: "20+" },
      { label: "Role", value: "Solo Full-Stack Developer" },
      { label: "Status", value: "Live", accent: true },
    ],
    stack: [
      { layer: "Frontend", tech: "React.js · Tailwind CSS" },
      { layer: "Backend", tech: "Node.js · Express.js" },
      { layer: "Database", tech: "MongoDB" },
      { layer: "Tools", tech: "Cloudinary · Vercel" },
    ],
    highlights: [
      "Create and share custom recipes",
      "Edit and manage published recipes",
      "Intelligent recipe search with dynamic filters",
      "Allow users to save, rate, and review recipes",
      "User collections for owned, likes, saved and reviewed recipes",
      "Profile customization"
    ],
    links: { demo: "https://flavor-find-wfrv.vercel.app", github: "https://github.com/DeanBautista/FlavorFind" },
    images: [
      { src: flavor_find_1, alt: "FlavorFind overview" },
      { src: flavor_find_2, alt: "FlavorFind overview" },
      { src: flavor_find_3, alt: "FlavorFind overview" },
      { src: flavor_find_4, alt: "FlavorFind overview" },
      { src: flavor_find_5, alt: "FlavorFind overview" },
      { src: flavor_find_6, alt: "FlavorFind overview" },
      { src: flavor_find_7, alt: "FlavorFind overview" },
      { src: flavor_find_8, alt: "FlavorFind overview" },
      { src: flavor_find_9, alt: "FlavorFind overview" },
      { src: flavor_find_10, alt: "FlavorFind overview" },
    ],
  },
  {
    slug: "devblog",
    name: ["Dev", "Blog"],
    tags: ["React.js", "Zustand", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "Cloudinary", "JWT Auth", "Planet Scale", "REST APIs"],
    description:
      "A personal CMS blog platform with an admin dashboard for creating, managing, and publishing blog posts, with content displayed on a public-facing website.",
    stats: [
      { label: "Features", value: "20+" },
      { label: "Role", value: "Solo Full-Stack Developer" },
      { label: "Status", value: "Live", accent: true },
    ],
    stack: [
      { layer: "Frontend", tech: "React.js · Zustand · Tailwind CSS" },
      { layer: "Backend", tech: "Node.js · Express.js" },
      { layer: "Database", tech: "MySQL" },
      { layer: "Tools", tech: "Planet Scale · Cloudinary · Vercel" },
    ],
    highlights: [
      "Create, edit, and publish blog posts",
      "Display published content on the public website",
      "Like and interact with published posts",
      "Manage all posts through an admin dashboard",
    ],
    links: { demo: "https://devblog-lemon.vercel.app/", github: "https://github.com/DeanBautista/devblog  " },
    images: [
      { src: devblog_1, alt: "DevBlog overview" },
      { src: devblog_2, alt: "DevBlog overview" },
      { src: devblog_3, alt: "DevBlog overview" },
      { src: devblog_4, alt: "DevBlog overview" },
      { src: devblog_5, alt: "DevBlog overview" },
      { src: devblog_6, alt: "DevBlog overview" },
      { src: devblog_7, alt: "DevBlog overview" },
      { src: devblog_8, alt: "DevBlog overview" },
      { src: devblog_9, alt: "DevBlog overview" },
    ],
  },
  {
    slug: "bulsuspace",
    name: ["Bulsu", "Space"],
    tags: ["React.js", "Tailwind CSS", "Firebase Auth", "Firestore", "Cloud Functions", "REST APIs"],
    description:
      "A professional social media platform designed for university students, enabling the sharing of official announcements, fostering campus engagement, and providing alumni tracking and networking capabilities.",
    stats: [
      { label: "Features", value: "50+" },
      { label: "Role", value: "Full-Stack Developer" },
      { label: "Status", value: "Live", accent: true },
    ],
    stack: [
      { layer: "Frontend", tech: "React.js · Tailwind CSS" },
      { layer: "Backend", tech: "Firebase Auth · Cloud Functions · Express.js" },
      { layer: "Database", tech: "Firestore · Realtime Database" },
      { layer: "Tools", tech: "Cloud Storage · Firebase Hosting · Cloud Messaging (FCM)" },
    ],
    highlights: [
      "9 distinct account roles with tailored permissions, including role-based account creation by super admins and admins",
      "Posts, announcements, and short-form video (Flares), with likes, shares, comments, and content filtering",
      "Group/space creation with member posting, interactions, and admin moderation tools",
      "Direct messaging with 1-on-1 and group chat support",
      "Event creation and management",
      "Platform-wide moderation and security, including content/account moderation and MFA",
    ],
    links: { demo: "https://bulsuspace.web.app/", github: "https://github.com/DeanBautista/Bulsu-Space" },
    images: [
      { src: home, alt: "BulsuSpace homepage" },
      { src: nineRoles, alt: "BulsuSpace user roles" },
      { src: mfa, alt: "Multi-factor authentication" },
      { src: normalPost, alt: "BulsuSpace normal post" },
      { src: announcementPost, alt: "BulsuSpace announcement post" },
      { src: sharePost, alt: "BulsuSpace share post" },
      { src: postInteraction, alt: "BulsuSpace post interaction" },
      { src: profilePage, alt: "BulsuSpace profile page" },
      { src: eventPage, alt: "BulsuSpace event page" },
      { src: space1, alt: "BulsuSpace community space 1" },
      { src: space2, alt: "BulsuSpace community space 2" },
      { src: normalChat, alt: "BulsuSpace private chat" },
      { src: groupChat, alt: "BulsuSpace group chat" },
      { src: accountCreation, alt: "BulsuSpace super admin account creation" },
      { src: communityAccess, alt: "BulsuSpace super admin community access" },
      { src: notification, alt: "BulsuSpace super admin notifications" },
      { src: postReports, alt: "BulsuSpace super admin post reports" },
    ],
  },
  {
    slug: "portfolio",
    name: ["My", "Portfolio"], // or ["Portfolio"] like Atmos
    tags: ["React.js", "Tailwind CSS", "Vite", "Framer Motion", "Vercel"], // match your real stack
    description:
      "A personal portfolio site showcasing my projects, skills, and experience, built with a focus on smooth animations and responsive design.",
    stats: [
      // { label: "Timeline", value: "e.g. 2 weeks" },
      { label: "Role", value: "Solo Developer" },
      { label: "Status", value: "Live", accent: true },
    ],
    stack: [
      { layer: "Frontend", tech: "React.js · Tailwind CSS" },
      { layer: "Animation", tech: "Framer Motion" }, // if you used it
      { layer: "Tools", tech: "Vite · Vercel" },
    ],
    highlights: [
      "Responsive layout across all screen sizes",
      "Smooth page transitions and scroll animations",
      "Dynamic project showcase pulled from a central data source",
      "Dark/light mode support", // only if true
    ],
    links: { demo: "https://yourportfolio.com", github: "https://github.com/DeanBautista/portfolio" },
    images: [
      { src: portfolioHomePage, alt: "Portfolio homepage" },
      { src: portfolioProjectPage, alt: "Portfolio project detail page" },
    ],
  },
  {
    slug: "atmos",
    name: ["Atmos"],
    tags: ["HTML", "CSS", "Javascript", "Vercel", "REST APIs"],
    description:
      "A responsive weather application that delivers real-time weather data and forecasts using a RESTful weather API.",
    stats: [
  
      { label: "Role", value: "Solo Developer" },
      { label: "Status", value: "Live", accent: true },
    ],
    stack: [
      { layer: "Tech Stack", tech: "HTML, CSS, Javascript" },
    ],
    highlights: [
      "Automatic location detection for instant local weather updates",
      "Worldwide weather search with support for any location",
      "Comprehensive weather insights including hourly forecasts, UV Index, air quality, and sunrise/sunset tracking",
      "7-day weather forecast with detailed daily conditions",
    ],
    links: { demo: "https://atmos-blond.vercel.app/", github: "https://github.com/DeanBautista/WeatherApp" },
    images: [
      { src: atmos_1, alt: "CloudVault overview" },
    ],
  },
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}