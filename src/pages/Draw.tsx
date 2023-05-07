import React, {useState} from 'react';
import Canvas from '../components/Draw/Draw'
import ButtonWithColorPicker from "../components/Button/ButtonWithColorPicker";
import CONSTANTS from "../utils/constants";
import Chatbox from "../components/Chatbox/Chatbox";
import { Col, Row } from 'antd';

const Draw: React.FC = () => {
    const [strokeColor, setStrokeColor] = useState(CONSTANTS.COLOR.BLACK);
    const [backgroundColor, setBackgroundColor] = useState(CONSTANTS.COLOR.WHITE);

    return (
        <div>
            <Row>
                <Col span={24}>
                    <ButtonWithColorPicker
                        color={strokeColor}
                        setColor={setStrokeColor}
                        label={'Stroke Color'}
                    />
                    <ButtonWithColorPicker
                        color={backgroundColor}
                        setColor={setBackgroundColor}
                        label={'Background Color'}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={18}>
                    <Canvas
                        color={strokeColor}
                        canvasColor={backgroundColor}
                    />
                </Col>
                <Col span={6}>
                    <Chatbox />
                </Col>
            </Row>
        </div>
    );
}

export default Draw
