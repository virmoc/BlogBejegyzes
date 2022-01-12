$(function () {
    const myAjax = new MyAjax;
    const postTomb=[];
    //const sablonElem = $(".post");
    let apivegpont="http://localhost:3000/post";
    //let apivegpont2="http://localhost:3000/user";
    console.log(apivegpont);
    myAjax.adatBetolt(apivegpont, postTomb, postLista);

    let keresomezo= $("#kereso");
    keresomezo.on("keyup", () =>{
       let apivegpont="http://localhost:3000/post";
       apivegpont += "?q=" + keresomezo.val();
       console.log(apivegpont);
       myAjax.adatBetolt(apivegpont, postTomb, postLista);
    })

    function postLista(postok) {
        const szuloElem = $(".postok");
        const sablonElem = $(' .sablonhoz .post');
        szuloElem.empty();
        sablonElem.show();
        
    
    
        postok.forEach(function (elem) {
          let node = sablonElem.clone().appendTo(szuloElem);
          const obj = new Task(node, elem);
        })
        sablonElem.hide();
    
      }
      $("#torol").on("click", () =>{
        myAjax.deleteBetolt(apivegpont,1)
    });
    
    
    $(window).on("torles", (event) => {
        console.log(event.detail.id);
        myAjax.adatTorles(apivegpont,event.detail.id);
    
    });
    $(window).on("modosit", (event) => {
        console.log(event.detail);
        $("#postID").val(event.detail.id);
        $("#postCim").val(event.detail.title);
        $("#postLeiras").val(event.detail.description);
        $("#postDatum").val(event.detail.date);
        $("#postLajk").val(event.detail.lajk);
    });
    $("#ajaxUj").on("click", function(){
        let adat = {};
        //adat.id= $("#postID").val();
        adat.title= $("#postCim").val();
        adat.description= $("#postLeiras").val();
        adat.date= $("#postDatum").val();
        adat.lajk= Number($("#postLajk").val());
        myAjax.adatPost(apivegpont,adat);
    });

    $("#ajaxModosit").on("click", () =>{
        let adat= {}
        adat.id= $("#postID").val();
        adat.title= $("#postCim").val();
        adat.description= $("#postLeiras").val();
        adat.date= $("#postDatum").val();
        adat.lajk= Number($("#postLajk").val());
        
        myAjax.adatPut(apivegpont,adat, adat.id)
    });
});
