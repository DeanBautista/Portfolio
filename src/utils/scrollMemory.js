// src/utils/scrollMemory.js
const KEY = "home-scroll-y";

export function saveHomeScroll(y) {
  sessionStorage.setItem(KEY, String(y));
}

export function getHomeScroll() {
  const v = sessionStorage.getItem(KEY);
  return v ? parseInt(v, 10) : 0;
}