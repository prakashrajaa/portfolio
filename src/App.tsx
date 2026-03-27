/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Database, 
  BrainCircuit, 
  Terminal, 
  GraduationCap, 
  Briefcase,
  ChevronRight,
  Copyright,
  Award,
  CheckCircle2,
  User,
  X,
  ChevronDown,
  FileText,
  Star,
  Calendar,
  Building2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PROJECTS = [
  {
    title: "Smart Traffic Signal Optimization",
    category: "Final Year Project",
    description: "Developed a smart traffic management system using image processing to detect vehicles and dynamically adjust signal timing based on density.",
    tags: ["Python", "Image Processing", "ML", "Arduino"],
    icon: <Terminal className="w-5 h-5" />
  },
  {
    title: "Plant Disease Diagnosis",
    category: "Machine Learning",
    description: "A system using ML and Image Processing to identify plant diseases from leaf images, analyzing color, texture, and shape for classification.",
    tags: ["Machine Learning", "Image Processing", "Data Science"],
    icon: <BrainCircuit className="w-5 h-5" />
  },
  {
    title: "Obstacle Avoiding Robot",
    category: "Embedded Systems",
    description: "An autonomous robot using ultrasonic sensors and Arduino to detect and avoid obstacles in real-time, demonstrating automation principles.",
    tags: ["Arduino", "Embedded Systems", "Sensors"],
    icon: <Code2 className="w-5 h-5" />
  }
];
const CERTIFICATES = [
  {
    title: "Front End Technologies",
    issuer: "IBM Career Education Program",
    courseCode: "CEFET1IN",
    date: "October 14, 2024",
    type: "online",
    badge: "IBM Certified",
    color: "indigo",
    description: "Completed Front End Technologies covering ReactJS, Node.js and modern web development.",
    skills: ["JavaScript", "ReactJS", "Node.js", "HTML/CSS"],
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/63d14ae0a2924959910e288156547a74",
    verifiable: true
  },
  {
    title: "Full Stack Development",
    issuer: "Adroit Technologies Innovative Solutions Pvt. Ltd.",
    date: "August 12 – September 12, 2024",
    type: "course",
    badge: "Course Completion",
    color: "sky",
    description: "Completed Full Stack Development course.",
    skills: ["Frontend", "Backend", "Web Development"],
    link: "https://raw.githubusercontent.com/prakashrajaa/portfolio/7d495f264239da68771e9241be64631ca689bf44/src/Full%20Stack%20Development%20Internship.jpeg",
    verifiable: false
  },
  {
    title: "Full Stack Development Internship",
    issuer: "Adroit Technologies Innovative Solutions Pvt. Ltd., Coimbatore",
    date: "August 12 – September 12, 2024",
    type: "internship",
    badge: "Experience Letter",
    color: "emerald",
    description: "Completed 1-month internship programme.",
    skills: ["Full Stack Development", "Team Collaboration"],
    link: "https://raw.githubusercontent.com/prakashrajaa/portfolio/7d495f264239da68771e9241be64631ca689bf44/src/IT%20tech.jpeg",
    verifiable: false
  },
  {
    title: "Data Visualization using Python & R",
    issuer: "Chettinad College of Engineering & Technology",
    date: "October 6 – October 7, 2023",
    type: "value-added",
    badge: "Value Added Course",
    color: "violet",
    description: "Completed course on Data Visualization.",
    skills: ["Python", "R", "Matplotlib"],
    link: "https://raw.githubusercontent.com/prakashrajaa/portfolio/00b57f6645f4207d4c794847042f00052a0b804b/src/Data%20Visualization%20using%20Python%20%26%20R%20Programming.jpeg",
    verifiable: false
  },
  {
    title: "AIROX'2K24 Symposium",
    issuer: "J.J. College of Engineering and Technology, Trichy",
    date: "November 11, 2024",
    type: "participation",
    badge: "Participation",
    color: "amber",
    description: "Participated in National Level Technical Symposium.",
    skills: ["AI", "Networking"],
    link: "https://raw.githubusercontent.com/prakashrajaa/portfolio/7d495f264239da68771e9241be64631ca689bf44/src/AIROX'2K24%20%E2%80%93%20National%20Level%20Technical%20Symposium.jpeg",
    verifiable: false
  },

  // 🎓 SCHOOL MARKSHEETS
  {
    title: "SSLC (10th)",
    issuer: "Tamil Nadu State Board",
    date: "March 2020",
    type: "value-added",
    badge: "Academic Record",
    color: "amber",
    description: "376/500 (75.2%)",
    skills: ["Tamil", "English", "Maths"],
    link: "https://raw.githubusercontent.com/prakashrajaa/portfolio/3b5ea3d51e3345e80a0e8e94a0f1864eb8749a14/src/10.jpeg",
    verifiable: false
  },
  {
    title: "HSC (11th)",
    issuer: "Tamil Nadu State Board",
    date: "March 2021",
    type: "value-added",
    badge: "Academic Record",
    color: "sky",
    description: "Completed successfully.",
    skills: ["Physics", "Chemistry", "Biology"],
    link: "https://raw.githubusercontent.com/prakashrajaa/portfolio/3b5ea3d51e3345e80a0e8e94a0f1864eb8749a14/src/11.jpeg",
    verifiable: false
  },
  {
    title: "HSC (12th)",
    issuer: "Tamil Nadu State Board",
    date: "May 2022",
    type: "value-added",
    badge: "Academic Record",
    color: "indigo",
    description: "362/600 (60.3%)",
    skills: ["Physics", "Chemistry", "Biology"],
    link: "https://raw.githubusercontent.com/prakashrajaa/portfolio/3b5ea3d51e3345e80a0e8e94a0f1864eb8749a14/src/12.jpeg",
    verifiable: false
  },

  // 🎓 COLLEGE SEM MARKSHEETS
  {
    title: "Semester I",
    issuer: "Anna University",
    date: "2022",
    type: "value-added",
    badge: "University Record",
    color: "violet",
    description: "Semester I marksheet.",
    skills: ["Maths", "Basics"],
    link: "https://raw.githubusercontent.com/prakashrajaa/portfolio/94c94fa825669b71acd4e7b0526c19a645d6c701/src/1.jpeg",
    verifiable: false
  },
  {
    title: "Semester II",
    issuer: "Anna University",
    date: "2023",
    type: "value-added",
    badge: "University Record",
    color: "emerald",
    description: "Semester II marksheet.",
    skills: ["Programming", "DS"],
    link: "https://raw.githubusercontent.com/prakashrajaa/portfolio/94c94fa825669b71acd4e7b0526c19a645d6c701/src/2.jpeg",
    verifiable: false
  },
  {
    title: "Semester III",
    issuer: "Anna University",
    date: "Nov 2023",
    type: "value-added",
    badge: "University Record",
    color: "indigo",
    description: "GPA 6.826 (CGPA 6.69)",
    skills: ["AI", "DB", "Algorithms"],
    link: "https://raw.githubusercontent.com/prakashrajaa/portfolio/94c94fa825669b71acd4e7b0526c19a645d6c701/src/3.jpeg",
    verifiable: false
  }
];
const CERT_COLORS = {
  indigo: {
    bg: "from-indigo-600 via-indigo-700 to-slate-800",
    accent: "text-indigo-300",
    badge: "bg-indigo-100 text-indigo-700 border-indigo-200",
    border: "border-indigo-200",
    icon: "bg-indigo-600",
    pill: "bg-indigo-50 text-indigo-700",
    ring: "ring-indigo-200",
    tab: "bg-indigo-600 text-white",
    tabHover: "hover:bg-indigo-700"
  },
  sky: {
    bg: "from-sky-600 via-sky-700 to-slate-800",
    accent: "text-sky-300",
    badge: "bg-sky-100 text-sky-700 border-sky-200",
    border: "border-sky-200",
    icon: "bg-sky-600",
    pill: "bg-sky-50 text-sky-700",
    ring: "ring-sky-200",
    tab: "bg-sky-600 text-white",
    tabHover: "hover:bg-sky-700"
  },
  emerald: {
    bg: "from-emerald-600 via-emerald-700 to-slate-800",
    accent: "text-emerald-300",
    badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
    border: "border-emerald-200",
    icon: "bg-emerald-600",
    pill: "bg-emerald-50 text-emerald-700",
    ring: "ring-emerald-200",
    tab: "bg-emerald-600 text-white",
    tabHover: "hover:bg-emerald-700"
  },
  violet: {
    bg: "from-violet-600 via-violet-700 to-slate-800",
    accent: "text-violet-300",
    badge: "bg-violet-100 text-violet-700 border-violet-200",
    border: "border-violet-200",
    icon: "bg-violet-600",
    pill: "bg-violet-50 text-violet-700",
    ring: "ring-violet-200",
    tab: "bg-violet-600 text-white",
    tabHover: "hover:bg-violet-700"
  },
  amber: {
    bg: "from-amber-500 via-amber-600 to-slate-800",
    accent: "text-amber-300",
    badge: "bg-amber-100 text-amber-700 border-amber-200",
    border: "border-amber-200",
    icon: "bg-amber-500",
    pill: "bg-amber-50 text-amber-700",
    ring: "ring-amber-200",
    tab: "bg-amber-500 text-white",
    tabHover: "hover:bg-amber-600"
  }
};

