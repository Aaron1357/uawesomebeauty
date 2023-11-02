export default function Header() {
  return (
    <div>
      <div className="main-head">
        <div className="Logo-holder">
          <img src="/Logo.png" className="Logo" /> {/*로고 이미지 */}
        </div>

        <div className="menu-holder">
          <div className="menu"> Location </div> {/*메뉴 1 */}
        </div>

        <div className="menu-holder">
          <div className="menu"> About us </div> {/*메뉴 2 */}
        </div>

        <div className="menu-holder">
          <div className="menu"> Reservation </div> {/*메뉴 3 */}
        </div>
        <div className="menu-holder">
          <div className="menu"> QnA </div> {/*메뉴 4 */}
        </div>
      </div>

      <style jsx global>{`
        .main-head {
          display: flex;

          background-color: lavenderblush;
          width: 100%;
          height: 11%;
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
          font-size: 22px;
          color: black;

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
