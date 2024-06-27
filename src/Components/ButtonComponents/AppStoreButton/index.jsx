import React from "react";
import { AppStoreButton } from "react-mobile-app-button";
import './AppStoreButton.css'
  

export default function Apple() {
    const APKUrl = "https://play.google.com/store/apps/details?id=host";

  return (
        <div>
        <AppStoreButton
            url={APKUrl}
            theme={"light"}
            className={"AppStoreButton"}
        />
        </div>
  );
}
