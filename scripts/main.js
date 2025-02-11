const localStorageNotesKey = "infos";
const indexStorage = "indexStorage";
let infos = [];
let indexStory = 0;
const divStory = document.querySelector(".story");
const btName = document.querySelector(".setName");
const inputName = document.querySelector(".name");
const boxName = document.querySelector(".boxName p");
const nextStoryBtn = document.querySelector(".nextStory");
function setItems() {
  localStorage.setItem(localStorageNotesKey, JSON.stringify(infos));
  window.location.reload();
}

btName.addEventListener("click", () => {
  btName.style.visibility = "hidden";
  inputName.style.visibility = "hidden";
  const nameValue = document.querySelector(".name").value;
  const name = [{ name1: nameValue, category: "nick" }];
  boxName.innerHTML = name;
  infos.push(name);
  setItems();
});

let existing = localStorage.getItem(localStorageNotesKey);
existing = JSON.parse(existing);
const item = existing[0];

if (localStorageNotesKey !== null) {
  btName.style.visibility = "hidden";
  inputName.style.visibility = "hidden";
  boxName.innerHTML = item[0].name1;
}

const stories = [
  {
        text: "A więc twoje imię to : " + item[0].name1 + "!",
        category: "name",
      },
      {
        text:
          "Miło mi, ja jestem Barnabasz. To teraz, kiedy już się znamy pora abyś pokazał mi co potrafisz!",
        category: "name",
      },
      {
        text: "Wyjdźmy na zewnątrz. Pora cię przetestować",
        category: "story",
      },
      {
        text: "Podnieś ten kamień. Dzięki temu ocenię twoją siłę!",
        category: "stats",
      },
];    
localStorage.setItem("stories",JSON.stringify(stories))
let existedIndex= localStorage.getItem("indexStorage");

if (localStorage.getItem(indexStorage) !== null){

let existedIndex= localStorage.getItem("indexStorage");
indexStory = JSON.parse(existedIndex);
indexStory--
divStory.innerHTML = stories[indexStory].text;
console.log("null get indexstorage !== null")
}
else{
  divStory.innerHTML = stories[indexStory].text
  indexStory++
  localStorage.setItem(indexStorage,JSON.stringify(indexStory));
  console.log("null get indexstorage == null")
}


function nextStory() {
  if (localStorage.getItem(indexStorage) == null) {
    existedIndex= localStorage.getItem("indexStorage");
    indexStory = JSON.parse(existedIndex);
    divStory.innerHTML = stories[indexStory].text;
    
    indexStory++
    localStorage.setItem(indexStorage,JSON.stringify(indexStory));
    console.log("null next indexstorage == null")
  }
  else{
    existedIndex= localStorage.getItem("indexStorage");
    indexStory = JSON.parse(existedIndex);
    divStory.innerHTML = stories[indexStory].text
    indexStory++
    localStorage.setItem(indexStorage,JSON.stringify(indexStory));
    console.log("null next indexstorage !== null")
  }
}
nextStoryBtn.addEventListener("click", nextStory);
