function addAudio() {
  audio = document.createElement("audio");
  src = document.createAttribute("src");
  id = document.createAttribute("id");
  src.value="https://i.cloudup.com/3gveeCqUD6.ogg";
  id.value="audio";
  audio.setAttributeNode(src);
  audio.setAttributeNode(id);
  document.body.append(audio);
}
addAudio();
console.log("Audio added!");

var mutationObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    console.log(mutation);
    document.getElementById("audio").play();
  });
});

mutationObserver.observe(document.documentElement, {attributes: true,
  characterData: true, childList: true, subtree: true});
