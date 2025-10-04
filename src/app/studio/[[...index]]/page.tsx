"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config"; // src se bahar aana hoga

export default function StudioPage() {
  return <NextStudio config={config} />;
}
