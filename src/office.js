"use strict";

class Office {
  constructor(){
    this._meetingRooms = [];
  }

  listRooms() {
    return this._meetingRooms;
  }

  addRoom(room){
    this.listRooms().push(room);
    console.log(this.listRooms());
  }

  availableRooms() {
    return this._meetingRooms.filter(room => room.status() === true);
  }
};