import parse from "html-react-parser";
import * as urlConst from "./url";

// general
export const NAME = "Ngoc Minh";
export const FOOTNOTE = `${NAME}. All Rights Reserved.`;
export const SOURCE_CODE = "Github Source Code";

// Navigation bar
export const NAVBAR_PROJECTS = "Projects";
export const NAVBAR_SKILLS = "Skills";
export const NAVBAR_EXPERIENCES = "Experiences";
export const NAVBAR_HOBBIES = "Hobbies";
export const NAVBAR_CONTACT = "Contact";

// About page
export const ABOUT_TITLE = "About";
export const ABOUT_RESUME_TITLE = "Resume";
export const ABOUT_MY_TITLE = "Front-End Developer";
// export const ABOUT_MY_QUOTE =
//   "I like programming work, it brings me excitement and newnes";
export const ABOUT_ABOUT =
  "Nguyen Ngoc Minh, 22 years old, was born in Vietnam. I am a recent graduate of information technology majoring in Front-End developer. Since childhood, I have been passionate about computers, so I studied this field and discovered that this field is very interesting and interesting. It gives me a lot of creativity as well as helps me develop myself";
export const ABOUT_RESUME_BUTTON = "My Resume";
export const ABOUT_FIND_ME_WEB = "Find me on the Web";
export const ABOUT_GITHUB = "Github";
export const ABOUT_LINKEDIN = "LinkedIn";
export const ABOUT_PROFILE_PIC_ALT_TEXT = "Nguyen  Ngoc Minh profile picture";
export const ABOUT_TIMELINE_TITLE = "(Professional) Timeline";
export const ABOUT_TIMELINE_MILESTONES = [
  {
    2016: "Explore and learn about coding",
  },
  {
    2017: "Learn programming languages ​​at vocational school",
  },
  { 2022: "College degree majoring in website design" },
  {
    2022: "Personal website code uses basic languages ​​such as HTML, CSS, figma, JavaScript to complete the website",
  },
  {
    2023: "Collaborate with the team to create a website selling technology items using HTML5, CSS3, PHP, MySQL",
  },
  {
    2024: "Complete the graduation project in conjunction with the BE team to perform main functions for the website",
  },
];

// Projects page
export const PROJECTS_TITLE = "Projects";
export const PROJECTS_SKILLS_LABEL = "Skills";
export const PROJECTS_GITHUB = "Check out the project's Github!";
export const PROJECTS_PROJECT_LINK = "Project Link >";
export const PROJECTS_VIEW_MORE = "View more";
export const PROJECTS_DEFUND_TITLE = "The Coffe House";
export const PROJECTS_DEFUND_ROLE = "Member";
export const PROJECTS_DEFUND_TYPE = "School Project";
export const PROJECTS_DEFUND_TIMELINE = "05/2022 - 08/2022 ";
export const PROJECTS_DEFUND_PROJECT_DESCRIPTION = parse(
  `Use HTML to create a website selling coffee online  and links to subpages and details of each product on your store. Use CSS to make the website more beautiful and eye-catching with vivid effects. Use javascript to perform image transfer, pagination, image zoom, text playback, and dropdown functions for menus`,
);
export const PROJECTS_MUSIC_RECOMMENDATION_TITLE =
  "Laptop Store";
export const PROJECTS_MUSIC_RECOMMENDATION_ROLE = "Member";
export const PROJECTS_MUSIC_RECOMMENDATION_TYPE = "School Project";
export const PROJECTS_MUSIC_RECOMMENDATION_TIMELINE =
  "09/2023 - 12/2023 ";
