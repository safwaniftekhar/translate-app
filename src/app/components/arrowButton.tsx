import React from 'react';

interface Props {
  handleReverse: () => void;
}

const MyButton: React.FC<Props> = ({ handleReverse }) => {
  return (
    <button className="flex items-center justify-center p-2 hover:shadow-lg shadow-gray-500/50 bg-gray-300 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" onClick={handleReverse}>
      <svg
        version="1.1"
        id="ios7_x5F_arrows_1_"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 128 128"
        xmlSpace="preserve"
        className="w-6 h-6 m-1"
      >
        <style>{`.st0{display:none}.st1{display:inline}`}</style>
        <g id="_x33_4_1_">
          <path
            d="M33.8 53.3 30 49.5.1 79.7 30 109.9l3.8-3.8L10 82.3h63.2v-5.2H10l23.8-23.8zm94.1-5.1L97.8 18.1 94 21.9l23.8 23.8h-63v5.2h63L94.1 74.8l3.8 3.8L128 48.5v-.3h-.1z"
            id="icon_8_"
          />
        </g>
      </svg>
    </button>
  );
};

export default MyButton;
