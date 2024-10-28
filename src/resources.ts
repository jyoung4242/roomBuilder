// resources.ts
import { ImageSource, Loader, Sprite, SpriteSheet, Animation, AnimationStrategy } from "excalibur";
import floor from "./Assets/floortiles.png";
import wall from "./Assets/walltiles.png";
import avatar from "./Assets/avatar.png";
import uiframe from "./Assets/uiframe.png";
import question from "./Assets/missingAvatar.png";
import nineframe from "./Assets/frame.png";
import upperLeftDoor from "./Assets/upperLeftDoor.png";
import upperRightDoor from "./Assets/upperRightDoor.png";
import sideDoorLeft from "./Assets/sideDoorLeft.png";
import sideDoorRight from "./Assets/sideDoorRight.png";
import lowerLeftDoor from "./Assets/lowerleftdoor.png";
import lowerRightDoor from "./Assets/lowerRightdoor.png";
import floorAccents from "./Assets/flooraccents.png";

export const Resources = {
  floortiles: new ImageSource(floor),
  walltiles: new ImageSource(wall),
  avatar: new ImageSource(avatar),
  uiframe: new ImageSource(uiframe),
  question: new ImageSource(question),
  nineframe: new ImageSource(nineframe),
  upperLeftDoor: new ImageSource(upperLeftDoor),
  upperRightDoor: new ImageSource(upperRightDoor),
  sideDoorLeft: new ImageSource(sideDoorLeft),
  sideDoorRight: new ImageSource(sideDoorRight),
  lowerLeftDoor: new ImageSource(lowerLeftDoor),
  lowerRightDoor: new ImageSource(lowerRightDoor),
  floorAccents: new ImageSource(floorAccents),
};

export const floortiles = SpriteSheet.fromImageSource({
  image: Resources.floortiles,
  grid: {
    rows: 6,
    columns: 6,
    spriteWidth: 16,
    spriteHeight: 16,
  },
});

export const walltiles = SpriteSheet.fromImageSource({
  image: Resources.walltiles,
  grid: {
    rows: 6,
    columns: 6,
    spriteWidth: 16,
    spriteHeight: 16,
  },
});

const floorAccentSS = SpriteSheet.fromImageSource({
  image: Resources.floorAccents,
  grid: {
    rows: 7,
    columns: 7,
    spriteWidth: 16,
    spriteHeight: 16,
  },
});

export const lampanimation = new Animation({
  strategy: AnimationStrategy.PingPong,
  frames: [
    {
      graphic: floorAccentSS.getSprite(0, 4),
      duration: 100,
    },
    {
      graphic: floorAccentSS.getSprite(0, 4),
      duration: 100,
    },
    {
      graphic: floorAccentSS.getSprite(0, 4),
      duration: 100,
    },
    {
      graphic: floorAccentSS.getSprite(1, 4),
      duration: 100,
    },
    {
      graphic: floorAccentSS.getSprite(2, 4),
      duration: 100,
    },
    {
      graphic: floorAccentSS.getSprite(3, 4),
      duration: 100,
    },
    {
      graphic: floorAccentSS.getSprite(4, 4),
      duration: 100,
    },
    {
      graphic: floorAccentSS.getSprite(5, 4),
      duration: 100,
    },
    {
      graphic: floorAccentSS.getSprite(5, 4),
      duration: 100,
    },
    {
      graphic: floorAccentSS.getSprite(5, 4),
      duration: 100,
    },
  ],
});

export const floorAccentArray = [
  floorAccentSS.getSprite(0, 0),
  floorAccentSS.getSprite(1, 0),
  floorAccentSS.getSprite(2, 0),
  floorAccentSS.getSprite(3, 0),
  floorAccentSS.getSprite(4, 0),
  floorAccentSS.getSprite(5, 0),
  floorAccentSS.getSprite(6, 0),
  floorAccentSS.getSprite(0, 1),
  floorAccentSS.getSprite(1, 1),
  floorAccentSS.getSprite(2, 1),
  [floorAccentSS.getSprite(5, 1), floorAccentSS.getSprite(6, 1)],
  [floorAccentSS.getSprite(5, 2), floorAccentSS.getSprite(6, 2)],
  floorAccentSS.getSprite(0, 3),
  floorAccentSS.getSprite(1, 3),
  floorAccentSS.getSprite(2, 3),
  floorAccentSS.getSprite(3, 3),
  floorAccentSS.getSprite(4, 3),
  floorAccentSS.getSprite(5, 3),
  floorAccentSS.getSprite(6, 3),
  "lamp",
  floorAccentSS.getSprite(0, 5),
  floorAccentSS.getSprite(1, 5),
  floorAccentSS.getSprite(2, 5),
  floorAccentSS.getSprite(3, 5),
  floorAccentSS.getSprite(4, 5),
  floorAccentSS.getSprite(5, 5),
  floorAccentSS.getSprite(6, 5),
  floorAccentSS.getSprite(0, 6),
  floorAccentSS.getSprite(1, 6),
];

export const wallAccentArray = [
  floorAccentSS.getSprite(4, 0),
  floorAccentSS.getSprite(5, 0),
  floorAccentSS.getSprite(6, 0),
  floorAccentSS.getSprite(0, 3),
  floorAccentSS.getSprite(1, 3),
  floorAccentSS.getSprite(2, 3),
  floorAccentSS.getSprite(3, 3),
  floorAccentSS.getSprite(4, 3),
  floorAccentSS.getSprite(5, 3),
  [floorAccentSS.getSprite(5, 1), floorAccentSS.getSprite(6, 1)],
  [floorAccentSS.getSprite(5, 2), floorAccentSS.getSprite(6, 2)],
];

export const loader = new Loader();

for (let res of Object.values(Resources)) {
  loader.addResource(res);
}
