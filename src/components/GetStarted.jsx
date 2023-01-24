import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => (
  // Outer Circle
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    {/* Inner Circle */}
    <div
      className={`${styles.flexCenter} bg-primary w-[100%] h-[100%] flex-col rounded-full`}
    >
      {/* Inner Circle Text */}
      <div className={`${styles.flexStart} flex-row `}>
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
          <span className='text-gradient'>Get</span>
        </p>
        <img
          src={arrowUp}
          className='w-[23px] h-[23px] object-contain'
          alt='arrow'
        />
      </div>

      {/* Next Col-Text */}
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
        <span className='text-gradient'>Started</span>
      </p>
    </div>
  </div>
);
export default GetStarted;
