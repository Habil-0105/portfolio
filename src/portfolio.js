const header = {
  homepage: 'https://Habil-0105.github.io/portfolio',
  title: 'Habil.',
  role: 'Mobile & Full-Stack Developer',
}

const about = {
  name: 'Habil',
  role: 'Software Engineer | Mobile & Full-Stack Developer',
  headline: 'Full-stack engineering. Native iOS & cross-platform mobile.',
  subhead:
    'Software engineer with a Bachelor\'s degree in Informatics Engineering (Cum Laude, PENS). Currently building native iOS apps with SwiftUI, CoreML, and ARKit at Apple Developer Academy @ Infinite Learning, with proven production experience across 30–40 projects at ORDO Apps, Exacode Systems, and PT Nusantara Infrastructure.',
  description:
    'Software Engineer with a Bachelor\'s degree in Informatics Engineering and professional experience spanning cross-platform mobile, iOS, Android, and backend development. Experienced in Flutter, Swift, Kotlin, Go, Node.js, and Laravel, with hands-on work building and maintaining production applications, integrating APIs and computer vision capabilities, managing mobile releases, and developing scalable solutions through Agile collaboration.',
  resume:
    'https://drive.google.com/file/d/17w0sA_tOR9FLFRhXVEObmX6KNKbGeQKI/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/habil0105/',
    github: 'https://github.com/Habil-0105',
    email: 'habil0105@gmail.com',
  },
  location: 'Batam, Indonesia',
  phone: '+6282268159542',
  status: 'Open to Mobile & Full-stack Engineering Opportunities',
  metrics: [
    { label: 'Apple Academy Apps', value: '4' },
    { label: 'Production Projects', value: '30+' },
    { label: 'Academic Honors', value: 'Cum Laude (3.68)' },
  ],
}

