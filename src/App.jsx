import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">NisshoCode</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-400 duration-300">
              About
            </a>
            <a href="#skills" className="mr-5 hover:text-blue-400 duration-300">
              Skills
            </a>
            <a href="#blog" className="hover:text-blue-400 duration-300">
              Blog
            </a>
          </nav>
        </div>
      </header>
      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
              NisshoCode
              <br />
              my Portfolio WebSite
            </h1>
            <p className="mb-8 leading-relaxed">
              現在、Webエンジニアとしてデビューしたてのほやほやです。得意な言語はHTML,CSS,JavaScript,TypeScript,PHP,SQL,ReactなどWeb全般とPhythonです。自身が作ったものを公開しておりますので、ぜひ見ていってください。
            </p>
            <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
              Contact Me
            </button>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./img/myPicture.png" alt="" />
          </div>
        </div>
      </section>
      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">
              About Me
            </h1>
            <p className="pb-10 ">
              これまでマーケティング業界に数年財務分析を行っていました。現在はIT業界でシステム構築に従事しながら副業としてWebサイトやWebAppを個人として受注していまs。また投資やコンサルティングも積極的に行っており、ご相談されたい方はコンタクトお待ちしております。
            </p>
            <p>
              以下に個人としての成果物を公開しています。主にSNSなどのChatアプリの構築をReactのJSやTSで実装しています。また、Phythonを使ってAIによる株価の予想サイトを構築しました。また数件の事業所のWebサイトの構築など多岐にわたります。
            </p>
          </div>
          {/* カードのdivタグ */}
          <div className="flex flex-wrap">
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                   <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="24" height="24" viewBox="0 0 1280.000000 824.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,824.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M4500 8234 c-800 -51 -1376 -164 -1985 -389 -1292 -478 -2181 -1310
-2429 -2275 -191 -747 11 -1508 575 -2165 229 -266 564 -548 892 -749 l78 -48
-27 -47 c-53 -93 -194 -298 -267 -389 -258 -321 -567 -618 -1080 -1037 -145
-119 -227 -193 -241 -218 -21 -37 -21 -38 -2 -52 28 -21 157 -19 291 4 722
125 1656 487 2652 1028 l183 99 142 -32 c290 -64 551 -105 898 -141 140 -14
266 -18 625 -18 459 0 567 6 885 45 1514 191 2784 844 3454 1778 229 318 369
644 437 1010 26 138 37 479 20 619 -87 722 -504 1380 -1211 1909 -780 584
-1794 940 -2985 1049 -158 15 -774 28 -905 19z"/>
<path d="M10106 4738 c-73 -597 -285 -1093 -678 -1586 -113 -141 -384 -417
-523 -533 -502 -420 -1091 -739 -1783 -969 -111 -37 -205 -69 -208 -72 -6 -7
198 -188 281 -248 289 -212 605 -371 968 -489 811 -263 1774 -277 2593 -38
l81 24 161 -98 c355 -217 731 -410 1032 -531 215 -87 533 -179 666 -194 63 -6
104 5 104 29 0 24 -46 75 -121 138 -226 187 -311 264 -441 398 -164 169 -258
293 -328 436 -46 94 -90 231 -90 281 0 15 26 42 93 95 50 40 144 125 207 188
427 428 601 941 495 1455 -111 535 -535 1025 -1180 1362 -367 192 -826 335
-1276 398 l-47 7 -6 -53z"/>
</g>
</svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    SNS Chat App
                  </h2>
                </div>
                <div>
                  <p>
                    ReactとJavaScriptで投稿機能つきのChatアプリ。仕様はReact,JavaScript,html,css,firebase,AWS。ログイン・ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り投稿機能を実装しています。
                  </p>
                  <a href="https://smilechat-home.web.app" className="mt-3 text-green-500 items-center">
                    もっと見る→
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 8.88916C13.6569 8.88916 15 10.2323 15 11.8892C15 13.1954 14.1652 14.3066 13 14.7185V19.8892H11V14.7185C9.83481 14.3066 9 13.1954 9 11.8892C9 10.2323 10.3431 8.88916 12 8.88916ZM12 10.8892C12.5523 10.8892 13 11.3369 13 11.8892C13 12.4414 12.5523 12.8892 12 12.8892C11.4477 12.8892 11 12.4414 11 11.8892C11 11.3369 11.4477 10.8892 12 10.8892Z"
                        fill="currentColor"
                      />
                      <path
                        d="M7.05019 6.93938C5.78348 8.20612 5 9.9561 5 11.8891C5 14.0666 5.99426 16.0119 7.55355 17.2957L8.97712 15.8721C7.7757 14.9589 7 13.5146 7 11.8891C7 10.5084 7.55962 9.25841 8.46441 8.35359L7.05019 6.93938Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.5355 8.35348C16.4403 9.25831 17 10.5083 17 11.8891C17 13.5146 16.2243 14.959 15.0228 15.8722L16.4463 17.2958C18.0057 16.012 19 14.0666 19 11.8891C19 9.95604 18.2165 8.20602 16.9497 6.93927L15.5355 8.35348Z"
                        fill="currentColor"
                      />
                      <path
                        d="M1 11.8891C1 8.85152 2.23119 6.10155 4.22176 4.11095L5.63598 5.52516C4.00733 7.15383 3 9.40381 3 11.8891C3 14.3743 4.00733 16.6243 5.63597 18.2529L4.22175 19.6672C2.23119 17.6766 1 14.9266 1 11.8891Z"
                        fill="currentColor"
                      />
                      <path
                        d="M19.7781 19.6673C21.7688 17.6767 23 14.9266 23 11.8891C23 8.85147 21.7688 6.10145 19.7781 4.11084L18.3639 5.52505C19.9926 7.15374 21 9.40376 21 11.8891C21 14.3744 19.9926 16.6244 18.3639 18.2531L19.7781 19.6673Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    AI Finance
                  </h2>
                </div>
                <div>
                  <p>
                    AIを使った株やビットコインのデータの取得、分析、1か月後の予測アプリです。AIはscikit-learnの回帰で実装しています。主にPhythondeでコーディングを行い、フレームワークはstreamlitを使用しています。株や暗号資産の売買にぜひお役立てください。
                  </p>
                  <a href="https://predictstock-glyckz88bholtxqe5gtbbg.streamlit.app" className="mt-3 text-green-500 items-center">
                    もっと見る→
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4695 11.2929C15.0789 10.9024 14.4458 10.9024 14.0553 11.2929C13.6647 11.6834 13.6647 12.3166 14.0553 12.7071C14.4458 13.0976 15.0789 13.0976 15.4695 12.7071C15.86 12.3166 15.86 11.6834 15.4695 11.2929Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16.1766 9.17156C16.5671 8.78103 17.2003 8.78103 17.5908 9.17156C17.9813 9.56208 17.9813 10.1952 17.5908 10.5858C17.2003 10.9763 16.5671 10.9763 16.1766 10.5858C15.7861 10.1952 15.7861 9.56208 16.1766 9.17156Z"
                        fill="currentColor"
                      />
                      <path
                        d="M19.7121 11.2929C19.3216 10.9024 18.6885 10.9024 18.2979 11.2929C17.9074 11.6834 17.9074 12.3166 18.2979 12.7071C18.6885 13.0976 19.3216 13.0976 19.7121 12.7071C20.1027 12.3166 20.1027 11.6834 19.7121 11.2929Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16.1766 13.4142C16.5671 13.0237 17.2003 13.0237 17.5908 13.4142C17.9813 13.8048 17.9813 14.4379 17.5908 14.8284C17.2003 15.219 16.5671 15.219 16.1766 14.8284C15.7861 14.4379 15.7861 13.8048 16.1766 13.4142Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6 13H4V11H6V9H8V11H10V13H8V15H6V13Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 5C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19H17C20.866 19 24 15.866 24 12C24 8.13401 20.866 5 17 5H7ZM17 7H7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    ワニワニパニック風ゲームアプリ
                  </h2>
                </div>
                <div>
                  <p>
                    HTML・CSS・JavaScriptを使用し、
                    「ワニワニパニック」風のミニゲームを制作しました。
                    ワニがランダムに出現し、
                    クリックで素早く叩くことでスコアが加算される仕様です。
                    また、Pythonを利用して効果音を実装し、
                    より臨場感のあるゲーム体験を提供しています。
                  </p>
                  <a
                    href="https://wani-game-yoshiko-hondas-projects.vercel.app"
                    className="mt-3 text-green-500 items-center"
                  >
                    もっと見る→
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                        fill="currentColor"
                      />
                      <path
                        d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    ナイキシューズのクローンサイト
                  </h2>
                </div>
                <div>
                  <p>
                    HTMLとCSS、JavascriptのみでNikeのShoesサイトを作ってみました。パララックスやカラー変更関数などを使って、モダンなサイトに仕上がっています。Reactを使わずに実装、デプロイはVercelで行っています。
                  </p>
                  <a
                    href="https://nike-clone-cyan.vercel.app"
                    className="mt-3 text-green-500 items-center"
                  >
                    もっと見る→
                  </a>
                </div>
              </div>
            </div>
           <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82801 15.5621 3.75165L4.95549 14.3582L10.6123 20.0151L21.2189 9.4085C22.1426 8.48486 22.338 7.1088 21.8053 5.99367L22.6777 5.12132C23.0682 4.7308 23.0682 4.09763 22.6777 3.70711L21.2635 2.29289ZM16.9955 10.8035L10.6123 17.1867L7.78392 14.3582L14.1671 7.9751L16.9955 10.8035ZM18.8138 8.98525L19.8047 7.99429C20.1953 7.60376 20.1953 6.9706 19.8047 6.58007L18.3905 5.16586C18 4.77534 17.3668 4.77534 16.9763 5.16586L15.9853 6.15683L18.8138 8.98525Z"
                        fill="currentColor"
                      />
                      <path
                        d="M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    簡単メモアプリ
                  </h2>
                </div>
                <div>
                  <p>
                    ReactとJavaScriptで簡単なメモアプリを作りました。デプロイ先はAWSを使用しています。主にStateの管理を注意して実装しています。初心者にはちょうど良いコードの内容になっていて、簡単に実装できています。
                  </p>
                  <a
                    href="https://memo-app-taupe.vercel.app/"
                    className="mt-3 text-green-500 items-center"
                  >
                    もっと見る→
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4695 11.2929C15.0789 10.9024 14.4458 10.9024 14.0553 11.2929C13.6647 11.6834 13.6647 12.3166 14.0553 12.7071C14.4458 13.0976 15.0789 13.0976 15.4695 12.7071C15.86 12.3166 15.86 11.6834 15.4695 11.2929Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16.1766 9.17156C16.5671 8.78103 17.2003 8.78103 17.5908 9.17156C17.9813 9.56208 17.9813 10.1952 17.5908 10.5858C17.2003 10.9763 16.5671 10.9763 16.1766 10.5858C15.7861 10.1952 15.7861 9.56208 16.1766 9.17156Z"
                        fill="currentColor"
                      />
                      <path
                        d="M19.7121 11.2929C19.3216 10.9024 18.6885 10.9024 18.2979 11.2929C17.9074 11.6834 17.9074 12.3166 18.2979 12.7071C18.6885 13.0976 19.3216 13.0976 19.7121 12.7071C20.1027 12.3166 20.1027 11.6834 19.7121 11.2929Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16.1766 13.4142C16.5671 13.0237 17.2003 13.0237 17.5908 13.4142C17.9813 13.8048 17.9813 14.4379 17.5908 14.8284C17.2003 15.219 16.5671 15.219 16.1766 14.8284C15.7861 14.4379 15.7861 13.8048 16.1766 13.4142Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6 13H4V11H6V9H8V11H10V13H8V15H6V13Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 5C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19H17C20.866 19 24 15.866 24 12C24 8.13401 20.866 5 17 5H7ZM17 7H7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    簡単クイズアプリ
                  </h2>
                </div>
                <div>
                  <p>
                    ReactとJavaScriptクイズで簡単なアプリを作りました。デプロイ先はAWSを使用しています。主に状態の管理と全般の管理を注意して実装しています。初心者にはちょうど良いコードの内容となっています。
                  </p>
                  <a
                    href="https://quiz-app-two-teal.vercel.app"
                    className="mt-3 text-green-500 items-center"
                  >
                    もっと見る→
                  </a>
                </div>
              </div>
            </div>
         <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 16H11V18H13V16Z" fill="currentColor" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4ZM7 4H17V20H7L7 4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    ＬＩＮＥ風双方向メッセージアプリ
                  </h2>
                </div>
                <div>
                  <p>
                    React と Node.js
                    を使って、LINE風の双方向メッセージアプリを作成しました。Firebase
                    Authentication と Firestore
                    を利用し、リアルタイムでメッセージのやり取りができます。
                  </p>
                  <a
                    href="https://lineclone-home.web.app"
                    className="mt-3 text-green-500 items-center"
                  >
                    もっと見る→
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                   <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82801 15.5621 3.75165L4.95549 14.3582L10.6123 20.0151L21.2189 9.4085C22.1426 8.48486 22.338 7.1088 21.8053 5.99367L22.6777 5.12132C23.0682 4.7308 23.0682 4.09763 22.6777 3.70711L21.2635 2.29289ZM16.9955 10.8035L10.6123 17.1867L7.78392 14.3582L14.1671 7.9751L16.9955 10.8035ZM18.8138 8.98525L19.8047 7.99429C20.1953 7.60376 20.1953 6.9706 19.8047 6.58007L18.3905 5.16586C18 4.77534 17.3668 4.77534 16.9763 5.16586L15.9853 6.15683L18.8138 8.98525Z"
                        fill="currentColor"
                      />
                      <path
                        d="M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    簡単メモアプリ（React + TypeScript）
                  </h2>
                </div>
                <div>
                  <p>
                    シンプルなメモアプリです！
                    React・TypeScript・カスタムフックの学習を目的に制作しました。
                  </p>
                  <a
                    href="https://memo-app-ts.vercel.app/"
                    className="mt-3 text-green-500 items-center"
                  >
                    もっと見る→
                  </a>
                </div>
              </div>
            </div>
              <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Redux　簡単ショッピングアプリ構築（React + Redux Toolkit +
                    TypeScript）
                  </h2>
                </div>
                <div>
                  <p>
                    React × Redux
                    の基礎をしっかり身につけるために制作したシンプルなRedux学習用アプリです。
                    Redux Toolkitを使って、状態管理の導入方法を学習しました。
                  </p>
                  <a
                    href="https://redux-basic-app-ten.vercel.app/"
                    className="mt-3 text-green-500 items-center"
                  >
                    もっと見る→
                  </a>
                </div>
              </div>
            </div>
             <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82801 15.5621 3.75165L4.95549 14.3582L10.6123 20.0151L21.2189 9.4085C22.1426 8.48486 22.338 7.1088 21.8053 5.99367L22.6777 5.12132C23.0682 4.7308 23.0682 4.09763 22.6777 3.70711L21.2635 2.29289ZM16.9955 10.8035L10.6123 17.1867L7.78392 14.3582L14.1671 7.9751L16.9955 10.8035ZM18.8138 8.98525L19.8047 7.99429C20.1953 7.60376 20.1953 6.9706 19.8047 6.58007L18.3905 5.16586C18 4.77534 17.3668 4.77534 16.9763 5.16586L15.9853 6.15683L18.8138 8.98525Z"
                        fill="currentColor"
                      />
                      <path
                        d="M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Reactで簡単ToDoアプリ
                  </h2>
                </div>
                <div>
                  <p>
                    ReactとJavaScriptで簡単なToDoアプリを作りました。タスクの追加・タスクの完了チェック（チェックボックス）・完了したタスクの削除・残りタスク数の表示の機能を実装しています
                  </p>
                  <a
                    href="https://react-todo-gilt-phi.vercel.app/"
                    className="mt-3 text-green-500 items-center"
                  >
                    もっと見る→
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82801 15.5621 3.75165L4.95549 14.3582L10.6123 20.0151L21.2189 9.4085C22.1426 8.48486 22.338 7.1088 21.8053 5.99367L22.6777 5.12132C23.0682 4.7308 23.0682 4.09763 22.6777 3.70711L21.2635 2.29289ZM16.9955 10.8035L10.6123 17.1867L7.78392 14.3582L14.1671 7.9751L16.9955 10.8035ZM18.8138 8.98525L19.8047 7.99429C20.1953 7.60376 20.1953 6.9706 19.8047 6.58007L18.3905 5.16586C18 4.77534 17.3668 4.77534 16.9763 5.16586L15.9853 6.15683L18.8138 8.98525Z"
                        fill="currentColor"
                      />
                      <path
                        d="M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    TypeScriptで簡単ToDoアプリ(TypeScript版)
                  </h2>
                </div>
                <div>
                  <p>
                    React と TypeScript を使用して、シンプルで機能的な ToDo
                    アプリを作成しました。タスクの追加・チェック・削除などの基本機能を備えた、学習用にも最適なミニアプリです。
                  </p>
                  <a
                    href="https://todo-pika-pika.vercel.app/"
                    className="mt-3 text-green-500 items-center"
                  >
                    もっと見る→
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      fill="#000000"
                      height="24"
 		　　　 width="24"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                      xml:space="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M411.096,232.649c-4.88-3.415-9.948-6.644-15.177-9.695c1.419-2.913,2.858-5.909,4.321-9.013
			c20.84-44.184,40.175-95.811,44.494-114.509c10.07-43.598-17.209-87.265-60.81-97.336C377.904,0.705,371.741,0,365.608,0
			c-37.972,0-70.466,25.868-79.019,62.904c-4.473,19.365-9.766,75.404-10.259,125.147c-6.722-0.436-13.501-0.665-20.329-0.665
			c-6.828,0-13.607,0.23-20.329,0.665c-0.494-49.743-5.788-105.783-10.259-125.147C216.857,25.868,184.363,0,146.391,0
			c-6.134,0-12.296,0.705-18.315,2.095c-43.6,10.071-70.878,53.736-60.81,97.336c4.319,18.698,23.654,70.324,44.494,114.509
			c1.464,3.104,2.903,6.1,4.321,9.013c-5.229,3.051-10.298,6.28-15.177,9.695c-43.9,30.732-68.077,72.297-68.077,117.044
			c0,44.747,24.177,86.314,68.077,117.044C142.603,495.925,197.683,512,256,512s113.397-16.075,155.096-45.263
			c43.9-30.732,68.077-72.297,68.077-117.044C479.173,304.946,454.996,263.38,411.096,232.649z M168.084,344.903
			c-11.205,0-20.288-9.082-20.288-20.288c0-11.206,9.084-20.288,20.288-20.288c11.205,0,20.288,9.082,20.288,20.288
			C188.372,335.821,179.288,344.903,168.084,344.903z M255.999,424.083c0,0-27.051-13.526-27.051-27.051
			c0-7.47,6.055-13.526,13.526-13.526h13.526h13.526c7.47,0,13.526,6.055,13.526,13.526
			C283.05,410.558,255.999,424.083,255.999,424.083z M343.915,344.903c-11.205,0-20.288-9.082-20.288-20.288
			c0-11.206,9.084-20.288,20.288-20.288c11.205,0,20.288,9.082,20.288,20.288C364.204,335.821,355.121,344.903,343.915,344.903z"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    昼夜アニメーション
                  </h2>
                </div>
                <div>
                  <p>
                    このアプリは、昼と夜が自動で切り替わるアニメーションに、鳥や流れ星、そしてマスコットキャラの「マリーちゃん（🐰）」が登場する癒し系作品です。マリーちゃんはランダムなタイミングで山の後ろからぴょこんと顔を出し、
                    かわいいセリフを吹き出しでつぶやいてくれます！🎀✨
                  </p>
                  <a
                    href="https://sun-moon-rabbit.vercel.app/"
                    className="mt-3 text-green-500 items-center"
                  >
                    もっと見る→
                  </a>
                </div>
              </div>
            </div>
		 <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 1280.000000 1180.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <metadata>
                        Created by potrace 1.15, written by Peter Selinger
                        2001-2017
                      </metadata>
                      <g
                        transform="translate(0.000000,1180.000000) scale(0.100000,-0.100000)"
                        fill="#000000"
                        stroke="none"
                      >
                        <path
                          d="M7595 11794 c-16 -2 -68 -9 -115 -15 -149 -19 -360 -79 -462 -130
