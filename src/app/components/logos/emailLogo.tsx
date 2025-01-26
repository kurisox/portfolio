import React, { useState } from "react";

interface EmailLogoProps {
  email: string;
}

const EmailDisplay: React.FC<{ email: string; onClose: () => void }> = ({
  email,
  onClose,
}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="w-5/6 bg-white p-4 rounded flex justify-center md:w-2/3 dark:text-lightmodeFont2 ml-auto mr-auto 2xl:w-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <p>Meine Email-Adresse: {email}</p>
      </div>
    </div>
  );
};

export const EmailLogo = ({ email }: EmailLogoProps) => {
  const [showEmail, setShowEmail] = useState(false);

  const handleClick = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        width="3em"
        height="3em"
        className="fill-lightmodeFont1 dark:fill-darkmodeFont hover:scale-125 hover:fill-switchLightMode dark:hover:fill-switchDarkMode"
      >
        <path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 146.67-670v443.33h666.66V-670L480-454.67Zm0-66.66 330.67-212H150l330 212ZM146.67-670v-63.33V-226.67-670Z" />
      </svg>
      {showEmail && (
        <EmailDisplay email={email} onClose={() => setShowEmail(false)} />
      )}
    </div>
  );
};
