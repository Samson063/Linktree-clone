import './App.css';
import profileImage from './assets/profile__img.png';
import share from './assets/share_button.png';
import option from './assets/mobile_icon.png';
import github from './assets/github.png';
import I4G from './assets/I4G.png';
import zuri from './assets/Zuri-internship.png';
import footerText from './assets/Footer text.png';
import slack from './assets/slack.png';
import hover from './assets/hover.png';
import footer from './assets/footer.png';

function App() {
  const twitter = 'https://twitter.com/anth_samson?t=QFoD8vPm_V258m2tLeBT9A&s=09';
  const zuriBtn = 'https://training.zuri.team/';
  const zuriBooks = 'http://books.zuri.team/';
  const pitch = 'https://background.zuri.team/';
  const zuriDesign = 'https://books.zuri.team/design-rules';

  return (
    <>
      <header>
        <div className='profile'>
          <img src={profileImage} alt='profile' id='profile_img' />
          <img src={hover} alt='profile' id='profile_img' className='hover' />
          <a href={twitter} id='twitter'>
            Anthony Samson
          </a>
          <h1 className='hidden' id='slack'>
            Anthony Samson
          </h1>
        </div>
        <div className='share'>
          <img src={share} alt='share' className='share_icon' />
          <img src={option} alt='option' className='option_icon' />
        </div>
      </header>
      <main className='container'>
        <div className='buttons'>
          <a href={twitter} id='twitter'>
            Twitter Link
          </a>
          <a href={zuriBtn} id='btn__zuri'>
            Zuri Team
          </a>
          <a href={zuriBooks} id='books'>
            Zuri Books
          </a>
          <a href={zuriBooks} id='book__python'>
            Python Books
          </a>
          <a href={pitch} id='pitch'>
            Background Check for Coders
          </a>
          <a href={zuriDesign} id='book__design'>
            Design Books
          </a>
        </div>
        <div className='icons'>
          <img src={slack} alt='slack' />
          <img src={github} alt='github' />
        </div>
      </main>
      <footer>
        <img src={footer} alt='zuri logo' />

      </footer>

      <footer className='footer2'>
          <img src={zuri} alt='zuri-logo' />
          <img src={footerText} alt='footer-text' />
          <img src={I4G} alt='i4g' />
      </footer>
    </>
  );
}

export default App;