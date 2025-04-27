import React from "react";

const Contacts = () => {
  return (
    <div >
      <div className="container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27366.729854713263!2d69.57993506226464!3d40.859500250382105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae2dd0a7182d4b%3A0x4cbfcb1de9db07fc!2siTech!5e0!3m2!1suz!2s!4v1745681284475!5m2!1suz!2s" width="100%" height="300px" className="rounded-xl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br />
        <h1 className="text-yellow-400 font-[Montserrat] font-semibold text-[40px] leading-[100%]">998 93-917-07-31 <br /> <span className="text-black">ул. Проспект Вернадского 86В</span></h1>
        <br />
        <p className="font-[Montserrat] font-semibold text-[20px] leading-[100%]">Доставка и самовывоз 10:00 — 23:00</p>
      </div>
    </div>
  );
};

export default Contacts;
