"use client";

import { Suspense } from "react";
import HomePageContent from "@/components/home/homePageContent";

const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
};

export default HomePage;