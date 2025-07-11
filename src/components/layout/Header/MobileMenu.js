import { useRouter } from 'next/navigation';
import NavItems from './navigation/NavItems';
import MyTravelsButton from './buttons/MyTravelsButton';
import TelBtn from './buttons/TelButton';
import ProfileButton from './AuthButtons/ProfileButton';
import LoginButton from './AuthButtons/LoginButton';
import SearchButton from './buttons/SearchButton';

const MobileMenu = ({ isOpen, isLoggedIn, user, onClose }) => {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg fixed inset-x-0 top-16 bottom-0 overflow-y-auto">
      <div className="container mx-auto px-4 py-3 h-full flex flex-col">
        <div className="overflow-y-auto flex-grow">
          <SearchButton />
          <NavItems mobileMode />
        </div>
        <div className="mt-auto pt-4 border-t border-gray-100 pb-6">
          {isLoggedIn ? (
            <>
              <MyTravelsButton className="w-full justify-center mb-3 !py-2" />
              <ProfileButton
                className="w-full justify-center py-5 text-base"
                user={user}
                isGuest={user?.isGuest}
                onClick={() => {
                  router.push('/profile');
                  onClose();
                }}
              />
              {user?.isGuest && (
                <LoginButton
                  className="w-full justify-center py-3 text-base bg-green-600 text-white mt-3"
                  onClick={() => {
                    router.push('/phone');
                    onClose();
                  }}
                  text="ورود / ثبت نام"
                />
              )}
            </>
          ) : (
            <>
              <TelBtn className="w-full justify-center mb-3 py-3 text-base" />
              <LoginButton
                className="w-full justify-center py-3 text-base"
                onClick={() => {
                  router.push('/phone');
                  onClose();
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
