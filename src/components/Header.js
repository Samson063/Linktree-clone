import profilePicture from '../assets/profile__img.png';
import share from '../assets/share_button.png';
import hover from '../assets/hover.png';
import option from '../assets/mobile_icon.png';

const Header = () => {
  const twitter = 'https://twitter.com/anth_samson?t=QFoD8vPm_V258m2tLeBT9A&s=09';

  return (
    <header>
      <div className='profile'>
        <img src={profilePicture} alt='profile' id='profile_img' />
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
  );
};

export default Header;