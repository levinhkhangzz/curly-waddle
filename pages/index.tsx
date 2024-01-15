import React from 'react';
import './_app.tsx'; // Đảm bảo sử dụng đuôi .scss nếu bạn muốn sử dụng Sass

const App: React.FC = () => {
  return (
    <>
      <div className="link-container">
        <div className="text">
          <span>Hello</span>
          <div className="icon icon-one">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="currentColor"></path>
            </svg>
          </div>
          <div className="icon icon-two">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
        <a href="https://bento.me/aedotris" className="link">@bento.me/aedotris</a>
      </div>

      <link href="https://api.fontshare.com/v2/css?f[]=excon@400,900,700,500,300,100,1&display=swap" rel="stylesheet" />
    </>
  );
};

export default App;
