import React from 'react'
import workContents from '../contents';
import {Link} from 'react-router-dom';


const Work = props => {


  const {id} = props.match.params;
  const currentId = parseInt(id.replace(':', ''));
  const currentWork = (workContents[workContents.length - currentId])


  return(
    <>
      <div className="container">
        <div className="work__media">
          <div className="work_flex">
            <div className="work__image-area">
              <img src={currentWork.img2} alt="作品実績"/>
            </div>
            <div className="work__text_area">
            <p className="work__title">{currentWork.title}</p>
            <p className="work__technic work__technic_mt">{currentWork.tech}</p>
              <p className="work__description work__description_mt">
                {currentWork.description}
              </p>
              {
                currentWork.url && <p className="demo__text demo__position_absolute "><a href={currentWork.url} target="_blank" rel="noopener noreferrer" className="demo__link">デモサイトはこちら</a>（user: atsuuser  pass: atsupass)</p>
              }
            </div> 
          </div>
        </div>
        <div className="work__site-view work__site-view_margin">
          {
            currentWork.img3 ? <img src={currentWork.img3} alt="作品の全体像"/>
                            :<p className="unpublished-work__image">非公開実績のため写真を公開することができません。</p>
          }
          
        </div>
        <div className="backWorks-area">
          <p className="backWorks"><Link to="/Works"><i className="fas fa-angle-double-left fa-angle-double-left_mt"></i>作品一覧に戻る</Link></p>
        </div>
      </div>

    </>
  )
}

export default Work;