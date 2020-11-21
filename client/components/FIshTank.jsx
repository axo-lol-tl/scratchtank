import React, {useRef, useEffect} from 'react';
import Matter from 'matter-js';

import fish from '../static/vectors.js';
import decomp from 'poly-decomp';


const FishTank = ({fishCount}) => {
  
  useEffect(() => {
    const Example = Example || {};

    Example.gravity = function () {
      const { Engine, Render, Runner, Composites, Common, MouseConstraint, Mouse, World, Bodies} = Matter;
      
    // create engine
      const engine = Engine.create()
        // world = engine.world;
      const { world } = engine;
    
      // create renderer
      const render = Render.create({
        element: document.body,
        engine,
        options: {
          width: 800,
          height: 600,
          showVelocity: true,
          showAngleIndicator: true,
          background: 'rgb(49,133,186)',
          wireframes: false
        },
      });
    
      Render.run(render);
    
      // create runner
      const runner = Runner.create();
      Runner.run(runner, engine);
    
      // add walls
      World.add(world, [
        Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
        Bodies.rectangle(400, 600, 800, 50.5, { isStatic: true }),
        Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
        Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
      ]);
    
      engine.world.gravity.y = 0;
     
      const stack = Composites.stack(0, 0, 1, fishCount, 0, 0, function (x, y) {
        switch (Math.round(Common.random(0, 1))) {
          case 0:
            return Bodies.fromVertices(x, y, fish);
          case 1:
            return Bodies.fromVertices(x, y, fish);
        }
      });
    
      World.add(world, stack);
    
      // add mouse controls
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
      World.add(world, mouseConstraint);
      
      // keep the mouse in sync with rendering
      render.mouse = mouse;
    
      // fit the render viewport to the scene
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 },
      });
      
      // context for MatterTools.Demo
      return {
        engine,
        runner,
        render,
        canvas: render.canvas,
        stop: function () {
          Matter.Render.stop(render);
          Matter.Runner.stop(runner);
        },
      };
    };
    
    Example.gravity();
    return () => {
      console.log('unmounted')
    }
  }, [])
 
  
  return <div className="canvas" width={'100'} height={'100px'}></div>;
};


export default FishTank;
