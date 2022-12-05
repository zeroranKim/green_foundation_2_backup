import React from 'react';



function HeaderComponent(props){
   const {homePath,logoImg,logoAlt,subMenu1,subMenu2,subMenu3,subMenu4,subMenu5} = props;

  const [addClass, setAddClass] = React.useState({
    addClass1:false,
    addClass2:false,
    addClass3:false,
    addClass4:false
  });

  const {addClass1,addClass2,addClass3,addClass4} = addClass;

  const onMouseEnter1=()=>{
    setAddClass({
      addClass1:true,
      addClass2:false,
      addClass3:false,
      addClass4:false
    });
  }

  const onMouseEnter2=()=>{
    setAddClass({
      addClass1:false,
      addClass2:true,
      addClass3:false,
      addClass4:false
    });
  }

  const onMouseEnter3=()=>{
    setAddClass({
      addClass1:false,
      addClass2:false,
      addClass3:true,
      addClass4:false
    });
  }

  const onMouseEnter4=()=>{
    setAddClass({
      addClass1:false,
      addClass2:false,
      addClass3:false,
      addClass4:true
    });
  }

  const onMouseLeaveAddClass=()=>{
    setAddClass({
      addClass1:false,
      addClass2:false,
      addClass3:false,
      addClass4:false
    });
  }
   return(
      <header id="header">
        <div className="left">
          <h1><a href={homePath} className="Green 복지재단"><img src={logoImg} alt={logoAlt}/></a></h1>
        </div>
        <div className="right">
          <nav id="nav"
          onMouseLeave={onMouseLeaveAddClass}>
            <ul>
              <li>
                <a 
                href="!#" 
                title="재단소개" 
                onMouseEnter={onMouseEnter1}
                className={`main-btn ${addClass1 && 'on'}`}>재단소개</a>
                <div className={`sub sub1 ${addClass1 && 'on'}`}>
                  <div className="container">
                    <ul>
                      <li>
                        <ul>
                          {
                            subMenu1.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu5.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu5.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu5.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a 
                href="!#" 
                title="후원하기" 
                onMouseEnter={onMouseEnter2}
                className={`main-btn ${addClass2 && 'on'}`}
                 >후원하기</a>
                <div className={`sub sub2 ${addClass2 && 'on'}`}>
                  <div className="container">
                    <ul>
                      <li>
                        <ul>
                          {
                            subMenu2.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu5.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu5.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu5.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a 
                href="!#" 
                title="자료실" 
                onMouseEnter={onMouseEnter3}
                className={`main-btn ${addClass3 && 'on'}`}
                >자료실</a>
                <div className={`sub sub3 ${addClass3 && 'on'}`}>
                  <div className="container">
                    <ul>
                      <li>
                        <ul>
                          {
                            subMenu3.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu5.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu5.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu5.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a 
                href="!#" 
                title="스토리" 
                onMouseEnter={onMouseEnter4}
                className={`main-btn ${addClass4 && 'on'}`}
                >스토리</a>
                <div className={`sub sub4 ${addClass4 && 'on'}`}>
                  <div className="container">
                    <ul>
                      <li>
                        <ul>
                          {
                            subMenu4.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu5.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu5.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu5.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" className={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header> 
    )
};
HeaderComponent.defaultProps = {
   homePath : './index.html',
   logoImg : './images/logo.png',
   logoAlt : 'logo',
   subMenu1 : ['설립취지','연혁','찾아오시는길'],
   subMenu2 : ['국내후원','국외후원','맞춤후원'],
   subMenu3 : ['서식자료실','사진자료실','후원양식'],
   subMenu4 : ['웹진','보고서','나의 후원'],
   subMenu5 : ['서브메뉴1','서브메뉴2','서브메뉴3']
 }
export default HeaderComponent;