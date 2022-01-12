class TaskUser{
    constructor(node, adat) {
        this.node = node;
        /**selectorok elnvezése */
        this.adat = adat;
        this.userID= this.node.children(".felID");
        this.userNev = this.node.children(".felhNev");
        this.setAdat(this.adat);

    }
    setAdat(adat) {
        this.adat = adat;
        this.userID.text(adat.user_id);
        this.userNev.text(adat.name);
    }
   
    



}