const TYPE_ICONS = {
  online: <Award className="w-5 h-5" />,
  course: <GraduationCap className="w-5 h-5" />,
  internship: <Briefcase className="w-5 h-5" />,
  "value-added": <Star className="w-5 h-5" />,
  participation: <FileText className="w-5 h-5" />
};

const TYPE_LABELS = {
  online: "Online Certification",
  course: "Course Completion",
  internship: "Internship",
  "value-added": "Value Added Course",
  participation: "Participation"
};

const SKILLS = {
  "Programming": {
    icon: "Terminal",
    color: "indigo",
    items: [
      { name: "Python", source: "Chettinad College of Engineering", sourceType: "college", link: "https://www.chettinadtech.ac.in/" },
      { name: "Basic C", source: "Chettinad College of Engineering", sourceType: "college", link: "https://www.chettinadtech.ac.in/" },
      { name: "Basic Java", source: "Chettinad College of Engineering", sourceType: "college", link: "https://www.chettinadtech.ac.in/" },
      { name: "JavaScript", source: "IBM Certificate – Front End Technologies", sourceType: "certificate", link: "https://courses.ibmcep.cognitiveclass.ai/certificates/63d14ae0a2924959910e288156547a74" },
    ],
    description: "Core programming languages I use to build software and automate solutions."
  },
  "Data & AI": {
    icon: "BrainCircuit",
    color: "violet",
    items: [
      { name: "Machine Learning", source: "Chettinad College of Engineering", sourceType: "college", link: "https://www.chettinadtech.ac.in/" },
      { name: "Data Engineering", source: "Chettinad College of Engineering", sourceType: "college", link: "https://www.chettinadtech.ac.in/" },
      { name: "Data Analysis", source: "Chettinad College of Engineering", sourceType: "college", link: "https://www.chettinadtech.ac.in/" },
      { name: "EDA", source: "Chettinad College of Engineering", sourceType: "college", link: "https://www.chettinadtech.ac.in/" },
    ],
    description: "Skills in building intelligent systems and extracting insights from data."
  },
  "Tools": {
    icon: "Database",
    color: "sky",
    items: [
      { name: "ReactJS", source: "IBM Certificate – Front End Technologies", sourceType: "certificate", link: "https://courses.ibmcep.cognitiveclass.ai/certificates/63d14ae0a2924959910e288156547a74" },
      { name: "Node.js", source: "IBM Certificate – Front End Technologies", sourceType: "certificate", link: "https://courses.ibmcep.cognitiveclass.ai/certificates/63d14ae0a2924959910e288156547a74" },
      { name: "Excel Dashboards", source: "Chettinad College of Engineering", sourceType: "college", link: "https://www.chettinadtech.ac.in/" },
      { name: "Power BI", source: "Chettinad College of Engineering", sourceType: "college", link: "https://www.chettinadtech.ac.in/" },
      { name: "Matplotlib", source: "Chettinad College of Engineering", sourceType: "college", link: "https://www.chettinadtech.ac.in/" },
      { name: "Seaborn", source: "Chettinad College of Engineering", sourceType: "college", link: "https://www.chettinadtech.ac.in/" },
    ],
    description: "Frameworks and tools I use for development, visualization, and reporting."
  }
};

