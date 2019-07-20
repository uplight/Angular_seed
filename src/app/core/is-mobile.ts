import {InjectionToken} from '@angular/core';

export const IS_MOBILE = new InjectionToken('mobile');

export let is_mobile: boolean;

if (navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
) {
  is_mobile = true;
} else {
  is_mobile = false;
}
