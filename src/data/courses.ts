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
    duration: "4 hours",
    type: "scenario-based",
    description:
      "A comprehensive, scenario-driven training day designed to prepare your security team for real-world incidents. From medical emergencies to active threats, your team will practice coordinated responses in realistic simulations.",
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
    duration: "4 hours",
    type: "hands-on",
    description:
      "Hands-on medical training covering the critical skills every security team member needs. This course combines CPR certification with Stop the Bleed techniques, ensuring your team can respond to medical emergencies with confidence.",
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
    title: "Fundamentals of Armed Security",
    duration: "4 hours",
    type: "hands-on",
    description:
      "A thorough introduction to armed security for any facility. This course covers legal considerations, firearms safety, tactical positioning, and the unique challenges of providing armed protection in churches, schools, and corporate environments.",
    topics: [
      "Legal framework for armed security",
      "Firearms safety and handling",
      "Tactical positioning in your facility",
      "Threat identification and response",
      "Use of force considerations",
      "Coordination with law enforcement",
    ],
    icon: Shield,
    image: "/images/course-armed.jpg",
  },
  {
    id: 4,
    title: "Active Shooter Presentation",
    duration: "2 hours",
    type: "classroom",
    description:
      "An educational presentation designed for leadership and staff. This classroom course covers awareness, prevention, and the fundamentals of surviving an active shooter event.",
    topics: [
      "Threat recognition and warning signs",
      "Run-Hide-Fight methodology",
      "Emergency communication plans",
      "Lockdown procedures",
      "Working with first responders",
      "Post-incident recovery",
    ],
    icon: Presentation,
    image: "/images/course-presentation.jpg",
  },
  {
    id: 5,
    title: "Active Shooter Scenario Training",
    duration: "4 hours",
    type: "scenario-based",
    description:
      "The most intensive training we offer. Using blank rounds and professional role players, your security team will experience realistic active shooter scenarios. This high-stress training builds the muscle memory and decision-making skills needed when seconds count.",
    topics: [
      "Live scenario exercises with blank rounds",
      "Stress inoculation training",
      "Tactical movement and cover",
      "Threat neutralization protocols",
      "Casualty care under fire",
      "After-action review and improvement",
    ],
    icon: Target,
    image: "/images/course-scenario.jpg",
  },
  {
    id: 6,
    title: "Understanding Security Liability",
    duration: "1 hour",
    type: "classroom",
    description:
      "A critical overview of the legal landscape surrounding facility security. Learn about liability, duty of care, and how proper training and documentation can protect your organization from legal exposure.",
    topics: [
      "Common liability scenarios",
      "Duty of care obligations",
      "Documentation best practices",
      "Insurance considerations",
      "Policy development guidelines",
      "Case study analysis",
    ],
    icon: Scale,
    image: "/images/course-liability.jpg",
  },
];
