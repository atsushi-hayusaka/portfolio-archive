import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import personality from '../images/about-image.jpeg'
import communication from '../images/about_communication.jpg'
import juku from '../images/juku.jpg'


const About = () => {

  const [event, setEvent] = useState(1);

  //表示される年表を切り替える処理
  const addChronology = (id) => {
    setEvent(id)
    const add_active = document.getElementById(id)
    const remove_active = document.querySelector(".chronology_active")
    remove_active.classList.remove('chronology_active');
    add_active.classList.add('chronology_active');
  }

  //現在表示されている年表の目次に下線をつける処理
  useEffect(() => {
    const first = document.querySelector('.history__years_first');
    const second = document.querySelector('.history__years_second');
    const histories = document.querySelectorAll('.history__years');
    histories.forEach(history => {
      history.classList.remove('current');
    })
    event === 1 ? first.classList.add('current')
                : second.classList.add('current') 
  },[event]);

  return (
    <>
      <div className="sub-page__title_area wow fadeIn">
        <p className="sub-page__title page-about__title">About</p>
      </div>
      <section className="history">
        <div className="container">
          <div className="history__title_area year_flex wow fadeIn">
            <h2 className="section__title history__title">History</h2>
            <div className="history__years-area history__years_flex">
              <p className="history__years history__years_first " onClick={() => addChronology(1)} >1997 - 2020</p>
              <p className="history__years history__years_second" onClick={() => addChronology(2)} >2020 - 2021</p>
            </div>
          </div>
          
          <div id='1' className="chronology chronology-first chronology_active wow fadeInUp">
        
            <dl className="chronology__list chronology_flex chronology__list_mt">
              <dt className="chronology__year">1997.6</dt>
              <dd className="chronology__description"><span className="sp_dd_title">北海道札幌市東区にて生まれる</span></dd>
            </dl>

            <dl className="chronology__list chronology_flex chronology__list_mt">
              <dt className="chronology__year">2010.4</dt>
              <dd className="chronology__description">
                <span className="sp_dd_title">隣町の中学校に入学。</span><br/>
                元々行く予定であった中学校にサッカー部がないことが直前に判明し、隣町の中学校に入学。<br/>
                全員が知らない人で人間関係の構築に悩んだが、コミュニケーション能力が飛躍的に向上。
              </dd>
            </dl>

            <dl className="chronology__list chronology_flex chronology__list_mt">
              <dt className="chronology__year">2016.4</dt>
              <dd className="chronology__description">
                <span className="sp_dd_title">札幌開成高校を卒業後、北海学園大学に入学。</span><br/>
                大学を卒業するまで続けることとなった、学習塾のアルバイトを同年の5月に開始。
              </dd>
            </dl>

            <dl className="chronology__list chronology_flex chronology__list_mt">
              <dt className="chronology__year">2018.1</dt>
              <dd className="chronology__description">
                <span className="sp_dd_title">高校の同窓会をやりたいと考え、自ら立案・企画する。</span><br/>
                人数集め、会場探し、レクリエーションの出し物など様々な困難があったが、目標であった100人以上の規模での開催に成功。
              </dd>
            </dl>

            <dl className="chronology__list chronology_flex chronology__list_mt">
              <dt className="chronology__year">2020.2</dt>
              <dd className="chronology__description">
                <span className="sp_dd_title">モエレ山爆走そり大会でベストパフォーマンス賞を受賞。</span><br/>
                学生生活最後に何か大会で賞を取りたいと考え、モエレ山爆走そり大会に出場。早々にスピード部門を諦めパフォーマンスに注力した結果、80組の中から見事本賞を受賞した。
              </dd>
            </dl>       
            <dl className="chronology__list chronology_flex chronology__list_mt">
              <dt className="chronology__year">2020.4</dt>
              <dd className="chronology__description"><span className="sp_dd_title">就職するが、自分のやりたいことが分からず、5月に退職する。<br/>（当時は未熟で、考えが甘かったと今は反省しています...）</span></dd>
            </dl>
          </div>
          
           <div id='2' className="chronology chronology-second ">
            

            <dl className="chronology__list chronology_flex chronology__list_mt">
              <dt className="chronology__year">2020.7</dt>
              <dd className="chronology__description">
                <span className="sp_dd_title">自転車にテントと寝袋を積み込み、ソロ自転車旅を敢行。</span><br/>
                東京ー山梨ー静岡ー愛知ー三重ー奈良ー和歌山ー大阪ー兵庫ー京都を訪れる。<br/>
                Ubereatsのリュックも詰め込み、現地でお金を稼ぎながら旅を進める。
              </dd>
            </dl>

            <dl className="chronology__list chronology_flex chronology__list_mt month_wble">
              <dt className="chronology__year month_wble">2020.10</dt>
              <dd className="chronology__description">
                <span className="sp_dd_title">英語の勉強をスタート。</span><br/>
                自転車旅から帰還した後、次は世界を旅したいと考え、英語の勉強を開始。<br/>
                この時はTOEICのスコアが400点代だった。
              </dd>
            </dl>

            <dl className="chronology__list chronology_flex chronology__list_mt month_wble">
              <dt className="chronology__year">2020.12</dt>
              <dd className="chronology__description">
                <span className="sp_dd_title">プログラミングの独学をスタート。</span><br/>
                自分の書いたコードでPC上に成果物が出来ることに感動を覚え、のめり込んでいく。
              </dd>
            </dl>     

            <dl className="chronology__list chronology_flex chronology__list_mt">
              <dt className="chronology__year">2021.4</dt>
              <dd className="chronology__description">
                <span className="sp_dd_title">様々な技術をより学びたいと考え、クリエイターシェアハウスに入居。</span><br/>
                プログラミング以外にもデザイナー、ライターなど様々な人がいる環境の中で切磋琢磨し、技術を磨いていく。
              </dd>
            </dl>      

            <dl className="chronology__list chronology_flex chronology__list_mt">
              <dt className="chronology__year">2021.6</dt>
              <dd className="chronology__description">
                <span className="sp_dd_title">初のサイト制作の案件を受注</span><br/>
                 受注後にgitを使用、IE対応と聞き、3日間で初日に一からgitを学び、2日目の深夜からはIEの対応に苦しむ。3日間ほぼ寝ずに作業し、なんとか納期に間に合う。gitの知識と根性を習得。
              </dd>
            </dl>      

            <dl className="chronology__list chronology_flex chronology__list_mt">
              <dt className="chronology__year">2021.7</dt>
              <dd className="chronology__description">
                <span className="sp_dd_title">海外向けのWebサイトを作成</span><br/>
                 初めて実案件でコーディングからのWordPress化を経験。この頃からCSS設計を学び始めていたので、BEMの設計方法を意識しながらコーディングを行なった。
              </dd>
            </dl>      
          </div>
        </div>
      </section>

      <section className="personality">
          <div className="container">

            <h2 className="section__title personality__title wow fadeIn">personality</h2>
            <div className="personality__contents">

              <div className="personality__content personality_flex wow fadeInUp">
                <div className="personality__image-area">
                  {/* <img src={personality} alt="" className="personality__image"/> */}
                  <img src="../../images/about-images.jpeg" alt="" className="personality__image"/>
                </div>
                <div className="personality__texts-area">
                  <h3 className="content__title">行動力</h3>
                  <p className="personality__description">
                    自らやりたいことを企画し、周りの人の協力を仰ぎながら成功に導くことができます。<br/>
                    高校の同窓会を行ったときも自分で企画し、その後学年から協力してくれそうな人を探し、運営チームを作ることから始め、チームで準備を進めて行きました。<br/>
                    プログラミングでも半年でフリーランスとして仕事をとると決断し、目標に向けて計画を考え、それに向かって行動しました。その結果半年で二つのお仕事を貰うことができました。
                  </p>
                </div>
              </div>

              <div className="personality__content personality_flex wow fadeInUp">
                <div className="personality__image-area">
                  <img src={communication} alt="" className="personality__image"/>
                </div>
                <div className="personality__texts-area">
                  <h3 className="content__title">コミュニケーション力</h3>
                  <p className="personality__description">
                  誰も知り合いのいない中学校に入学し、1から人間関係を構築していったため、初対面の人とも円滑なコミュニケーションを取ることができます<br/>
                  クラスの人と馴染めずに悩んだこともあり、その経験からグループの様々なところに目を配れるようになり、チーム全体をまとめる、ムードメーカーのような役割をよく任されるようになりました。その結果中学校の部活ではキャプテン、高校では副キャプテン、大学ではアルバイトの集団学習塾で室長を任されていました。
                  </p>
                </div>
              </div>

              <div className="personality__content personality_flex wow fadeInUp">
                <div className="personality__image-area">
                  <img src={juku} alt="" className="personality__image"/>
                </div>
                <div className="personality__texts-area">
                  <h3 className="content__title">課題解決力</h3>
                  <p className="personality__description">
                    現状の課題を客観的にみて、課題解決に継続的に取り組むことができます。<br/>
                    大学生の頃アルバイトの集団学習塾で、保護者の方からの室長評価で全キャンパス中最下位を取ってしまいました。<br/>
                    学生の室長が私しかいなかったことから頼りない印象を持たれていたことと、保護者との接点の少なさよりその印象を払拭する機会がないことが原因と考え、連絡ツールの導入を計り保護者との接点を増やしました。<br/>
                    その結果室長評価のみならず、塾自体の評価も大幅にあげることができました。
                  </p>
                </div>
              </div>

            </div>
          </div>
        
      </section>

      <section className="contact wow fadeIn">
      <div className="container wow fadeInUp">
      <h2 className="section__title contact__title">Contact</h2>
      <div className="contact__button_area">
        <p className="contact__lead">お仕事のご相談や、ご依頼の方は<br className="sp-only" />こちらをクリック！</p>
        <button className="button contact__button_position"><Link className="button__link" onClick={() => {window.scrollTo(0, 0)}} to="/contact">お問い合わせページへ</Link></button>
      </div>

      </div>
    </section>
    </>

  )
}

export default About;