const COLOR_MAP = {
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700 border-indigo-200",
    shadow: "hover:shadow-indigo-100",
    ring: "ring-indigo-300",
    dot: "bg-indigo-500",
    iconBg: "bg-indigo-600",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-700 border-violet-200",
    shadow: "hover:shadow-violet-100",
    ring: "ring-violet-300",
    dot: "bg-violet-500",
    iconBg: "bg-violet-600",
  },
  sky: {
    bg: "bg-sky-50",
    text: "text-sky-600",
    border: "border-sky-200",
    badge: "bg-sky-100 text-sky-700 border-sky-200",
    shadow: "hover:shadow-sky-100",
    ring: "ring-sky-300",
    dot: "bg-sky-500",
    iconBg: "bg-sky-600",
  }
};

const PROFILE_IMAGE_URL =
  "https://raw.githubusercontent.com/prakashrajaa/portfolio/300965d6a37cba2808aff2a58b65a8fc2c378b1d/src/WhatsApp%20Image%202026-03-06%20at%2010.08.58%20AM.jpeg";

function ProfilePicture({ className }) {
  const [imgError, setImgError] = useState(false);
  if (PROFILE_IMAGE_URL && !imgError) {
    return (
      <img
        src={PROFILE_IMAGE_URL}
        alt="Prakashraja"
        className={className}
        onError={() => setImgError(true)}
      />
    );
  }
  return (
    <div className="w-40 h-40 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-slate-200 rounded-full shadow-lg">
      <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center mb-2">
        <span className="text-white text-xl font-bold">PA</span>
      </div>
      <span className="text-slate-600 text-xs font-semibold">Prakashraja</span>
    </div>
  );
}

