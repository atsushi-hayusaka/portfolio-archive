const workContents = [
  {
    id: 1,
    title: 'ノーコードで作成したサイト(スクール課題)',
    tech: 'WordPress/Snow Monkey/CSS',
    description:
      'Wordpressテーマ（Snow Monkey）を使用して、ブロックエディタでサイトを作成しました。レスポンシブウェブデザインにも対応しています。',
    img1: require('../images/work_katsuo.jpg').default,
    img2: require('../images/works_thumbnail_katsuoguest.png').default,
    img3: require('../images/all-site-image_katsuoguest.png').default,
    url: 'http://katsuoguesthouse.atsushihayasaka.com/',
  },
  {
    id: 2,
    title: 'ノーコードで作成したサイト(スクール課題)',
    tech: 'WordPress/Lightning/CSS',
    description:
      'Wordpressテーマ（Lightning）を使用して、ブロックエディタでサイトを作成しました。レスポンシブウェブデザインにも対応しています。',
    img1: require('../images/work_naomeshi.jpg').default,
    img2: require('../images/works_thumbnail_kitchen.png').default,
    img3: require('../images/all-site-image_kitchen.png').default,
    url: 'http://naomeshi.atsushihayasaka.com/',
  },
  {
    id: 3,
    title: 'ランディングページ(スクール課題)',
    tech: 'HTML/CSS/JavaScript/jQuery',
    description:
      'デザインカンプからのコーディングを行いました。ナビゲーションをクリックするとその位置までスクロールする実装や、Wow.jsを利用してページがスクロールされると要素がふわっと表示されるようになっています。お問い合わせフォームでは、項目を全て入力すると送信ボタンの色が反転されるようになっています。',
    img1: require('../images/work_sobolon.jpg').default,
    img2: require('../images/works_thumbnail_sobolon.png').default,
    img3: require('../images/all-site-image_sobolon.png').default,
    url: 'https://sobolon.atsushihayasaka.com/',
  },
  {
    id: 4,
    title: 'デザインカンプからのコーディング(スクール課題)',
    tech: 'HTML/CSS/JavaScript/jQuery',
    description:
      'デザインカンプからのコーディングを行いました。jQueryでナビゲーションをクリックするとその位置までスクロール、アコーディオンを実装、プラグインでSwiperを利用して作りました。お問い合わせフォームでは必須のところを入力しないと送信ボタンをクリックできないようにしています。',
    img1: require('../images/work_daytora2nd.jpg').default,
    img2: require('../images/works_thumbnail_daytora2nd.png').default,
    img3: require('../images/all-site-image_daytora-2nd.png').default,
    url: 'https://daytora2nd.atsushihayasaka.com/',
  },
  {
    id: 5,
    title: 'イベントサイト(スクール課題)',
    tech: 'HTML/CSS/JavaScript/PHP/WordPress',
    description:
      'スクールの最終課題として、WordPressで複数ページのサイトを作成しました。COMMENTSやCASTの部分では繰り返しフィールドを実装し、管理画面から簡単に編集・追加ができるようにしています。',
    img1: require('../images/work_daytora_final.jpg').default,
    img2: require('../images/works_thumbnail_daytora-final.jpg').default,
    img3: require('../images/all-site-image_daytora-final.jpg').default,
    url: 'http://daytora3rd.atsushihayasaka.com/',
  },
  {
    id: 6,
    title: '大規模サイトの1ページ作成(非公開)',
    tech: 'HTML/CSS/JavaScript/git',
    description:
      'Web制作会社さんからホームページ1ページのリニューアルのお仕事を頂き、行いました。gitを使ってバージョン管理をし、IE対応であったのでVirtualBoxを用いて、Windowsの仮想環境を構築して作業を進めて行きました。\n納期が短いお仕事でしたがなんとか納期内に完成することができました。',
    img1: require('../images/noimage.jpg').default,
    img2: require('../images/noimage.jpg').default,
  },
  {
    id: 7,
    title: 'イベントLP作成',
    tech: 'HTML/CSS/git',
    description:
      'Web制作会社さんからランディングページ作成のお仕事を頂き、デザインカンプからコーディングを行いました。',
    img1: require('../images/noimage.jpg').default,
    img2: require('../images/noimage.jpg').default,
  },

  {
    id: 8,
    title: '海外向け仮想通貨サイト',
    tech: 'HTML/CSS/JavaScript/PHP/WordPress',
    description:
      'サイトに使われる文章の英訳と、デザインカンプからコーポレートサイトのTOPページを作成しました。英訳は海外サイトを参考にし、自然な英語になるよう心がけました。List of ContributersとCompanyのセクションでは繰り返しフィールドを実装し、管理画面から簡単に編集・追加ができるようにしています。また、YouTube動画も管理画面からURLを差し替えることで簡単に変更できるようにしています。お問い合わせフォームはMW WP Formを利用し、自動返信に対応しています。',
    img1: require('../images/work_connect_hearts.jpg').default,
    img2: require('../images/works_thumbnail_connect_hearts.png').default,
    img3: require('../images/all-site-image_connect-heart.png').default,
    url: 'https://connecthearts.atsushihayasaka.com/',
  },
  {
    id: 9,
    title: 'ポートフォリオサイト',
    tech: 'HTML/CSS/JavaScript/React',
    description:
      ' AdobeXDを使用して、デザインからコーディングまで全て行いました。Reactを利用したSPAのサイトとなっていて、react-router-domでページ切り替えが出来るように実装しました。作品情報をオブジェクトで保管しており、map()メソッドで、Homeのスライダー部分とWorksへの写真追加、作品詳細ページ（現ページ）が自動生成されるようになっています。お問い合わせフォームではuseStateを利用し、送信が押された時に必須部分が入力されていなければエラー表示されるようになっています。',
    img1: require('../images/work_portfolio.png').default,
    img2: require('../images/works_thumbnail_portfolio.png').default,
    img3: require('../images/all-site-image_portfolio.png').default,
    url: 'http://portfolio.atsushihayasaka.com/',
  },
];

workContents.reverse();
export default workContents;
