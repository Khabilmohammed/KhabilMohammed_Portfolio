import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate .NET full-stack developer with a strong foundation in building robust, scalable, and high-performance web applications. With hands-on experience in modern front-end technologies like React, Redux Toolkit, and Tailwind CSS, paired with a deep understanding of back-end frameworks and tools like .NET Core, SQL Server, and Azure, I excel at crafting seamless, end-to-end solutions. My expertise extends to designing intuitive user interfaces, implementing efficient APIs, and integrating advanced features like role-based access control and real-time communication. Driven by curiosity and a commitment to innovation, I strive to create impactful solutions that enhance user experiences and accelerate business growth.`;

export const ABOUT_TEXT = `I am a dedicated and versatile .NET full-stack developer with a passion for building scalable, efficient, and user-friendly web applications. With hands-on experience in React, Redux Toolkit, SQL Server, and .NET Core, I specialize in crafting seamless front-end experiences and robust back-end architectures. My journey into web development started with a fascination for technology and problem-solving, evolving into a fulfilling career where I tackle challenges with curiosity and determination. I thrive in collaborative environments, leveraging my skills to create innovative solutions that drive business impact. When I’m not coding, I enjoy exploring emerging technologies, learning new frameworks, and staying active in the developer community`;

export const EXPERIENCES = [
  {
    year: "June 2023 - Present",
    role: " Intern - .Net Developer",
    company: "Brototype",
    description: `Developed scalable REST APIs using .NET Web API and SQL Server to manage data for learning management systems, and built a full-stack web application leveraging .NET Core, React, and SQL Server, integrating GitHub for version control. Created a web application using .NET Core MVC and SQL Server, incorporating GitHub for collaborative development. Gained foundational knowledge of NoSQL databases and advanced version control with Git, while contributing to UI/UX design to enhance user experience and interface consistency. Demonstrated strong communication skills and a proactive approach to continuous learning.`,
    technologies: ["C#", "JavaScript", "React.js", "SqlServer", "Git"],
  },
 
];

export const PROJECTS = [
  {
    title: " Connect-X(Jobseeker-Social)",
    image: project1,
    description:
      "Developed a feature-rich web application resembling LinkedIn using a modern tech stack, including .NET (backend), React with TypeScript (frontend), Tailwind CSS, Redux Toolkit, and SQL Server. Implemented core functionalities for admin, user, and company modules, and integrated advanced features like role-based access control and real-time chat using SignalR. Built secure authentication and authorization systems with ASP.NET Identity Framework and JWT, along with an OTP-based registration flow. Designed an innovative UI with Tailwind CSS and integrated Cloudinary for effective image storage. Applied N-tier architecture and the repository pattern for a scalable and maintainable codebase, using tools like AutoMapper for DTO mapping and global exception handling middleware to ensure robust error handling. Deployed the application on Azure to ensure high availability and performance.",
    technologies: [".Net Core", "React", "Sql Server", "Git", "Azure"],
  },
  {
    title: "E-Mob-shoppy(E-Commerce )",
    image: project2,
    description:
      "Developed a web application using .NET Core MVC and SQL Server, implementing key features such as online payments, user authentication, wallet and coupons, order management, shopping cart, wishlist, and admin controls. Explored Azure for deployment, ensuring seamless cloud integration and high availability. Adhered to SOLID principles to maintain clean, scalable, and maintainable code throughout the development process.",
    technologies: ["ASP.NET MVC", "HTML", "CSS", "Sql Server", "Bootstrap"],
  },
  {
    title: "E-Mob-shoppy(E-Commerce and Bidding)-Collage project",
    image: project3,
    description:
      "Developed four distinct modules—User, Admin, Shop Owner, and Delivery—seamlessly integrating their functionalities to enhance the overall user experience. Combined traditional e-commerce features with an innovative bidding platform, offering a unique approach to online shopping. Explored new features and developed the application following industry standards, focusing on efficient debugging and troubleshooting techniques. Led the project as part of the final college project, overseeing its development and ensuring a smooth execution of all modules.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  }
];

export const CONTACT = {
  address: "Pannikkaveetil House, Thrissur, Kerala, India",
  phoneNo: "+91 9745 9163 97 ",
  email: "khabilmohammed3@gmail.com",
};
