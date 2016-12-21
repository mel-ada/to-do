function clicky(i) {
  var it = document.getElementById(i);
    it.contentEditable = 'true';
    it.addEventListener('keypress', function(e) {
            console.log('works')
            var key = e.which || e.keyCode;
            if (key === 13) {
                it.setAttribute("contentEditable", "false")
            }
        })
    }
