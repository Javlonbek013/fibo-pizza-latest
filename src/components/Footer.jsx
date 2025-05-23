import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  image,
  image2,
  image3,
  image4,
  image5,
  image6,
  group2,
  group3,
  group4,
  logo,
} from "../assets/data";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.5 },
  },
};

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.footer
      ref={ref}
      className="bg-gray-100 text-gray-800"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
        <motion.div
          className="space-y-8 lg:col-span-3"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <a href="#">
              <img src={logo} alt="logo" className="w-32 mx-auto md:mx-0" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-10 text-sm font-medium gap-2">
            <p className="hover:text-yellow-600 cursor-pointer transition">
              Калорийность и состав
            </p>
            <p className="hover:text-yellow-600 cursor-pointer transition">
              Правовая информация
            </p>
          </div>

          <div>
            <p className="font-bold text-sm mb-2">Мы в соцсетях</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 text-sm gap-y-2 sm:gap-y-3">
              <li>
                <a
                  href="https://www.youtube.com/@Javasuper245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-600 transition"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61576190410086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-600 transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Москва ул. Проспект"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-600 transition"
                >
                  Москва ул. Проспект
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/joktamov1313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-600 transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://vk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-600 transition"
                >
                  ВКонтакте
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Вернадского 86В"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-600 transition"
                >
                  Вернадского 86В
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex justify-between items-center border-t border-gray-300 pt-6">
            <p className="text-xs text-gray-500">YaBao Все права защищены © 2021</p>
            <ul className="flex space-x-3 items-center">
              {[group3, group4, group2].map((img, index) => (
                <li key={index}>
                  <a href="#">
                    <img
                      src={img}
                      alt="payment method"
                      className="w-12 hover:scale-110 transition"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div className="space-y-6 lg:col-span-2" variants={itemVariants}>
          <p className="font-bold text-sm">Остались вопросы? А мы всегда на связи:</p>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {[image, image2, image3, image4, image5, image6].map((img, i) => (
              <li
                key={i}
                className="border rounded-lg p-2 bg-white hover:shadow-lg transition"
              >
                <a href="#">
                  <img src={img} alt={`icon-${i}`} className="w-8 h-8 mx-auto" />
                </a>
              </li>
            ))}
            <li className="col-span-3 sm:col-span-2 md:col-span-3">
              <button className="w-full bg-yellow-400 text-black py-2 rounded shadow hover:bg-yellow-300 transition font-semibold">
                Написать нам
              </button>
            </li>
          </ul>

          <div className="space-y-2 text-center md:text-left">
            <a
              href="tel:+998991177697"
              className="text-yellow-500 text-lg font-bold block"
            >
              +998 99 117 76 97
            </a>
            <button className="bg-yellow-400 text-black px-5 py-2 rounded shadow hover:bg-yellow-300 transition font-semibold">
              Заказать звонок
            </button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
