function intro() {
  window.speechSynthesis.speak(
    new SpeechSynthesisUtterance(
      "hello and welcome to my brilliant website! my name is otto. i hope you enjoy everything my website has to offer... cheerio"
    )
  );
}