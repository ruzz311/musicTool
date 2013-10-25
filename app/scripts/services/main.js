'use strict';

// Service

angular.module('angularMusicToolApp')
    .factory('ChordService', function () {
        return {
            serviceName: 'ChordService',
            stupid: true
        };
    });

angular.module('angularMusicToolApp')
    .factory('NoteService', function () {
        return {
            serviceName: 'NoteService',
            frequency: 440 // in Hz
        };
    });

angular.module('angularMusicToolApp')
    .factory('Scales', function () {
        return {
            major: [
                {
                    keyName: 'C',
                    sharps: 0,
                    flats: 0
                }, {
                    keyName: 'G',
                    sharps: 1,
                    flats: 0
                }, {
                    keyName: 'D',
                    sharps: 2,
                    flats: 0
                }, {
                    keyName: 'A',
                    sharps: 3,
                    flats: 0
                }, {
                    keyName: 'E',
                    sharps: 4,
                    flats: 0
                }, {
                    keyName: 'B',
                    sharps: 5,
                    flats: 0
                }, {
                    keyName: 'F#',
                    sharps: 6,
                    flats: 0
                }, {
                    keyName: 'C#',
                    sharps: 7,
                    flats: 0
                }
            ],
            minor: [
                {
                    keyName: 'a',
                    sharps: 0,
                    flats: 0
                }, {
                    keyName: 'e',
                    sharps: 1,
                    flats: 0
                }, {
                    keyName: 'b',
                    sharps: 2,
                    flats: 0
                }, {
                    keyName: 'f#',
                    sharps: 3,
                    flats: 0
                }, {
                    keyName: 'c#',
                    sharps: 4,
                    flats: 0
                }, {
                    keyName: 'g#',
                    sharps: 5,
                    flats: 0
                }, {
                    keyName: 'd#',
                    sharps: 6,
                    flats: 0
                }, {
                    keyName: 'a#',
                    sharps: 7,
                    flats: 0
                }
            ]
        };
    });

angular.module('angularMusicToolApp')
    .factory('CircleFiths', function () {
        return {
            major : ['C', 'G', 'D', 'A', 'E', 'B/Cb', 'F#/Gb', 'C#/Db', 'Ab', 'Eb', 'Bb', 'F'],
            minor : ['a', 'e', 'b', 'f#', 'c#', 'g#/ab', 'd#/eb', 'a#', 'bb', 'f',  'c',  'g',  'd']
        };
    });