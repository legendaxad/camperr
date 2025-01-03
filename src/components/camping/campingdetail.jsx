import React from "react";
import { useParams } from "react-router-dom";
import { campingPlaces } from './campingPlaces';
import { Campingdiv, Campingtime, Imagescamping, MainCampingdiv } from "./campingstyle";
import KakaoMap from "../map/kakaomap";

const Campingdetail = () => {

  const { id } = useParams();
  const Campin = campingPlaces.find((item) => item.id === parseInt(id));

  
  const workingHours = Campin?.camping?.working_hour;

  const workingHoursDisplay = workingHours
    ? `${workingHours.from} - ${workingHours.to}`
    : "Not Available";

  return (
    <div>
      <MainCampingdiv>
      <Campingdiv>
        <Imagescamping>
     
          {Campin.camping.photos.map((photo, index) => (
               // eslint-disable-next-line
            <img
              key={index}
              src={photo}
              alt={`Photo ${index + 1} of ${Campin.camping.name}`}
            />
          ))}
        </Imagescamping>{" "}
        <br />
        <h2>{Campin.camping.name}</h2>
        <h3>{Campin.camping.location}</h3>
        <br />
        <hr />
        <br />
        <Campingtime>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 11.25C9.38194 11.25 8.77775 11.0667 8.26384 10.7233C7.74994 10.38 7.3494 9.89191 7.11288 9.32089C6.87635 8.74987 6.81447 8.12154 6.93505 7.51534C7.05563 6.90915 7.35325 6.35233 7.79029 5.91529C8.22733 5.47825 8.78415 5.18063 9.39034 5.06005C9.99654 4.93947 10.6249 5.00135 11.1959 5.23788C11.7669 5.4744 12.255 5.87494 12.5983 6.38884C12.9417 6.90275 13.125 7.50694 13.125 8.125C13.124 8.9535 12.7945 9.74778 12.2086 10.3336C11.6228 10.9195 10.8285 11.249 10 11.25ZM10 6.25C9.62916 6.25 9.26665 6.35997 8.95831 6.566C8.64997 6.77202 8.40964 7.06486 8.26773 7.40747C8.12581 7.75008 8.08868 8.12708 8.16103 8.4908C8.23338 8.85451 8.41195 9.1886 8.67418 9.45083C8.9364 9.71305 9.27049 9.89163 9.63421 9.96397C9.99792 10.0363 10.3749 9.99919 10.7175 9.85728C11.0601 9.71536 11.353 9.47504 11.559 9.1667C11.765 8.85835 11.875 8.49584 11.875 8.125C11.8745 7.62787 11.6768 7.15125 11.3253 6.79972C10.9738 6.4482 10.4971 6.2505 10 6.25Z"
                fill="#373737"
                fill-opacity="0.7"
              />
              <path
                d="M10 18.75L4.72751 12.5319C4.65425 12.4385 4.58174 12.3445 4.51001 12.25C3.60937 11.0636 3.12282 9.61452 3.12501 8.125C3.12501 6.30164 3.84934 4.55295 5.13865 3.26364C6.42796 1.97433 8.17664 1.25 10 1.25C11.8234 1.25 13.5721 1.97433 14.8614 3.26364C16.1507 4.55295 16.875 6.30164 16.875 8.125C16.8772 9.61384 16.3909 11.0623 15.4906 12.2481L15.49 12.25C15.49 12.25 15.3025 12.4963 15.2744 12.5294L10 18.75ZM5.50751 11.4969C5.50876 11.4969 5.65376 11.6894 5.68688 11.7306L10 16.8175L14.3188 11.7237C14.3463 11.6894 14.4925 11.4956 14.4931 11.495C15.2289 10.5257 15.6265 9.34189 15.625 8.125C15.625 6.63316 15.0324 5.20242 13.9775 4.14752C12.9226 3.09263 11.4919 2.5 10 2.5C8.50816 2.5 7.07742 3.09263 6.02253 4.14752C4.96764 5.20242 4.37501 6.63316 4.37501 8.125C4.3737 9.34265 4.77174 10.5271 5.50813 11.4969H5.50751Z"
                fill="#373737"
                fill-opacity="0.7"
              />
            </svg>
            <strong>{Campin.camping.city}</strong>
          </p>

          {/* Display Working Hours */}
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clip-path="url(#clip0_2_1657)">
                <path
                  d="M9 3.9375C9 3.78832 8.94074 3.64524 8.83525 3.53975C8.72976 3.43426 8.58668 3.375 8.4375 3.375C8.28832 3.375 8.14524 3.43426 8.03975 3.53975C7.93426 3.64524 7.875 3.78832 7.875 3.9375V10.125C7.87503 10.2241 7.90127 10.3215 7.95106 10.4073C8.00084 10.493 8.07241 10.5641 8.1585 10.6132L12.096 12.8632C12.2252 12.9331 12.3766 12.9496 12.5179 12.9093C12.6591 12.869 12.779 12.775 12.8518 12.6475C12.9247 12.5199 12.9448 12.369 12.9078 12.2268C12.8709 12.0847 12.7798 11.9626 12.654 11.8868L9 9.79875V3.9375Z"
                  fill="#373737"
                  fill-opacity="0.7"
                />
                <path
                  d="M9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0C6.61305 0 4.32387 0.948212 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18ZM16.875 9C16.875 11.0886 16.0453 13.0916 14.5685 14.5685C13.0916 16.0453 11.0886 16.875 9 16.875C6.91142 16.875 4.90838 16.0453 3.43153 14.5685C1.95468 13.0916 1.125 11.0886 1.125 9C1.125 6.91142 1.95468 4.90838 3.43153 3.43153C4.90838 1.95468 6.91142 1.125 9 1.125C11.0886 1.125 13.0916 1.95468 14.5685 3.43153C16.0453 4.90838 16.875 6.91142 16.875 9Z"
                  fill="#373737"
                  fill-opacity="0.7"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_1657">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <strong>Working Hours:</strong> {workingHoursDisplay}
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.2501 18.125H16.1438C3.86259 17.4187 2.11884 7.05625 1.87509 3.89375C1.85545 3.64786 1.88452 3.40052 1.96064 3.16588C2.03676 2.93125 2.15842 2.71394 2.31867 2.52641C2.47891 2.33888 2.67458 2.1848 2.89448 2.07302C3.11437 1.96124 3.35415 1.89395 3.60009 1.875H7.04384C7.29419 1.87476 7.53885 1.94969 7.74611 2.0901C7.95338 2.23051 8.11371 2.42992 8.20634 2.6625L9.15634 5C9.24781 5.22722 9.27051 5.4763 9.22162 5.71631C9.17273 5.95631 9.05441 6.17667 8.88134 6.35L7.55009 7.69375C7.75804 8.87547 8.32396 9.96479 9.17128 10.8143C10.0186 11.6639 11.1064 12.2327 12.2876 12.4438L13.6438 11.1C13.8198 10.9288 14.0422 10.8133 14.2834 10.7677C14.5246 10.7221 14.7738 10.7486 15.0001 10.8438L17.3563 11.7875C17.5854 11.8831 17.7809 12.0446 17.9178 12.2517C18.0547 12.4587 18.1268 12.7018 18.1251 12.95V16.25C18.1251 16.7473 17.9275 17.2242 17.5759 17.5758C17.2243 17.9275 16.7474 18.125 16.2501 18.125ZM3.75009 3.125C3.58433 3.125 3.42536 3.19085 3.30815 3.30806C3.19094 3.42527 3.12509 3.58424 3.12509 3.75V3.8C3.41259 7.5 5.25634 16.25 16.2126 16.875C16.2947 16.8801 16.377 16.8689 16.4548 16.8421C16.5326 16.8153 16.6043 16.7734 16.6658 16.7188C16.7274 16.6642 16.7775 16.598 16.8135 16.524C16.8494 16.45 16.8703 16.3696 16.8751 16.2875V12.95L14.5188 12.0062L12.7251 13.7875L12.4251 13.75C6.98759 13.0688 6.25009 7.63125 6.25009 7.575L6.21259 7.275L7.98759 5.48125L7.05009 3.125H3.75009Z"
                fill="#373737"
                fill-opacity="0.7"
              />
            </svg>
            <strong>{Campin.camping.phone_number}</strong>
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.4498 1.71289L18.3998 8.96289L17.5123 9.85039L16.2498 8.70539V16.8629L15.6248 17.4879H11.8748L11.2498 16.8629V12.4879H8.7498V16.8629L8.1248 17.4879H4.3748L3.7498 16.8629V8.71539L2.4998 9.85039L1.6123 8.96289L9.5498 1.71289H10.4498ZM4.9998 7.57914V16.2379H7.4998V11.8629L8.1248 11.2379H11.8748L12.4998 11.8629V16.2379H14.9998V7.57164L9.9998 3.03789L4.9998 7.57914Z"
                fill="#373737"
                fill-opacity="0.7"
              />
            </svg>
            <strong>{Campin.camping.home_page}</strong>
          </p>
        </Campingtime>
        <br />
       <strong> <h4>Discription</h4></strong>
        <br />
        <p>{Campin.camping.description}</p>

        <br />
        <KakaoMap/>
      </Campingdiv>
      </MainCampingdiv>
    </div>
  );
};

export default Campingdetail;
