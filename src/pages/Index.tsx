import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import BottomNav from "@/components/BottomNav";
import HomeScreen from "@/components/screens/HomeScreen";
import TemplatesScreen from "@/components/screens/TemplatesScreen";
import ProfileScreen from "@/components/screens/ProfileScreen";
import ContactScreen from "@/components/screens/ContactScreen";
import MoreScreen from "@/components/screens/MoreScreen";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    // Check if splash was already shown in this session
    const splashShown = sessionStorage.getItem("splashShown");
    if (splashShown) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem("splashShown", "true");
  };

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen onNavigate={setActiveTab} />;
      case "templates":
        return <TemplatesScreen />;
      case "profile":
        return <ProfileScreen />;
      case "contact":
        return <ContactScreen />;
      case "more":
        return <MoreScreen />;
      default:
        return <HomeScreen onNavigate={setActiveTab} />;
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="pb-20">
        {renderScreen()}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
