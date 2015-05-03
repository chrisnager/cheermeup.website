module.exports = function() {
    var value = "Hey I'm a value and I'm being returned from a factory!";

    var getEmojis = function() {
        var emojis = ['😜','🏆','💁','🌞', '🐓']
        return emojis
    }

    var getBackgrounds = function() {
        var backgrounds = [
            { url: 'https://media1.giphy.com/media/10pSeSHjy0OMV2/200.gif', },
            { url: 'https://media3.giphy.com/media/O3GJk0JA3dDsk/200.gif', },
            { url: 'https://s3.amazonaws.com/giphygifs/media/GwGXoeb0gm7sc/giphy.gif', },
            { url: 'https://media4.giphy.com/media/nl5wVNRJSWcO4/200.gif', },
            { url: 'https://media0.giphy.com/media/NTzW6P8cpt90Q/200_s.gif', },
            { url: 'https://media4.giphy.com/media/Maz1hoeGskARW/200_s.gif', },
        ]
        return backgrounds
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
                url: 'http://www.youtube.com/embed/SeIJmciN8mo',
            },
            {
                title: 'Chris Brown, Tyga - Ayo (Explicit)',
                url: 'http://www.youtube.com/embed/ndqJCDYHplo',
            },
            {
                title: 'Drake - 0 to 100 / The Catch Up (Explicit).',
                url: 'http://www.youtube.com/embed/0Cxr1-b6Xkc',
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
