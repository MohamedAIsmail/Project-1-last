(document).ready(function () {
    var sections      = ('section');
    var navbar        =	('#nav');
    var navbarHeight  = navbar.height();

    var sectionOffset = [];

    sections.each(function() {
        var section = $(this);

        var position = section.offset().top - navbarHeight;
        var backgroundColor = section.css("background-color");

        sectionOffset.push({'postion': position,'color': backgroundColor});

    });

    $(window).on('scroll', function(){
        var scrollPos = $(document).scrollTop();

        $.each(sectionOffset, function(index, section){
            if (scrollPos >= section.postion) {
                navbar.css("background-color", section.color);
            }
        })
    });

});



document.getElementById("addbtn").onclick = function (){
    addspons();
};
let sponsorder = 1;
function addspons (){
    const path = document.getElementById("sponsimg").value;
    const link = document.getElementById("sponslink").value;

    const div = document.createElement('div');

    div.setAttribute("id",sponsorder)
    sponsorder++;

    div.style.backgroundColor = " rgb(1,11,38)";
    div.style.padding = "50px 0px";
    div.style.width = "1349";

    div.innerHTML = '<a target="_blank"  href="'+link+'"><img class="sponser" src='+path+'></a><br><button class="btn2" id="remove">Remove</button>';

    document.getElementById("sponsers").appendChild(div);

}
document.getElementById("remove").onclick = function (){
    removespons();
};
function removespons (){
    console.log("true");
    $this.parent().removechild();
}