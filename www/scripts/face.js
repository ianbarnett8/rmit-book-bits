function showFace() {
    let [cx,cy] = [$(document).width()/2, $(document).height()/2 - 200];
    let pixw = 100;
    let pixm = pixw / 2;

    let parts = ['left-eye', 'right-eye', 'm1', 'm2', 'm3'];
    let initp = {
        'left-eye': [-150, -150],
        'right-eye': [50, -150],
        'm1': [-150, 100],
        'm2': [-50, 150],
        'm3': [50, 100]
    };

    parts.forEach(p => {
        let id = `#${p}`;
        $('body').append(`<div id=${p} class='face'></div>`);
        $(id).attr('style', `left: ${cx}px; top: ${cy}px`);
        $(id).animate({left: `+=${initp[p][0]+pixm}`, top: `+=${initp[p][1]}`});
        $(id).click(wink);
    });
}

function wink(e) {
    if (e.target.id=='right-eye') {
        $(`#${e.target.id}`).animate(
            { height: `-=90`, top: `+=45` },
            { duration: 150, complete: function(){
                $(`#${e.target.id}`).animate({ height: `+=90`, top: `-=45` }, { duration: 190 });
            } });
    }
}