// ─── Certificate Card (Enhanced) ─────────────────────────────────────────────
function CertificateCard({ cert, idx }) {
  const colors = CERT_COLORS[cert.color];
  const typeIcon = TYPE_ICONS[cert.type];
  const typeLabel = TYPE_LABELS[cert.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.08 }}
      className={`flex flex-col lg:flex-row gap-8 items-stretch bg-white rounded-[2rem] border ${colors.border} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}
    >
      {/* Left – Visual Panel */}
      <div className={`w-full lg:w-64 shrink-0 bg-gradient-to-br ${colors.bg} flex flex-col items-center justify-center gap-4 p-8 relative min-h-[220px]`}>
        {/* Decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <div className="w-48 h-48 rounded-full border-2 border-white" />
          <div className="absolute w-32 h-32 rounded-full border border-white" />
        </div>

        {/* Type badge */}
        <div className="z-10 flex items-center gap-1.5 bg-white/20 border border-white/30 rounded-full px-3 py-1">
          <span className="text-white/80 w-3.5 h-3.5">{typeIcon}</span>
          <span className="text-white/90 text-[10px] font-bold uppercase tracking-wider">{typeLabel}</span>
        </div>

        {/* Big icon */}
        <div className="z-10 w-16 h-16 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center">
          <Award className="w-8 h-8 text-white" />
        </div>

        {/* Title snippet */}
        <div className="z-10 text-center px-2">
          <p className={`${colors.accent} text-[11px] font-bold uppercase tracking-widest mb-1`}>{cert.badge}</p>
          <p className="text-white text-sm font-black leading-tight line-clamp-2">{cert.title}</p>
        </div>

        {cert.verifiable && (
          <div className="z-10 flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span className="text-white/80 text-[10px] font-bold uppercase tracking-wider">Verifiable</span>
          </div>
        )}
      </div>

      {/* Right – Details Panel */}
      <div className="flex flex-col justify-between p-7 flex-1 gap-4">
        <div>
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <div className={`w-10 h-10 ${colors.icon} rounded-xl flex items-center justify-center text-white shadow-md shrink-0`}>
              {typeIcon}
            </div>
            <div>
              <p className={`text-[11px] font-bold uppercase tracking-widest ${colors.pill.split(' ')[1]} mb-0.5`}>{cert.issuer}</p>
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                <Calendar className="w-3 h-3" />
                <span>{cert.date}</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight">{cert.title}</h3>

          {/* Description */}
          <p className="text-slate-500 text-sm leading-relaxed mb-4">{cert.description}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {cert.skills.map(skill => (
              <span key={skill} className={`px-3 py-1 text-[11px] font-bold rounded-full border ${colors.badge}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3 pt-2">
          {cert.link ? (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 ${colors.icon} text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-md`}
            >
              {cert.verifiable ? "Verify Certificate" : "View Issuer"} <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-500 rounded-xl font-bold text-sm cursor-default">
              <FileText className="w-3.5 h-3.5" /> Physical Certificate
            </span>
          )}
          {cert.courseCode && (
            <span className="text-xs text-slate-400 font-mono font-bold">Code: {cert.courseCode}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Interactive Skill Card ───────────────────────────────────────────────────
function SkillCard({ category, data, idx }) {
  const [open, setOpen] = useState(false);
  const colors = COLOR_MAP[data.color];

  const IconComp = category === 'Programming' ? Terminal :
                   category === 'Data & AI' ? BrainCircuit : Database;

  const grouped = data.items.reduce((acc, skill) => {
    const key = skill.source;
    if (!acc[key]) acc[key] = { sourceType: skill.sourceType, link: skill.link, skills: [] };
    acc[key].skills.push(skill.name);
    return acc;
  }, {});

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        onClick={() => setOpen(true)}
        className={`group p-8 bg-white rounded-3xl border ${colors.border} shadow-sm hover:shadow-lg ${colors.shadow} transition-all cursor-pointer select-none`}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className={`w-10 h-10 ${colors.bg} ${colors.text} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <IconComp className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-bold mb-2">{category}</h3>
        <p className="text-slate-400 text-sm mb-5 leading-relaxed">{data.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {data.items.slice(0, 3).map(skill => (
            <span key={skill.name} className={`px-3 py-1 text-xs font-semibold rounded-full border ${colors.badge}`}>
              {skill.name}
            </span>
          ))}
          {data.items.length > 3 && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-500 border border-slate-200">
              +{data.items.length - 3} more
            </span>
          )}
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold ${colors.text} uppercase tracking-wider`}>
          <span>View all skills</span>
          <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 z-10 max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-slate-500" />
              </button>
              <div className={`w-14 h-14 ${colors.iconBg} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6`}>
                <IconComp className="w-7 h-7" />
              </div>
              <p className={`text-xs font-bold ${colors.text} uppercase tracking-widest mb-1`}>Technical Skills</p>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{category}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{data.description}</p>
              <div className="space-y-6">
                {Object.entries(grouped).map(([source, { sourceType, link, skills }], gi) => (
                  <motion.div
                    key={source}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: gi * 0.1 }}
                    className="rounded-2xl border border-slate-100 overflow-hidden"
                  >
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className={`flex items-center justify-between gap-3 px-5 py-3 ${
                        sourceType === 'certificate' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-slate-800 hover:bg-slate-900'
                      } transition-colors group/src`}
                    >
                      <div className="flex items-center gap-2">
                        {sourceType === 'certificate' ? (
                          <Award className="w-4 h-4 text-white/80 shrink-0" />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-white/80 shrink-0" />
                        )}
                        <span className="text-white text-xs font-bold uppercase tracking-wide">{source}</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-white/60 group-hover/src:text-white transition-colors shrink-0" />
                    </a>
                    <div className="flex flex-wrap gap-2 p-4 bg-slate-50">
                      {skills.map((skillName, si) => (
                        <motion.a
                          key={skillName}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: gi * 0.1 + si * 0.05 }}
                          className={`px-4 py-2 text-sm font-semibold rounded-full border ${colors.badge} flex items-center gap-2 hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer`}
                          title={`Learned at: ${source}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                          {skillName}
                          <ExternalLink className="w-3 h-3 opacity-50" />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">{data.items.length} skills · tap any to visit source</span>
                <button
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2 ${colors.iconBg} text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity`}
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Certificate Filter Tabs ──────────────────────────────────────────────────
const CERT_FILTERS = [
  { key: "all", label: "All" },
  { key: "online", label: "Online" },
  { key: "course", label: "Courses" },
  { key: "internship", label: "Internship" },
  { key: "value-added", label: "College" },
  { key: "participation", label: "Events" }
];

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [certFilter, setCertFilter] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredCerts = certFilter === 'all'
    ? CERTIFICATES
    : CERTIFICATES.filter(c => c.type === certFilter);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg font-bold tracking-tight text-indigo-600"
          >
            PRAKASHRAJA A
          </motion.span>
          <div className="hidden md:flex items-center gap-8">
            {['home', 'about', 'skills', 'projects', 'certificates', 'education'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-sm font-medium capitalize transition-colors hover:text-indigo-600 ${
                  activeSection === item ? 'text-indigo-600' : 'text-slate-500'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="mailto:prakashraja485@gmail.com"
            className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
              Full Stack Developer & AI Specialist
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Crafting intelligent <br />
              <span className="text-indigo-600">digital experiences.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mb-10 leading-relaxed">
              Enthusiastic Full Stack Developer with hands-on experience in ReactJS, backend development, and Machine Learning. Passionate about solving real-time problems using data-driven approaches.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/prakashraja-a-460457391"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:prakashraja485@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <div className="flex items-center gap-2 px-6 py-3 bg-indigo-50 text-indigo-700 rounded-xl border border-indigo-100">
                <Phone className="w-5 h-5" />
                <span>+91 8531086063</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Summary</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                I have a strong foundation in Python, JavaScript, React, Node.js, and ML algorithms. My goal is to contribute to innovative projects and grow as a software engineer by building responsive web applications and integrating machine learning models into real-world applications.
              </p>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Adroit Technologies / IBM Internship</p>
                  <p className="text-xs text-slate-500">Full Stack Development · Aug–Sep 2024</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 shadow-xl"
            >
              <ProfilePicture className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-indigo-600/10 mix-blend-multiply pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Technical Arsenal</h2>
            <p className="text-slate-400 text-sm">Click any card to explore the skills in detail.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(SKILLS).map(([category, data], idx) => (
              <SkillCard key={category} category={category} data={data} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-slate-400 max-w-md">Selected works that showcase my expertise in AI, web development, and hardware integration.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              View All Works <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all cursor-default"
              >
                <div className="mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Certifications & Achievements</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Professional recognitions, course completions, internship experience, and event participation — all verified achievements.</p>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            {[
              { label: "Total Certificates", value: CERTIFICATES.length, color: "text-indigo-600" },
              { label: "Online / IBM", value: CERTIFICATES.filter(c => c.type === 'online').length, color: "text-indigo-600" },
              { label: "Internships", value: CERTIFICATES.filter(c => c.type === 'internship').length, color: "text-emerald-600" },
              { label: "Events", value: CERTIFICATES.filter(c => c.type === 'participation').length, color: "text-amber-600" },
            ].map(stat => (
              <div key={stat.label} className="bg-slate-50 rounded-2xl p-5 text-center border border-slate-100">
                <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {CERT_FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => setCertFilter(f.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                  certFilter === f.key
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700'
                }`}
              >
                {f.label}
                <span className="ml-1.5 opacity-60">
                  ({f.key === 'all' ? CERTIFICATES.length : CERTIFICATES.filter(c => c.type === f.key).length})
                </span>
              </button>
            ))}
          </div>

          {/* Certificate Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={certFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid gap-6"
            >
              {filteredCerts.map((cert, idx) => (
                <CertificateCard key={cert.title} cert={cert} idx={idx} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredCerts.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              <Award className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="font-medium">No certificates in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">B.Tech in Artificial Intelligence and Data Science</h3>
                  <p className="text-slate-500 text-sm">Chettinad College of Engineering and Technology, Karur</p>
                  <p className="text-indigo-600 text-sm font-bold mt-1">CGPA: 6.69 (up to Semester III)</p>
                </div>
              </div>
              <div className="text-right">
                <span className="px-4 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-500">2022 - Present</span>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-3xl border border-slate-200"
              >
                <h4 className="font-bold mb-1">H.S.C (Class XII)</h4>
                <p className="text-xs text-slate-500 mb-1">Govt HR Sec School, Esanatham, Karur</p>
                <p className="text-xs text-slate-400 mb-3">Tamil Medium · General Education</p>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-600 text-sm font-bold">362 / 600 (60.3%)</span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">May 2022</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-3xl border border-slate-200"
              >
                <h4 className="font-bold mb-1">S.S.L.C (Class X)</h4>
                <p className="text-xs text-slate-500 mb-1">Govt HR Sec School, Esanatham, Karur</p>
                <p className="text-xs text-slate-400 mb-3">Tamil Medium · Roll No. 4477214</p>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-600 text-sm font-bold">376 / 500 (75.2%)</span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">March 2020</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.linkedin.com/in/prakashraja-a-460457391" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:prakashraja485@gmail.com" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold tracking-tight">
              <Copyright className="w-4 h-4 text-indigo-600" />
              <span>{new Date().getFullYear()} PRAKASHRAJA A</span>
            </div>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
              All Rights Reserved. Copyrights to Prakashraja.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-50">
            <p className="text-[10px] text-slate-300 uppercase tracking-[0.2em] font-bold">
              Designed & Developed with Passion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
