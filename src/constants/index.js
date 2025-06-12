import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png"

export const HERO_CONTENT = `
  I am Loka Nehan Reddy, a B.Tech Computer Science Engineering (IoT) student at Shiv Nadar University, Chennai.
  I specialize in full-stack development and smart IoT systems. With strong proficiency in React, Node.js, and embedded platforms like Raspberry Pi and NodeMCU,
  I focus on developing scalable, user-centric, and innovative tech solutions. Currently, I am working as a Web Developer Intern at GK Almirah, where I enhance website design, performance, and responsiveness.`;

export const ABOUT_TEXT = `I'm a 4th-year B.Tech student in Computer Science Engineering (IoT) at Shiv Nadar University. I've worked on several real-world projects that integrate full-stack development with Internet of Things (IoT) concepts. My technical toolkit includes React, Node.js, Express.js, MongoDB, and IoT boards like Arduino, NodeMCU, and Raspberry Pi. With a deep interest in solving complex tech challenges, I continue to expand my knowledge in cloud services, AI-powered tools, and embedded systems. My goal is to contribute to innovative digital products that make a meaningful impact.`;

export const EDUCATION = [
  {
    year: "2022 - 2026",
    role: "B.Tech in Computer Science and Engineering (IoT)",
    university: "Shiv Nadar University, Chennai, CGPA: 8.0",
    description: `Currently pursuing a Bachelor's degree focused on IoT applications, full-stack development, and embedded systems.
    Hands-on experience with Arduino, NodeMCU, Raspberry Pi, and cloud platforms for real-time data solutions.`,
    technologies: ["React", "Node.js", "MongoDB", "IoT", "Embedded C", "C++", "Raspberry Pi", "NodeMCU", "Arduino"],
  },
  {
    year: "2020 - 2022",
    role: "Junior College (12th Grade)",
    university: "Narayana Junior College",
    description: `Graduated with 96.6%, building strong fundamentals in mathematics, physics, and chemistry.`,
    technologies: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    year: "2010 - 2020",
    role: "Schooling (10th Grade)",
    university: "Narayana Concept School",
    description: `Completed with a GPA of 10/10, developing early interest and skills in science, technology, and logic-based problem-solving.`,
    technologies: ["Mathematics", "Science"],
  },
];

export const PROJECTS = [
  {
    title: "AI-Powered Automated Document Processing System",
    image: project1,
    description: `Built a smart document processing platform capable of classifying documents, extracting text, and analyzing semantic meaning using state-of-the-art NLP models like Qwen and RoBERTa.
    The frontend was built using React and Tailwind, backend integrated with MongoDB for metadata, and files stored securely in AWS S3.
    User authentication was handled using NextAuth for seamless and secure access.`,
    technologies: ["React", "Next.js", "Tailwind", "AWS Textract", "MongoDB", "NextAuth", "Qwen", "SBERT", "RoBERTa"],
  },
  {
    title: "Doctor Appointment Booking System",
    image: project2,
    description: `A robust, full-stack appointment management system supporting role-based logins for patients, doctors, and administrators.
    Features include responsive design, real-time booking, admin dashboard for managing schedules, and Stripe payment integration.
    Designed with scalability and modularity in mind to suit small clinics and large hospitals alike.`,
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Stripe API", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "GamesHub",
    image: project3,
    description: `An interactive web platform featuring classic browser games such as Brick Breaker, Snake, Dino, Rock Paper Scissors, and Tic Tac Toe.
    Designed for both entertainment and learning, it includes backend authentication using Node.js and a real-time leaderboard dashboard.`,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
  },
  {
    title: "Employee Attendance Management System",
    image: project4,
    description: `Developed a web application that enables employees to log daily attendance with check-in and check-out features.
     Implemented role-based access for employees and supervisors, with real-time validation for late check-ins and early check-outs.
      Built secure user authentication using JWT, and designed responsive UI components for a seamless user experience.`,
    technologies: ["Reactjs", "MongoDB", "Expressjs", "Nodejs"],
  },
  {
    title: "IoT-Based Inventory Management System",
    image: project1,
    description: `A smart inventory tracking system using ultrasonic sensors integrated with NodeMCU to monitor stock levels in real-time.
    The system updates a React dashboard via Firebase and sends low-stock alerts through email using SMTP protocol.
    Built to optimize supply chain management and reduce human intervention. Ideal for FMCG and retail applications.`,
    technologies: ["NodeMCU", "Arduino", "React", "Firebase", "Embedded C", "Ultrasonic Sensors", "SMTP", "IoT"],
  },
];

export const CONTACT = {
  address: "Bhagwathi Nagar Colony, Line no:1 ,Plot No:5 , Adilabad , Telangana , 504001",
  phoneNo: "9885630139",
  email: "nehanreddyloka@gmail.com",
};

export const WORK_EXPERIENCE = [
  {
    year: "2025 – Present",
    role: "Full Stack Developer Intern",
    company: "Laneway India Enterprises Pvt Ltd.",
    location: "Remote",
    description: `
      • Developed an Employee Attendance Management System using the MERN stack.  
      • Implemented features for employees to check in/out, view attendance history, and apply for leaves via a responsive web interface.  
      • Created supervisor dashboards with role-based access to view all employee data, approve leaves, and analyze attendance patterns.  
      • Managed and updated the company's main website built on WordPress, including content updates and plugin integration.  
      • Enhanced UI/UX across both internal and customer-facing platforms for better performance and user engagement.`,
    technologies: ["Reactjs", "Nodejs", "MongoDB", "Expressjs", "WordPress", "JavaScript", "CSS"],
  },
];

