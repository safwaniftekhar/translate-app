import React, { useState } from "react";
import "./translate.css";
import MyButton from "./arrowButton";

const Translate: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>("");
  const [targetLanguage, setTargetLanguage] = useState<string>("fr");
  const [showTranslateButton, setShowTranslateButton] = useState<boolean>(false);
  const [translatedLanguage, setTranslatedLanguage] = useState<string>("en"); // Language for translated text

  const translateText = async () => {
    try {
      //   const response = await axios.post(
      //     `https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`,
      //     {
      //       q: text,
      //       target: targetLanguage,
      //     }
      //   );
      setTranslatedText(text);
    } catch (error) {
      console.error("Translation Error:", error);
    }
  };

  const handleReverse = () =>{
    setTargetLanguage(translatedLanguage);
    setTranslatedLanguage(targetLanguage);
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setShowTranslateButton(e.target.value !== "");
  };

  return (
    <div className="translate-container">
      {" "}
      <div className="translate-select">
        <h2 className="m-4 font-bold">Translate :</h2>
        <div className="flex justify-center items-center m-2">
          <select
            className="rounded-lg shadow-lg p-2 shadow-gray-500/50 border-solid"
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
          </select>
          <div className="m-4">
            <MyButton  handleReverse={handleReverse} />
          </div>
          {/* <span className='pl-2 pr-2'>To</span> */}
          <select
            value={translatedLanguage}
            className="rounded-lg shadow-lg p-2 shadow-gray-500/50 border-solid"
            onChange={(e) => setTranslatedLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <textarea
          className="m-4 p-4 shadow-lg shadow-gray-500/50 border-solid text-xl rounded-lg h-60"
          rows={2}
          value={text}
          placeholder="Enter text..."
          onChange={handleTextChange}
        />
        <textarea
          className="m-4 p-4 shadow-lg shadow-gray-500/50 text-xl rounded-lg h-60"
          rows={4}
          placeholder="Translation"
          value={translatedText}
          readOnly
        />
      </div>
      {showTranslateButton && (
        <div className="flex justify-center items-center">
          <button
            className="m-4 shadow-lg shadow-blue-500/50 translate-button"
            onClick={translateText}
          >
            Translate
          </button>
        </div>
      )}
    </div>
  );
};

export default Translate;
