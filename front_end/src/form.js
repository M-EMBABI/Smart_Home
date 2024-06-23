import "./card.css";
import { useRef, useState, useEffect } from "react";

export default function Form() {
    const [Componet, SetComponent] = useState([
        {
            identifier: " ",
            name: "led1",
            status: "false"
        },
        {
            identifier: " ",
            name: "TV",
            status: "false"
        },
      
        
    ]);
    const devicelist = Componet.map((cmp) => {
        return (
          <div
            key={cmp.identifier}
            className="card-list"
            onClick={() => {
              //   HandleCardClick(cmp);
            }}
          >
            <h1 className="card-item">
              <h3>
                <span
                  style={{
                    display: "inline",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "transparent",
                  }}
                >
                  {cmp.identifier}
                </span>{" "}
                {cmp.name}
              </h3>
              <div className="status">
                <span>status</span>
                <div
                  className="arrow"
                  style={{ backgroundColor: cmp.status ? "green" : "red" }}
                >
                  {" "}
                </div>
              </div>
            </h1>
          </div>
        );
      });
      console.log(devicelist);
    return (
        <div className="body-web">
            <div >{devicelist}</div>
            <div className="form-body">
                <form className="form">
                    <h1 className="reg"> registration led </h1>
                    <input type="text" name="id" className="id" placeholder="id" />
                    <input type="text" name="name" className="name" placeholder="name" />
                    <button type="button" className="button">Add</button>

                </form>
            
            </div>
        </div>

    );
}