const experience = [
  {
    period: 'February 2026 – Present',
    role: 'iOS Developer / Learner',
    organization: 'Apple Developer Academy @ Infinite Learning',
    type: 'Educational / Product Academy',
    location: 'Batam, Indonesia',
    summary:
      'Developing native iOS and macOS products through Challenge-Based Learning (CBL) using Swift and SwiftUI with MVVM architecture. Addressing problems across presentation skills, travel & circadian rhythms, film production lighting, and mental overload.',
    domains: [
      'Presentation Skills (Wavrd)',
      'Circadian Travel (Simple Plan)',
      'Spatial Lighting (GAFR)',
      'Mental Well-being (Unsent)',
    ],
    contributions: [
      'Engineered Wavrd, a native presentation-training application detecting filler words using WhisperKit, Silero VAD, and slide-by-slide chunking.',
      'Built Simple Plan, a jet lag and travel companion generating circadian adaptation schedules integrating HealthKit and WatchConnectivity.',
      'Developed GAFR, a spatial lighting visualization iOS tool for film directors using ARKit, Vision, MetalKit, and CoreML.',
      'Created Unsent, a tactile digital journaling app for mental overload utilizing SwiftUI, PencilKit, and emotion-driven adaptive prompts.',
      'Architected solutions using MVVM with Swift and SwiftUI, improving modularity and maintainability for scalable feature delivery.',
    ],
    stack: [
      'Swift',
      'SwiftUI',
      'CoreML',
      'ARKit',
      'MetalKit',
      'Vision',
      'WhisperKit',
      'HealthKit',
      'SwiftData',
      'PencilKit',
      'AppKit',
    ],
  },
  {
    period: 'August 2024 – January 2026',
    role: 'Software Engineer',
    organization: 'ORDO Apps',
    type: 'Commercial Employment',
    location: 'Surabaya, Indonesia',
    summary:
      'Developed software across mobile and web projects using Flutter, Laravel, Java, and Node.js, contributing to UI development, API integration, debugging, and feature implementation across approximately 30–40 projects.',
    domains: ['Client Mobile Products', 'Web Systems', 'Automation'],
    contributions: [
      'Built and maintained Laravel APIs and integrated them with Flutter applications, supporting end-to-end feature development across backend and mobile systems.',
      'Managed mobile application deployments to Google Play Store and Apple App Store, handling build preparation, submission, and release processes.',
      'Integrated computer vision capabilities into Flutter through Kotlin method channels, bridging native Android functionality with cross-platform applications.',
      'Developed specialized solutions including a Java-based live-streaming application and Node.js Slack bots to support real-time functionality and workflow automation.',
    ],
    stack: [
      'Flutter',
      'Dart',
      'Laravel',
      'Node.js',
      'Java',
      'Kotlin (Method Channels)',
      'REST APIs',
      'Computer Vision',
    ],
  },
  {
    period: 'February 2024 – April 2025',
    role: 'Flutter Developer',
    organization: 'Exacode Systems',
    type: 'Commercial Employment',
    location: 'Jakarta, Indonesia',
    summary:
      'Engineered booking and reservation ecosystems across consumer and merchant mobile applications in Flutter.',
    domains: ['Hospitality & Bookings (Reservation Quest)', 'Fitness (Ikigai)'],
    contributions: [
      'Developed the Reservation Quest App in Flutter, implementing booking and reservation workflows to streamline customer scheduling.',
      'Implemented real-time chat with voice notes and push notifications to support richer, timely customer interactions.',
      'Built the companion Reservation Quest Business App and contributed to the Ikigai Fitness mobile platform.',
    ],
    stack: ['Flutter', 'Dart', 'State Management', 'Real-Time Chat', 'Voice Notes', 'Push Notifications'],
  },
  {
    period: 'February 2023 – December 2023',
    role: 'Flutter Developer Intern',
    organization: 'PT Nusantara Infrastructure',
    type: 'Commercial Internship',
    location: 'Jakarta, Indonesia',
    summary:
      'Maintained and optimized the NITA toll road commuter service mobile application for expressway users.',
    domains: ['Transportation & Expressway Services (NITA)'],
    contributions: [
      'Optimized the NITA app by improving inefficient loading flows to deliver a more responsive user experience.',
      'Integrated NFC support for e-toll cards in Flutter, connecting native mobile capabilities to enable e-toll card interactions.',
    ],
    stack: ['Flutter', 'Dart', 'NFC Integration', 'Performance Optimization', 'Mobile Networking'],
  },
  {
    period: 'August 2020 – July 2024',
    role: 'Bachelor of Applied Science (Informatics Engineering)',
    organization: 'Politeknik Elektronika Negeri Surabaya (PENS)',
    type: 'Academic Degree',
    location: 'Surabaya / Batam, Indonesia',
    summary:
      'Graduated with Honors (Cum Laude) with a 3.68/4.00 GPA. Thesis on computer vision: "Object Detection berbasis Faster R-CNN sebagai Sarana Pembelajaran Bahasa Inggris".',
    domains: [
      'Data Structures & Algorithms',
      'Artificial Intelligence / Computer Vision',
      'Cloud Computing & Web Services',
      'Mobile Programming Workshop',
    ],
    contributions: [
      'Graduated with Honors (Cum Laude) — GPA 3.68/4.00.',
      'Top 20 Finalist in Smart City Category at GEMASTIK XV (2022).',
      'Researched and trained Faster R-CNN deep learning models for interactive object detection and English learning.',
    ],
    stack: ['Computer Science', 'Python', 'Faster R-CNN', 'Data Structures', 'Database Systems', 'Agile'],
  },
]

