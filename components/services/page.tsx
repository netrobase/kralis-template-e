import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaClipboard, FaLaptop, FaListAlt } from 'react-icons/fa';

export const services = [
  {
    title: "School Information System",
    icon: <FaUserGraduate className="text-4xl text-red-600" />,
    description: "Manages student data, including personal details, academic records, attendance, and grades. It centralizes all information related to students, allowing for efficient tracking and reporting.",
  },
  {
    title: "Staffs and Faculty Management",
    icon: <FaChalkboardTeacher className="text-4xl text-red-500" />,
    description: "Manages teacher and staff information, including schedules, roles, and professional development. It streamlines HR tasks, facilitates communication, and supports staff coordination and evaluation.",
  },
  {
    title: "Learning Management System",
    icon: <FaBook className="text-4xl text-red-600" />,
    description: "Facilitates online learning and course management. It supports the creation and distribution of educational materials, tracks student progress, and allows for interactive learning experiences.",
  },
  {
    title: "Attendance Tracking System",
    icon: <FaClipboard className="text-4xl text-red-500" />,
    description: "Monitors student attendance and absences. This feature simplifies the process of recording attendance, generating reports, and notifying parents about their child’s attendance status.",
  },
  {
    title: "Computer Based Test (CBT)",
    icon: <FaLaptop className="text-4xl text-red-500" />,
    description: "Facilitates the administration and management of online tests and assessments. It allows for automated grading, instant feedback, and secure test-taking environments, streamlining the evaluation process.",
  },
  {
    title: "Library Management System",
    icon: <FaListAlt className="text-4xl text-red-500" />,
    description: "Manages the school’s library resources, including book catalogs, borrowing records, and return tracking. It streamlines book lending, ensures efficient resource management, and enhances student and staff access to educational materials.",
  },
]
