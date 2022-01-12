$(function () {
    const myAjax = new MyAjax;
    const postTomb=[];
    let apivegpont2="http://localhost:3000/user";
    console.log(apivegpont2);
    myAjax.adatBetolt(apivegpont2, postTomb, postLista);

    function kiir(tomb) {
        
        
        const szuloElem =$('users');
        const sablonElem = $('.user');
        
        

        tomb.forEach(function(elem) {
            let node = sablonElem.clone().appendTo(szuloElem);
            const obj = new TaskUser(node, elem);

        });
        sablonElem.remove(); //sablonelem eltávolítása
    }

    
    
    
    
});
