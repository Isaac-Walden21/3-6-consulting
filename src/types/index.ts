import type { LucideIcon } from "lucide-react";

export interface Course {
  id: number;
  title: string;
  duration: string;
  type: "scenario-based" | "hands-on" | "classroom";
  description: string;
  topics: string[];
  icon: LucideIcon;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  quote: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
}

export interface NavLink {
  label: string;
  path: string;
}
