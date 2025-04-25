# NetflixGPT 🎬

A modern movie information application built with React, Redux, and TailwindCSS. Browse trending movies, search for your favorites, and maintain a personal watchlist - all in one sleek interface.

## 🔗 Live Demo

[Visit VetflixGPT](https://netflixgpt-1e1f7.firebaseapp.com/)

## ✨ Features

- **Movie Discovery**: Browse trending and popular movies
- **Search Functionality**: Find movies using TMDB API
- **Detailed Information**: View movie details, cast, ratings, and more
- **Watchlist Management**: Save movies to watch later (stored in localStorage)
- **Responsive Design**: Optimized for both desktop and mobile devices

## 🛠️ Technologies

- **React**: Frontend library for building the user interface
- **Redux**: State management across the application
- **Redux Toolkit**: Simplified Redux development
- **TailwindCSS**: Utility-first CSS framework for styling
- **TMDB API**: Movie database API for fetching movie information
- **localStorage**: Browser storage for saving watchlist data

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- npm (v6.0.0 or later) or [Yarn](https://yarnpkg.com/) (v1.22.0 or later)

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Deepak189251/netflix-gpt
   cd cinetracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**
   
   Create a `.env` file in the root directory with your TMDB API key:
   ```
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```
   
   > 📝 Note: You'll need to [register for a TMDB API key](https://www.themoviedb.org/documentation/api)

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   
   The application should be running at `http://localhost:3000`

## 🔍 Key Features Details

### Movie Search

Users can search for movies using the TMDB search API. The search functionality includes:
- Instant search results
- Filtering capabilities
- Pagination for extensive results

### Watchlist Management

The application allows users to:
- Add movies to their watchlist
- Remove movies from the watchlist  
- View all saved movies in one place
- Data is persisted using localStorage so information remains after page refresh

## 🧪 Running Tests

```bash
npm test
# or
yarn test
```

## 🔧 Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [TMDB API](https://www.themoviedb.org/documentation/api) for providing movie data
- [React](https://reactjs.org/) documentation
- [Redux Toolkit](https://redux-toolkit.js.org/) documentation
- [TailwindCSS](https://tailwindcss.com/) documentation

---

Made with 💙 by [Deepak Behera]