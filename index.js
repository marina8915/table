var n = 0
var idCol = document.getElementById('col' + i)
for (var i = 100; i > -1; i--) {
    var col = document.createElement('ul')
    col.id = 'col' + i
    table.insertBefore(col, table.childNodes[0])
    for (var j = 100; j > 0; j--) {
        if (i === 0) {
            var num = document.createElement('input')
            num.type = 'text'
            num.value = j
            num.className = 'num'
            num.setAttribute('readonly', 'true')
            document.getElementById('col' + i).insertBefore(num, document.getElementById('col' + i).childNodes[0])
        } else {
            n++
            var el = document.createElement('input')
            el.type = 'text'
            el.className = 'data'
            el.id = n
            var elStyle = 'style' + n
            el.value =localStorage.getItem(n)
            el.style = localStorage.getItem(elStyle)
            el.setAttribute('onfocus', 'changes(' + n + ')')
            document.getElementById('col' + i).insertBefore(el, document.getElementById('col' + i).childNodes[0])
        }
    }
    if (i === 0) {
        var abc = document.createElement('input')
        abc.type = 'text'
        abc.setAttribute('readonly', 'true')
        document.getElementById('col' + i).insertBefore(abc, document.getElementById('col' + i).childNodes[0])
    } else {
        var abc = document.createElement('input')
        abc.type = 'text'
        abc.value = i
        abc.className = 'abc'
        abc.setAttribute('readonly', 'true')
        document.getElementById('col' + i).insertBefore(abc, document.getElementById('col' + i).childNodes[0])
    }
}

    function changes(n) {
        var elem = document.getElementById(n)
        var elemStyle = 'style' + n
        fontColor.onchange = function () {
            elem.style.color = fontColor.value
            localStorage.setItem(elemStyle, elem.getAttribute('style'))
        }

        backgroudColor.onchange = function () {
            elem.style.background = backgroudColor.value
            localStorage.setItem(elemStyle, elem.getAttribute('style'))
        }

        fontResize.onchange = function () {
            elem.style.fontSize = fontResize.value + 'px'
            localStorage.setItem(elemStyle, elem.getAttribute('style'))
        }

        //save changes
        elem.onclick = elem.onblur = elem.onmouseleave = function () {
            localStorage.setItem(n, elem.value)
        }

        elem.onkeypress = elem.onkeydown = function () {
            this.size = ( this.value.length > 2 ) ? this.value.length : 2
        }
    }

    function clearStorage() {
        localStorage.clear()
        window.location.reload()
    }