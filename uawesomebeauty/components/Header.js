import { Link } from "react-scroll";
export default function Header() {
  return (
    <div>
      <div className="main-head">
        <div className="Logo-holder">
          <img src="/Logo.png" className="Logo" /> {/*로고 이미지 */}
        </div>
        <div className="menu-holder">
          <Link
            to="us-con" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-20} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> About us </div>
          </Link>
          {/* <div className="menu"> About us </div> 메뉴 1 */}
        </div>
        <div className="menu-holder">
          <Link
            to="inner-sec" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-20} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> Gallary </div>
          </Link>
          {/* <div className="menu"> Gallary </div> 메뉴 2 */}
        </div>
        <div className="menu-holder">
          <Link
            to="QnA-con" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-20} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> Reservation </div>
          </Link>
          {/* <div className="menu"> Reservation  </div> 메뉴 3 */}
        </div>
        <div className="menu-holder">
          <Link
            to="map-sec" // 섹션의 ID를 여기에 입력
            spy={true}
            smooth={true}
            offset={-90} // 스크롤 오프셋 조절 (헤더 높이에 맞게 조절)
            duration={500}
          >
            <div className="menu"> Location </div>
          </Link>
          {/* <div className="menu"> Location </div> 메뉴 4 */}
        </div>
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
        body {
          margin: 0;
          padding: 0;
        }
        .main-head {
          display: flex;
          background-color: lavenderblush;
          width: 100%;
          height: 11%;
          position: fixed; /* 헤더를 고정시킴 */
          top: 0; /* 화면 상단에 고정 */
          z-index: 1000; /* 다른 콘텐츠 위에 표시 */
        }
        .Logo-holder {
          padding-left: 500px;
          padding-right: 300px;
        }
        .Logo {
          width: 190px;
          height: 110px;
        }
        .menu-holder {
          display: flex;
          align-items: center;
          padding: 30px;
        }
        .menu {
          font-size: 18px;
          color: black;
          font-family: Elice-light;
          &:hover {
            color: red;
            opacity: 0.5;
            transition: color 0.5s;
          }
        }
      `}</style>
    </div>
  );
}
