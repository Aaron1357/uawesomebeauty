export default function Header() {
    return (
      <div>
        <div className="main-head">


          <div className="Logo-holder">
            <img src="/Logo.png" className="Logo" />     {/*로고 이미지 */}
          </div>

        <div className="menu-holder">
            <div className="menu"> Location </div>     {/*메뉴 1 */} 
          </div>

          <div className="menu-holder">
            <div className="menu"> About us </div>     {/*메뉴 2 */} 
          </div>
          
          <div className="menu-holder">
            <div className="menu"> reservation </div>     {/*메뉴 3 */}
          </div>
          <div className="menu-holder">
            <div className="menu"> QnA </div>     {/*메뉴 4 */} 
          </div>

        

        </div>
  

        <style jsx global>{`


          .main-head {

            display:flex;
             
            background-color: seashell;
            width:100vw;
            height:11vh;
            margin-left:-9px;
            margin-top: -8px;  
            
          }
          .Logo-holder {
             padding-left: 600px;
             padding-right: 400px;
          }
          .Logo {
            
            width: 220px;
            height:130px;
          }

          .menu-holder{

          display: flex;
          align-items:center; 
          padding : 30px
          }

          .menu{
           font-size: 25px;
           
          }
        `}
        </style>
      </div>
    );
  }