export const PROJECTS_MUSIC_RECOMMENDATION_PROJECT_DESCRIPTION = parse(
  `Use HTML to create an online electronics sales website and link to subpages and detailed information about each product on your store. Use CSS to make the website more beautiful and eye-catching with vivid effects. Use php to perform main functions such as adding cart, increasing or decreasing number of products, shopping cart, deleting cart, adding, editing, deleting products, logging in, registering, online payment. Use SCSS to respond, create menus, effects, create login and registration forms, and display popups.`,
);
export const PROJECTS_LOOK_AND_EARN_TITLE = "Well-Care Pharmacity";
export const PROJECTS_LOOK_AND_EARN_ROLE = "Front-End Developer";
export const PROJECTS_LOOK_AND_EARN_PROJECT_TYPE = "Graduation project";
export const PROJECTS_LOOK_AND_EARN_TIMELINE = "06/2024 - 09/2024";
export const PROJECTS_LOOK_AND_EARN_PROJECT_DESCRIPTION =
  "Use ReactJS to create an online pharmacy website and link to subpages and detailed information about each product on your store. Use SCSS to respond, create menus, effects, create login and registration forms, and display popups. On the backend, use php and mysql to connect data to add, edit, delete products, add, edit, delete members, edit, delete comments, pay online, log in, register with otp. On the frontend side, use typescript to edit customer information, check order details, order history via phone number, and cancel orders. Also use the chat box to answer all customer questions about our store";
// Skills page
export const SKILLS_TITLE = "Skills";
export const SKILLS_LANGUAGES_TITLE = "Languages";
export const SKILLS_LANGUAGES_ENGLISH = "English";
export const SKILLS_LANGUAGES_SPOKEN_WRITTEN = "(spoken & written)";
export const SKILLS_PROGRAMMING_LANGUAGES_TITLE = "Programming Languages";
export const SKILLS_PROFICIENCY_PROFICIENT = "(proficient)";
export const SKILLS_PROFICIENCY_INTERMEDIATE = "(intermediate)";
export const SKILLS_PROFICIENCY_BEGINNER = "(beginner)";
export const SKILLS_FRAMEWORKS_TITLE = "Frameworks";
export const SKILLS_FRAMEWORKS_FRONTEND = "Frontend";
export const SKILLS_FRAMEWORKS_BACKEND = "Backend";
export const SKILLS_FRAMEWORKS_MOBILE = "Mobile";
export const SKILLS_TOOLS_TITLE = "Tools";
export const SKILLS_CERTIFICATIONS_TITLE = "Certifications";
export const SKILLS_CERTIFICATIONS_RESPONSIVE = "Responsive Web Design";
export const SKILLS_CERTIFICATIONS_JAVASCRIPT =
  "JavaScript Algorithms and Data Structures";
export const SKILLS_CERTIFICATIONS_FRONTEND = "Front End Development Libraries";
export const SKILLS_CERTIFICATIONS_VISUALISATION = "Data Visualization";
export const SKILLS_CERTIFICATIONS_BACKEND = "Back End Development and APIs";
export const SKILLS_CERTIFICATIONS_SCIENTIFIC =
  "Scientific Computing with Python";
export const SKILLS_CERTIFICATIONS_DATA = "Data Analysis with Python";

// Experiences page
export const EXPERIENCES_TITLE = "Experiences";
export const EXPERIENCES_DBS2_TITLE = "DBS Bank";
export const EXPERIENCES_DBS2_ROLE = "Full-stack Developer Intern";
export const EXPERIENCES_DBS2_LOCATION = "Singapore";
export const EXPERIENCES_DBS2_TIMELINE = "May 2024 to September 2024";
export const EXPERIENCES_DBS2_EXPERIENCE_DESCRIPTION = parse(
  "- Enhanced the MarTech Requirements Platform (MRP) web app using Next.js and TypeScript, driving feature developments and bug fixes.<br/>- Boosted CI/CD pipeline effectiveness by writing comprehensive unit tests with Vitest, improving test coverage from under 30% to over 80%.<br/>- Collaborated with cross-functional teams in an Agile environment to deliver high-quality software on tight deadlines.",
);
export const EXPERIENCES_MYEXPOPLACE_TITLE = "MyExpoPlace";
export const EXPERIENCES_MYEXPOPLACE_ROLE = "Flutter Developer Intern";
export const EXPERIENCES_MYEXPOPLACE_LOCATION =
  "Los Angeles, California, United States";
