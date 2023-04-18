let codes = document.querySelectorAll('.code');
let reds = ['extends ', 'func ', 'var ', 'print']
let pinks = ['if ', 'elif ', 'else:', 'for ', 'while ', 'pass']
let aqua = ['_ready()', '_process()', '_process(delta)', 
            '_physics_process(delta)', '_physics_process()', 
            '_init()', '_get(property)']
let greens = ['Input', 'Vector2', 'Vector3']
let deeppinks = ['pass']
for (var i = 0; i < codes.length; i++) {
    reds.forEach(element => {
        codes[i].innerHTML = codes[i].innerHTML.replaceAll(element, '<text style="color: #ff4040;">'+element+'</text>')
    });
    aqua.forEach(element => {
        codes[i].innerHTML = codes[i].innerHTML.replaceAll(element, '<text style="color: aqua;">'+element+'</text>')
    });
    deeppinks.forEach(element => {
        codes[i].innerHTML = codes[i].innerHTML.replaceAll(element, '<text style="color: deeppink;">'+element+'</text>')
    });
    exceptions.forEach(element => {
        codes[i].innerHTML = codes[i].innerHTML.replaceAll(element, '<text style="color: grey;">'+codes[i].innerHTML.match(element)+'</text>')
    });
}