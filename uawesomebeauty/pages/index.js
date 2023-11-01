import React, { useState, useEffect } from "react";

const images = ["/place1.png", "/place2.png"]; // 이미지 파일 경로 배열

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    // 이미지를 4초마다 변경하는 타이머를 설정
    const interval = setInterval(() => {
      setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);

      // 현재 이미지를 페이드아웃하고 다음 이미지를 페이드인
      document.querySelector(".mainPhoto").style.opacity = 0;

      // 이미지가 페이드아웃되면서 뒤의 이미지가 보이도록 z-index 조절
      document.querySelector(".mainPhoto").style.zIndex = 1;
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        document.querySelector(".mainPhoto").style.opacity = 1;

        // 이미지가 페이드인하면서 현재 이미지를 보이도록 z-index 조절
        document.querySelector(".mainPhoto").style.zIndex = 2;
      }, 500); // 투명도를 복원하기 전 0.5초 대기
    }, 4000);

    return () => {
      // 컴포넌트 언마운트 시 타이머를 정리
      clearInterval(interval);
    };
  }, [nextImageIndex]);

  return (
    <div>
      <div>
        <img className="mainPhoto" src={images[currentImageIndex]} />
        <img className="mainPhoto" src={images[nextImageIndex]} />
      </div>
      <div>
        <div>
          <br></br>
          <br></br>
          <br></br>
          문의 방법 dwqdwq dwqdwqqwd
          <div />
        </div>
      </div>

      <style jsx global>{`
        .mainPhoto {
          max-height: 89vh;
          width: 100%;
          height: 100%;
          position: absolute;
          transition: opacity 0.5s; /* 투명도에 0.5초 동안의 트랜지션 적용 */
          margin-left: -8px;
        }
      `}</style>
    </div>
  );
};

export default Index;
