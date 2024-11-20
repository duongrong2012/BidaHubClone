import User from '@/types/user';
import { AuthModalSingleton } from '@/components/AuthModal';

const useCheckAuth = (user: User | null) => {

  const checkLogin = () => {
    if (user) {
      return true; // Nếu user có giá trị, trả về true
    }

    AuthModalSingleton.open()
    return false;
  };

  return {
    checkLogin,
  };
};

export default useCheckAuth;
