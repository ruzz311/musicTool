'use strict';

angular.module('angularMusicToolApp')
  .service('Notes', function Notes() {
    // AngularJS will instantiate a singleton by calling 'new' on this function
    // @TODO: probably should create teoria note objects here
    return [
      {
        'name': 'C'
      },
      {
        'name': 'C#',
        'flatName':'Db'
      },
      {
        'name': 'D'
      },
      {
        'sharpName': 'D#',
        'flatName':'Eb'
      },
      {
        'name': 'E'
      },
      {
        'sharpName': 'E#',
        'flatName':'Fb'
      },
      {
        'name': 'F'
      },
      {
        'sharpName': 'F#',
        'flatName':'Gb'
      },
      {
        'name': 'G'
      },
      {
        'sharpName': 'G#',
        'flatName':'Ab'
      },
      {
        'name': 'A'
      },
      {
        'sharpName': 'A#',
        'flatName':'Bb'
      },
      {
        'name': 'B'
      },
      {
        'sharpName': 'B#',
        'flatName':'Cb'
      }
    ];
  });
