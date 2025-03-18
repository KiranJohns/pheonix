"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div
      className="wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-6  flex justify-center align-middle"
      data-wow-delay=".2s"
    >
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.0925835509897!2d76.96431597101356!3d8.481368976664552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbe3fec7cefb%3A0x9ee93411f1679beb!2sPHOENIX%20ARTS!5e0!3m2!1sen!2sin!4v1738746585318!5m2!1sen!2sin" width="540" height="405"   loading="lazy" ></iframe>
    </div>
  );
};

export default NewsLatterBox;
