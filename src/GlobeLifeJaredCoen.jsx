import React from 'react';

export default function BenefitPortalCard({
  agentName = "Chase Worcester",
  licenseNumber = "22221546",
  zoomMeetingUrl = "https://us02web.zoom.us/j/4808885757?pwd=bERNdmYrbzVRMkpIZENwbzB3VVZ3Zz09",
  browserAccessUrl = "https://us02web.zoom.us/wc/join/4808885757?pwd=bERNdmYrbzVRMkpIZENwbzB3VVZ3Zz09",
  appStoreUrl = "https://itunes.apple.com/us/app/id546505307",
  playStoreUrl = "https://play.google.com/store/apps/details?id=us.zoom.videomeetings",
  // Image paths
  globeIconSrc = "./images/Globe_Life_Icon_SMALL.png",
  zoomLogoSrc = "./images/ZoomLogo.png",
  appStoreSrc = "./images/AppStore.png",
  playStoreSrc = "./images/Google Play.png"
}) {
  return (
    /* Full Page / Section Container with Default White Background */
    <div className="w-full min-h-screen bg-white flex items-center justify-center p-4">

      {/* Card Wrapper */}
      <div className="w-full max-w-[360px] sm:max-w-[400px] bg-white px-6 py-8 sm:px-8 sm:py-10 flex flex-col items-center justify-center text-center font-sans">

        {/* 1. Header Globe Image */}
        <img
          src={globeIconSrc}
          alt="Globe Portal Icon"
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto mb-4"
        />

        {/* 2. Heading Titles */}
        <h1 className="text-base sm:text-lg font-bold tracking-wide text-[#1b5280] uppercase w-full text-center">
          Benefit Portal Access
        </h1>
        <p className="text-sm sm:text-base text-[#4a7298] font-light mt-0.5 mb-5 w-full text-center">
          Click ZOOM to enter
        </p>

        {/* Top Divider */}
        <div className="w-20 h-[1px] bg-gray-300 mx-auto mb-6" />

        {/* 3. Zoom Logo Image */}
        <a
          href={zoomMeetingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center items-center mb-6 transition-transform hover:scale-90 focus:outline-none"
          aria-label="Launch Zoom Meeting"
        >
          <img
            src={zoomLogoSrc}
            alt="Zoom"
          />
        </a>

        {/* 4. Browser Access Button */}
        <a
          href={browserAccessUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-green"
        >
          Zoom Browser Access
        </a>

        {/* 5. Mobile App Store Badges */}
        <div className="badge-container">
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
            <img src={appStoreSrc} alt="Download on the App Store" className="badge-img" />
          </a>
          <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
            <img src={playStoreSrc} alt="Get it on Google Play" className="badge-img" />
          </a>
        </div>

        {/* Bottom Divider */}
        <div className="w-20 h-[1px] bg-gray-300 mx-auto mb-5" />

        {/* 6. Agent Info */}
        <div className="text-[#1b5280] w-full text-center">
          <p className="font-extrabold text-base sm:text-lg">{agentName}</p>
          <p className="text-xs sm:text-sm font-light text-[#4a7298] mt-0.5">
            License #{licenseNumber}
          </p>
        </div>

      </div>
    </div>
  );
}