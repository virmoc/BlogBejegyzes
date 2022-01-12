class Task {
    constructor(node, adat) {
        this.node = node;
        /**selectorok elnvezése */
        this.adat = adat;
        this.postCim = this.node.children(".cim");
        this.postLeiras = this.node.children(".leiras");
        this.postDatum = this.node.children(".datum");
        this.postLajkok = this.node.children(".lajk");
        this.setAdat(this.adat);
        this.torlesElem = this.node.children("div").children(".torol");
        this.modositElem = this.node.children("div").children(".modosit");


        this.torlesElem.on("click", () => {
            this.torolTrigger();
        });


        this.modositElem.on("click", () => {
            this.modositTrigger();
            console.log("módosítás" + this);
        });

    }
    

    setAdat(adat) {
        this.adat = adat;
        this.postCim.text(adat.title);
        this.postLeiras.text(adat.description);
        this.postDatum.text(adat.date);
        this.postLajkok.text(adat.lajk + "-en lájkolták ezt a bejegyzést");
    }

    kattintasTrigger(esemenyneve) {

        let esemeny = new CustomEvent(esemenyneve, {

            detail: this.adat, //ezzel adatokat tudok átadni
        });
        window.dispatchEvent(esemeny); // A főablakhoz adom az eseményt,
        //Az eseményt majd a script.js-ben el tudom kapni.
    }

    torolTrigger() {
        let esemeny = new CustomEvent("torles", {
            detail: this.adat, //ezzel adatokat tudok átadni
        });
        window.dispatchEvent(esemeny); // A főablakhoz adom az eseményt,
        //Az eseményt majd a script.js-ben el tudom kapni.
    }

    modositTrigger() {
        let esemeny = new CustomEvent("modosit", {
            detail: this.adat, //ezzel adatokat tudok átadni
        });
        window.dispatchEvent(esemeny); // A főablakhoz adom az eseményt,
        //Az eseményt majd a script.js-ben el tudom kapni.
    }




}