import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
// import { collection, addDoc2 } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
// import { getDocs2 } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";


// Firebase 구성 정보 설정
const firebaseConfig = {
  apiKey: "AIzaSyDsqks7XAwVmqZzbFFdLcqOyq-5Pasu8lo",
  authDomain: "sparta-56f56.firebaseapp.com",
  projectId: "sparta-56f56",
  storageBucket: "sparta-56f56.appspot.com",
  messagingSenderId: "479939475941",
  appId: "1:479939475941:web:0605d1671eba3b2afed70c",
  measurementId: "G-VEV4YBEC8M"
};


// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', function () {
  const formPage = document.getElementById('regmodal');
  const modalPage = document.getElementById('modalPage');

  // 등록 버튼 클릭 시 Form 페이지로 전환
  document.getElementById('btn-form').addEventListener('click', function () {
    formPage.classList.remove('hidden');
    modalPage.classList.add('hidden');
  });

  // 자세히 보기 버튼 클릭 시 Modal 페이지로 전환
  document.getElementById('button2').addEventListener('click', function () {
    formPage.classList.add('hidden');
    modalPage.classList.remove('hidden');
  });

  document.getElementById('closeButton').addEventListener('click', function () {
    modalPage.classList.add('hidden');
  });
  document.getElementById('closemodal').addEventListener('click', function () {
    formPage.classList.add('hidden');
  });
});


import { readURL } from './imageUtils.js';

document.addEventListener('DOMContentLoaded', function () {
  const fileInput = document.getElementById('file1');

  fileInput.addEventListener('change', function (event) {
    readURL(event.target);
  });
});

let imageId = document.getElementById('preview');
let imageSrc = imageId.src;
let nameId = document.getElementById('title');
let MbtiId = document.getElementById('MBTI');
let BLOGId = document.getElementById('BLOG');
let GITHUBId = document.getElementById('GITHUB');
let advantagesId = document.getElementById('advantages');
let collaborateId = document.getElementById('collaborate');

let saveBtn = document.getElementById('savebtn');

let buttonClick1 = async function () {
  let image = imageSrc.val();
  let title = nameId.val();
  let MBTI = MbtiId.val();
  let BLOG = BLOGId.val();
  let GITHUB = GITHUBId.val();
  let advantages = advantagesId.val();
  let collaborate = collaborateId.val();
  let doc = {
    'image': image,
    'title': title,
    'MBTI': MBTI,
    'BLOG': BLOG,
    'GITHUB': GITHUB,
    'advantages': advantages,
    'collaborate': collaborate,
  };
  await addDoc(collection(db, "users"), doc);
  alert('저장 완료!');
  window.location.reload();
}


let docs = await getDocs(collection(db, "users"));
docs.forEach((doc) => {
  let row = doc.data();

  let image = row['image'];
  let title = row['title'];
  let cardId = document.getElementById('card');

  let temp_html = `
    <div class="card-flip">
      <div class="card-inner">
        <div class="front-card">
          <img
            src="${image}"
            alt="card-img">
        </div>
        <div class="back-card">
          <img
            src="${image}"
            alt="card-img">
          <h4>${title}</h4>
          <a href="#" class="btn btn-primary" id="button2">자세히 보기</a>
        </div>
      </div>
    </div>`;
  cardId.append(temp_html);
});

saveBtn.addEventListener('click',buttonClick1);