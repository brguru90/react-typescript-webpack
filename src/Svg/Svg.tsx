import './Svg.scss';
import page from './SvgHtml'
import Myservice from '../Myservice/Myservice'
import React from 'react';
import user_image from '../assets/user.png'
var $ = require("jquery");
var swal = require("sweetalert");
var Base64 = require('base-64');


class Svg extends Myservice {

    state = {
        svg_image: "",
        team: {
            head: {},
            members: []
        }
    }

    constructor(props: any) {
        super(props);
    }

    async componentDidMount() {
        let image_blob = await $.ajax({
            url: "http://localhost:8081/" + user_image,
            type: "GET",
            xhrFields:{
                responseType: 'blob'
            },
        })
            .done(function (result: any) {
                // var link = document.createElement("a");
                // document.body.appendChild(link);
                // link.setAttribute("type", "hidden");
                // link.href = "data:image/png;base64," + result;
                // link.download = "data.png";
                // link.click();


                // var img = document.createElement("img");
                // document.body.appendChild(img);
                // img.setAttribute("height", "500px");
                // img.setAttribute("width", "500px");
                // img.src = "data:image/png;base64," + result;
                // document.body.removeChild(link);
                // console.log("data:text/plain;base64," + result)
                // return ("data:text/plain;base64," + result);
            });
        const reader = new FileReader()
        reader.addEventListener('load', () => {
            // console.log("====result", reader.result)           

            let head = {
                name: "sudhakar",
                role: "Manager",
                profile_picture: reader.result
            }

            let users = []
            for (let i = 0; i < 14; i++)
                users.push({
                    name: "User " + i,
                    role: "Sanity Engg",
                    profile_picture: reader.result
                })

            this.setState({
                team: {
                    head: head,
                    members: users
                }
            })

            console.log(this.state.team)
            this.drawSvg(this.state.team);

        });
        reader.readAsDataURL(image_blob)

        super.componentDidMount();
    }


    componentDidUpdate() {
        super.componentDidUpdate();
    }

    drawSvg(users: any) {

        let scale = 0.9
        let total_circles = users.members.length;
        let size = 250 * scale
        let radius = scale * size
        let x = scale * size, y = scale * size;
        let angle = 360 / total_circles;
        let pos_x = x + x * 0.37, pos_y = y + y * 0.7
        let svg_elems = []

        for (let i = 0; i < total_circles; i++)
            svg_elems.push(this.get_circle_pos(pos_x, pos_y, radius, angle * (i + 1), size, users.members[i],scale))
        for (let i = 0; i < total_circles; i++)
            svg_elems.push(this.get_square_pos(x, y + y * 0.55, radius + radius * 0.1, angle * (i + 1), size, scale, users.members[i]))


        let svg_wrapper = (<svg width={scale * size * 4} height={scale * size * 4} className="svg_wrapper">
            <g transform={`translate(${pos_x - x},${pos_y - y})`} className="svg_circle">
                <circle cx={scale * size + size * 0.5} cy={scale * size + size * 0.5} r={scale * size} stroke="black" stroke-width="2" fill="white" />
            </g>
            <g width={scale * size} height={scale * size} transform={`translate(${pos_x / 4},${pos_y / 2.5})`}  >
                <defs>
                    <pattern id="image" x="20%" y="10%" height="100%" width="100%">
                        <image xlinkHref={users.head.profile_picture} height={100 * scale} data-ang={angle} onClick={this.get_circle_value.bind(this)} />
                    </pattern>
                </defs>
                <circle cx={scale * size + size * 0.5} cy={scale * size + size * 0.5} r={scale * 80} stroke="rgb(235, 232, 232)" data-ang="Guru" onClick={this.get_circle_value.bind(this)} stroke-width="2" fill="url(#image)" />
                <g transform={`translate(${x + x * 0.4},${y + y * 0.3})`}>
                    <rect x="50" y="100" ry={scale * size * 0.02} width={scale * size / 2} height={scale * size / 4} style={{ fill: "#e6e6e6", stroke: "black", strokeWidth: "2", opacity: "0.5" }} data-ang="Guru" onClick={this.get_circle_value.bind(this)} />
                    <text fill="green" font-size={18 * scale} font-family="Verdana" text-anchor="middle" alignment-baseline="middle" x="100" y="130">{users.head.name}</text>
                </g>
            </g>

            {svg_elems}
        </svg >)
        this.setState({ svg_image: svg_wrapper })

    }
    get_circle_pos(x: any, y: any, r: any, angle: any, size: any, user: any,scale:any) {
        let xp = r * Math.cos(angle * Math.PI / 180) + x
        let yp = r * Math.sin(angle * Math.PI / 180) + y
        return this.get_svg_circle(xp, yp, r, angle, size, size, user,scale)
    }

    get_square_pos(x: any, y: any, r: any, angle: any, size: any, scale: any, text: any) {
        let xp = r * Math.cos(angle * Math.PI / 180) + x
        let yp = r * Math.sin(angle * Math.PI / 180) + y
        return this.draw_text(xp, yp, size, size, scale, text)
    }
    get_svg_circle(x: any, y: any, r: any, angle: any, w: any, h: any, user: any,scale:any) {
        return (
            <g>
                <g width={w} height={h} transform={`translate(${x},${y})`} className="svg_circle" >
                    <circle cx={w / 2} cy={h / 2} r={Math.floor(w / 4 / 1.5)} stroke="rgb(235, 232, 232)" data-ang={angle} onClick={this.get_circle_value.bind(this)} stroke-width="2" fill="rgb(250, 250, 250)" />
                </g>
                <image xlinkHref={user.profile_picture} width={w / 2} height={h / 4} x={x + w / 4} y={y + h / 3} data-ang={angle} onClick={this.get_circle_value.bind(this)} />

            </g>
        )
    }

    draw_text(x: any, y: any, w: any, h: any, scale: any, text: string) {
        return (
            <g transform={`translate(${x + x * 0.4},${y + y * 0.3})`}>
                <rect x="50" y="20" ry={h * 0.02} width={w / 2*scale} height={h / 4*scale} style={{ fill: "#e6e6e6", stroke: "black", strokeWidth: "2", opacity: "0.5" }} data-ang={text} onClick={this.get_circle_value.bind(this)} />
                <text fill="green" font-size={18 * scale} font-family="Verdana" text-anchor="middle" alignment-baseline="middle" x={100*scale*1.1} y={60*scale}>{text.name}</text>
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
