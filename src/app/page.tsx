"use client";

import { useState } from "react";
import IntroScreen from "./IntroScreen";
import MenuPage from "./MenuPage";

export default function HomePage() {
  const [introDone, setIntroDone] = useState(false);

  const handleIntroFinish = () => {
    setIntroDone(true);
  };

  if (!introDone) {
    return <IntroScreen onFinish={handleIntroFinish} />;
  }

  return <MenuPage introDone={introDone} />;
}
