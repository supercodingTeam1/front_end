
import { atom } from 'recoil';
import { recoilPersist  } from 'recoil-persist';

interface Auth {
  role: string;
  islogin: boolean;
}

const { persistAtom } = recoilPersist();

export const  AuthAtom = atom<Auth>({
  key: 'userRoleAtom',
  default: {
    role : 'guest',
    islogin : false,
  },
  effects_UNSTABLE : [persistAtom]
})
