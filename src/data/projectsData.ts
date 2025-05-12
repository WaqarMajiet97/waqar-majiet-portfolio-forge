
interface ProjectData {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  imageLabel: string;
}

export const projects: ProjectData[] = [
  {
    title: "Volkswagen Desktop Application",
    description: "A comprehensive Java desktop application built using Netbeans that provides a platform for customers to browse Volkswagen vehicles, view pricing information, and apply for vehicle financing.",
    features: [
      "Welcoming home page with product introduction",
      "Vehicle catalog with detailed pricing information",
      "Finance application process with document attachment functionality",
      "Validation system for driver's license verification",
      "Data persistence through text file storage",
      "User-friendly interface with intuitive navigation"
    ],
    technologies: ["Java", "Netbeans IDE", "Swing UI", "File I/O", "Form Validation"],
    image: "https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/08/2022-Volkswagen-Polo-Style-09-DSC00643.jpg",
    imageAlt: "Volkswagen Desktop Application",
    imageLabel: "Java Desktop Application"
  },
  {
    title: "Math Quiz Application",
    description: "An educational application designed for Grade 5 students to practice and develop their mathematical skills through customizable quizzes covering various mathematical operations.",
    features: [
      "Customizable quiz types (Addition, Subtraction, Multiplication, Division)",
      "Adjustable quiz length based on user preference",
      "Optional timed quiz mode for added challenge",
      "Age-appropriate interface designed for elementary students",
      "Progress tracking and immediate feedback",
      "Engaging and interactive learning experience"
    ],
    technologies: ["Java", "Educational Software", "Mathematics", "GUI Development", "Child-Friendly UX"],
    image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Math Quiz Application",
    imageLabel: "Educational Java Application"
  },
  {
    title: "School Management System",
    description: "A comprehensive Windows Forms application built using C# in Visual Studio that provides functionality for managing student and teacher information, as well as handling course enrollments and grading.",
    features: [
      "Student information management",
      "Teacher profile management",
      "Course enrollment system",
      "Grading and assessment tracking",
      "Report generation for academic performance",
      "User-friendly interface with responsive design"
    ],
    technologies: ["C#", "Windows Forms", "Visual Studio", ".NET Framework", "Database Management"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    imageAlt: "School Management System Screenshot",
    imageLabel: "C# Windows Forms Application"
  },
  {
    title: "Lottery Game Application",
    description: "A Java application developed in Netbeans that simulates a lottery game. The system generates three random numbers between 0 and 9, allows users to make guesses, and calculates winnings based on match accuracy.",
    features: [
      "Random number generation (0-9)",
      "User input validation",
      "Sophisticated matching algorithm accounting for repeating digits",
      "Dynamic prize calculation based on match accuracy",
      "Interactive user interface with real-time feedback",
      "Result history tracking"
    ],
    technologies: ["Java", "Netbeans IDE", "Object-Oriented Programming", "GUI Development", "Random Number Algorithms"],
    image: "https://logolook.net/wp-content/uploads/2022/11/Java-Logo.png",
    imageAlt: "Lottery Game Application Screenshot",
    imageLabel: "Java Application"
  },
  {
    title: "Task Management Application",
    description: "A comprehensive task management solution built entirely using Google Sheets, without writing a single line of code. This project demonstrates how to leverage Google's powerful tools to create practical business applications.",
    features: [
      "Automated task assignment and tracking",
      "Priority-based sorting and filtering",
      "Due date reminders with color-coding",
      "Progress tracking with status updates",
      "Dashboard with completion metrics",
      "Team member workload visualization"
    ],
    technologies: ["Google Sheets", "Formulas", "Data Visualization", "Automation", "No-Code"],
    image: "https://www.timedoctor.com/blog/images/2020/10/task-list-template.jpg",
    imageAlt: "Task Management Application Screenshot",
    imageLabel: "Google Sheets Integration"
  }
];
