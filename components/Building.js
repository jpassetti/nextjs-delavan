import classNames from 'classnames/bind';
import * as styles from './building.module.scss';

let cx = classNames.bind(styles)



const Building = () => {

    const buildUnits = () => {
        let unitsCoords = [];
        for(let i=0; i<10; i++){
            let startingX = 450;
            let startingY = 230;
            let intervalX = 130;
            unitsCoords.push({
                x: i * intervalX + startingX,
                y: startingY
            })
        }
        return unitsCoords;
    }
    const units = buildUnits();
    return <svg x="0px" y="0px"
         viewBox="0 0 1600 900" xmlSpace="preserve">
             <defs>
                <mask id="Mask">
                <OrangeCircles />
                </mask>
            </defs>

            <Rect x="0" y="0" fill="blue" width="1600" height="900"/>
            <Rect x="450" y="230" stroke="tan" strokeWidth="2" width="1200" height="500"/>
           {/* <rect x="0" y="0" width="1600" height="900" mask="url(#Mask)" />*/}

            {units.map((myUnit, i) => {
                return <Unit x={myUnit.x} y={myUnit.y} />;
            })}
            <Rect x="364.81" y="255.19" fill="red" strokeWidth="0" width="73.96" height="255.5"/>
    </svg>
    
}
export default Building

const Window = ({x, y}) => {
    let windowWidth = 40;
    let windowHeight = 80;
    return <g data-group="window">
        <Rect x={`${x}px`} y={`${y}px`} stroke="tan" strokeWidth="1" width={windowWidth} height={windowHeight} fill="blue" />
        <Line x1={`${x+(windowWidth/2)}px`} y1={`${y}px`} x2={`${x+(windowWidth/2)}px`} y2={`${y+windowHeight}px`} width="2" stroke="white" />
        <Line x1={`${x+0}px`} y1={`${y+(windowHeight/2)}px`} x2={`${x+windowWidth}px`} y2={`${y+(windowHeight/2)}px`} width="2" stroke="white" />
        </g>
}
Building.Window = Window;

const Unit = ({x, y, hover}) => {
    let unitClasses = cx({
        unit: true,
        [`fill-red`] : hover
    });
    return <svg className={unitClasses} x={`${x}px`} y={`${y}px`} xmlSpace="preserve">
        <Rect x="0" y="0" stroke="tan" strokeWidth="1" width="130" height="500" fill="transparent" />
        <g data-group="unit lines">
            <Line x1="10" y1="10" x2="130" y2="10" strokeWidth="2" />
            <Line x1="10" y1="10" x2="10" y2="500"/>
            <Line x1="130" y1="10" x2="130" y2="500"/>
        </g>
        <Window x={24} y={20} />
        <Window x={76} y={20} />

        <Window x={24} y={120} />
        <Window x={76} y={120} />

        <Window x={24} y={220} />
        <Window x={76} y={220} />

        <Window x={24} y={320} />
        <Window x={76} y={320} />
    </svg>
}
Building.Unit = Unit;

const Line = ({x1, y1, x2, y2, strokeWidth, stroke="tan"}) => {
    let lineClasses = cx({
        line: true,
        [`stroke-width-${strokeWidth}`] : strokeWidth,
        [`stroke-${stroke}`] : stroke,
    });
    return <line className={lineClasses} x1={x1} y1={y1} x2={x2} y2={y2} />
}
const Rect = ({x, y, stroke="tan", strokeWidth="1", fill, width, height}) => {
    let rectClasses = cx({
        rect: true,
        [`stroke-width-${strokeWidth}`] : strokeWidth,
        [`stroke-${stroke}`] : stroke,
        [`fill-${fill}`] : fill,
    });
    return <rect x={`${x}`} y={`${y}`} className={rectClasses} width={width} height={height}/>
}

const OrangeCircles = () => {
    const buildCircles = () => {
        let circleCoords = [];
        for (let y = 0; y < 50; y++) {
            for(let x=0; x< 50; x++){
                let startingX = 0;
                let intervalX = 70;
                circleCoords.push({
                    x: x * intervalX + startingX,
                    y: y * 100 + 70
                })
            }
        }
        return circleCoords;
    }
    const circles = buildCircles();
    return <svg x="0" y="0" width="1600" height="900">
        {circles.map((myCircle, i) => {
            return <circle cx={myCircle.x} cy={myCircle.y} r="25" stroke="orange" strokeWidth="1" fill="green" />;
        })}
    </svg>
}
Building.OrangeCircles = OrangeCircles;