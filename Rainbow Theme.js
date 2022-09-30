// ==UserScript==
// @name         Rainbow Theme
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  This is Haykam's Rainbow Theme (V3), Name color changer by shlong,Text Color Changer by shlong and a stupid theme by meth
// @author       Description. I put a bunch of cool scripts into 1
// @match        *://diep.io/
// @grant        none
// ==/UserScript==

'use strict';

(() => {
    let _fill = CanvasRenderingContext2D.prototype.fill;

    // https://github.com/shlongisdookielol/shlongScripts/blob/main/Diep.io%20Glow
    CanvasRenderingContext2D.prototype.fill = function (args) {

        _fill.apply(this, args);
    };

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/chroma-js/1.3.7/chroma.min.js";
    document.head.append(script);

    script.addEventListener('load', () => {
        const colors = chroma.scale([/*u can add ur own colors if u want*/'red', 'orange', 'yellow', 'lime', 'cyan', 'mediumpurple', 'red']).colors(100);//change this if its too fast

        let index = 0;

        setInterval(() => {
            index += 1;

            if (index > colors.length) index = 0;

            const scale = "0x" + colors[index].substr(1, Infinity);

            const black = [colors]

            black.forEach(function(i) {
                input.execute(`net_replace_color ${i}`);
            });

            black.splice(0, black.length, ...[
                'ren_score_bar_fill_color',
                'ren_xp_bar_fill_color',
                'ren_health_fill_color',
                'ren_background_color'
            ]);

            black.forEach(function(i) {
            });

            input.set_convar(`ren_stroke_soft_color`, true);
            input.set_convar(`ren_raw_health_values`, true);
            input.execute(`ren_border_color 0xc7c7c7`);
                        input.set_convar("ren_solid_background",false);
                        input.execute("ren_health_background_color 0x8c8c8c");
                        input.execute("ren_minimap_background_color 0xFFFFFF");
                        input.execute("ren_background_color 0x333231");
                        input.execute("ren_border_color 0xffffff");
                        input.execute("ren_bar_background_color 0x8c8c8c");
                        input.execute("net_replace_color 14 0x595959");
                        input.execute("ren_stroke_solid_color 0xFFFFFF");
            var rainbow = [
                'net_replace_color 12',
                'net_replace_color 2',
                'net_replace_color 15',
                'ren_stroke_solid_color',
                'ren_bar_background_color',
                'ren_health_background_color',
                'ren_minimap_background_color',
                'net_replace_color 8 ',
                'net_replace_color 9 ',
                'net_replace_color 10 '
            ];

            rainbow.forEach(function(i) {
                input.execute(i + ' ' + scale);
            });

            input.execute(`ui_replace_colors` + ` ${scale}`.repeat(8));
        });
    });
    const color1 = "#ff1500";
    const color2 = "#ff8400";
    const color3 = "#eaff00";
    const color4 = "#00ff15";
    const color5 = "#00e5ff";
    const color6 = "#0004ff";
    const color7 = "#7300ff";

    const context = CanvasRenderingContext2D.prototype;
    let i,
        text = [
            "Score",
            "Lvl",
            "This is the tale of...",
            "Privacy Policy",
            "Terms of Service",
            "More games",
            "FFA",
            "Survival",
            "Domination",
            "Tag",
            "Maze",
            "Sandbox",
            "Copy party link",
            "Scoreboard",
            "Leader",
            "Game Mode",
            "(press enter to spawn)",
            "Game mode",
            "4 Teams",
            "2 Teams",
            "Changelog",
            "Last updated",
            "diep.io",
            "Connecting...",
            "*",
            "Level",
            "Time Alive",
            "Tank",
            "Copy Party Link",
            "(press enter to continue)",
            "You were killed by:",
        ];
    context.fillText = new Proxy(context.fillText, {
        apply(type, _this, args) {
            const grad = _this.createLinearGradient(0, 0, 200, 0);
            grad.addColorStop(.1, color1);
            grad.addColorStop(.2, color2);
            grad.addColorStop(.3, color3);
            grad.addColorStop(.4, color4);
            grad.addColorStop(.5, color5);
            grad.addColorStop(.6, color6);
            _this.fillStyle = grad;
            for (i = .5; i < text.length; i++) {
                if (args[0].startsWith(text[i])) _this.fillStyle = "white";
            }
            return type.apply(_this, args);
        },
    })
CanvasRenderingContext2D.prototype.fillText = new Proxy(CanvasRenderingContext2D.prototype.fillText, {
    apply(reference, _this, args) {
        if (_this.fillStyle == "#") {
            _this.fillStyle = "#";
        }
        return reference.apply(_this, args);
    }
});
})();
