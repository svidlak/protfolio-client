import React, {Dispatch, SetStateAction, useRef, useState} from "react";
import {HexColorPicker} from "react-colorful";
import {Button, Popover} from "antd";

interface IRgb {
    r: number;
    g: number;
    b: number;
}
const ButtonWithColorPicker: React.FC<{
    color: string,
    setColor: Dispatch<SetStateAction<string>>,
    label: string
}> = ({color, setColor, label}) => {
    const buttonRef = useRef(null)
    const [colorPickerToggle, setColorPickerToggle] = useState(false)

    const hexToRgb: (hex: string) => IRgb = hex => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : {
            r:0,
            g:0,
            b:0
        };
    }

    const getTextColor = () => {
        const colorInRgb: IRgb = hexToRgb(color);
        if((colorInRgb.r*0.299)+(colorInRgb.g*0.587)+(colorInRgb.b*0.114)<186) {
            return 'white'
        }
        return 'black'
    }
    return(
        <div style={{padding: '5px', display: 'inline'}}>
            <Popover
                content={
                    <HexColorPicker
                        color={color}
                        onChange={setColor}
                        onMouseLeave={()=> setColorPickerToggle(false)}
                    />
                }
                trigger="click"
                open={colorPickerToggle}
                onOpenChange={()=> setColorPickerToggle(!colorPickerToggle)}
            >
                <Button
                    style={{background: color, color: getTextColor()}}
                    ref={buttonRef}
                >{label}</Button>
            </Popover>
        </div>
    )
}

export default ButtonWithColorPicker
