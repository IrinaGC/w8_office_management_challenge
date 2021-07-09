"use strict";

describe("Office", () => {
  let room1;
  let room2;
  let room3;
  let office;

  beforeEach(() => {
    office = new Office();
    room1 = new MeetingRoom("Galaxy");
    room2 = new MeetingRoom("KinderBueno");
    room3 = new MeetingRoom("LadyFingers")
  });
   
  it("has no meeting rooms by default", () =>{
    expect(office.listRooms()).toEqual([]);
  });

  it("a meeting room can be added to the office", () => {
    office.addRoom(room1);
    expect(office.listRooms()).toEqual([room1]);
    expect(room1).toBeInstanceOf(MeetingRoom);
  });

});