import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const rgb = (r = 0, g = r, b = r) => (r << 16) + (g << 8) + b;
  const [windowWidth, windowHeight] = [window.innerWidth, window.innerHeight];
  const _objects = [];
  const _graphicsProcessing = (resolution = 1, frameRate = 60) => {
    const app = new PIXI.Application({
      width: windowWidth,
      height: windowHeight,
      backgroundColor: rgb(255),
      antialias: true,
      resolution: window.devicePixelRatio * resolution || 1 * resolution
    });
    app.renderer;
    app.ticker.maxFPS = frameRate;
    document.body.appendChild(app.view);
    const container = new PIXI.Container();
    app.stage.addChild(container);
    const _createGraphicsObject = (callback) => {
      var graphics = new PIXI.Graphics();
      graphics.sortableChildren = true;
      callback(graphics, container);
      container.addChild(graphics);
    };
    app.ticker.add(animate);
    function animate() {
      for (let i = 0; i < _objects.length; i++) {
        if (_objects[i].callback) {
          _objects[i].callback(_objects[i]);
        }
      }
    }
    return _createGraphicsObject;
  };
  _graphicsProcessing();
  return `<h1 data-svelte-h="svelte-16zu67k">Blow me</h1>`;
});
export {
  Page as default
};