const projects = [
  {
    id: 'wavrd',
    name: 'Wavrd',
    category: 'Native iOS',
    badge: 'Apple Developer Academy',
    image: null,
    featured: true,
    tagline: 'Presentation practice app reducing filler words via slide-by-slide chunking and speech analysis.',
    description:
      'A native application that helps presenters reduce filler words by chunking practice slide by slide, identifying high-filler areas, and driving focused practice on those segments. Designed to replace exhausting, untargeted rehearsal with precise evaluation.',
    role: 'iOS Developer / Learner (Apple Developer Academy)',
    stack: [
      'SwiftUI',
      'SwiftData',
      'WhisperKit',
      'Silero VAD',
      'CoreML',
      'Natural Language',
      'AVFoundation',
      'AppKit',
    ],
    links: {
      appStore: 'https://apps.apple.com/id/app/wavrd/id6780381699?mt=12Wavrd',
    },
    caseStudy: {
      context:
        'Nearly 45% of brilliant developers lose their ideas to filler words caused by cognitive overload. Traditional rehearsal forcing full-run repetitions causes fatigue without showing speakers exactly where speech breakdowns occur.',
      technicalApproach:
        'Engineered with SwiftUI and AppKit utilizing on-device audio transcription and voice activity detection. Incorporates WhisperKit and Silero VAD running locally via CoreML to detect speech boundaries and identify filler words per slide.',
      decisions: [
        'Implemented Slide-by-Slide Analysis: Automatically segments presentation based on slides for structured, actionable feedback.',
        'Integrated Filler Word Detection with WhisperKit + Silero VAD to detect pauses and filler vocabulary locally without network latency.',
        'Built Targeted Practice loops: allows users to practice only slides needing improvement to build speaking confidence efficiently.',
      ],
      outcomes: [
        'Successfully deployed to Apple TestFlight with active multi-slide practice sessions.',
        'Presented and evaluated within Apple Developer Academy challenge sprints.',
      ],
    },
  },
  {
    id: 'simple-plan',
    name: 'Simple Plan',
    category: 'Native iOS',
    badge: 'Apple Developer Academy',
    image: null,
    featured: true,
    tagline: 'Jet lag & travel companion delivering science-backed circadian instructions across time zones.',
    description:
      'An iOS & watchOS application that helps travelers stay functional across time zones, delivering simple instructions throughout their preparation and entire journey, based on their individual circadian state.',
    role: 'iOS Developer / Learner (Apple Developer Academy)',
    stack: [
      'SwiftUI',
      'SwiftData',
      'HealthKit',
      'WatchConnectivity',
      'UserNotifications',
    ],
    links: {},
    caseStudy: {
      context:
        'Every year, millions of travelers cross time zones and arrive impaired by jet lag—a biological mismatch between internal circadian rhythm and destination local time. Conventional apps only offer generic alarms without personalization.',
      technicalApproach:
        'Combines flight schedule data with user sleep habits retrieved via HealthKit to generate dynamic, chronobiology-based adaptation intervals (light exposure, hydration, caffeine cutoffs, and sleep shifts).',
      decisions: [
        'Built Personalized Travel Plan Generator: Inputs flight details and sleep history to generate a timed step-by-step circadian adaptation schedule.',
        'Synchronized reminders between iPhone and Apple Watch via WatchConnectivity for timely in-flight and transit prompts.',
        'Persisted personalized travel timelines using SwiftData for offline access during international flights.',
      ],
      outcomes: [
        'Delivers structured pre-flight and in-transit guidance tuned to user circadian rhythms.',
        'Incorporated Apple Human Interface Guidelines for glanceable watchOS and iOS notifications.',
      ],
    },
  },
  {
    id: 'gafr',
    name: 'GAFR',
    category: 'Native iOS',
    badge: 'Apple Developer Academy',
    image: null,
    featured: true,
    tagline: 'Spatial lighting visualization and real-scale floor plan mapping for film directors.',
    description:
      'An iOS application that helps intermediate film directors visualize lighting ideas and spatial camera setups before directing the crew. "See the light before you move a fixture."',
    role: 'iOS Developer / Learner (Apple Developer Academy)',
    stack: [
      'ARKit',
      'Vision',
      'MetalKit',
      'AVFoundation',
      'CoreML',
      'Simd',
      'Core Graphics',
      'Apple Measure',
    ],
    links: {},
    caseStudy: {
      context:
        'Intermediate film directors often struggle to visualize lighting setups during pre-production, frequently relying on expensive physical trial-and-error by moving heavy equipment around the set.',
      technicalApproach:
        'Combines ARKit spatial mapping and camera tracking with custom MetalKit shaders and CoreML vision models to simulate lighting sources directly on captured set frames.',
      decisions: [
        'Lighting Simulation: Simulates alterations in light direction, intensity, and color temperature on photos so filmmakers preview setups without physically moving fixtures.',
        'Real Floor Plan Map: Generates a real-scale floor plan using ARKit and Simd geometry to map spatial positions of camera, subject, and lights.',
        'Integrated Apple Measure APIs and Vision segmentation to calculate accurate distances on set.',
      ],
      outcomes: [
        'Provides spatial reference blueprints for cinematography teams to execute lighting plans rapidly.',
      ],
    },
  },
  {
    id: 'unsent',
    name: 'Unsent',
    category: 'Native iOS',
    badge: 'Apple Developer Academy',
    image: null,
    featured: false,
    tagline: 'Tactile digital journaling for mental overload with flexible canvas and emotion-driven prompts.',
    description:
      'An app that helps people experiencing mental overload build a sustainable journaling habit, with a free, letter-style canvas to express thoughts through handwriting, typing, photos, or voice notes, supported by guided prompts and emotion stamps.',
    role: 'iOS Developer / Learner (Apple Developer Academy)',
    stack: [
      'SwiftUI',
      'PencilKit',
      'AVFoundation',
      'UserNotifications',
      'SwiftData',
      'UIKit',
    ],
    links: {},
    caseStudy: {
      context:
        'Many people know journaling relieves stress, yet only attempt it when already overwhelmed, making it difficult to form a consistent habit. Blank text boxes induce writer\'s block during cognitive fatigue.',
      technicalApproach:
        'Engineered an expressive drawing and writing canvas using PencilKit and SwiftUI. Integrated audio recording with AVFoundation and designed an emotional visual check-in system that adapts prompt complexity based on user state.',
      decisions: [
        'Flexible Writing Space: Built a tactile free-form digital canvas adapting to handwriting (Apple Pencil), typing, photo collages, and voice notes.',
        'Adaptive Prompts: Developed dynamic guided questions that gently nudge users past writer\'s block even on ordinary days.',
        'Emotion Labeling: Interactive visual check-in validating feelings and triggering personalized prompts.',
      ],
      outcomes: [
        'Created a gentle, non-judgmental journaling experience tuned for emotional regulation and cognitive offloading.',
      ],
    },
  },
  {
    id: 'reservation-quest-customer',
    name: 'Reservation Quest',
    category: 'Cross-Platform Mobile',
    badge: 'Exacode Systems',
    image: null,
    featured: true,
    tagline: 'Consumer booking platform with real-time availability, instant confirmations, and live chat.',
    description:
      'A cross-platform mobile application for discovering and booking restaurants, wellness spas, and entertainment venues. Features real-time slot availability, instant confirmations, reminders, and integrated real-time customer chat with voice notes.',
    role: 'Flutter Developer at Exacode Systems',
    stack: [
      'Flutter',
      'Dart',
      'REST APIs',
      'Real-Time Chat',
      'Voice Notes',
      'Push Notifications',
      'App Store',
      'Google Play',
    ],
    links: {
      playStore:
        'https://play.google.com/store/apps/details?id=com.exacode.reservationquest.customer&hl=id',
      appStore:
        'https://apps.apple.com/id/app/reservation-quest/id6698858751',
    },
    caseStudy: {
      context:
        'Customers needed a single intuitive app to search venues, check live table or appointment slots, complete instant reservations, and communicate directly with venue hosts.',
      technicalApproach:
        'Developed in Flutter with robust state management and asynchronous API synchronization. Implemented custom real-time chat with audio voice notes and push notification integration.',
      decisions: [
        'Integrated real-time chat supporting voice notes to facilitate quick clarifications between customers and hospitality staff.',
        'Structured modular UI widgets ensuring pixel-perfect layout parity across iOS and Android.',
        'Managed production store release lifecycle on Apple App Store and Google Play Store.',
      ],
      outcomes: [
        'Shipped to production on both primary mobile app stores with stable customer adoption.',
      ],
    },
  },
  {
    id: 'reservation-quest-business',
    name: 'Reservation Quest — Business App',
    category: 'Cross-Platform Mobile',
    badge: 'Exacode Systems',
    image: null,
    featured: false,
    tagline: 'Merchant management dashboard for live table schedules, booking confirmations, and capacity.',
    description:
      'A companion business management application enabling venue operators to control reservation queues, view seating schedules, confirm bookings, and manage customer arrivals in real time.',
    role: 'Flutter Developer at Exacode Systems',
    stack: ['Flutter', 'Dart', 'State Management', 'REST APIs', 'Real-Time Sync'],
    links: {
      playStore:
        'https://play.google.com/store/apps/details?id=com.exacode.reservationquest&hl=id',
      appStore:
        'https://apps.apple.com/id/app/reservation-quest-business-app/id6479916450',
    },
    caseStudy: {
      context:
        'Merchant staff require high-velocity mobile workflows to verify incoming bookings, adjust capacity on the fly, and prevent double bookings during peak operational hours.',
      technicalApproach:
        'Engineered tablet and phone layouts in Flutter with dense information hierarchy, optimistic state updates, and real-time status toggling.',
      decisions: [
        'Engineered responsive schedule grids for rapid status updates by front-of-house staff.',
        'Synchronized merchant calendar states with the customer-facing booking engine.',
      ],
      outcomes: [
        'Live in production on Apple App Store and Google Play Store.',
      ],
    },
  },
  {
    id: 'ikigai-fitness',
    name: 'Ikigai Fitness',
    category: 'Cross-Platform Mobile',
    badge: 'Exacode Systems',
    image: null,
    featured: false,
    tagline: 'Member mobile companion for personalized workout routines, trainer schedules, and class booking.',
    description:
      'A mobile app integrated with Ikigai Fitness Gym, providing members with seamless access to personalized workout plans, class schedules, and progress tracking.',
    role: 'Software Engineer at Exacode Systems',
    stack: ['Flutter', 'Dart', 'Gym Management API', 'State Management'],
    links: {
      playStore:
        'https://play.google.com/store/apps/details?id=com.exacode.ikigai&hl=id',
      appStore:
        'https://apps.apple.com/id/app/ikigai-fitness/id6473164093',
    },
    caseStudy: {
      context:
        'Gym members required direct mobile access to daily class schedules, personal trainer bookings, and fitness progress tracking.',
      technicalApproach:
        'Built with Flutter connecting to gym backend services for member authorization, booking synchronization, and workout routine tracking.',
      decisions: [
        'Implemented clean calendar reservation flows for high-demand workout classes.',
        'Cached member data locally for reliable offline review of workout routines.',
      ],
      outcomes: [
        'Deployed to production on both Apple App Store and Google Play Store.',
      ],
    },
  },
  {
    id: 'nita',
    name: 'NITA',
    category: 'Cross-Platform Mobile',
    badge: 'PT Nusantara Infrastructure',
    image: null,
    featured: false,
    tagline: 'Toll road commuter service application with NFC e-toll card integration and optimized loading.',
    description:
      'A toll road service application for PT MMN & JTSE expressway users in Makassar. Features toll tariff checks, live route traffic conditions, customer support, and NFC card interaction.',
    role: 'Flutter Developer Intern at PT Nusantara Infrastructure',
    stack: ['Flutter', 'Dart', 'NFC Integration', 'REST APIs', 'Transportation Services'],
    links: {
      playStore:
        'https://play.google.com/store/apps/details?id=com.nusantarainfrastructure.nuframobile&hl=id',
      appStore:
        'https://apps.apple.com/id/app/nita-id/id1602612449',
    },
    caseStudy: {
      context:
        'Expressway commuters needed an authoritative mobile application to inspect toll tariffs, view traffic updates, and interact with contactless e-toll cards directly from their phone.',
      technicalApproach:
        'Optimized Flutter application architecture by refactoring inefficient loading flows for higher responsiveness. Integrated native NFC capabilities via Flutter channels for e-toll card balance and interaction.',
      decisions: [
        'Integrated NFC support for e-toll cards in Flutter, connecting native mobile hardware.',
        'Refactored data loading flows to improve responsiveness on mobile cellular networks.',
      ],
      outcomes: [
        'Successfully optimized user experience and released to Google Play and App Store for expressway commuters.',
      ],
    },
  },
  {
    id: 'weather-app',
    name: 'iOS Weather App',
    category: 'Native iOS',
    badge: 'Open Source',
    image: null,
    featured: false,
    tagline: 'Native iOS weather forecaster with 24-hour predictions and Core Location integration.',
    description:
      'A native iOS application providing 24-hour weather updates using the Open-Meteo API. Leverages Core Location for latitude, longitude, and reverse geocoding to retrieve the user\'s location name, enhanced with rich animations and clean SwiftUI views.',
    role: 'Personal Project',
    stack: ['Swift', 'SwiftUI', 'Core Location', 'Open-Meteo API'],
    links: {
      sourceCode: 'https://github.com/Habil-0105/weather-app-ios',
    },
    caseStudy: {
      context:
        'Building a focused native iOS demonstration of location-aware data fetching, modern Swift concurrency, and reactive UI architecture.',
      technicalApproach:
        'Uses Core Location to determine device position and geocode place names. Asynchronously queries Open-Meteo API and decodes hourly forecasts into typed Swift models.',
      decisions: [
        'Utilized SwiftUI declarations and reactive property wrappers (@State, @StateObject).',
        'Implemented clean error handling for location authorization denials and network drops.',
      ],
      outcomes: [
        'Open-source repository demonstrating native iOS patterns and clean code structure.',
      ],
    },
  },
  {
    id: 'chess',
    name: 'Interactive Chess',
    category: 'Open Source',
    badge: 'Open Source',
    image: null,
    featured: false,
    tagline: 'Flutter-powered chess game with interactive piece movement and game rules.',
    description:
      'A personal project implementing a chess board with interactive gameplay, move validation, and clean board state representation.',
    role: 'Personal Project',
    stack: ['Flutter', 'Dart', 'Game Architecture'],
    links: {
      sourceCode: 'https://github.com/Habil-0105/catur',
    },
    caseStudy: {
      context:
        'Exploring 2D grid rendering and deterministic board game state in Flutter.',
      technicalApproach:
        'Modelled piece types, coordinate positions, and move validation logic using object-oriented Dart principles.',
      decisions: [
        'Clean separation between board state logic and UI rendering.',
      ],
      outcomes: [
        'Open-source repository available on GitHub.',
      ],
    },
  },
  {
    id: 'tic-tac-toe',
    name: 'Tic Tac Toe with Minimax AI',
    category: 'Open Source',
    badge: 'Open Source',
    image: null,
    featured: false,
    tagline: 'Classic game engine featuring unbeatable AI driven by the Minimax algorithm.',
    description:
      'A classic two-player Tic-Tac-Toe game where players take turns marking a 3x3 grid. Features a single-player mode challenging an AI powered by the recursive Minimax algorithm, as well as a local two-player mode.',
    role: 'Personal Project',
    stack: ['Flutter', 'Dart', 'Minimax Algorithm'],
    links: {
      sourceCode: 'https://github.com/Habil-0105/tictacitoe',
    },
    caseStudy: {
      context:
        'Implementing decision-tree search algorithms within an interactive mobile application.',
      technicalApproach:
        'Constructed recursive Minimax game-tree search to evaluate optimal moves across terminal states.',
      decisions: [
        'Encapsulated algorithm logic cleanly away from Flutter UI components.',
      ],
      outcomes: [
        'Open-source implementation on GitHub.',
      ],
    },
  },
]

