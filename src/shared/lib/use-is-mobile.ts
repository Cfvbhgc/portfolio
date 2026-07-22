import { useEffect, useState } from "react";

// Телефоны/планшеты и любые touch-устройства: узкий экран ИЛИ грубый указатель.
// Совпадает с брейкпоинтом tablet (max-width: 1199px) из _mixins.scss.
const MOBILE_QUERY = "(max-width: 1199px), (pointer: coarse)";

// На таких устройствах WebGL-слой превью отключаем и показываем обычные
// DOM-картинки: мобильный WebGL часто создаётся, но ничего не рисует
// (лимиты GPU/памяти, потеря контекста) — и карточки остаются пустыми.
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mql.matches);

    update();
    mql.addEventListener("change", update);

    return () => {
      mql.removeEventListener("change", update);
    };
  }, []);

  return isMobile;
};