-35 -18 -68 -19 -548 -19 -427 0 -523 -3 -587 -16 -163 -33 -299 -110 -419
-235 -104 -110 -130 -152 -138 -229 -155 -1509 -193 -2060 -183 -2650 12 -721
90 -1363 206 -1716 88 -266 160 -455 222 -584 l71 -145 38 -225 c21 -124 41
-259 45 -300 9 -101 -16 -265 -59 -394 -45 -135 -145 -355 -166 -366 -10 -5
-40 -6 -71 -1 -80 13 -97 3 -159 -97 -94 -148 -166 -239 -212 -266 -24 -14
-99 -41 -167 -61 -174 -50 -294 -100 -538 -225 -158 -81 -228 -112 -275 -120
-694 -124 -1362 -381 -1873 -723 -787 -526 -1430 -1331 -2108 -2638 -54 -102
-97 -189 -97 -193 0 -3 40 14 90 39 49 25 136 66 192 91 1241 553 2624 719
4080 489 714 -113 1374 -309 2163 -640 776 -327 1250 -441 1755 -421 457 17
906 152 1342 403 l76 44 -99 169 c-148 254 -258 462 -365 689 l-96 204 22 108
c12 59 25 155 29 212 6 86 13 115 40 172 46 98 130 220 243 351 l98 113 0 217
0 218 127 195 c70 108 169 260 219 338 l93 142 88 -30 c205 -70 465 -136 678
-173 250 -43 720 -67 971 -48 158 11 203 31 305 132 111 110 167 252 156 395
-6 76 -15 106 -122 393 l-72 193 49 44 c27 25 80 59 116 77 37 17 69 33 70 34
11 7 -68 130 -128 200 l-70 82 98 72 c53 40 99 74 101 76 2 2 -13 40 -32 86
-73 171 -106 342 -114 578 -2 91 -1 189 4 219 l8 55 273 76 c192 54 277 82
288 96 66 84 99 165 115 283 l11 78 -57 93 c-189 312 -370 543 -639 818 l-160
163 25 23 c13 13 103 93 199 177 198 172 189 156 189 319 1 225 -80 374 -246
452 -35 17 -63 34 -63 39 0 4 -18 232 -40 506 -22 274 -67 840 -100 1258 -33
418 -62 791 -66 828 -6 65 -9 73 -64 140 -128 159 -292 260 -493 301 -61 13
-147 16 -434 16 -391 0 -417 2 -743 66 -384 74 -356 73 -1125 67 -609 -5 -706
-3 -830 12 -131 16 -493 28 -560 19z m202 -7349 c77 -23 136 -74 173 -149 29
-59 32 -72 28 -138 -5 -87 -26 -137 -84 -194 -47 -48 -133 -84 -199 -84 -66 0
-152 36 -199 84 -58 57 -79 107 -84 194 -4 66 -1 79 27 137 37 74 89 120 165
147 63 22 108 22 173 3z"
                        />
                      </g>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    モンスター打倒ゲーム
                  </h2>
                </div>
                <div>
                  <p>
                    画面に現れるモンスター（フランケンシュタイン）をクリックして撃退しよう！ヒットすると💥爆発アニメーション
                    & 怪しいセリフが飛び出す！？
                    コウモリが飛んだり、骸骨が「呼んだ？」と横から乱入したり…👻🦇
                    フランケンを倒すたびに、**血がたまるメスシリンダー**が1本ずつ満たされていく！5本たまると…**不老不死の薬が完成！？**（勝利メッセージあり）んはランダムなタイミングで山の後ろからぴょこんと顔を出し、
                    かわいいセリフを吹き出しでつぶやいてくれます！🎀✨
                  </p>
                  <a
                    href="https://monster-game-eta.vercel.app/"
                    className="mt-3 text-green-500 items-center"
                  >
                    もっと見る→
                  </a>
                </div>
              </div>
            </div>  
		   <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 640.000000 1280.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <metadata>
                        Created by potrace 1.15, written by Peter Selinger
                        2001-2017
                      </metadata>
                      <g
                        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                        fill="#f887ac"
                        stroke="none"
                      >
                        <path
                          d="M3220 12718 c-28 -163 -98 -332 -198 -481 -65 -96 -101 -140 -280