const capabilities = [
  {
    title: 'Native Apple & iOS Ecosystem',
    description:
      'Building responsive, intelligent Apple platform experiences with modern Swift conventions, declarative UI, and machine learning.',
    skills: [
      { name: 'SwiftUI & UIKit & AppKit', note: 'Multi-platform declarative & imperative UI' },
      { name: 'CoreML, Vision & WhisperKit', note: 'On-device machine learning & speech' },
      { name: 'ARKit, MetalKit & Simd', note: 'Spatial mapping & custom graphics' },
      { name: 'SwiftData & HealthKit', note: 'Modern persistence & health sensors' },
      { name: 'WatchConnectivity & AVFoundation', note: 'Wearable sync & media pipelines' },
      { name: 'PencilKit & UserNotifications', note: 'Apple Pencil canvas & timed alerts' },
    ],
  },
  {
    title: 'Cross-Platform Mobile Engineering',
    description:
      'Engineering production Flutter applications with smooth 60fps animations, structured state management, native method channels, and multi-store releases.',
    skills: [
      { name: 'Flutter & Dart', note: 'Production cross-platform architecture' },
      { name: 'Kotlin Method Channels', note: 'Bridging native Android & computer vision' },
      { name: 'NFC Integration', note: 'Contactless card hardware interactions' },
      { name: 'Real-Time Chat & Audio', note: 'Voice notes, streaming, and WebSockets' },
      { name: 'App Store & Google Play', note: 'Full release management & deployment' },
    ],
  },
  {
    title: 'Full-stack & Backend Systems',
    description:
      'Designing and maintaining robust server architectures, database structures, and RESTful APIs for web and mobile clients.',
    skills: [
      { name: 'Laravel (PHP)', note: 'MVC architecture & API services' },
      { name: 'Node.js & Express', note: 'Asynchronous services & automation bots' },
      { name: 'Go', note: 'High-performance scalable APIs' },
      { name: 'Java', note: 'Backend logic & live-streaming services' },
      { name: 'SQL (PostgreSQL / MySQL)', note: 'Relational data modeling & optimization' },
      { name: 'Python', note: 'Computer vision & AI model training' },
    ],
  },
  {
    title: 'Engineering Practices & Delivery',
    description:
      'Collaborative engineering discipline from challenge-based research to automated builds and product refinement.',
    skills: [
      { name: 'Challenge-Based Learning (CBL)', note: 'Product thinking & user research' },
      { name: 'Git & GitHub', note: 'Version control & code reviews' },
      { name: 'CI / CD & Release Pipelines', note: 'Automated test & store builds' },
      { name: 'Clean Architecture & MVVM', note: 'Separation of concerns & modularity' },
      { name: 'Agile Software Development', note: 'Iterative sprint delivery & collaboration' },
    ],
  },
]

