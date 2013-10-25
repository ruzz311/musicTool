'use strict';

angular.module('angularMusicToolApp')
    .controller('MainCtrl', [
        '$scope',
        '$cookieStore',
        function ($scope, $cookieStore) {
            $scope.root = $cookieStore.get('root') || 'C3';
            $scope.chordColor = $cookieStore.get('chordColor') || 'M';
            $scope.rootNote = null;
            $scope.chord = null;
            $scope.scaleModes = [];
            for (var scale in teoria.scale.scales) {
                $scope.scaleModes.push(scale);
            }
            $scope.scaleMode = $cookieStore.get('scaleMode') || $scope.scaleModes[0];

            $scope.$watch('root', function() {
                $scope.rootNote = teoria.note($scope.root);
                $scope.chord = $scope.rootNote.chord($scope.chordColor);
                $cookieStore.put('root', $scope.root);
            });

            $scope.$watch('chordColor', function() {
                $scope.chord = $scope.rootNote.chord($scope.chordColor);
                $cookieStore.put('chordColor', $scope.chordColor);
            });

            $scope.$watch('scaleMode', function() {
                $cookieStore.put('scaleMode', $scope.scaleMode);
            });

            $scope.getScale = function (scaleName) {
                return $scope.rootNote.scale(scaleName);
            };

            $scope.getNotesInChord = function () {
                var chordName = teoria.note($scope.root).name();
                var chord = teoria.chord(chordName + $scope.chordColor);
                return chord.notes();
            };

            $scope.getScale = function () {
                return teoria.note($scope.root).scale($scope.scaleMode);
            };

            $scope.playRoot = function () {
                var song = new BandJS();
                song.setMasterVolume(100);
                song.setTimeSignature(4, 4);
                song.setTempo(120);
                var instrument = song.createInstrument('square', 'oscillators');
                instrument.setVolume(100);
                instrument.note('whole', $scope.rootNote.toString().toUpperCase());
                instrument.repeatFromBeginning(1);
                instrument.finish();
                song.end();
                song.play();
            };
        }
    ]);

