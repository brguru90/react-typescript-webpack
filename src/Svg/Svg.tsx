
import './Svg.scss';
import page from './SvgHtml'
import Myservice from '../Myservice/Myservice'
import React from 'react';
var $ = require("jquery");
var swal = require("sweetalert");

class Svg extends Myservice {

    state={
        svg_image:""
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

        let scale=1
        let total_cicrcle=12;
        let size=250*scale
        let radius=scale*size
        let x=scale*size,y=scale*size;
        let angle=360/total_cicrcle;

        let svg_elems=[]
       
        for(let i=0;i<total_cicrcle;i++)
            svg_elems.push(this.get_circle_pos(x,y,radius,angle*(i+1),size))        

        let svg_wrapper=<svg width={scale*size*3} height={scale*size*3} className="svg_wrapper">
            <svg width={scale*size*3} height={scale*size*3} x="0" y="0" className="svg_circle">
                <circle cx={scale*size*3/2} cy={scale*size*3/2} r={scale*200/1.25} stroke="green" stroke-width="2" fill="white" />
            </svg>
            <svg width={scale*size} height={scale*size} x={x} y={y} >
                <circle cx={scale*size/2} cy={scale*size/2} r={scale*50/1.25} stroke="green" data-ang="Guru" onClick={this.get_circle_value.bind(this)} stroke-width="2" fill="yellow" />
            </svg>
            {svg_elems}
        </svg>
        this.setState({svg_image:svg_wrapper})

    }
    get_circle_pos(x:any,y:any,r:any,angle:any,size:any){
      let xp=r*Math.cos(angle* Math.PI / 180)+x
      let yp=r*Math.sin(angle* Math.PI / 180)+y
      console.log(angle,xp,yp)
      return this.get_svg_circle(xp,yp,r,angle,size,size)
    }
    get_svg_circle(x:any,y:any,r:any,angle:any,w:any,h:any) {
        return (
            <>
            <svg width={w} height={h} x={x} y={y} className="svg_circle">
                <circle cx={w/2} cy={h/2}  r={Math.floor(w/4/1.25)} stroke="green" data-ang={angle} onClick={this.get_circle_value.bind(this)} stroke-width="2" fill="yellow" />
            </svg>
            <text fill="red" font-size="12" font-family="Verdana" x={x+r/2} y={y+r*0.8}>{angle}</text>
            </>
        )
    }

    get_circle_value(e:any){
        alert(e.target.dataset.ang)
    }

    render() {
        return (
            page(this)
        )
    }
}

export default Svg;
