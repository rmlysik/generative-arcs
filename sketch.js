const ROWS = 3;
const COLUMNS = 3;
const CELL_SIZE = 150;
const MARGIN = CELL_SIZE * 0.1;
const PADDING = CELL_SIZE * 0.1;
const BOX_SIZE = CELL_SIZE + (PADDING * 2);
const OFFSET = (BOX_SIZE / 2) + MARGIN;
const ARC_WEIGHT = 20;
const ARC_RADIUS_START = CELL_SIZE * 0.2;
const ARC_RADIUS_STEP = CELL_SIZE * 0.3;
let PALETTE = [];

function setup() {
  let canvasWidth = (MARGIN * 2) + (BOX_SIZE * COLUMNS);
  let canvasHeight = (MARGIN * 2) + (BOX_SIZE * ROWS);
  createCanvas(canvasWidth, canvasHeight);
  PALETTE = [
    color(181, 168, 134), // khaki
    color(254, 225, 199), // peach
    color(76, 30, 79), // purple
  ];
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  for (let x = 0; x < COLUMNS; x++) {
     for (let y = 0; y < ROWS; y++) {
        let posX = OFFSET + (x * BOX_SIZE);
        let posY = OFFSET + (y * BOX_SIZE);
        for (let n = 0; n < 3; n++)
        {
          let radius = ARC_RADIUS_START + (ARC_RADIUS_STEP * n);
          let angleStart = 30 * floor(random(0, 12));
          let angleStop = (angleStart + (30 * floor(random(0, 12)))) % 360; 
          let arcColor = getRandomColorFromPalette();
          noFill();
          strokeWeight(ARC_WEIGHT);
          stroke(arcColor);
          arc(posX, posY, radius, radius, angleStart, angleStop);
        }    
    }
  }
}

function getRandomColorFromPalette() {
  return PALETTE[floor(random(0, PALETTE.length))];
}