function clicky(i) {
    var it = document.getElementById(i);
    it.contentEditable = 'true';
    it.addEventListener('keypress', function(e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
            it.setAttribute("contentEditable", "false")
        }
    })
}

function rem() {
  console.log('deleting')
    var list = document.getElementById('whole'),
        items = Array.prototype.slice.call(list.childNodes),
        item;
    while (item = items.pop()) {
        if (item.firstChild && item.firstChild.checked) {
            list.removeChild(item);
        }
    }
}
