import { useRef } from "react";
import { toBlob } from "html-to-image";



export default function App() {
  const imageRef = useRef(null);

  const handleShare = async () => {
    const newFile = await toBlob(imageRef.current);
    const data = {
      files: [
        new File([newFile], "nuzlocke.png", {
          type: newFile.type
        })
      ],
      title: "Nuzlocke",
      text: "Nuzlocke"
    };

    try {
      if (!navigator.canShare(data)) {
        console.error("Can't share");
      }
      await navigator.share(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="App">
      <h1>Dynamically generate and share images</h1>
      <button onClick={handleShare} type="button">
        Share
      </button>
      <span>
        Credit for image: https://codepen.io/alvaromontoro/pen/BaKQzgG
      </span>
      <div className="cartoon__container" ref={imageRef}>
        <input></input>
        <div className="cartoon hb">
          <div className="shadow"></div>
          <div className="minar-top minar-top-2"></div>
          <div className="minar-top"></div>
          <div className="minar ha"></div>
          <div className="tower tower-5 tower-6 tower-7"></div>

          <div className="house ha"></div>

          <div className="main-roof-behind"></div>
          <div className="main-roof ha"></div>
          <div className="main-top"></div>

          <div className="flag flag-4"></div>
          <div className="main-tower-roof"></div>
          <div className="main-tower"></div>
          <div className="main ha"></div>
          <div className="tower tower-3 tower-3a"></div>
          <div className="wall ha"></div>
          <div className="tower tower-1"></div>
          <div className="tower tower-2"></div>
          <div className="tower tower-3 tower-3b"></div>
          <div className="tower tower-4"></div>
          <div className="tower tower-5 tower-6"></div>
          <div className="tower tower-5"></div>
          <div className="brick"></div>

          <div className="room-1"></div>
          <div className="room-2"></div>
          <div className="room-3 ha"></div>
          <div className="window"></div>
          <div className="window-curved"></div>
          <div className="roof roof-1"></div>
          <div className="roof roof-2"></div>
          <div className="flag flag-1"></div>
          <div className="flag flag-2"></div>
          <div className="flag flag-3"></div>
          <div className="flag-pole-top"></div>
          <div className="flag-pole"></div>
          <div className="house-roof"></div>
          <div className="front-gate ha">
            <div className="gate"></div>
            <div className="balcony ha"></div>
            <div className="triangle ha"></div>
            <div className="front-poles"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
