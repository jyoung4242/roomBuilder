// main.ts
import "./style.css";

import { UI } from "@peasy-lib/peasy-ui";
import { Engine, DisplayMode } from "excalibur";
import { model, template } from "./UI/UI";
import { RoomBuilder } from "./roomBuilder";
import { loader } from "./resources";

await UI.create(document.body, model, template).attached;

const game = new Engine({
  width: 800, // the width of the canvas
  height: 600, // the height of the canvas
  canvasElementId: "cnv", // the DOM canvas element ID, if you are providing your own
  displayMode: DisplayMode.Fixed, // the display mode
  pixelArt: true,
});

await game.start(loader);
let myRoomBuilder = new RoomBuilder(game);

let myRoom = await myRoomBuilder.generateRoom();
game.add(myRoom);
game.currentScene.camera.strategy.lockToActor(myRoom);