-341 -361 -405 -505 -641 -616 -1016 -120 -405 -128 -827 -20 -1150 150 -448
525 -783 955 -854 l36 -6 8 -241 c4 -132 5 -242 3 -245 -3 -2 -149 56 -324
130 -176 73 -329 136 -340 140 -24 7 -18 148 -49 -1294 -8 -377 -17 -777 -20
-890 -3 -113 -12 -524 -20 -915 -8 -390 -20 -899 -25 -1130 -6 -231 -15 -640
-20 -910 -6 -269 -15 -679 -20 -910 -6 -231 -15 -634 -20 -895 -5 -261 -14
-680 -20 -930 -5 -250 -11 -520 -12 -600 l-3 -145 510 -11 c281 -6 632 -15
781 -18 l271 -7 7 268 c19 789 27 1135 36 1588 6 275 15 682 20 905 5 223 14
626 20 895 10 501 32 1489 50 2265 6 239 15 658 21 930 5 272 13 644 17 825 6
258 5 332 -5 341 -6 6 -156 71 -333 144 l-320 133 0 101 c0 56 -3 185 -7 287
l-6 187 54 7 c210 29 448 148 611 308 271 264 407 619 408 1062 0 330 -71 659
-200 920 -71 145 -146 245 -320 430 -215 227 -316 368 -413 575 -56 120 -133
345 -172 505 -15 61 -28 111 -30 113 -1 1 -8 -31 -15 -70z"
                        />
                      </g>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    ろうそくを消そう
                  </h2>
                </div>
                <div>
                  <p>
                    **ブラウザで遊べる「ろうそく吹き消し」アプリ**です！
                    カメラでモーションを検知して、ふぅ〜とするとろうそくが消えるよ！✨
                    2ステージ構成になっていて、和音も鳴る「音の演出」付き🎶
                  </p>
                  <a
                    href="https://candle-stage.vercel.app/"
                    className="mt-3 text-green-500 items-center"
                  >
                    もっと見る→
                  </a>
                </div>
              </div>
            </div>
		    <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                        fill="currentColor"
                      />
                      <path
                        d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    E-commerce Fashion
                  </h2>
                </div>
                <div>
                  <p>
                    アパレルのショッピングサイトです。APIはFakeShopAPIを使用し、疑似的なショッピングサイトを構築しました。React, HTML, CSS, JavasCriptで実装しています。決済機能も実装しています。
                  </p>
                  <a
                    href="https://ec-shop-stripe.vercel.app"
                    className="mt-3 text-green-500 items-center"
                  >
                    もっと見る→
                  </a>
                </div>
              </div>
            </div>
		   <div className="md:w-1/3 p-4">
  <div className="bg-gray-100 rounded-lg p-8">
    <div className="flex items-center mb-3">
      <div className="bg-green-500 text-white rounded-full">
        <svg
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style={{ width: "24", height: "24", opacity: 1 }}
          xmlSpace="preserve"
        >
          <g>
            <path fill="#4B4B4B" d="..." />
          </g>
          <path
            className="st0"
            d="M115.958,269.922c16.999-10.12,36.842-15.916,58.04-15.916c2.556,0,5.127,0.078,7.682,0.234c7.199-24.681,20.957-46.355,39.203-63.12c-3.49-39.437-36.562-70.32-76.879-70.32c-42.647,0-77.207,34.56-77.207,77.199C66.798,230.766,87.194,258.719,115.958,269.922z"
            fill="#4B4B4B"
          />
          <rect
            x="135.652"
            y="54.002"
            className="st0"
            width="16.696"
            height="45.911"
            fill="#4B4B4B"
          />
          <polygon
            className="st0"
            points="102.184,108.88 79.232,69.116 64.772,77.467 87.724,117.232"
            fill="#4B4B4B"
          />
          <polygon
            className="st0"
            points="15.114,133.233 54.878,156.185 63.23,141.726 23.466,118.774"
            fill="#4B4B4B"
          />
          <polygon
            className="st0"
            points="45.919,189.654 0,189.654 0,206.35 45.919,206.342"
            fill="#4B4B4B"
          />
          <polygon
            className="st0"
            points="15.114,262.77 23.466,277.23 63.23,254.27 54.878,239.811"
            fill="#4B4B4B"
          />
          <rect
            x="240.478"
            y="114.523"
            transform="matrix(0.4998 0.8661 -0.8661 0.4998 243.5358 -146.7501)"
            className="st0"
            width="16.694"
            height="45.913"
            fill="#4B4B4B"
          />
          <polygon
            className="st0"
            points="223.228,77.467 208.776,69.116 185.817,108.88 200.269,117.232"
            fill="#4B4B4B"
          />
          <path
            className="st0"
            d="M431.997,298c-0.031,0-0.062,0.008-0.101,0.008c0.054-1.332,0.101-2.665,0.101-4.004C431.997,229.932,380.064,178,316,178c-60.012,0-109.382,45.575-115.388,104.006c-8.414-2.602-17.342-4.005-26.614-4.005C124.294,278.001,84,318.295,84,368c0,49.704,40.294,89.998,89.998,89.998h257.999c44.182,0,80.003-35.814,80.003-79.995C512,333.814,476.178,298,431.997,298z"
            fill="#4B4B4B"
          />
        </svg>
      </div>
      <h2 className="text-gray-900 text-lg font-medium ml-2">
        天気App
      </h2>
    </div>
    <div>
      <p>
        ReactとJavaScriptで、地域を入力すると現在の天気が表示されるアプリです。APIはOpen Weather Mapを使用しています。国、地域、都市名を英語で入力すると表示されます。デプロイはVercelです。
      </p>
      <a
        href="https://weather-app-coral-beta-80.vercel.app"
        className="mt-3 text-green-500 items-center"
      >
        もっと見る→
      </a>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* left side */}
          <div className="mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
            <img src="./img/pc.jpg" alt="" className="rounded" />
          </div>
          {/* right side */}
          <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left ">
              My Skills
            </h1>

            {/* Skill 1 */}
            <h2>HTML</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-green-600 text-xs leading-none py-1 text-center text-white "
                style={{ width: "85%" }}
              >
                85%
              </div>
            </div>

            {/* Skill 2 */}
            <h2>CSS</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-orange-600 text-xs leading-none py-1 text-center text-white "
                style={{ width: "75%" }}
              >
                75%
              </div>
            </div>

            {/* Skill 3 */}
            <h2>JavaScript</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-pink-600 text-xs leading-none py-1 text-center text-white "
                style={{ width: "77%" }}
              >
                77%
              </div>
            </div>

            {/* Skill 4 */}
            <h2>React</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-blue-600 text-xs leading-none py-1 text-center text-white "
                style={{ width: "60%" }}
              >
                60%
              </div>
            </div>
            {/* Skill 5 */}
            <h2>TypeScript</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-gray-600 text-xs leading-none py-1 text-center text-white"
                style={{ width: "40%" }}
              >
                40%
              </div>
            </div>
            {/* Skill 6 */}
            <h2>PHP</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-purple-600 text-xs leading-none py-1 text-center text-white"
                style={{ width: "81%" }}
              >
                81%
              </div>
            </div>
            {/* Skill 7 */}
            <h2>Phython</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-yellow-600 text-xs leading-none py-1 text-center text-white"
                style={{ width: "80%" }}
              >
                80%
              </div>
            </div>
          </div>{" "}
          {/* right side div閉じ */}
        </div>{" "}
        {/* container div閉じ */}
      </section>
    </>
  );
}

export default App;
