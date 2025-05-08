
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary/5 py-16" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)",
        backgroundSize: "cover", 
        backgroundPosition: "center",
        position: "relative"
      }}>
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-white">Projects and Achievements</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-white leading-relaxed">
              Notable projects and accomplishments that showcase my skills and expertise.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects */}
      <section className="section-container">
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
        
        {/* Volkswagen Application Project */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-2/5">
              <div className="h-64 md:h-full bg-gray-100 relative overflow-hidden">
               
                <img 
              src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Volkswagen Desktop Application" 
              className="w-full h-full object-cover"
              />

                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <p className="text-primary font-medium px-4 py-2 bg-white/80 rounded-md">Java Desktop Application</p>
                </div>
              </div>
            </div>
            <div className="p-6 md:w-3/5">
              <h3 className="text-xl font-bold mb-2">Volkswagen Desktop Application</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive Java desktop application built using Netbeans that provides a platform for customers to browse Volkswagen vehicles, 
                view pricing information, and apply for vehicle financing.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Welcoming home page with product introduction</li>
                  <li>Vehicle catalog with detailed pricing information</li>
                  <li>Finance application process with document attachment functionality</li>
                  <li>Validation system for driver's license verification</li>
                  <li>Data persistence through text file storage</li>
                  <li>User-friendly interface with intuitive navigation</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Java</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Netbeans IDE</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Swing UI</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">File I/O</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Form Validation</span>
              </div>
              
              <Button className="mt-2" variant="outline" size="sm">
                <ExternalLink className="mr-1 h-4 w-4" />
                View Project Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Math Quiz Application Project */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-2/5">
              <div className="h-64 md:h-full bg-gray-100 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Math Quiz Application" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <p className="text-primary font-medium px-4 py-2 bg-white/80 rounded-md">Educational Java Application</p>
                </div>
              </div>
            </div>
            <div className="p-6 md:w-3/5">
              <h3 className="text-xl font-bold mb-2">Math Quiz Application</h3>
              <p className="text-gray-600 mb-4">
                An educational application designed for Grade 5 students to practice and develop their mathematical skills through 
                customizable quizzes covering various mathematical operations.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Customizable quiz types (Addition, Subtraction, Multiplication, Division)</li>
                  <li>Adjustable quiz length based on user preference</li>
                  <li>Optional timed quiz mode for added challenge</li>
                  <li>Age-appropriate interface designed for elementary students</li>
                  <li>Progress tracking and immediate feedback</li>
                  <li>Engaging and interactive learning experience</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Java</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Educational Software</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Mathematics</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">GUI Development</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Child-Friendly UX</span>
              </div>
              
              <Button className="mt-2" variant="outline" size="sm">
                <ExternalLink className="mr-1 h-4 w-4" />
                View Project Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* School Management System Project */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-2/5">
              <div className="h-64 md:h-full bg-gray-100 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="School Management System Screenshot" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <p className="text-primary font-medium px-4 py-2 bg-white/80 rounded-md">C# Windows Forms Application</p>
                </div>
              </div>
            </div>
            <div className="p-6 md:w-3/5">
              <h3 className="text-xl font-bold mb-2">School Management System</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive Windows Forms application built using C# in Visual Studio that provides functionality for managing student and teacher information, 
                as well as handling course enrollments and grading.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Student information management</li>
                  <li>Teacher profile management</li>
                  <li>Course enrollment system</li>
                  <li>Grading and assessment tracking</li>
                  <li>Report generation for academic performance</li>
                  <li>User-friendly interface with responsive design</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">C#</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Windows Forms</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Visual Studio</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">.NET Framework</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Database Management</span>
              </div>
              
              <Button className="mt-2" variant="outline" size="sm">
                <ExternalLink className="mr-1 h-4 w-4" />
                View Project Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Lottery Game Application Project */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-2/5">
              <div className="h-64 md:h-full bg-gray-100 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1612837017391-4b6b7b0bfe1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Lottery Game Application Screenshot" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <p className="text-primary font-medium px-4 py-2 bg-white/80 rounded-md">Java Application</p>
                </div>
              </div>
            </div>
            <div className="p-6 md:w-3/5">
              <h3 className="text-xl font-bold mb-2">Lottery Game Application</h3>
              <p className="text-gray-600 mb-4">
                A Java application developed in Netbeans that simulates a lottery game. The system generates three random numbers between 0 and 9, allows users to make guesses, 
                and calculates winnings based on match accuracy.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Random number generation (0-9)</li>
                  <li>User input validation</li>
                  <li>Sophisticated matching algorithm accounting for repeating digits</li>
                  <li>Dynamic prize calculation based on match accuracy</li>
                  <li>Interactive user interface with real-time feedback</li>
                  <li>Result history tracking</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Java</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Netbeans IDE</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Object-Oriented Programming</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">GUI Development</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Random Number Algorithms</span>
              </div>
              
              <Button className="mt-2" variant="outline" size="sm">
                <ExternalLink className="mr-1 h-4 w-4" />
                View Project Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Google Sheets Task Management Project */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-2/5">
              <div className="h-64 md:h-full bg-gray-100 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Task Management App Screenshot" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <p className="text-primary font-medium px-4 py-2 bg-white/80 rounded-md">Google Sheets Integration</p>
                </div>
              </div>
            </div>
            <div className="p-6 md:w-3/5">
              <h3 className="text-xl font-bold mb-2">Task Management Application</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive task management solution built entirely using Google Sheets, without writing a single line of code. 
                This project demonstrates how to leverage Google's powerful tools to create practical business applications.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Automated task assignment and tracking</li>
                  <li>Priority-based sorting and filtering</li>
                  <li>Due date reminders with color-coding</li>
                  <li>Progress tracking with status updates</li>
                  <li>Dashboard with completion metrics</li>
                  <li>Team member workload visualization</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Google Sheets</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Formulas</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Data Visualization</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Automation</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">No-Code</span>
              </div>
              
              <Button className="mt-2" variant="outline" size="sm">
                <ExternalLink className="mr-1 h-4 w-4" />
                View Project Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
