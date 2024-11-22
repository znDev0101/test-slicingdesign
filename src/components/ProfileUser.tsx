import ProfileImgUser from "../../src/assets/Ellipse 2.png";

const ProfileUser = () => {
  return (
    <div>
      <img
        src={ProfileImgUser}
        alt='profile user'
        className='w-[150px] h-[150px]'
      />
    </div>
  );
};

export default ProfileUser;
