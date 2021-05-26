import logo from './logo.svg';
import './App.css';
import {VideosView, VideosController} from './view/VideosView'
import { VideoRepository } from './domain/VideoRepository';

function App() {
  return (
<html lang="kr">
  <head>
    <meta charset="UTF-8" />
    <title>👩🏻‍💻 유튜브 강의실</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="./src/css/index.css" />
  </head>
  <body>
    <div id="app">
    
      <div class="modal">
        <div class="modal-inner p-8">
          <button class="modal-close">
            <svg viewbox="0 0 40 40">
              <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <header>
            <h2 class="text-center">🔎 유튜브 검색</h2>
          </header>
          <form class="d-flex">
            <input type="text" class="w-100 mr-2 pl-2" placeholder="검색" />
            <button type="button" class="btn bg-cyan-500">검색</button>
          </form>
          <section class="mt-2">
            <span class="text-gray-700">최근 검색어: </span>
          </section>
          <section>
            <div class="d-flex justify-end text-gray-500">
              저장된 영상 갯수: 0개
            </div>
          </section>
        </div>
      </div>
    </div>
     <VideosView/>
    <script type="module" src="./src/js/index.js"></script>
  </body>
</html>
  );
}

export default App;
