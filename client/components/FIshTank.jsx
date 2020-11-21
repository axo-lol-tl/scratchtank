import React, { useState, useEffect } from 'react';
import Matter from 'matter-js';

import fish from '../static/vectors.js';
import decomp from 'poly-decomp';
import { json } from 'body-parser';

const FishTank = (props) => {
  const [fishCount, setFishCount] = useState(props.fishCount);
  const random = () => Math.floor(Math.random() * 500) + 50;

  const environment = {};
  const {
    Engine,
    Render,
    Runner,
    Composites,
    Common,
    MouseConstraint,
    Mouse,
    World,
    Bodies,
  } = Matter;
  const engine = Engine.create();
  const { world } = engine;
  const render = Render.create({
    element: document.body,
    engine,
    options: {
      width: 800,
      height: 600,
      showVelocity: false,
      showAngleIndicator: false,
      background: 'rgb(49,133,186)',
      wireframes: false,
    },
  });
  const runner = Runner.create();
  const walls = [
    Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    Bodies.rectangle(400, 600, 800, 50.5, { isStatic: true }),
    Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
    Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
  ];
  const stack = () =>
    Composites.stack(random(), random(), 1, 1, 0, 0, function (x, y) {
      switch (Math.round(Common.random(0, 1))) {
        case 0:
          return Bodies.fromVertices(x, y, fish);
        case 1:
          return Bodies.fromVertices(x, y, fish);
      }
    });

  const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  const addFish = () => {
    World.add(world, stack());
  };

  environment.gravity = () => {
    // create renderer
    Render.run(render);
    // create runner
    Runner.run(runner, engine);
    // add walls
    World.add(world, walls);
    engine.world.gravity.y = 0;
    addFish();
    // add mouse controls
    World.add(world, mouseConstraint);
    // keep the mouse in sync with rendering
    render.mouse = mouse;
    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    });
  };
  useEffect(() => {
    // World.clear(world, true);
    // Engine.clear();
    environment.gravity();
    return () => {
      console.log('unmounted');
    };
  }, [fishCount]);

  const syncFishes = () => {
    fetch('/api')
    .then(data => json(data))
    .then(response => console.log(response))
    .catch(e => console.log(e))
  }

  return (
    <div>
      <div className="canvas" width={'100'} height={'100px'}></div>
      <button
        onClick={() => {
          addFish();
        }}
      >
        ADD FISH PLS
      </button>
      <button onClick={syncFishes}>Sync Fishes</button>
    </div>
  );
};

export default FishTank;
