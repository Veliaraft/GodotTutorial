var codes = document.querySelectorAll('.code');

for (var i = 0; i < codes.length; i++) {
    target = codes[i].innerHTML.split('\n')
    codes[i].innerHTML = '';
    var a = '';
    for (var j = 0; j < target.length; j++){
        //a = target[i].match(/^(#.*)/g);
        //target[i].replace(/^(#.*)/g, '');
        target[j] = target[j].replaceAll(/(\".+\")|(\'.+\')/g, '<text style="color: SandyBrown;">$1</text>')
        target[j] = target[j].replaceAll(/(func |extends |const |var |enum | and | or |onready |@onready |true|false|null|static)/g, '<text style="color: #ff4040;">$1</text>')
        target[j] = target[j].replaceAll(/([A-Za-z_0-9]+\(.*\))/g, '<text style="color: aqua;">$1</text>')
        target[j] = target[j].replaceAll(/(if |elif |else:|for |while |pass|return)/g, '<text style="color: deeppink;">$1</text>')
        target[j] = target[j].replaceAll(/(HSlider|VSlider|Input|Vector2|Vector3|\$|GDScript|Reference|AudioStreamPlayer|AudioStreamMP3|AudioStreamOGGVorbis|Sprite|Node|Node2D|KinematicBody|StaticBody|RigidBody)/g, '<text style="color: MediumSpringGreen;">$1</text>')
        target[j] = target[j].replaceAll(/(\b\d+)/g, '<text style="color: MediumSpringGreen;">$1</text>');
        //target[i] += a;
        //a = '';
        //console.log(target[j])
        codes[i].innerHTML += target[j] + '\n';
    }
    
    // aqua.forEach(element => {
    //     codes[i].innerHTML = codes[i].innerHTML.replaceAll(element, '<text style="color: aqua;">'+element+'</text>')
    // });
    // pinks.forEach(element => {
    //     codes[i].innerHTML = codes[i].innerHTML.replaceAll(element, '<text style="color: deeppink;">'+element+'</text>')
    // });
    // greens.forEach(element => {
    //     codes[i].innerHTML = codes[i].innerHTML.replaceAll(element, '<text style="color: MediumSpringGreen;">'+element+'</text>')
    // });
}