var codes = document.querySelectorAll('code');

for (var i = 0; i < codes.length; i++) {
    target = codes[i].innerHTML.split('\n')
    codes[i].innerHTML = '';
    for (var j = 0; j < target.length; j++){
        let a = '';
        if (target[j].includes("#")){
            a = target[j].match(/(\#.*)/)[0];
            target[j] = target[j].replace(/(\#.*)/, "<!>comment<!>");
        }
        
        target[j] = target[j].replaceAll(/((\".+\")|(\'.+\'))/g, '<text style="color: SandyBrown;">$1</text>');
        target[j] = target[j].replaceAll(/(func |extends|const |var |enum | and | or |onready |@onready |true|false|null|static|continue|break| is | in )/g, '<text style="color: #ff4040;">$1</text>');
        target[j] = target[j].replaceAll(/([A-Za-z_0-9]+\(.*\))/g, '<text style="color: dodgerblue;">$1</text>')
        target[j] = target[j].replaceAll(/(if |elif |else:|for |while |pass|return)/g, '<text style="color: deeppink;">$1</text>');
        target[j] = target[j].replaceAll(/( HSlider| VSlider|InputEventMouseMotion|Input| Vector2| Vector3|\$.*| GDScript| Reference| AudioStreamPlayer| AudioStreamMP3| AudioStreamOGGVorbis| Sprite| RigidBody2D| KinematicBody2D| StaticBody2D| Node2D| Node| KinematicBody| StaticBody| RigidBody)/g, '<text style="color: MediumSpringGreen;">$1</text>');
        target[j] = target[j].replaceAll(/(-*\b\d+)/g, '<text style="color: MediumSpringGreen;">$1</text>');

        target[j] = target[j].replace("<!>comment<!>", '<text style="color: Gray;">' + a + '</text>');
        codes[i].innerHTML += target[j] + '\n';
    }
}