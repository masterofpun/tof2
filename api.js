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
        console.log(result['result'][0]['actors']);
        var actors = result['result'][0]['actors'];        
        
        var template = 
        `<div class="character-card active">
        <?xml version="1.0" encoding="utf-8"?>
        <!-- Generator: Adobe Illustrator 28.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 304 200"
          style="enable-background: new 0 0 304 200"
          xml:space="preserve"
        >
          <style type="text/css">
            .st0 {
              clip-path: url(#SVGID_00000056387039922328828140000008325461041990619324_);
            }

            .st1 {
              fill: url(#SVGID_00000150062787757671926300000006030906084739170437_);
              stroke: #70683a;
              stroke-width: 0.25;
              stroke-miterlimit: 10;
            }

            .st2 {
              fill: url(#SVGID_00000066509113456248749340000004063291846840865933_);
              stroke: #70683a;
              stroke-width: 0.25;
              stroke-miterlimit: 10;
            }

            .st3 {
              opacity: 0.65;
              clip-path: url(#SVGID_00000049910155428535870970000009255659985730713515_);
              fill: primary-color;
              enable-background: new;
            }
            .st4 {
              fill: none;
              stroke: #4f4f4f;
              stroke-width: 0.25;
              stroke-miterlimit: 10;
            }

            .st5 {
              fill: url(#SVGID_00000032606647091779319180000012684705508212352653_);
              stroke: #70683a;
              stroke-width: 0.25;
              stroke-miterlimit: 10;
            }

            .st6 {
              fill: url(#SVGID_00000096032205504358174110000013151247548647450809_);
              stroke: #70683a;
              stroke-width: 0.25;
              stroke-miterlimit: 10;
            }

            .st7 {
              opacity: 0.65;
              clip-path: url(#SVGID_00000170237119880052995270000004045508894273283762_);
              fill: primary-color;
              enable-background: new;
            }
            .st8 {
              opacity: 0.65;
              fill: primary-color;
              enable-background: new;
            }
            .st9 {
              fill: #ffffff;
            }
            .st10 {
              font-family: "Roboto-Regular";
            }
            .st11 {
              font-size: 16px;
            }
            .st12 {
              letter-spacing: 16;
            }
            .st13 {
              letter-spacing: 12;
            }
            .st14 {
              fill: none;
              stroke: url(#photo_00000157284572163007896310000013561051594615717817_);
              stroke-width: 3;
              stroke-miterlimit: 10;
            }
            .st15 {
              fill: none;
              stroke: url(#frame_00000123440294226374467470000006761106162507156641_);
              stroke-width: 3;
              stroke-miterlimit: 10;
            }
            .st16 {
              font-size: 17px;
            }
            .st17 {
              font-family: "ArialMT";
            }
            .st18 {
              font-size: 12px;
            }
            .st19 {
              fill: primary-color;
            }
            .st20 {
              font-size: 14px;
            }
          </style>
          <g id="background_clip">
            <g>
              <defs>
                <path
                  id="SVGID_1_"
                  d="M299.6,200H4.3c-2.4,0-4.3-1.9-4.3-4.4V4.3C0,2,2,0,4.3,0h295.3c2.4,0,4.4,2,4.4,4.3v191.3
                              C304,198.1,302,200,299.6,200z"
                />
              </defs>
              <clipPath
                id="SVGID_00000000938236806762364630000015726351587482836637_"
              >
                <use xlink:href="#SVGID_1_" style="overflow: visible" />
              </clipPath>
              <g
                style="
                  clip-path: url(#SVGID_00000000938236806762364630000015726351587482836637_);
                "
              >
                <image
                  style="overflow: visible; enable-background: new"
                  width="3820"
                  height="2546"
                  xlink:href="EC889AFB.jpeg"
                  transform="matrix(0.1049 0 0 0.1049 0 -22)"
                ></image>
              </g>
            </g>
          </g>
          <g>
            <g id="top_bars">
              <linearGradient
                id="SVGID_00000163785525864162100740000010918811139549446281_"
                gradientUnits="userSpaceOnUse"
                x1="137.4313"
                y1="123.2989"
                x2="204.9248"
                y2="240.2011"
                gradientTransform="matrix(1 0 0 -1 0 200)"
              >
                <stop offset="5.618000e-03" style="stop-color: #fbc926" />
                <stop offset="0.2528" style="stop-color: #fffbcc" />
                <stop offset="0.3045" style="stop-color: #f8f0bb" />
                <stop offset="0.4072" style="stop-color: #e7d28e" />
                <stop offset="0.55" style="stop-color: #cca246" />
                <stop offset="0.5955" style="stop-color: #c3922e" />
                <stop offset="0.8708" style="stop-color: #eed688" />
                <stop offset="1" style="stop-color: #fffbcc" />
              </linearGradient>

              <polygon
                style="
                  fill: url(#SVGID_00000163785525864162100740000010918811139549446281_);
                  stroke: #70683a;
                  stroke-width: 0.25;
                  stroke-miterlimit: 10;
                "
                points="
                          304,19 37.5,19 40.8,17 304,17 		"
              />

              <linearGradient
                id="SVGID_00000174603537248153395410000004418386518465857715_"
                gradientUnits="userSpaceOnUse"
                x1="134.7187"
                y1="119.3592"
                x2="202.8643"
                y2="237.3908"
                gradientTransform="matrix(1 0 0 -1 0 200)"
              >
                <stop offset="5.618000e-03" style="stop-color: #fbc926" />
                <stop offset="0.2528" style="stop-color: #fffbcc" />
                <stop offset="0.3045" style="stop-color: #f8f0bb" />
                <stop offset="0.4072" style="stop-color: #e7d28e" />
                <stop offset="0.55" style="stop-color: #cca246" />
                <stop offset="0.5955" style="stop-color: #c3922e" />
                <stop offset="0.8708" style="stop-color: #eed688" />
                <stop offset="1" style="stop-color: #fffbcc" />
              </linearGradient>

              <polygon
                style="
                  fill: url(#SVGID_00000174603537248153395410000004418386518465857715_);
                  stroke: #70683a;
                  stroke-width: 0.25;
                  stroke-miterlimit: 10;
                "
                points="
                          304,22 33.2,22 34.7,21 304,21 		"
              />
            </g>
            <g id="top_shoe" class="shadow">
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_00000102534275125460248100000010719772952392426666_"
                      d="M46.5,9.1c2.3,0,3.1,3.1,1,4.2
                                      c-6.6,3.3-15.4,8.5-22.3,15.5C19.5,34.6,15.6,41,13,46.2c-1,2.1-4.2,1.3-4.2-1V12.7c0-2,1.6-3.6,3.6-3.6L46.5,9.1z"
                    />
                  </defs>
                  <clipPath
                    id="SVGID_00000065059352925670757770000010852374020319483029_"
                  >
                    <use
                      xlink:href="#SVGID_00000102534275125460248100000010719772952392426666_"
                      style="overflow: visible"
                    />
                  </clipPath>

                  <polygon
                    style="
                      opacity: 0.65;
                      clip-path: url(#SVGID_00000065059352925670757770000010852374020319483029_);
                      fill: primary-color;
                      enable-background: new;
                    "
                    points="
                                  53.8,10.9 8.8,52 8.8,8 53.8,8 				"
                  />
                </g>
                <g>
                  <path
                    id="SVGID_00000106139039914776959330000015290432601887458490_"
                    class="st4"
                    d="M46.5,9.1c2.3,0,3.1,3.1,1,4.2
                                  c-6.6,3.3-15.4,8.5-22.3,15.5C19.5,34.6,15.6,41,13,46.2c-1,2.1-4.2,1.3-4.2-1V12.7c0-2,1.6-3.6,3.6-3.6L46.5,9.1z"
                  />
                </g>
              </g>
            </g>
          </g>
          <g>
            <g id="bottom_bars">
              <linearGradient
                id="SVGID_00000181076175469632983190000010295793221406940546_"
                gradientUnits="userSpaceOnUse"
                x1="137.4313"
                y1="-7.4909"
                x2="204.9248"
                y2="109.4113"
                gradientTransform="matrix(1 0 0 1 0 132.1298)"
              >
                <stop offset="5.618000e-03" style="stop-color: #fbc926" />
                <stop offset="0.2528" style="stop-color: #fffbcc" />
                <stop offset="0.3045" style="stop-color: #f8f0bb" />
                <stop offset="0.4072" style="stop-color: #e7d28e" />
                <stop offset="0.55" style="stop-color: #cca246" />
                <stop offset="0.5955" style="stop-color: #c3922e" />
                <stop offset="0.8708" style="stop-color: #eed688" />
                <stop offset="1" style="stop-color: #fffbcc" />
              </linearGradient>

              <polygon
                style="
                  fill: url(#SVGID_00000181076175469632983190000010295793221406940546_);
                  stroke: #70683a;
                  stroke-width: 0.25;
                  stroke-miterlimit: 10;
                "
                points="
                          304,182.3 37.5,182.3 40.8,184.3 304,184.3 		"
              />

              <linearGradient
                id="SVGID_00000079448857309499383170000015066451641793152431_"
                gradientUnits="userSpaceOnUse"
                x1="134.7187"
                y1="-11.4306"
                x2="202.8643"
                y2="106.601"
                gradientTransform="matrix(1 0 0 1 0 132.1298)"
              >
                <stop offset="5.618000e-03" style="stop-color: #fbc926" />
                <stop offset="0.2528" style="stop-color: #fffbcc" />
                <stop offset="0.3045" style="stop-color: #f8f0bb" />
                <stop offset="0.4072" style="stop-color: #e7d28e" />
                <stop offset="0.55" style="stop-color: #cca246" />
                <stop offset="0.5955" style="stop-color: #c3922e" />
                <stop offset="0.8708" style="stop-color: #eed688" />
                <stop offset="1" style="stop-color: #fffbcc" />
              </linearGradient>

              <polygon
                style="
                  fill: url(#SVGID_00000079448857309499383170000015066451641793152431_);
                  stroke: #70683a;
                  stroke-width: 0.25;
                  stroke-miterlimit: 10;
                "
                points="
                          304,179.3 33.2,179.3 34.7,180.3 304,180.3 		"
              />
            </g>
            <g id="bottom_shoe" class="shadow">
              <g>
                <g>
                  <defs>
                    <path
                      id="SVGID_00000054963209176055975450000013936790018425187203_"
                      d="M46.5,192.2c2.3,0,3.1-3.1,1-4.2
                                      c-6.6-3.3-15.4-8.5-22.3-15.5c-5.8-5.9-9.7-12.3-12.3-17.5c-1-2.1-4.2-1.3-4.2,1v32.6c0,2,1.6,3.6,3.6,3.6L46.5,192.2z"
                    />
                  </defs>
                  <clipPath
                    id="SVGID_00000166641620567250875590000010538917452340223159_"
                  >
                    <use
                      xlink:href="#SVGID_00000054963209176055975450000013936790018425187203_"
                      style="overflow: visible"
                    />
                  </clipPath>

                  <polygon
                    style="
                      opacity: 0.65;
                      clip-path: url(#SVGID_00000166641620567250875590000010538917452340223159_);
                      fill: primary-color;
                      enable-background: new;
                    "
                    points="
                                  53.8,190.4 8.8,149.3 8.8,193.4 53.8,193.4 				"
                  />
                </g>
                <g>
                  <path
                    id="SVGID_00000168802522800099996190000009319846677477456532_"
                    class="st4"
                    d="M46.5,192.2c2.3,0,3.1-3.1,1-4.2
                                  c-6.6-3.3-15.4-8.5-22.3-15.5c-5.8-5.9-9.7-12.3-12.3-17.5c-1-2.1-4.2-1.3-4.2,1v32.6c0,2,1.6,3.6,3.6,3.6L46.5,192.2z"
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="Stats_Wrapp">
            <polygon
              id="stat_box"
              class="st8"
              points="304,88.9 150,88.9 141.8,70 304,70 	"
            />

            <rect
              id="stat_box_00000074428757635730167020000003777889890611667641_"
              x="150"
              y="90.6"
              class="st8"
              width="154"
              height="18.9"
            />
            <polygon
              id="stat_box_00000088100157313186251300000004604318086226088124_"
              class="st8"
              points="304,130 143.5,130 149.9,111.1 
                      304,111.1 	"
            />

            <text
              transform="matrix(1 0 0 1 163.8698 84.8262)"
              class="st9 st10 st11"
              id="STR"
            ></text>
            <text
              transform="matrix(1 0 0 1 214.6898 84.8262)"
              class="st9 st10 st11 st12"
            ></text>
            <text
              transform="matrix(1 0 0 1 235.8698 84.8262)"
              class="st9 st10 st11"
              id="INT"
            ></text>
            <text
              transform="matrix(1 0 0 1 163.8698 105.8262)"
              class="st9 st10 st11"
              id="DEX"
            ></text>
            <text
              transform="matrix(1 0 0 1 215.4198 105.8262)"
              class="st9 st10 st11 st12"
            ></text>
            <text
              transform="matrix(1 0 0 1 235.8698 105.8262)"
              class="st9 st10 st11"
              id="WIS"
            ></text>
            <text
              transform="matrix(1 0 0 1 163.8698 126.8262)"
              class="st9 st10 st11"
              id="CON"
            ></text>
            <text
              transform="matrix(1 0 0 1 218.6198 126.8262)"
              class="st9 st10 st11 st13"
            ></text>
            <text
              transform="matrix(1 0 0 1 235.8698 126.8262)"
              class="st9 st10 st11"
              id="CHA"
            ></text>
          </g>
          <g id="Photo_frame" class="shadow">
            <circle
              id="photo_background_tint"
              class="st8"
              cx="81.7"
              cy="100.1"
              r="67.4"
            />

            <linearGradient
              id="frame_00000174593551116779690310000012728999275340159631_"
              gradientUnits="userSpaceOnUse"
              x1="47.3194"
              y1="40.4351"
              x2="116.2606"
              y2="159.8449"
              gradientTransform="matrix(1 0 0 -1 0 200)"
            >
              <stop offset="5.618000e-03" style="stop-color: #fbc926" />
              <stop offset="0.2528" style="stop-color: #fffbcc" />
              <stop offset="0.3045" style="stop-color: #f8f0bb" />
              <stop offset="0.4072" style="stop-color: #e7d28e" />
              <stop offset="0.55" style="stop-color: #cca246" />
              <stop offset="0.5955" style="stop-color: #c3922e" />
              <stop offset="0.8708" style="stop-color: #eed688" />
              <stop offset="1" style="stop-color: #fffbcc" />
            </linearGradient>

            <circle
              id="frame"
              style="
                fill: none;
                stroke: url(#frame_00000174593551116779690310000012728999275340159631_);
                stroke-width: 3;
                stroke-miterlimit: 10;
              "
              cx="81.8"
              cy="99.9"
              r="67.4"
            />
          </g>
          <g id="AC_Stat_Block">
            <path
              id="Shield"
              class="shadow st8"
              d="M201.8,49.3V36.3c0-0.5-0.3-1-0.7-1.3l-15.2-9.5c-0.5-0.3-1.1-0.3-1.6,0L168.9,35
                      c-0.4,0.3-0.7,0.8-0.7,1.3v13c0,4.5,2.3,8.7,6.1,11L185,67l10.7-6.7C199.5,57.9,201.8,53.8,201.8,49.3z"
            />
            <text
              transform="matrix(1 0 0 1 176 50.5)"
              class="st9 st10 st16"
              id="AC-stat"
            >
              AC
            </text>
          </g>
          <g>
            <g>
              <path
                class="shadow st8"
                d="M282.3,28.8c-2.5-2.5-5.8-3.9-9.3-3.9s-6.8,1.4-9.3,3.9l-1.3,1.3l-1.3-1.3c-2.5-2.5-5.8-3.9-9.3-3.9
                          c-3.5,0-6.8,1.4-9.3,3.9c-2.5,2.5-3.9,5.8-3.9,9.3c0,3.5,1.4,6.8,3.9,9.3l18.9,18.9c0.3,0.3,0.6,0.4,1,0.4s0.7-0.1,1-0.4l19-18.9
                          c2.5-2.5,3.9-5.8,3.9-9.3C286.2,34.6,284.8,31.2,282.3,28.8z"
              />
            </g>
            <text
              transform="matrix(1 0 0 1 252 50.5)"
              class="st9 st17 st16"
              id="HP-stat"
            >
              HP
            </text>
          </g>
          <g id="levels_block">
            <text
              id="class"
              transform="matrix(1 0 0 1 290 164)"
              class="st10 st18"
              text-anchor="end"
            >
              Warlock/Sorcerer
            </text>
            <text
              id="level"
              transform="matrix(1 0 0 1 290 154)"
              class="st19 st10 st20"
              text-anchor="end"
            >
              Level 3
            </text>
          </g>
        </svg>

        <div class="photo" id="inserted-image"></div>
        <div id="character-name">Nameguy Nameson [he/him]</div>
        </div>`
        actors.forEach(actor => {
            template = template.replaceAll('primary-color', '#220022');
            var race_and_class = actor['system']['details']['race'] + ' ';
            var levels = 0;
            var ac = 0;
            actor['items'].forEach(item => {
                if(item['type'] == 'class') {
                    race_and_class += item['name'] + ' ';
                    levels += item['system']['levels'];
                }

                if(item['type'] == 'equipment' && item['system']['equipped']) {
                    ac += item['system']['armor']['value'];
                }
            });
            var hp = actor['system']['attributes']['hp']['value'];
            if(actor['system']['attributes']['hp']['value']) {
                hp = hp + actor['system']['attributes']['hp']['temp'];
            }
            $('#template').html(template);
            $('#template').find('#class').text(race_and_class.trim());
            $('#template').find('#level').text('Level ' + levels);
            $('#template').find('#character-name').text(actor['prototypeToken']['name']);
            $('#template').find('#character-name').css('background-color', '#220022');
            $('#template').find('#AC-stat').text(ac);
            $('#template').find('#HP-stat').text(String('  ' + hp).slice(-3));
            $('#template').find('#STR').text('STR ' + String('  ' + actor['system']['abilities']['str']['value']).slice(-2));
            $('#template').find('#DEX').text('DEX ' + String('  ' + actor['system']['abilities']['dex']['value']).slice(-2));
            $('#template').find('#CON').text('CON ' + String('  ' + actor['system']['abilities']['con']['value']).slice(-2));
            $('#template').find('#INT').text('INT ' + String('  ' + actor['system']['abilities']['int']['value']).slice(-2));
            $('#template').find('#WIS').text('WIS ' + String('  ' + actor['system']['abilities']['wis']['value']).slice(-2));
            $('#template').find('#CHA').text('CHA ' + String('  ' + actor['system']['abilities']['cha']['value']).slice(-2));
            var token_url = '/'+actor['prototypeToken']['texture']['src'];
            $('#template').find('#inserted-image').css('background-image', 'url("'+token_url+'")');
            $('#template').find('.character-card').css('transform', 'scale(0.9)');
            $('.user-cards').append($('#template').html());
            $('#template').empty();
        });
        
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