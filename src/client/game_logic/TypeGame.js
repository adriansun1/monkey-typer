class TypeGame {
  constructor() {
    this.book = '';
    this.readUpTo = 0;
    this.amountWordsToLoad = 30;
    this.currentWord;
    this.letterIndex = 0;
    this.wordIndex = 0;
    this.currentSection;
  }

  loadBook = book =>{
    this.book = book;
    this.readUpTo=0;
    this.loadSection();
  }

  breakWord = word => {
    this.currentWord = word.split("");
    this.letterIndex = 0;
    return this.currentWord;
  };

  loadSection = () => {
    //slices 20 words from book array and shifts to next section for next time it is called
    this.currentSection = this.book.slice(
      this.readUpTo,
      this.readUpTo + this.amountWordsToLoad
    );
    this.readUpTo += this.amountWordsToLoad;
    this.wordIndex = 0;
    this.breakWord(this.currentSection[0]);
    //STRETCH GOAL --------- ADD A CHECK FOR IF YOU REACH END OF BOOK
  };

  //check letter match
  //returns boolean for spans className changes
  checkLetter = letter => {
    if (letter === this.currentWord[this.letterIndex]) {
      //if end of word, go to next word
      if (this.letterIndex === this.currentWord.length - 1) {
        //if end of section, go to next section
        if (this.wordIndex === this.currentSection.length - 1) {
          this.loadSection();
        } else {
          //otherwise load next word
          this.wordIndex += 1;
          this.breakWord(this.currentSection[this.wordIndex]);
        }
      } else {
        this.letterIndex += 1;
      }
      return true;
    }
    return false;
  };
}
const TG = new TypeGame();
TG.loadBook("Please choose a book before you continue".split(''));

export default TG;
