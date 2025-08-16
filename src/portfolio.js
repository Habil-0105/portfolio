const header = {
  homepage: 'https://Habil-0105.github.io/portfolio',
  title: 'My.',
}

const about = {
  name: 'Habil',
  role: 'Software Engineer',
  description: 'Software engineer with a Bachelor\'s degree in Informatics Engineering from the Electronic Engineering Polytechnic Institute of Surabaya.\n' +
    'Experienced in mobile and back-end development, specializing in Flutter, Kotlin, and Swift. Skilled in building scalable APIs using Go and\n' +
    'delivering maintainable solutions with agile methodologies. Passionate about innovation and impactful software projects.',
  resume: 'https://drive.google.com/file/d/1rsFzxefZNB4-fO7ygQC3mUptpPYAC26W/view?usp=share_link',
  social: {
    linkedin: 'https://linkedin.com/in/habil0105/',
    github: 'https://github.com/Habil-0105',
  },
}

const professionalProjects = [
  {
    name: 'Reservation Quest',
    description: 'An app for booking restaurants, spas, events, and etc. Features real-time availability, instant reservations, and reminders. Designed for seamless planning and convenience, showcasing intuitive design and efficient functionality.',
    stack: ['Flutter'],
    playStore: 'https://play.google.com/store/apps/details?id=com.exacode.reservationquest.customer&hl=id',
    appStore: 'https://apps.apple.com/id/app/reservation-quest/id6698858751',
  },
  {
    name: 'Reservation Quest - Business App',
    description: 'An app for managing business reservations, schedules, and customer bookings. Features real-time availability, instant confirmations, and automated reminders. Designed for seamless operations and convenience, showcasing intuitive design and efficient functionality.',
    stack: ['Flutter'],
    playStore: 'https://play.google.com/store/apps/details?id=com.exacode.reservationquest&hl=id',
    appStore: 'https://apps.apple.com/id/app/reservation-quest-business-app/id6479916450',
  },
  {
    name: 'Ikigai Fitness',
    description: 'A mobile app integrated with Ikigai Fitness Gym, providing members with seamless access to personalized workout plans, class schedules, and progress tracking. Designed for an intuitive user experience, the app enhances gym engagement and supports users in achieving their fitness goals efficiently.',
    stack: ['Flutter'],
    playStore: 'https://play.google.com/store/apps/details?id=com.exacode.ikigai&hl=id',
    appStore: 'https://apps.apple.com/id/app/ikigai-fitness/id6473164093',
  },
  {
    name: 'NITA',
    description: 'A toll road service application for PT MMN & JTSE users in Makassar',
    stack: ['Flutter'],
    playStore: 'https://play.google.com/store/apps/details?id=com.nusantarainfrastructure.nuframobile&hl=id',
    appStore: 'https://apps.apple.com/id/app/nita-id/id1602612449',
  },
]

const personalProjects = [
  {
    name: 'Weather App',
    description: 'This app provides the latest 24-hour weather updates using the Open-Meteo API. It leverages Core Location for latitude, longitude, and geocoding to retrieve the user\'s location name, enhanced with rich animations.',
    stack: ['Swift'],
    sourceCode: 'https://github.com/Habil-0105/weather-app-ios',
  },
  {
    name: 'Chess',
    description: 'A personal project implementing a chess game with interactive gameplay',
    stack: ['Flutter'],
    sourceCode: 'https://github.com/Habil-0105/catur',
  },
  {
    name: 'Tic Tac Toe',
    description: 'A classic two-player Tic-Tac-Toe game where players take turns marking a 3x3 grid. Play against another player or challenge an AI powered by the Minimax algorithm.',
    stack: ['Flutter'],
    sourceCode: 'https://github.com/Habil-0105/tictacitoe',
  },
]

const skills = [
  'Dart',
  'Flutter',
  'Java',
  'Kotlin',
  'Jetpack Compose',
  'Swift',
  'SwiftUI',
  'Go',
  'MySQL',
  'PostgreSQL',
  'Git',
  'CI/CD',
  'PHP',
  'Laravel',
  'Node.js',
  'React',
]

const contact = {
  email: 'habil0105@mail.com',
}

export { header, about, professionalProjects, personalProjects, skills, contact }
