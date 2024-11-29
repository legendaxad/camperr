import React from "react";

import { useEffect } from "react";
import styled from "styled-components";
import { Lasttabdiv } from "../tabs/tabstyle";


const KakaMap = () => {
  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        alert(`Invalid request`)
      });
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=54f29a1a35ab7a7740b6dd3d935e7fa0"
    );
    my_script.then(() => {
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.5652, 126.9774),
          level: 3,
        };
        const map = new kakao.maps.Map(mapContainer, options);

        const markerPositions = [new kakao.maps.LatLng(37.5652, 126.9774)];

        markerPositions.forEach((position) => {
          const marker = new kakao.maps.Marker({
            position: position,
          });
          marker.setMap(map);
        });
      });
    });
  }, []);
  return (
    <Wrapper style={{ display: "flex", justifyContent: "center" }}>
      <MapContainer>
     

        <div id="map" className="map" />
        <Lasttabdiv>
         <div>
          <div>
            <p>Phone number:</p>
            <h4>+7 237 181 181</h4>
            <h4>+7 237 181 181</h4>
          </div>
          <div>
            <p>E-mail:</p>
            <h4>logo.uz</h4>
          </div>
        </div> 
          
        </Lasttabdiv>
      </MapContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`

  display: flex;

  .map {
    flex: 1;
    

border-radius: 10px;
background: url(<path-to-image>) lightgray -236.007px -34.061px / 173.41% 152.73% no-repeat;
    width: 700px;
    height: 300px;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    height: 400px;
  }
`;

const MapContainer = styled.div`
  flex: 1;
  .map {
    flex: 1;
    height: 400px;
    /* width: 400px;
    height: 400px; */
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    h1 {
      margin: 0;
      padding: 0;
    }
    .map {
      display: none;
    }
  }
`;

export default KakaMap;
