"use strict";

class MeetingRoom {
  constructor(name, team, meeting) {
    this.name = name;
    this.available = true;
    this.sms = new Sms();
    this.team = team;
    this.meeting = meeting;
    
  }

  status() {
    return this.available;
  }

  enter(team, meeting) {
    this.team = team;
    this.meeting = meeting;
    if (this.status() === false){
      throw new Error("Room is occupied! Try later.");
    }

    this.available = false;
    this.noticeBoard();
  }

  leave() {
    if(this.status() === true) {
      throw new Error("The room has been vacated already.");
    };
    this.available = true;
    this.sms.sendSMS(this.name);
  }

  noticeBoard() {
    return `The ${this.team} team in a meeting on ${this.meeting} in room ${this.name}`;
  }
}