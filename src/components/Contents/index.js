module.exports = function($http, $q) {
    var value = "Hey I'm a value and I'm being returned from a factory!";

    var getEmojis = function() {
        var emojis = ['😄','😃','😀','😊','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','👅','👄','👍','👎','👌','👊','✊','✌','👋','✋','🖖','👐','👆','👇','👉','👈','🙌','🙏','☝','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏','📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿','🎪','🎭','📍','🚩'];

        return emojis
    }

    var getBackgrounds = function() {
        var deferred = $q.defer();
        var url = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

        $http.get(url).then(function (res) {
            deferred.resolve(res.data);
        });

        return deferred.promise;
        
    }

    var getQuotes = function() {
        var quotes = [
            {text: 'Wut'},
            {text: 'HackDisrupt'},
            {text: 'techCrunchDisrupt'},
            {text: 'shipIt'},
            {text: 'mo so lo'},
            {text: '@clintonhalpin'},
            {text: '@iamnickvolpe'},
            {text: '@chrisnager'},
            {text: 'Jaaaavascript'},
            {text: 'Is your machine on'},
            {text: 'Your Face'}
            { title: "congratulations"},
            { title: "We've made it"},
            { title: "started from the bottom"},
            { title: "Business"},
            { title: "hollatchaboy"},
            { title: "get it"},
            { title: "that's what's up"},
            { title: "aww yiss"},
            { title: "jig"},
            { title: "#tbt"},
            { title: "#nofilter"},
            { title: "thank you"},
            { title: "thx"},
            { title: "congrats"},
            { title: "LOL"},
            { title: "miss you"},
            { title: "XOXOXO"},
            { title: "call me maybe"},
            { title: "yolo"},
            { title: "yup"},
            { title: "love you"},
            { title: "for real"},
            { title: "NO"},
            { title: "this"},
            { title: "me right now"},
            { title: "me irl"},
            { title: "this is so you"}
        ];

        return quotes
    }

    var getSongs = function() {
        var songs = [
            {
                title: 'Jeopardy Theme',
                url: 'http://www.youtube.com/embed/0Wi8Fv0AJA4'
            },
            {
                title: 'Journey: Faithfully',
                url: 'http://www.youtube.com/embed/OMD8hBsA-RI'
            },
            {
                title: 'Van Halen: Panama',
                url: 'http://www.youtube.com/embed/w-NshzYK9y0',
            },
            {
                title: 'Jay-Z: Empire State of Mind',
                url: 'http://www.youtube.com/embed/Iv_1LVS3BdE',
            },
            {
                title: 'Gin and juice: Snoop Doggy Dogg',
                url: 'http://www.youtube.com/embed/0Cxr1-b6Xkc',
            },
            {
                title: 'Culture Club: Karma Chameleon',
                url: 'http://www.youtube.com/embed/JmcA9LIIXWw',
            },
            {
                title: 'Nicki Minaj: Starships',
                url: 'http://www.youtube.com/embed/SeIJmciN8mo',
            },
            {
                title: 'K-Ci & JoJo: All My Life',
                url: 'http://www.youtube.com/embed/DXvMT_mVbqw',
            },
            {
                title: 'Blink-182: All the Small Things',
                url: 'http://www.youtube.com/embed/9Ht5RZpzPqw',
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
