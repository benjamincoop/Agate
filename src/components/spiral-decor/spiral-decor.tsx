"use client";

import { useEffect, useRef } from "react";
import "./spiral-decor.css";
import excuteQuery from "@/src/lib/db";

/** Represents a single particle */
export class Particle {
    private x: number;
    private y: number;
    private particleTrailWidth: number;
    private strokeColor: string;
    private theta: number;
    private rotateSpeed: number;
    private t: number;
  
    constructor(x: number, y: number, particleTrailWidth: number, strokeColor: string, rotateSpeed: number) {
      this.x = x;
      this.y = y;
      this.particleTrailWidth = particleTrailWidth;
      this.strokeColor = strokeColor;
      this.theta = Math.random() * Math.PI * 2;
      this.rotateSpeed = rotateSpeed;
      this.t = Math.random() * 500;
    }
  
    public rotate(context: CanvasRenderingContext2D) {
      const last = {
        x: this.x,
        y: this.y,
      };
      this.theta += this.rotateSpeed;
      this.reposition();
      context.beginPath();
      context.lineWidth = this.particleTrailWidth;
      context.strokeStyle = this.strokeColor;
      context.moveTo(last.x, last.y);
      context.lineTo(this.x, this.y);
      context.stroke();
    }
  
    public reposition() {
      this.x = (window.innerWidth / 2) + Math.cos(this.theta) * this.t;
      this.y = (window.innerHeight / 2) + Math.sin(this.theta) * this.t;
    }
}

export default function SpiralDecor() {
    /** Template reference to the canvas element */
    const canvas = useRef<HTMLCanvasElement | null>(null);

    /** Canvas 2d context */
    const context = useRef<CanvasRenderingContext2D | any>(null);

    /** Particles to animate */
    const particlesArray = useRef<Particle[]>([]);

    /** set canvas to size of viewport */
    function resize() {
        context.current.canvas.width = window.innerWidth;
        context.current.canvas.height = window.innerHeight;

        if(particlesArray) {
        particlesArray.current.forEach((particle) => particle.reposition());
        }
    }

    /** Animation callback fn */
    function anim() {
        requestAnimationFrame(anim);
    
        context.current.fillStyle = "rgba(0,0,0,0.03)";
        context.current.fillRect(0, 0, context.current.canvas.width, context.current.canvas.height);
    
        particlesArray.current.forEach((particle) => particle.rotate(context.current));
    }

    useEffect(() => {
        context.current = canvas.current?.getContext('2d');
        window.addEventListener('resize', resize);
        generateParticles(50);
        resize();
        anim();

        fetch('/api/test')
    }, []);

    /** Create instances of particles to animate */
    function generateParticles(amount: number) {
        for (let i = 0; i < amount; i++) {
            particlesArray.current.push(new Particle(
                0,0,
                4,
                generateColor(),
                Math.random() * (0.02 - 0.005) + 0.005
            ));
        }
    }

    /** Helper method for generating random colors */
    function generateColor() {
        let hexSet = "0123456789ABCDEF";
        let finalHexString = "#";
        for (let i = 0; i < 6; i++) {
        finalHexString += hexSet[Math.ceil(Math.random() * 15)];
        }
        return finalHexString;
    }

    return (
        <canvas ref={canvas}></canvas>
    );
}