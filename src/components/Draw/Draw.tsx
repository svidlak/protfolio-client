import React, {useEffect, useRef} from 'react';
import {ReactSketchCanvas, ReactSketchCanvasRef} from 'react-sketch-canvas';
import useSocketConnection from "../../hooks/useSocketConnection";

const Canvas: React.FC<{
    color: string,
    canvasColor: string
}> = ({ color, canvasColor }) => {
    const canvasRef = useRef<ReactSketchCanvasRef>(null)
    const [path, addPath] = useSocketConnection('draw')

    useEffect(()=> {
        const paths = path.map(path => path.data)
        canvasRef?.current?.loadPaths(paths)
    }, [path])

    const resolvePaths = async () => {
        const paths = await canvasRef?.current?.exportPaths()
        const lastPath = paths[paths.length-1]
        addPath(lastPath)
    }

    return (
        <div onMouseUp={resolvePaths}>
            <ReactSketchCanvas
                width="100%"
                height="85vh"
                strokeWidth={4}
                strokeColor={color}
                ref={canvasRef}
                canvasColor={canvasColor}
            />
        </div>
    );
}

export default Canvas
