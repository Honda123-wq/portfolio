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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                      <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                      <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                      <path d="M13 13H21V21H13V13Z" fill="currentColor" />
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
                  <a href="#" className="mt-3 text-green-500 items-center">
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
                        d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Site Dev
                  </h2>
                </div>
                <div>
                  <p>
                    中小企業のWebサイト構築を受注しています。商社や税理士事務所、業界団体等多岐にわたります。それぞれの案件は、綿密にヒアリングを行い、クライアントが納得するまで修正を繰り返します。自社サーバーを使用することで安価に抑えています。
                  </p>
                  <a href="#" className="mt-3 text-green-500 items-center">
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
                  <a href="#" className="mt-3 text-green-500 items-center">
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
