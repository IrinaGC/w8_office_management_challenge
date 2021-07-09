"use strict";

class MeetingRoom {
  constructor(name) {
    this.name = name;
    this.available = true;
    
  }

  status() {
    return this.available;
  }

  enter() {
    if (this.status() === false){
      throw new Error("Room is occupied! Try later.");
    }

    this.available = false;
  }

  leave() {
    if(this.status() === true){
      throw new Error("The room has been vacated already.");
    };
    return this.available = true;
  }
}