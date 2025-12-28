import React  from 'react';
import {Link} from 'react-router-dom';
import about_image from '../images/about-image.jpeg';
import  ImageSwiper  from './Swiper.jsx';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';





const Home = () => {
  const fetchContents = async () => {
    const res = await fetch("contents.json", {
      method: "GET",
    });
    console.log(res)
    const contents = await res.json();
  } 

  

  fetchContents()
  
  return (
    <>
    <div className="first-view wow fadeIn">
      <div className='container'>
        <div className="first-view__title first-view__title_position_absolute">
          <p className="first-view__name first-view__name_font">ATSUSHI</p>
          <p className="first-view__name first-view_mt first-view__name_font">HAYASAKA</p>
          <p className="first-view__job first-view__job_font first-view_mt">web creator</p>
          <p className="first-view__description first-view__description_font first-view__description_mt pc-only">
          ポートフォリオサイトを訪れて頂きありがとうございます。<br />
          今までの作品や私について紹介していますので、見て頂けると幸いです。
          </p>
        </div>
        <div className="first-view__bg"></div>
      </div>
    </div>

    <section className="about wow fadeInUp">
      <div className="container about_flex">
        <div className="about__image-area">
          <img className="about__image" src={about_image} alt=""/>
        </div>
        <div className="about__texts_area">
          <h2 className="section__title about__title">About</h2>
          <p className="about__description  about__description_mt">
          北海道出身の24歳。<br/>
          {/* 自転車にテントと寝袋を詰め込み2ヶ月ほど出掛けるなど、旅好きな一面を持つ。<br/> */}
          2020年12月からプログラミングの勉強を始めました。<br/>
          現在はシェアハウスに住みながら、日々勉強し技術を磨きながら、フリーランスとして活動しています。
          </p>
          <button className="button about__button_position"><Link onClick={() => {window.scrollTo(0, 0)}} className="button__link" to="/about"><span>View more</span></Link><div className="wave"></div></button>
        </div>
      </div>
    </section>

    <section className="skills ">
      <div className="container">
        <h2 className="section__title skills__title wow fadeIn">Skills</h2>
        <ul className="skills__lists skills__lists_margin wow fadeInUp">
          <li className="skills__list skills__list_mt skill__list_font_bold">-　HTML/CSS</li>
          <li className="skills__list skills__list_mt skill__list_font_bold">-　JavaScript</li>
          <li className="skills__list skills__list_mt skill__list_font_bold">-　SASS</li>
          <li className="skills__list skills__list_mt skill__list_font_bold">-　PHP</li>
          <li className="skills__list skills__list_mt skill__list_font_bold">-　WordPress</li>
          <li className="skills__list skills__list_mt skill__list_font_bold">-　Git</li>
          <li className="skills__list skills__list_mt skill__list_font_bold">-　React</li>
        </ul>
      </div>
    </section>

    <section className="works ">
      <div className="container">
        <h2 className="section__title works__title wow fadeIn">Works</h2>
        <ImageSwiper className="wow fadeInUp" />
      <button className="button works__button_position"><Link onClick={() => {window.scrollTo(0, 0)}} className="button__link" to="/works">View all</Link></button>
      </div>
    </section>

    <section className="contact">
      <div className="container">
      <h2 className="section__title contact__title wow fadeIn">Contact</h2>
      <div className="contact__button_area wow fadeInUp">
        <p className="contact__lead">お仕事のご相談や、ご依頼の方は<br className="sp-only" />こちらをクリック！</p>
        <button className="button contact__button_position"><Link onClick={() => {window.scrollTo(0, 0)}} className="button__link" to="/contact">お問い合わせページへ</Link></button>
      </div>

      </div>
    </section>
    
    </>
  )
}

export default Home;