import React from "react";
import '../Style/Component1.css';
import { HourglassOutlined } from "@ant-design/icons";
const Component1 = () => {
    return (
        <div className="Component1">
            <div>
                <HourglassOutlined style={{ fontSize: '25px' }} />
            </div>
            <div className="circle1"></div>
            <h1>Stay on top of time tracking</h1>

            <img src="src\Components\img\svgviewer-output.png" alt="" />
             <div className="circle2"></div>

        </div>
    )
}

export default Component1;