const honors = [
  {
    title: 'Top 20 Finalist — Smart City Category',
    organization: 'GEMASTIK XV (Pagelaran Mahasiswa Nasional Bidang TIK)',
    year: '2022',
    description: 'National ICT student competition in Indonesia recognizing innovative smart city technological solutions.',
  },
  {
    title: 'Graduated with Honors (Cum Laude)',
    organization: 'Politeknik Elektronika Negeri Surabaya (PENS)',
    year: '2024',
    description: 'Achieved 3.68 / 4.00 cumulative GPA in Informatics Engineering.',
  },
  {
    title: 'Computer Vision Undergraduate Thesis',
    organization: 'PENS',
    year: '2024',
    description: 'Object Detection based on Faster R-CNN as an Interactive English Language Learning Medium.',
  },
]

const contact = {
  email: 'habil0105@gmail.com',
  alternateEmail: 'habil0105@mail.com',
  phone: '+6282268159542',
  location: 'Batam, Indonesia',
  linkedin: 'https://linkedin.com/in/habil0105/',
  github: 'https://github.com/Habil-0105',
  resume:
    'https://drive.google.com/file/d/17w0sA_tOR9FLFRhXVEObmX6KNKbGeQKI/view?usp=sharing',
}

// Backward compatibility exports
const professionalProjects = projects.filter(
  (p) => p.badge !== 'Open Source'
)
const personalProjects = projects.filter((p) => p.badge === 'Open Source')
const skills = [
  'Swift',
  'SwiftUI',
  'CoreML',
  'ARKit',
  'Flutter',
  'Dart',
  'Kotlin',
  'Laravel',
  'Node.js',
  'Go',
  'Java',
  'Python',
  'PostgreSQL',
  'MySQL',
  'Git',
  'CI/CD',
  'MVVM',
  'HealthKit',
]

export {
  header,
  about,
  experience,
  projects,
  capabilities,
  honors,
  contact,
  professionalProjects,
  personalProjects,
  skills,
}
