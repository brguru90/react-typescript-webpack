import './Svg.scss';
import page from './SvgHtml'
import Myservice from '../Myservice/Myservice'
import React from 'react';
import user_image from '../assets/user.png'
var $ = require("jquery");
var swal = require("sweetalert");

class Svg extends Myservice {

    state = {
        svg_image: ""
    }

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.drawSvg();
        super.componentDidMount();
    }

    componentDidUpdate() {
        super.componentDidUpdate();
    }

    drawSvg() {

        let scale = 1
        let total_circles = 12;
        let size = 250 * scale
        let radius = scale * size
        let x = scale * size, y = scale * size;
        let angle = 360 / total_circles;
        let pos_x = x + x * 0.35, pos_y = y + y * 0.7
        let svg_elems = []

        for (let i = 0; i < total_circles; i++)
            svg_elems.push(this.get_circle_pos(pos_x, pos_y, radius, angle * (i + 1), size))
        for (let i = 0; i < total_circles; i++)
            svg_elems.push(this.get_square_pos(x, y + y * 0.5, radius + radius * 0.1, angle * (i + 1), size))


        let svg_wrapper = (<svg width={scale * size * 4} height={scale * size * 4} className="svg_wrapper">
            <g transform={`translate(${pos_x - x},${pos_y - y})`} className="svg_circle">
                <circle cx={scale * size + size * 0.5} cy={scale * size + size * 0.5} r={scale * size} stroke="black" stroke-width="2" fill="white" />
            </g>
            <g width={scale * size} height={scale * size} transform={`translate(${pos_x / 4},${pos_y / 2.5})`}  >
                <defs>
                    <pattern id="image" x="20%" y="10%" height="100%" width="100%">      
                        <image href={user_image} height={100*scale} data-ang={angle} onClick={this.get_circle_value.bind(this)} />
                    </pattern>
                </defs>
                <circle cx={scale * size + size * 0.5} cy={scale * size + size * 0.5} r={scale * 80} stroke="rgb(235, 232, 232)" data-ang="Guru" onClick={this.get_circle_value.bind(this)} stroke-width="2" fill="url(#image)" />
                <text fill="red" font-size="18" font-family="Verdana" x={x + scale * 170} y={y + scale * 220}>Guru</text>
            </g>

            {svg_elems}
        </svg >)
        this.setState({ svg_image: svg_wrapper })

    }
    get_circle_pos(x: any, y: any, r: any, angle: any, size: any) {
        let xp = r * Math.cos(angle * Math.PI / 180) + x
        let yp = r * Math.sin(angle * Math.PI / 180) + y
        return this.get_svg_circle(xp, yp, r, angle, size, size)
    }

    get_square_pos(x: any, y: any, r: any, angle: any, size: any) {
        let xp = r * Math.cos(angle * Math.PI / 180) + x
        let yp = r * Math.sin(angle * Math.PI / 180) + y
        return this.draw_text(xp, yp, size, size, "Hi")
    }
    get_svg_circle(x: any, y: any, r: any, angle: any, w: any, h: any) {
        return (
            <g>
                <g width={w} height={h} transform={`translate(${x},${y})`} className="svg_circle" >
                    <circle cx={w / 2} cy={h / 2} r={Math.floor(w / 4 / 1.25)} stroke="rgb(235, 232, 232)" data-ang={angle} onClick={this.get_circle_value.bind(this)} stroke-width="2" fill="rgb(250, 250, 250)" />
                </g>
                <image href={user_image} width={w / 2} height={h / 4} x={x + w / 4} y={y + h / 3} data-ang={angle} onClick={this.get_circle_value.bind(this)} />

            </g>
        )
    }

    draw_text(x: any, y: any, w: any, h: any, text: string) {
        return (
            <g transform={`translate(${x + x * 0.4},${y + y * 0.3})`}>
                <rect x="50" y="20" ry={h * 0.02} width={w / 2} height={h / 4} style={{ fill: "red", stroke: "black", strokeWidth: "2", opacity: "0.5" }} />
                <text fill="green" font-size="18" font-family="Verdana" text-anchor="middle" alignment-baseline="middle" x="100" y="60">{text}</text>
            </g>
        )
    }

    get_circle_value(e: any) {
        alert(e.target.dataset.ang)
    }

    render() {
        return (
            page(this)
        )
    }
}

export default Svg;
