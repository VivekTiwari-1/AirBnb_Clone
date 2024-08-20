
# AirBnb Clone Project

## Description
This project is a clone of AirBnb, featuring core functionalities that allow users to sign up, sign in, list properties, and manage bookings. Users can set detailed property information such as prices, location, and capacity. The application supports searching and booking properties across various locations and countries, managing favorite properties, and more.

## Features
- **User Authentication:** Sign up and sign in functionalities.
- **Property Listing:** Users can list new properties with details like price, location, rooms, and guest capacity.
- **Booking System:** Book properties using a calendar interface to select dates.
- **Favorites Management:** Users can maintain a list of favorite properties.
- **Search and Filter:** Search properties by location and filter based on different criteria.

## Technology Stack
- **Frontend:** NextJs, TailwindCSS, React
- **Backend:** MongoDB, NodeJS, ExpressJS, Prisma, Axios
- **State Management:** Zustand
- **Image Upload:** Cloudinary
- **Map:** Leaflet

## Project Structure
 ```
 airbnb-clone/
│
├── pages/                  # Next.js pages directory
│   ├── _app.js             # Main app configuration
│   ├── index.js            # Home page
│   ├── signin.js           # Sign-in page
│   ├── signup.js           # Sign-up page
│   └── ...
│
├── components/             # React components
│   ├── inputs/             # Input components like the one provided
│   │   └── Input.tsx
│   ├── Header.js           # Site header component
│   ├── Footer.js           # Site footer component
│   └── ...
│
├── public/                 # Static files like images and fonts
│
├── styles/                 # CSS and Tailwind configuration files
│   └── globals.css
│
├── lib/                    # Library code for backend processing
│   ├── prisma.js           # Prisma client setup
│   ├── auth.js             # Authentication helpers
│   └── ...
│
├── prisma/                 # Prisma files
│   └── schema.prisma       # Prisma schema file
│
├── utils/                  # Utility functions
│
├── node_modules/           # npm packages
│
└── package.json            # npm package manager file
```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or improvements.