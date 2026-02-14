import {
  Heart,
  Presentation,
  Scale,
  Shield,
  ShieldAlert,
  Target,
} from "lucide-react";

import type { Course } from "../types";

export const courses: Course[] = [
  {
    id: 1,
    title: "Incident Response Training Day",
    subheader:
      "For teams that want to apply their already in place training to real world scenarios.",
    duration: "4 hours",
    type: "scenario-based",
    description:
      "This is a 4-hour day that puts the education and procedures you already have in place, and puts them to the test. The entire course is driven with the intent to give your team experience in solving real world problems. The scenarios come from real world situations that occur in schools and churches all across the country. The scenarios cover a broad range of topics, from active aggressors, to medical emergencies.",
    topics: [
      "Coordinated team response protocols",
      "Communication under stress",
      "Threat assessment and de-escalation",
      "Emergency evacuation procedures",
      "Post-incident debriefing",
      "Real-time scenario exercises",
    ],
    icon: ShieldAlert,
    image: "/images/course-incident.jpg",
  },
  {
    id: 2,
    title: "Fundamentals of Medical Emergencies",
    subheader:
      "This course is for teams that want the basic understanding of how to care for someone undergoing a true medical emergency.",
    duration: "4 hours",
    type: "hands-on",
    description:
      "The intention of this course is to give teams a very basic understanding of supplying first aid to someone having a medical emergency. This course will include a basic CPR course combined with a Stop the Bleed course. The goal is to give teams a strong foundation for a worst case scenario.",
    topics: [
      "CPR certification training",
      "Stop the Bleed techniques",
      "AED operation and placement",
      "Wound assessment and triage",
      "Medical emergency action plans",
      "Equipment familiarization",
    ],
    icon: Heart,
    image: "/images/course-medical.jpg",
  },
  {
    id: 3,
    title: "Fundamentals of Armed Church Security",
    subheader:
      "This course is aimed at providing church security teams with some of the core principles needed in protecting their church.",
    duration: "4 hours",
    type: "hands-on",
    description:
      "Fundamentals of Armed Church Security is a comprehensive 4 hour course. This is not a powerpoint presentation. We get hands on to show you the deficiencies in your building and where potential threats could arise. The rest of the time is spent learning core concepts, like de-escalation, understanding angles, and live scenario training. By the end of the day, your perspective on your building and the way you see threats will be changed.",
    topics: [
      "Hands-on building assessment",
      "De-escalation techniques",
      "Understanding angles and positioning",
      "Live scenario training",
      "Threat identification",
      "Coordination with law enforcement",
    ],
    icon: Shield,
    image: "/images/course-armed.jpg",
  },
  {
    id: 4,
    title: "Active Shooter Presentation",
    subheader:
      "This course is designed to give teams a foundational understanding of safe, practical response options during an active shooter situation.",
    duration: "2 hours",
    type: "classroom",
    description:
      "This is a 2 hours class that provides classroom style learning on the topic of active shooter. We dive into the statistics as well as the real life situations occurring throughout the US. We discuss the basic tactics to help save lives on what could be your darkest day.",
    topics: [
      "Active shooter statistics and trends",
      "Real life situation analysis",
      "Life-saving tactics",
      "Emergency communication plans",
      "Working with first responders",
      "Post-incident recovery",
    ],
    icon: Presentation,
    image: "/images/course-presentation.jpg",
  },
  {
    id: 5,
    title: "Active Shooter Scenario Training",
    subheader:
      "This course is designed to give teams a real life blueprint of how an active shooter may present itself within their building.",
    duration: "4 hours",
    type: "scenario-based",
    description:
      "This course is a 4 hour course designed specifically with your church or school in mind. We spend time discussing what the weak points of your facility may be, as well as how they may be exploited. We then spend time going over the active shooter presentation, and practice these tactics together as a class. We then bring this class to a boiling point, where we have a live scenario. We present the class with as close to a real life event as we can create, using blank rounds and actors.",
    topics: [
      "Facility weak point assessment",
      "Threat exploitation analysis",
      "Active shooter presentation review",
      "Tactical practice as a team",
      "Live scenario with blank rounds and actors",
      "After-action review and improvement",
    ],
    icon: Target,
    image: "/images/course-scenario.jpg",
  },
  {
    id: 6,
    title: "Understanding Church Lawsuits",
    subheader:
      "This course is designed to give teams an understanding of why churches are sued, how these lawsuits are viewed, and how we can best prevent this in your building.",
    duration: "1 hour",
    type: "classroom",
    description:
      "This one-hour course is designed to expand your understanding of church-related lawsuits and the legal responsibilities churches face in today's environment. The course examines how modern courts have viewed recent cases involving church safety, security, and preparedness, with a focus on common factors that contribute to legal liability. Participants will gain insight into how decisions made before, during, and after an incident can impact both safety outcomes and legal exposure. The training also explores practical, realistic steps churches can take to reduce risk, strengthen policies, and improve preparedness within their facilities.",
    topics: [
      "Church-related lawsuit analysis",
      "Legal responsibilities and duty of care",
      "Modern court case examination",
      "Factors contributing to legal liability",
      "Risk reduction strategies",
      "Policy and preparedness improvement",
    ],
    icon: Scale,
    image: "/images/course-liability.jpg",
  },
];
