class APIModule {
    constructor() {
        this.sessionId = null;
        this.socket = null;
        // Get the userId if logged in
        for (let cookie of document.cookie.split('; ')) {
            const [name, value] = cookie.split("=");
            if (name === 'session') {
                this.sessionId = decodeURIComponent(value);
                break;
            }
        }
        // Connect to the game socket, passing the userId as an initial data packet
        this.socket = io.connect(window.location.origin, {
            'reconnection': false,
            query: { session: this.sessionId }
        });
    }

    error(message) {
        this.reply({success: false, error: message});
    }

    reply(result) {
        const body = document.getElementsByTagName("body")[0];
        const card = $(".template .character-card");
        console.log(card)
        console.log(result);
        $("body").get(0).style.setProperty("--primary-color", $.urlParam('color'));
        $('#character-name').text($.urlParam('name'));
        $('#class').text($.urlParam('class'));
        $('#level').text('Level '+$.urlParam('level'));
        $('#character-name').text($.urlParam('name'));
        $('#character-name').css('background-color', $.urlParam('color'));
        $('#AC-stat').text($.urlParam('ac'));
        $('#HP-stat').text(String('  ' + $.urlParam('hp')).slice(-3));
        $('#STR').text('STR ' + String('  ' + $.urlParam('str')).slice(-2));
        $('#DEX').text('DEX ' + String('  ' + $.urlParam('dex')).slice(-2));
        $('#CON').text('CON ' + String('  ' + $.urlParam('con')).slice(-2));
        $('#INT').text('INT ' + String('  ' + $.urlParam('int')).slice(-2));
        $('#WIS').text('WIS ' + String('  ' + $.urlParam('wis')).slice(-2));
        $('#CHA').text('CHA ' + String('  ' + $.urlParam('cha')).slice(-2));
        $('#inserted-image').css('background-image', 'url("'+$.urlParam('image')+'")');
        this.socket.close();
    }

    processRequest() {
        if (!this.sessionId)
            return this.error("User not logged in")
        let params = {}
        try {
            let search = window.location.search;
            if (search[0] === '?')
                search = search.slice(1);
            for (let query of search.split("&")) {
                let [key, value] = query.split("=");
                value = decodeURIComponent(value);
                try {
                    params[key] = JSON.parse(value);
                } catch (err) {
                    params[key] = value;
                }
            }
        } catch (err) {
            return this.error("Error parsing query string")
        }

        //if (params.name === undefined)
        //    return this.error("API use requires query string 'name'")
        let args = [];
        for (let i = 0; i < 10; i++ ) {
            if (params[`arg${i}`] !== undefined)
                args.push(params[`arg${i}`]);
            else
                break;
        }
        console.log("Got request with params : ", params, args)
        this.socket.emit('world', ...args, (...args) => {
            return this.reply({query: params, result: args, success: true})
        });
    }
}

api = new APIModule();
window.addEventListener("DOMContentLoaded", () => api.processRequest());