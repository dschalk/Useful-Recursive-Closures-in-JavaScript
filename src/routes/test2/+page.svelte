

<script>
const rgb = (r = 0, g = r, b = r) => (r << 16) + (g << 8) + b;
function rgbToHex( r = 0, g = r, b = r ) {
    // Ensure that each color component is within the valid range (0 to 255)
    const clamp = (value) => Math.max(0, Math.min(255, value));

    // Convert each color component to its hexadecimal representation
    const toHex = (value) => clamp(value).toString(16).padStart(2, '0');

    // Create the hexadecimal color string
    let hexString = `${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
    hexString = `0x${hexString}` * 1;
    return hexString;
}
let _renderer;
let _app;
const [windowWidth, windowHeight] = [window.innerWidth, window.innerHeight];
const _objects = [];
const _graphicsProcessing = (resolution = 1, frameRate = 60) => {
    const app = new PIXI.Application({ width: windowWidth, height: windowHeight, backgroundColor: rgb(255), 
        antialias: true, resolution: window.devicePixelRatio*resolution || 1*resolution });
    _renderer = app.renderer;
    _app = app;
    app.ticker.maxFPS = frameRate;
    document.body.appendChild(app.view);
    const container = new PIXI.Container();
    app.stage.addChild(container);
    const objects = [];
    const _createGraphicsObject = (callback) => {
        var graphics = new PIXI.Graphics();
        graphics.sortableChildren = true;
        callback(graphics, container);
        container.addChild(graphics);
        objects.push(graphics);
    };
    app.ticker.add(animate);
    function animate() {
        for (let i = 0; i < _objects.length; i++) {
            if (_objects[i].callback){
                _objects[i].callback(_objects[i]);
            };
        };
    };
    return _createGraphicsObject;
};
const _createGraphicsObject = _graphicsProcessing();
</script>
<h1>Blow me</h1>
   