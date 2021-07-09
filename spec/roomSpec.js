"use strict";

describe("Meeting Room", () => {
  let room;

  beforeEach(() => {
    room = new MeetingRoom("Galaxy");
  });

  it("can have a name", () => {
    expect(room.name).toEqual("Galaxy");
  });

  describe("room availability", () => {
    it("room has default status as available", () => {
      expect(room.status()).toEqual(true);
    });

    it("room is entered and changes availability", () => {
      room.enter();
      expect(room.status()).toEqual(false);
    });

    it("cannot enter a room whilst occupied", () => {
      room.enter();
      expect(room.status()).toEqual(false);
      expect(() => {room.enter();}).toThrowError("Room is occupied! Try later.");
    });

    it("room changes its availability when its left", () => {
      room.enter();
      expect(room.status()).toEqual(false);
      room.leave();
      expect(room.status()).toEqual(true);
    });


  });

});