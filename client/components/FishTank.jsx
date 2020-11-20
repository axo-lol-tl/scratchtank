import React, { Component } from 'react';
import Matter from 'matter-js';
import fish from '../static/vectors.js';
import decomp from 'poly-decomp';


const FishTank = () => {
  const Example = Example || {};

  Example.gravity = function () {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies;

    // create engine
    const engine = Engine.create(),
      world = engine.world;

    // create renderer
    const render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        showVelocity: true,
        showAngleIndicator: true,
      },
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add walls
    World.add(world, [
      Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
      Bodies.rectangle(400, 600, 800, 50.5, { isStatic: true }),
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
    ]);

    engine.world.gravity.y = -1;
    // console.log(animals.fish);
    var stack = Composites.stack(0, 0, 0, 0, 0, 0, function (x, y) {
      switch (Math.round(Common.random(0, 1))) {
        case 0:
          if (Common.random() < 0.8) {
            // return Bodies.rectangle(
            //   x,
            //   y,
            //   Common.random(20, 50),
            //   Common.random(20, 50)
            // );
            return Bodies.fromVertices(x, y, fish);
          } else {
            d;
            // return Bodies.rectangle(
            //   x,
            //   y,
            //   Common.random(80, 120),
            //   Common.random(20, 30)
            // );
            return Bodies.fromVertices(x, y, fish);
          }
        case 1:
          return Bodies.fromVertices(x, y, fish);
          return Bodies.rectangle(
            x,
            y,
            Common.random(80, 120),
            Common.random(20, 30)
          );
      }
    });

    World.add(world, stack);

    // add mouse controls
    // var mouse = Mouse.create(render.canvas),
    //   mouseConstraint = MouseConstraint.create(engine, {
    //     mouse: mouse,
    //     constraint: {
    //       stiffness: 0.2,
    //       render: {
    //         visible: false,
    //       },
    //     },
    //   });
    // World.add(world, mouseConstraint);
    // keep the mouse in sync with rendering
    // render.mouse = mouse;
    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    });
    // context for MatterTools.Demo
    return {
      engine: engine,
      runner: runner,
      render: render,
      canvas: render.canvas,
      stop: function () {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
      },
    };
  };

  Example.gravity();

  return <div className="canvas" width={'100'} height={'100px'}></div>;
};

export default FishTank;
