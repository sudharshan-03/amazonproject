import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, min = 84000) => {
   const expires = new Date(Date.now() + min * 1000)

  cookies.set(name, value, {
    path: '/',
    expires: expires,
    secure: false,
    sameSite: 'strict',
  });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  cookies.remove(name, { path: '/' });
};