export const EXPERIENCES_MYEXPOPLACE_TIMELINE = "June 2023 to August 2023";
export const EXPERIENCES_MYEXPOPLACE_EXPERIENCE_DESCRIPTION = parse(
  "- Revamped the MyExpoPlace mobile app using Flutter and enhanced the user experience through new app navigation features.<br/>- Used Figma to design modern UI/UX improvements for viewing and interacting with app item listing and implemented them in production, which rejuvenated the user experience.<br/>- Collaborated with fellow Flutter developers to ensure timely delivery of high-quality code.",
);
export const EXPERIENCES_COFFEESPACE_TITLE = "CoffeeSpace";
export const EXPERIENCES_COFFEESPACE_ROLE = "Software Engineering Intern";
export const EXPERIENCES_COFFEESPACE_LOCATION =
  "San Francisco, California, United States";
export const EXPERIENCES_COFFEESPACE_TIMELINE = "March 2023 to June 2023";
export const EXPERIENCES_COFFEESPACE_EXPERIENCE_DESCRIPTION = parse(
  "- Utilized Flutter and Bloc state management to maintain and develop new features such as addressing notification bug, app networking performance enhancements, and adding new profile sections.<br/>- Liaised with backend engineers to ensure smooth integration and functionality of app features.<br/>- Conducted technical research for new payment features, exploring additional revenue opportunities.",
);
export const EXPERIENCES_HDB_TITLE = "Housing & Development Board";
export const EXPERIENCES_HDB_ROLE = "Mobile Application Development Intern";
export const EXPERIENCES_HDB_LOCATION = "Singapore";
export const EXPERIENCES_HDB_TIMELINE = "August 2022 to December 2022";
export const EXPERIENCES_HDB_EXPERIENCE_DESCRIPTION = parse(
  "- Maintained and developed new features, such as adding call-to-actions, for the Android and iOS versions of Mobile@HDB mobile app in Java and Swift respectively.<br/>- Comprehensively refactored the entire Android codebase in Java for enhanced maintainability.<br/>- Built Augmented Reality (AR) app prototypes in Kotlin as a proof-of-concept for future AR features for app enhancement.",
);
export const EXPERIENCES_SMILETUTOR_TITLE = "SmileTutor";
export const EXPERIENCES_SMILETUTOR_ROLE = "Private Tutor (part-time)";
export const EXPERIENCES_SMILETUTOR_LOCATION = "Singapore";
export const EXPERIENCES_SMILETUTOR_TIMELINE = "January 2022 to September 2024";
export const EXPERIENCES_SMILETUTOR_EXPERIENCE_DESCRIPTION = parse(
  "- Subjects taught: Primary 6 Mathematics and Science for Primary School Leaving Examinations (PSLE)<br/>- Conducted weekly one-on-one lessons at students' residences<br/>- Clarified the student's doubts, went through their homework and exam papers with them<br/>- Explained and taught them concepts thay they were otherwise unsure of<br/>- Liaised with the student's parents to ensure that their child's homework and assignments are done on time",
);
export const EXPERIENCES_DBS_TITLE = "DBS Bank";
export const EXPERIENCES_DBS_ROLE = "Business Analyst Intern";
export const EXPERIENCES_DBS_LOCATION = "Singapore";
export const EXPERIENCES_DBS_TIMELINE = "May 2021 to September 2021";
export const EXPERIENCES_DBS_EXPERIENCE_DESCRIPTION = parse(
  "- Performed primary and secondary research, conduct analyses and appropriate modelling tasks that feeds directly into the development of technology-enabled solutions to tackle clients’ complex business problems.<br/>- Supported the project teams in developing presentation materials and in coordination of communications with the client.<br/>- Assisted the project teams in delivery of business-driven, technology-enabled solutions to help the clients meet pressing challenges and seize opportunities in their respective markets.",
);

