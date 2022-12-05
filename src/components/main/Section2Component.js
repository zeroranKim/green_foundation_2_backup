import React from 'react';

function Section2Component({notice,gallery,modalOpen}){
   
   const onClickModalOpen=(e,z)=>{
      e.preventDefault();
      if(z!==0) return;
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
                    <li key={idx}><a href="!#" title={item.noticeList} onClick={(e)=>onClickModalOpen(e,idx)} className={idx===0 ? 'modal-btn' : ''}>{item.noticeList}</a><span>{item.uploadDate}</span></li>
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
                    <a key={idx} href="!#" title={item.title}><img src={item.imgSrc} alt={item.imgAlt}/></a>
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
              <a href="!#" title="banner"><img src="./images/banner.jpg" alt="banner"/></a>
            </div>
          </div>
        </div>
      </section>
    )
};

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
 };

export default Section2Component;