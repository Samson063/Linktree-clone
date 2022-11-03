import I4G from '../assets/I4G.png';
import zuri from '../assets/Zuri-internship.png';
import footerText from '../assets/Footer text.png';
import footer from '../assets/footer.png';

const Footer = () => {
  return (
<>
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
};

export default Footer;