// Hobbies page
export const HOBBIES_TITLE = "Hobbies";
export const HOBBIES_CYCLING_TITLE = "Road Cycling";
export const HOBBIES_CYCLING_DESCRIPTION =
  parse(`I absolutely love road cycling! I have been cycling since 2018, when my friends introduced me to road cycling. My first road bike was a <a href=${urlConst.HOBBIES_CYCLING_TREK_URL} target="_blank">2016 Trek 1.2</a>. Since then, I've bought, rode, and sold several bikes. I am now riding a <a href=${urlConst.HOBBIES_CYCLING_BIANCHI_URL} target="_blank">Bianchi Sprint</a>.
\n\nI don't race, I just cycle for fitness, to explore the world around me and for the sheer joy of riding a bike.`);
export const HOBBIES_RUNNING_TITLE = "Running";
export const HOBBIES_RUNNING_DESCRIPTION = parse(
  `I used to dislike running when I was younger, due to my bad-to-mediocre 2.4km timings in secondary school and junior college.\n\nHowever, my perception changed when I started running more often in late-2022 as an alterantive way get fitter and increase my aerobic endurance other than cycling. When I realised that running was much more enjoyable when done at manageable paces and for longer distances, I decided to pick up runnning more seriously. Additionally, it takes up less time and costs less than cycling.\n\nI intend to particiate in half-marathons and marathons in the future, and hence, I am running rather regularly nowadays. It is also because my purchase of a <a href=${urlConst.HOBBIES_RUNNING_GARMIN_URL} target="_blank">Garmin Forerunner 55</a> has provided me a strong extrinsic motivation to run! Or maybe I just want to justify the cost of spending so much on a watch.`,
);
export const HOBBIES_RUNNING_CYCLING_STRAVA_TEXT = "Check out my Strava!";
export const HOBBIES_GUITAR_TITLE = "Electric Guitar";
export const HOBBIES_GUITAR_DESCRIPTION = parse(
  `I love playing the electric guitar as well. I started playing it in 2019 simply because I just wanted to jam to my favourite music. I never hired an instructor to teach me how to play the guitar. I taught myself how to play by watching videos of other guitarists and learning songs by myself. I currently play an <a href=${urlConst.HOBBIES_GUITAR_GUITAR_URL} target="_blank">Ibanez GRGR131EX</a> superstrat, plugged into a <a href=${urlConst.HOBBIES_GUITAR_AMP_URL} target="_blank">Fender Champion 20</a> amplifier.\n\nI usually play rock and metal songs by <a href=${urlConst.HOBBIES_GUITAR_LINKIN_PARK_URL} target="_blank">Linkin Park</a>, <a href=${urlConst.HOBBIES_GUITAR_METALLICA_URL} target="_blank">Metallica</a>, and <a href=${urlConst.HOBBIES_GUITAR_GREEN_DAY_URL} target="_blank">Green Day</a>. These three are some of my most favourite bands to play and listen to.\n\nBut recently, I've been playing the instrumental covers of more popular songs, where I literally make my guitar "sing" out the vocals/lyrics of the song.\n\nI don't play for a band or perform. I just play for the sheer joy of playing my favourite riffs and songs on a guitar.`,
);
export const HOBBIES_GUITAR_SPOTIFY_TEXT = "Check out my Spotify!";
export const HOBBIES_NETFLIX_TITLE = "Netflix and Anime";
export const HOBBIES_NETFLIX_DESCRIPTION = parse(
  `I love watching films, shows and movies in general, especially on Netflix. I love watching a variety of genres, including science-fiction, horror, zombie, supernatural, thriller, fantasy, etc.\n\nI also love watching anime. I usually watch the longer-running and super popular ones. I especially love <a href=${urlConst.HOBBIES_NETFLIX_DRAGON_BALL_URL} target="_blank">Dragon Ball</a> and <a href=${urlConst.HOBBIES_NETFLIX_NARUTO_URL} target="_blank">Naruto</a>. My most favourite chracters from each of the anime are <a href=${urlConst.HOBBIES_NETFLIX_VEGETA_URL} target="_blank">Vegeta</a> and <a href=${urlConst.HOBBIES_NETFLIX_ITACHI_URL} target="_blank">Itachi Uchiha</a> respectively.`,
);
export const HOBBIES_CODING_TITLE = "Building Cool Stuff";
export const HOBBIES_CODING_DESCRIPTION = parse(
  `Last but not least, I love to build cool stuff by writing code. I started coding back in 2017, and have built things like text-based games, Telegram bots, mobile apps, Android apps and web apps. I enjoy learning new languages and frameworks to keep myself updated and strive to build something that others will find value in using.</p>`,
);
export const HOBBIES_CODING_GITHUB_TEXT = "Check out my GitHub!";

