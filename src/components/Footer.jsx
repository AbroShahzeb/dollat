import FacebookIcon from "../assets/facebook-icon.svg";
import InstagramIcon from "../assets/instagram-icon.svg";
import LinkedinIcon from "../assets/linkedin-icon.svg";
import TiktokIcon from "../assets/tiktok-icon.svg";
import TwitterIcon from "../assets/twitter-icon.svg";
import YoutubeIcon from "../assets/youtube-icon.svg";

function Footer() {
  return (
    <footer className='bg-gray-900 max-w-[90%] mx-auto py-20 px-12 rounded-3xl mt-8 lg:w-[75%]  mb-12'>
      <div className='flex flex-col md:flex-row items-start gap-10'>
        {/* Nas io Logo  */}
        <div className='flex flex-col items-start gap-6'>
          <div className='flex flex-col items-start gap-2 text-white text-sm font-medium'>
            <img
              src='https://d2oi1rqwb0pj00.cloudfront.net/nasIO/new_home/svg/navbar_logo.svg'
              alt='Nas Desktop Icon'
              className='h-15 w-15'
            />
            <p>Brings people together</p>
          </div>

          {/* App download images   */}
          <div className='flex gap-3 items-center flex-wrap'>
            <img
              src='https://d2oi1rqwb0pj00.cloudfront.net/nasIO/common/png/app-store-download-button.png'
              alt='App store icon'
              className='w-32'
            />
            <img
              src='https://d2oi1rqwb0pj00.cloudfront.net/nasIO/common/png/play-store-download-button.png'
              alt='Play Store icon'
              className='w-32'
            />
          </div>
        </div>

        {/* Nas io Links  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          {/* Features Links  */}
          <div className='flex flex-col items-start gap-3 text-gray-400 text-sm font-medium'>
            <h3 className='text-white uppercase'>Features</h3>
            <ul className='flex flex-col gap-5 items-start'>
              <li>WhatsApp Communities</li>
              <li>Event Hosting</li>
              <li>Paid Membership</li>
              <li>Newsletter</li>
              <li>Online Course</li>
              <li>Chat Integration</li>
              <li>Website Building</li>
              <li>Analytics</li>
            </ul>
          </div>

          {/* Use Cases Links  */}
          <div className='flex flex-col items-start gap-3 text-gray-400 text-sm font-medium'>
            <h3 className='text-white uppercase'>Use Cases</h3>
            <ul className='flex flex-col gap-5 items-start'>
              <li>For Developers</li>
              <li>For Educators</li>
              <li>For Content Creators</li>
              <li>For Finance</li>
              <li>For Networking</li>
            </ul>
          </div>

          {/* Company Links  */}
          <div className='flex flex-col items-start gap-3 text-gray-400 text-sm font-medium'>
            <h3 className='text-white uppercase'>Company</h3>
            <ul className='flex flex-col gap-5 items-start'>
              <li>About Us</li>
              <li>Blog</li>
              <li>Career</li>
              <li>Academy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom part  */}
      <div className='mt-16 flex justify-between items-center'>
        {/* Footer Socials  */}
        <div>
          <ul className='flex flex-col items-start gap-6 md:items-center md:flex-row'>
            <div className='flex gap-3'>
              <li>
                <img src={YoutubeIcon} alt='Youtube Icon' />
              </li>
              <li>
                <img src={InstagramIcon} alt='Instagram Icon' />
              </li>
              <li>
                <img src={TwitterIcon} alt='Twitter Icon' />
              </li>
              <li>
                <img src={TiktokIcon} alt='Tiktok Icon' />
              </li>
              <li>
                <img src={LinkedinIcon} alt='Linkedin Icon' />
              </li>
              <li>
                <img src={FacebookIcon} alt='Facebook Icon' />
              </li>
            </div>

            <ul className='flex text-xs text-gray-500 gap-3'>
              <li>Terms of service</li>
              <li>Privacy</li>
            </ul>
          </ul>
        </div>

        {/* Footer copyright  */}
        <div className='text-gray-500 text-xs'>
          Copyright &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
