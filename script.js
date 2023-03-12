function getValue() {
    let stanceNo = document.getElementById("stance-no").value;
    console.log(stanceNo);
    thirukuralApi(stanceNo);
  }
  
  function randomBtn() {
    let stanceNo = Math.ceil(Math.random() * 1331);
    console.log(stanceNo, "stanceno");
    thirukuralApi(stanceNo);
  }
  let lang = "tamil";
  
  let displayData;
  function thirukuralApi(stanceNo) {
    fetch(`https://api-thirukkural.vercel.app/api?num=${stanceNo}`)
      .then((res) => res.json())
      .then((data) => (displayData = data))
      .then(() => displayDataFunc(displayData))
      .catch((e) => console.log(e));
  }
  
  function displayDataFunc(data) {
    let Snumber;
    let section;
    let chapterGroup;
    let chapter;
    let explanation;
    let line;
    if (lang === "english") {
      Snumber = data.number;
      section = data.sect_eng;
      chapterGroup = data.chapgrp_eng;
      chapter = data.chapgrp_eng;
      explanation = data.eng_exp;
      line = data.eng;
    } else {
      Snumber = data.number;
      section = data.sect_tam;
      chapterGroup = data.chapgrp_tam;
      chapter = data.chap_tam;
      explanation = data.tam_exp;
      line = `${data.line1}<br>${data.line2}`;
    }
    let lineNo = document.querySelector(".card-footer");
    lineNo.innerHTML = "Thirukural Stance : " + Snumber;
  
    let cbody = document.querySelector(".card-header");
    cbody.innerHTML =
      "பிரிவு : " +
      section +
      "<br>" +
      "குழு : " +
      chapterGroup +
      "<br>" +
      "அதிகாரம் : " +
      chapter +
      "<br>";
  
    let kural = document.getElementsByClassName("card-title");
    //   kural[0].innerHTML = data.line1 + "<br>" + data.line2;
    kural[0].innerHTML = line;
  
    kural[1].innerHTML = "விளக்கம் : " + explanation;
  }