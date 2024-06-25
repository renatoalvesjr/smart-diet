import React from "react";
import { GooglePlayButton } from "react-mobile-app-button";
import './PlayStoreButton.css'
  

export default function PlayStore() {
    const APKUrl = "https://play.google.com/store/apps/details?id=host";

  return (
        <div>
        <GooglePlayButton
            url={APKUrl}
            theme={"light"}
            className={"PlayStoreButton"}
        />
        </div>
  );
}
