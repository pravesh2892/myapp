import React from 'react';
import './appRating.css';
import Button from '../common/Button/Button';


const getIosPrefix = () => {
  return (
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
      className="app-rating-icon"
    />
  );
};

const getAndroidPrifix = () => {
  return (
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
      className="app-rating-icon"
    />
  );
};
const AppRating = () => {
  return (
    <div className="max-width flex app-rating">
      <div className="app-rating-block flex flex-col">
        <div className="flex ">
          <div className="appp-rating-value flex flex-col">
            4.8
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              className="app-rating-stars"
            />
          </div>
          <div className="app-rating-platform">
            app <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            buttonText="Download the app"
            customClass="app-rating-button"
            prefix={getIosPrefix()}
          />
        </div>
      </div>

      <div className="app-rating-block flex flex-col">
        <div className="flex ">
          <div className="appp-rating-value flex flex-col">
            4.7
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
              className="app-rating-stars"
            />
          </div>
          <div className="app-rating-platform">
            play <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            buttonText="Download the app"
            customClass="app-rating-button"
            prefix={getAndroidPrifix()}
          />
        </div>
      </div>
      <div className="only-mobile">
        <Button buttonText="Download the app" />
      </div>
      <div className='photo-section-bottom'>
      <div className="photo-section-description app-description">
        "this is a great app loaded with functionality and simplicity yet
        elegant and intuitive. a must have for the plastic money users. keeps me
        in financial discipline and helps me take the billing and payment
        worries out of my mind" ranesh bhattacharya
      </div>
      </div>
    </div>
  );
};

export default AppRating;
