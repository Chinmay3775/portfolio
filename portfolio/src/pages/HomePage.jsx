import React from 'react';
import ServicesPanel from '../components/ServicesPanel';
import ProfileCenter from '../components/profileCenter';
import SkillsPanel from '../components/SkillsPanel';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl w-full">
        
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          <ProfileCenter />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ServicesPanel />
            <SkillsPanel />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Services Panel - Left Side */}
          <div className="lg:col-span-3">
            <ServicesPanel />
          </div>

          {/* Profile Center */}
          <div className="lg:col-span-6">
            <ProfileCenter />
          </div>

          {/* Skills Panel - Right Side */}
          <div className="lg:col-span-3">
            <SkillsPanel />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;