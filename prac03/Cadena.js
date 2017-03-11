"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cad) {
        this.cadenita = cad;
    }
    Cadena.prototype.pal = function () {
        var sinespacios = this.cadenita.replace(/ /g, "");
        sinespacios = sinespacios.toLowerCase();
        for (var i = 0, j = sinespacios.length - 1; i < Math.floor(sinespacios.length / 2); i++, j--) {
            if (sinespacios[i] != sinespacios[j]) {
                return false;
            }
        }
        return true;
    };
    Cadena.prototype.vocales = function () {
        var a = 0;
        var e = 0;
        var i = 0;
        var o = 0;
        var u = 0;
        var aux;
        for (var j = 0; j < this.cadenita.length; j++) {
            aux = this.cadenita[j].toLowerCase();
            switch (aux) {
                case "a":
                    a++;
                    break;
                case "e":
                    e++;
                    break;
                case "i":
                    i++;
                    break;
                case "o":
                    o++;
                    break;
                case "u":
                    u++;
                    break;
            }
        }
        return "Vocales:\n        a: " + a + "\n        e: " + e + "\n        i: " + i + "\n        o: " + o + "\n        u: " + u;
    };
    Cadena.prototype.letras = function () {
        var letters = this.cadenita.length;
        for (var i = 0; i < letters; i++) {
            if (this.cadenita[i] == " ") {
                letters--;
            }
        }
        return letters;
    };
    Cadena.prototype.countWords = function () {
        var cadenaSplit;
        cadenaSplit = this.cadenita.split(" ");
        return cadenaSplit.length;
    };
    return Cadena;
}());
exports.Cadena = Cadena;
