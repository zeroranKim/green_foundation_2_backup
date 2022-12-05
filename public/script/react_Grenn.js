function WrapComponent(){

  const [show, setShow] = React.useState(false);

  const modalOpen=()=>{
    setShow(true);
  } 
  const modalClose=()=>{
    setShow(false);
  } 

  return(
    <div id="wrap">
      <HeaderComponent/>
      <MainComponent modalOpen={modalOpen}/>
      <FooterComponent/>
      {
      show && <ModalComponent modalClose={modalClose}/>
      }
    </div>
  )
}

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
              href="#" 
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
              href="#" 
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
              href="#" 
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
              href="#" 
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
                              <li key={idx}><a href="#" className={item}>{item}</a></li>
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
}

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

function MainComponent({modalOpen}){
  return(
    <main id="main">
      <Section1Component/>
      <Section2Component modalOpen={modalOpen}/>
    </main>
  )
}

  function Section1Component(){
    return (
      <section id="section1">
        <div className="slide-container">
          <div className="slide-view">
            <ul className="slide-wrap">
              <li className="slide slide3"><a href="#" title="img3"><img src="./images/img3.jpg" alt="img3"/></a></li>
              <li className="slide slide1"><a href="#" title="img1"><img src="./images/img1.jpg" alt="img1"/></a></li>
              <li className="slide slide2"><a href="#" title="img2"><img src="./images/img2.jpg" alt="img2"/></a></li>
              <li className="slide slide3"><a href="#" title="img3"><img src="./images/img3.jpg" alt="img3"/></a></li>
              <li className="slide slide1"><a href="#" title="img1"><img src="./images/img1.jpg" alt="img1"/></a></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }

  function Section2Component({notice,gallery,modalOpen}){
    const onClickModalOpen=(e)=>{
      e.preventDefault();
      modalOpen();
    }
    
    return (
      <section id="section2">
        <div className="left board">
          <button className="notice-btn" title="공지사항">공지사항</button>
          <div className="notice-box board-box">
            <div className="gap">
              <ul>
                {
                 notice.map((item,idx)=>{
                  return(
                    <li key={idx}><a href="#" title={item.noticeList} onClick={idx===0 && onClickModalOpen} className={idx===0 ? 'modal-btn' : ''}>{item.noticeList}</a><span>{item.uploadDate}</span></li>
                  )
                }) 
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="center board">
          <button className="gallery-btn" title="갤러리">갤러리</button>
          <div className="gallery-box board-box">
            <div className="gap">
              <ul>
                {
                  gallery.map((item,idx)=>{
                  return(
                    <a key={idx} href="#" title={item.title}><img src={item.imgSrc} alt={item.imgAlt}/></a>
                  )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="banner">
            <div className="title"><h2>EVENT BANNER</h2></div>
            <div className="img-box">
              <a href="#" title="banner"><img src="./images/banner.jpg" alt="banner"/></a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  Section2Component.defaultProps = {
    notice : [
      {noticeList : 'Green 복지재단1', uploadDate:'2020.11.23'},
      {noticeList : 'Green 복지재단2', uploadDate:'2020.11.23'},
      {noticeList : 'Green 복지재단3', uploadDate:'2020.11.23'},
      {noticeList : 'Green 복지재단4', uploadDate:'2020.11.23'}
    ],
    gallery : [
      {title:'icon1', imgSrc:'./images/icon1.png', imgAlt:'icon1'},
      {title:'icon2', imgSrc:'./images/icon2.png', imgAlt:'icon2'},
      {title:'icon3', imgSrc:'./images/icon3.png', imgAlt:'icon3'},
    ]
  }

function FooterComponent(){
  return(
    <footer id="footer">
      <div className="left">
        
        <h1><a href="#" title="Logo"><img src="./images/footerLogo.png" alt="Logo"/></a></h1>

      </div>
      <div className="center">
        
        <div className="row1">
            <span><a href="#" title="하단메뉴1">하단메뉴1</a></span>
            <span><i>|</i></span>
            <span><a href="#" title="하단메뉴2">하단메뉴2</a></span>
            <span><i>|</i></span>
            <span><a href="#" title="하단메뉴3">하단메뉴3</a></span>
        </div>
        
        <div className="row2">
          <p>COPYRIGHT&copy; by WEBDESIGN. ALL RIGHTS RESERVED</p>
        </div>

      </div>  
      <div className="right">
        
        <select name="family" id="family">
          <option value="" selected>패밀리 사이트</option>
          <option value="패밀리사이트1">패밀리사이트1</option>
          <option value="패밀리사이트2">패밀리사이트2</option>
          <option value="패밀리사이트3">패밀리사이트3</option>
        </select>

      </div>  
    </footer>
  )
}

function ModalComponent({modalClose}){
  const onClickModalClose=(e)=>{
    e.preventDefault();
    modalClose();
  }
  return(
    <div className="modal">
      <div className="wrap">
        <div className="container">
          <div className="gap">
  
            <div className="title">
              <h1>복지재단 공지사항</h1>
            </div>
  
            <div className="content">
              <ol>
                <li>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세.</li>
                <li>무궁화 삼천리 화려강 대한 사람 대한으로 길이 보전하세.</li>
                <li>남산 위에 저 소나무, 철갑을 두른 듯 바람서리 불변함은 우리 기상일세.</li>
              </ol>                       
            </div>
  
            <div className="button-box">
              <button onClick={onClickModalClose} className="modal-close-btn">닫기</button>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <WrapComponent/>,
  document.getElementById('root')
)