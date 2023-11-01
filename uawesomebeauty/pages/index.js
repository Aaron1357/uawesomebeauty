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
        <div>
          <img className="mainPhoto" src={images[currentImageIndex]} />
          <img className="mainPhoto" src={images[nextImageIndex]} />
        </div>
        <div>
          <p className="customText"></p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>오시는 길</h1>
          <div>지하철역과 아주 가깝습니다!</div>
          <div className="root">
            <div>
              <br></br>지도 부분
            </div>
            <div>
              <div className="mapbutton">
                <img src="카카오맵.png" />
                <img src="네이버지도.png" />
              </div>
              <div>
                <div className="shopname">유어썸뷰티</div>
                <div>경기 의정부시 용민로 10 탑석자이정문상가 205-2호</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .mainPhoto {
          max-height: 89%;
          width: 100%;
          height: 89%;
          position: absolute;
          transition: opacity 0.5s; /* 투명도에 0.5초 동안의 트랜지션 적용 */
          margin-left: -8px;
        }

        .root {
          display: flex;
        }

        .mapbutton {
          display: flex;
        }

        .mapbutton img {
          height: 40px;
          border-radius: 10px; /* 둥글게 만들기 */
          margin: 10px; /* 이미지 사이의 간격 조절 */
          &:hover {
            color: red;
            opacity: 0.5;
            transition: opacity 0.5s;
          }
        }
        .shopname {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Index;
