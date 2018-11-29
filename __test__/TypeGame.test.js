import TypeGame from "../src/client/game_logic/TypeGame.js";
import { exec } from "child_process";

describe("TYPE GAME TESTING", () => {
  let tg;
  beforeEach(() => {
    tg = new TypeGame(["butt", "cat", "dog"]);
    tg.amountWordsToLoad = 2;
  });

  describe("all properties loaded properly", () => {
    it("should load in book", () => {
      expect(tg.book[0]).toEqual("butt");
      expect(tg.book[1]).toEqual("cat");
      expect(tg.book[2]).toEqual("dog");
    });
    it("should load first section", () => {
      tg.loadSection();
      expect(tg.currentSection[0]).toEqual("butt");
      expect(tg.currentSection[1]).toEqual("cat");
      expect(tg.currentSection[2]).toEqual(undefined);
      expect(tg.currentWord[0]).toEqual("b");
    });
    it("should move index when typed into correctly, then change words when end is reached", () => {
      tg.loadSection();
      expect(tg.checkLetter("b")).toEqual(true);
      expect(tg.checkLetter("b")).toEqual(false);
      expect(tg.checkLetter("u")).toEqual(true);
      expect(tg.checkLetter("t")).toEqual(true);
      expect(tg.checkLetter("t")).toEqual(true);
      expect(tg.checkLetter("c")).toEqual(true);
    });
    it("should automatically load next section when ready", () => {
      tg.loadSection();
      tg.checkLetter("b");
      tg.checkLetter("u");
      tg.checkLetter("t");
      tg.checkLetter("t");
      tg.checkLetter("c");
      tg.checkLetter("a");
      tg.checkLetter("t");
      expect(tg.checkLetter("d")).toEqual(true);
    });
  });
});
