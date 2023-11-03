import React, { useState, useEffect } from "react";
const images = ["/place1.png", "/place2.png"]; // 이미지 파일 경로 배열
const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [showDescription, setShowDescription] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);

  const handleDescriptionToggle = () => {
    setShowDescription(!showDescription);
    setShowDescription2(false); // 오른쪽 설명 섹션을 닫습니다.
  };

  const handleDescriptionToggle2 = () => {
    setShowDescription2(!showDescription2);
    setShowDescription(false); // 오른쪽 설명 섹션을 닫습니다.
  };

  useEffect(() => {
    //이미지관련
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
      //이미지관련
      // 컴포넌트 언마운트 시 타이머를 정리
      clearInterval(interval);
    };
  }, [nextImageIndex]);

  const handleContactImageClick1 = () => {
    window.open("https://open.kakao.com/o/sXWLm5Pf", "_blank"); // 문의 링크 관련 코드
  };

  const handleContactImageClick2 = () => {
    window.open(
      "https://instagram.com/uawesomebeauty?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
      "_blank"
    ); // 문의 링크 관련 코드
  };

  const handleContactImageClick3 = () => {
    window.open(
      "https://talk.naver.com/ct/w4022r?frm=mnmb&frm=nmb_lpn#nafullscreen",
      "_blank"
    ); // 문의 링크 관련 코드
  };

  const handleContactImageClick4 = () => {
    window.open("https://kko.to/HuOyG6LutS", "_blank"); // 카카오맵 링크 관련 코드
  };
  const handleContactImageClick5 = () => {
    window.open("https://naver.me/5Y1I47Yk", "_blank"); // 네이버지도 링크 관련 코드
  };

  //kko.to/5FGA0BbCLs
  https: useEffect(() => {
    // 카카오 스크립트
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=b8a7199c97ab09d827a105e52849c736&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(37.7344, 127.0818),
          level: 4,
        };
        var map = new window.kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다
        var markerPosition = new window.kakao.maps.LatLng(37.7344, 127.0818);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        var infowindow = new kakao.maps.InfoWindow({
          content:
            '<div style="width:80px; text-align:center;padding:5px 34px; font-size: 13px;font-weight: bold; cursor: pointer;">유어썸뷰티</div>',
        });

        // 마커 클릭 이벤트 처리
        kakao.maps.event.addListener(marker, "click", function () {
          // 유어썸뷰티 링크 열기
          window.open("https://kko.to/HuOyG6LutS", "_blank");
        });

        infowindow.open(map, marker);

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return (
    <div>
      <div>
        <div>
          <img className="mainPhoto" src={images[currentImageIndex]} />
          <img className="mainPhoto" src={images[nextImageIndex]} />
        </div>
        <div className="howtocome">
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
          <br />

          <div className="QnA-con">
            <h1 className="QnA-index">| Q & A |</h1>
            <div className="QnA-welcome1">
              {" "}
              궁금하신 모든 사항은 편하게 문의주세요!{" "}
            </div>
            <div className="QnA-welcome2">
              {" "}
              아래의 여러가지 문의 방법을 소개 드립니다.{" "}
            </div>

            <div className="QnA-list">
              <div className="contact-index">
                <img className="QnA-img" src="/how-to-contact--1.png" />
                <h3>0507-1318-5745</h3>
              </div>

              <div className="contact-index">
                <img
                  className="QnA-img"
                  src="/how-to-contact-2.png"
                  onClick={handleContactImageClick1}
                />
                <h3>카카오톡 오픈채팅 문의 </h3>
              </div>

              <div className="contact-index">
                <img
                  className="QnA-img"
                  src="/how-to-contact-3.png"
                  onClick={handleContactImageClick2}
                />
                <h3>인스타그램 DM 문의 </h3>
              </div>

              <div className="contact-index">
                <img
                  className="QnA-img"
                  src="/how-to-contact-4.png"
                  onClick={handleContactImageClick3}
                />
                <h3> 네이버 톡톡 문의 </h3>
              </div>
            </div>
          </div>
          <div className="map-con" id="map-sec">
            <h1 className="QnA-index">| Location |</h1>
            {/* <div> </div> */}
            <div className="root">
              <div>
                <div id="map" style={{ width: "400px", height: "300px" }}></div>
              </div>
              <div>
                <div className="mapbutton">
                  <img src="카카오맵.png" onClick={handleContactImageClick4} />
                  <img
                    src="네이버지도.png"
                    onClick={handleContactImageClick5}
                  />
                </div>
                <div className="shopname-index">
                  <div className="shopname">유어썸뷰티</div> <br></br>
                  <div>경기 의정부시 용민로 10 탑석자이정문상가 205-2호</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="designer-con" id="us-con">
        <h1 className="designer-index">| About us |</h1>
        <div className="designer-welcome1">
          {" "}
          의정부네일 용현동네일 의정부속눈썹펌 유어썸뷰티{" "}
        </div>
        <div className="designer-welcome2">
          {" "}
          🌷1 : 1 맞춤 디자인시술 100% 예약제🌷{" "}
        </div>
        <div className="designer-welcome2"> open 10:00 close 20:00 </div>

        <div className="designer-welcome2">
          {" "}
          사진을 클릭하면 간단한 프로필을 확인할 수 있습니다.{" "}
        </div>
        <div className="plusdescribe">
          {showDescription && (
            <div className="describe">
              -종합미용면허증 취득 <br />
              -뷰티케어학과 학사 졸업 <br />
              -네일아트국가자격증 취득 <br />
              -영국TTS두피정보관리사 1급, 2급 자격 취득 <br />
              -한국메디뷰티 반영구 교육과장 수료 <br />
              -KSPPRO 풋레게 교육 이수 <br />
              -독일 할라쉐카 왁싱 마스터 교육 수료 <br />
              -K뷰티전문가연합회(FKBP) 정회원 <br />
              -제12회 국제바디아트콘테스트 그랑프리 마스터즈 수상 <br />
              -제12회 국제바디아트콘테스트 대회 수석 심사위원 <br />
            </div>
          )}
          <div className="designer-list">
            <div className="contact-index">
              <img
                className="designer-img"
                src="/logo_name.jpg"
                onClick={handleDescriptionToggle}
              />
              <h3>원장 이순미</h3>
            </div>

            <div className="contact-index">
              <img
                className="designer-img"
                src="/logo_name.jpg"
                onClick={handleDescriptionToggle2}
              />
              <h3>실장 최서현</h3>
            </div>
          </div>
          {showDescription2 && (
            <div className="describe2">
              -피부미용면허증 취득 <br />
              -퍼스널컬러 전문가 교육 이수 <br />
              -노글루펌 전문과정 수료 <br />
              -KSPPRO 협회 정회원 <br />
              -한국스킨플래닝프로 협회 임원 <br />
              -한국스킨플래닝프로 스킨플래닝 기술 강사 <br />
              -KSPPRO 에듀케이터 교육과정 수료 <br />
              -스킨플래닝 교육/원데이 전문인증기관 <br />
              -IBSC 베트남 국제대회 더마플래닝 심사위원 <br />
              -IBSC 국제 신기술 시연 강사
            </div>
          )}
        </div>
      </div>

      <div className="inner-fac-con" id="inner-sec">
        <h1 className="fac-index">| Gallary |</h1>
        <div className="fac-welcome1">
          {" "}
          1:1 맞춤 디자인 작업으로 고객님들의 스타일을 찾아드립니다.{" "}
        </div>
        <div className="fac-welcome2">
          {" "}
          원하는 사진 위에 마우스를 올리면 사진이 확대됩니다.{" "}
        </div>
        <table class="image-table">
          <tbody>
            <tr>
              <td>
                <img className="fac-img" src="/1.jpg" alt="이미지 1" />
              </td>
              <td>
                <img className="fac-img" src="/2.jpg" alt="이미지 1" />
              </td>
              <td>
                <img className="fac-img" src="/3.jpg" alt="이미지 1" />
              </td>
            </tr>
            <tr>
              <td>
                <img className="fac-img" src="/4.jpg" alt="이미지 1" />
              </td>
              <td>
                <img className="fac-img" src="/5.jpg" alt="이미지 1" />
              </td>
              <td>
                <img className="fac-img" src="/6.jpg" alt="이미지 1" />
              </td>
            </tr>
            <tr>
              <td>
                <img className="fac-img" src="/7.jpg" alt="이미지 1" />
              </td>
              <td>
                <img className="fac-img" src="/8.jpg" alt="이미지 1" />
              </td>
              <td>
                <img className="fac-img" src="/9.jpg" alt="이미지 1" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <style jsx global>{`


         @font-face {
         font-family: "Elice";
         font-weight: 200;
         src: url("/fonts/EliceDXNeolli-Medium.ttf") format("truetype");
}
         @font-face {
         font-family: "Elice-light";
         font-weight: 200;
         src: url("/fonts/EliceDXNeolli-Light.ttf") format("truetype");
}
        .mainPhoto {
          max-height: 89%;
          width: 100%;
          height: 89%;
          position: absolute;
          transition: opacity 0.5s; /* 투명도에 0.5초 동안의 트랜지션 적용 */

          margin-top: 110px;
        }

        .howtocome {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .root {
          display: flex;
          flex-direction: column;
          align-items: center;
          
        }
        .mapbutton {
          padding-top: 70px;
          padding-bottom: 30px;
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
        .QnA-con {
          
          padding-top: 100px;
          background: mistyrose;
         
          width: 100vw;
          height: 89vh;
          display: flex;
          flex-direction: column;
          align-items: center;

          
        }
        .QnA-list{
          display: flex;
          align -items: center;
          justify-content:center;
          width: 100vw;
        }
        .QnA-img{
           width: 50%;
           height: 30%;
           padding-left: 60px;
           padding-right: 60px;
           padding-bottom: 20px;
           
           &:hover {
            color: red;
            opacity: 0.5;
            transition: opacity 0.5s;
            transform: scale( 1.2, 1.2 ) ;
            transition: transform 0.5s ease;
          }
        }
        .QnA-welcome1{
           padding-top : 30px;
           padding-bottom: 20px;
           font-weight:bold;
           font-family: Elice;
           
        }
        .QnA-welcome2{
           padding-top : 10px;
           padding-bottom: 130px;
           font-weight:bold;
           font-family: Elice;
        }
        .QnA-index{
          font-family: Elice;
          padding-bottom: 60px;
        }
        .contact-index{
          word-break;
          display: flex;
          text-align: center;
          flex-direction: column;
          font-family: Elice-light;
        }
        .map-con{
 
           display: flex;
           flex-direction:column;
           align-items: center;
           justify-content: center;
           height: 89vh;
        }
        .shopname-index{
          font-family:Elice;
          text-align: center;
        }
        .designer-con {
          
          padding-top: 100px;
          background: mistyrose;
         
          width: 100vw;
          height: 89vh;
          display: flex;
          flex-direction: column;
          align-items: center;

          
        }
        .designer-list {
            display: flex;
            align-items: center;
            width: 30vw;
        }

        .designer-list > * {
            margin-right: 30px; /* 요소 사이의 간격을 20px로 설정 */
        }

          /* 마지막 요소의 오른쪽 마진을 없애기 위한 스타일 */
        .designer-list > :last-child {
            margin-right: 0;
        }

        .designer-img{
           width: 100%;
           height: 20%;
           border-radius: 20%;
           
           &:hover {
            color: red;
            opacity: 0.5;
            transition: opacity 0.5s;
            
            transition: transform 0.5s ease;
          }
        }
        .designer-welcome1{
           padding-top : 30px;
           padding-bottom: 20px;
           font-weight:bold;
           font-family: Elice;
           
        }
        .designer-welcome2{
           padding-top : 10px;
           padding-bottom: 50px;
           font-weight:bold;
           font-family: Elice;
        }
        .designer-index{
          font-family: Elice;
          padding-bottom: 60px;
        }
        .plusdescribe{
         display: flex;
        }
        .describe {
          width: 400px;
          position: absolute; /* 절대 위치 설정 */
        
        transform: translateX(-130%); 
        }
        .describe2{
          width: 400px;
          position: absolute; /* 절대 위치 설정 */
        
        transform: translateX(170%); 
        }
      


        .fac-index{
          padding-top: 30px;
          font-family: Elice;
          padding-bottom: 60px;
        }
        .inner-fac-con {
          padding-top: 100px;
          background: white;
          width: 100vw;
          height: 89vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .fac-welcome1{
           padding-top : 0px;
           padding-bottom: 20px;
           font-family: Elice-light;
        }
        .fac-welcome2{
           padding-top : 10px;
           padding-bottom: 70px;
           font-family: Elice-light;
        }
        .fac-img {
          width: 150px; /* 이미지의 너비를 200px로 설정 */
          height: 150px; /* 이미지의 높이를 200px로 설정 */
          padding : 7px;
          border-radius: 10%;
          &:hover {
            transform: scale( 2.0, 2.0 ) ;
            transition: transform 0.5s ease;
          }





      `}</style>
    </div>
  );
};
export default Index;
