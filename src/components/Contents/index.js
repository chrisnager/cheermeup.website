module.exports = function($http, $q) {
    var value = "Hey I'm a value and I'm being returned from a factory!";

    var getEmojis = function() {
        var emojis = ['😜','🏆','💁','🌞', '🐓']
        return emojis
    }

    var getBackgrounds = function() {
        var deferred = $q.defer();

        $http.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC').then(function (res) {
            deferred.resolve(res.data);
        });

        return deferred.promise;
        
    }
    
    var getQuotes = function() {
        var quotes = [
            {text: 'Aww Yeah Dawg'},
            {text: 'Wut'},
            {text: 'Noice'},
            {text: 'Wow'},
            {text: '4 Real'},
            {text: 'My Dawg'}
        ];

        return quotes
    }

    var getQuotes = function() {
        var quotes = [
            {text: 'Aww Yeah Dawg'},
            {text: 'Wut'},
            {text: 'Noice'},
            {text: 'Wow'},
            {text: '4 Real'},
            {text: 'My Dawg'}
        ];

        return quotes
    }

    var getSongs = function() {
        var songs = [
            {
                title: 'Nicki Minaj - Only ft. Drake, Lil Wayne, Chris Brown',
                url: 'https://www.youtube.com/watch?v=zXtsGAkyeIo',
            },
            {
                title: 'Chris Brown, Tyga - Ayo (Explicit)',
                url: 'https://www.youtube.com/watch?v=zKCrSN9oXgQ',
            },
            {
                title: 'Drake - 0 to 100 / The Catch Up (Explicit).',
                url: 'https://www.youtube.com/watch?v=I2bBZvSPpOo',
            }
        ];

        return songs
    }

    var update = function(req) {
        value = req
        return req 
    }

    var get = function(limit) {
        if(limit) {
            console.log('TODO: Request only on of the peices of data')
        }
        return {
            quotes: getQuotes(),
            emojis: getEmojis(),
            backgrounds: getBackgrounds(),
            songs: getSongs()
        }
    }

    return {
        get : get,
        update: update
    }
}