// Contact page
export const CONTACT_TITLE = "Contact";
export const CONTACT_DESCRIPTION =
  "If you like what you see here and would like to collaborate with me, please contact me for a chat. Strictly for work-related purposes only, please!";
export const CONTACT_EMAIL_TITLE = "Email";
export const CONTACT_EMAIL = "limfuoen1999@gmail.com";
export const CONTACT_LINKEDIN_TITLE = "LinkedIn";
export const CONTACT_LINKEDIN = "Lim Fuo En's LinkedIn";
export const CONTACT_TELEGRAM_TITLE = "Telegram";
export const CONTACT_TELEGRAM = "@Fe-56";
export const CONTACT_PHONE_TITLE = "Phone Number";
export const CONTACT_PHONE = "+65 9735 7695";
export const CONTACT_LOCATION_TITLE = "(Current) Location";
export const CONTACT_LOCATION = "Singapore";

// miscellaneous (used across pages)
export const SKILL_FLUTTER = "Flutter";
export const SKILL_DART = "Dart";
export const SKILL_ANDROID_STUDIO = "Android Studio";
export const SKILL_FIRESTORE = "Google Firestore";
export const SKILL_JAVASCRIPT = "JavaScript";
export const SKILL_REACT = "React";
export const SKILL_EXPRESS = "Express.js";
export const SKILL_NODE = "Node.js";
export const SKILL_GITHUB = "GitHub";
export const SKILL_PYTHON = "Python";
export const SKILL_PYTELEGRAMBOT = "pyTelegramBotAPI";
export const SKILL_ML = "Machine Learning";
export const SKILL_POSTMAN = "Postman";
export const SKILL_TESTING = "Software Testing";
export const SKILL_VERILOG = "Verilog";
export const SKILL_COMPUTER_ENGINEERING = "Computer Engineering";
export const SKILL_JAVA = "Java";
export const SKILL_FIGMA = "Figma";
export const SKILL_GAME_DESIGN = "Game Design";
export const SKILL_COMMUNICATION = "Communication";
export const SKILL_RESEARCHING = "Researching for Solutions";
export const SKILL_DETAIL = "Attention to Detail";
export const SKILL_ENTREPRENEURSHIP = "Entrepreneurship";
export const SKILL_KOTLIN = "Kotlin";
export const SKILL_SWIFT = "Swift";
export const SKILL_HTML = "HTML";
export const SKILL_CSS = "CSS";
export const SKILL_PHP = "PHP";
export const SKILL_MYSQL = "MYSQL";

export const SKILL_D3 = "D3.js";
export const SKILL_BOOTSTRAP = "Bootstrap";
export const SKILL_MONGO = "MongoDB";
export const SKILL_FIREBASE = "Google Firebase";
export const SKILL_VSCODE = "Visual Studio Code";
export const SKILL_XCODE = "Xcode";
export const SKILL_JIRA = "Jira";
export const SKILL_TEACHING = "Teaching";
export const SKILL_POWERPOINT = "Powerpoint";
export const SKILL_WORD = "Word";
export const SKILL_EXCEL = "Excel";
export const SKILL_SYSTEMSTESTING = "Systems Testing";
export const SKILL_PM = "Project Management";
export const SKILL_DATASCIENCE = "Data Science";
export const SKILL_TYPESCRIPT = "TypeScript";
export const SKILL_NEXT = "Next.js";
export const SKILL_SOLIDITY = "Solidity";
export const SKILL_ETHEREUM = "Ethereum";
