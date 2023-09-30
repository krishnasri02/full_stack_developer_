import './Components/App.css';
import './Components/Header.css';
import UseEffectAPI from './Components/Index';
import Header from './Components/Header';
import Search from './Components/Search';

const backgroundImageUrl = 'https://media.istockphoto.com/id/841403680/photo/star-sky-at-night-space-background.webp?b=1&s=170667a&w=0&k=20&c=6m5WFO7bOOMtVWguJq_tCkHxqeqkQmEbSFx32UTBEro=';

function App() {
  const appStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
  };

  const githubLink = 'https://github.com/krishnasri02';

  const centeredWhiteText = {
    textAlign: 'center',
    color: 'white',
  };

  // Define a CSS style for the GitHub link color
  const githubLinkStyle = {
    color: 'lightblue', // Change the color to your desired color
    textDecoration: 'none', // Remove underlines (optional)
  };

  return (
    <div style={appStyle} className="app-container">
      <Header />
      <Search />
      <UseEffectAPI />

      <div className="contact-us" style={centeredWhiteText}>
        <h2>Contact Us</h2>
        <a href={githubLink} style={githubLinkStyle} target="_blank" rel="noopener noreferrer">
          Contact Developer on GitHub
        </a>
        <p>Copyright (c) 2023 All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
