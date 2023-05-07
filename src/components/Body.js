import React from "react";
import img_map from "../assets/mapa_cr.png";
//import SVG_map from "../assets/czech-republic.svg";

const Body = () => {
  return (
    <div className="w-full h-[1080px] flex flex-col justify-fit items-center text-center bg-gradient-to-b from-[#c2fdf1] to-[#9dffe6]">
      <div id="header_text" className="m-5 ">
        <h1>Objev nová místa</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <svg
            className="w-[100vh] h-[600px] justify-center items-center flex pt-[100px] "
            style={{ transform: "scale(2)" }}
          >
            <g transform="translate(230,100)">
              <a>
                <path
                  d="m 151.66116,217.87819 1.54,0.75 3.63,-2.53 1.69,2.29 2.8,-2.01 0.76,1.62 1.68,-0.18 -0.68,0.99 3.67,0.84 1.6,-2.36 2.32,0.93 0.58,-1.77 1.4,0.76 1.52,-2.87 -0.47,-1.6 1.27,0.32 1.41,-1.6 3.08,0.44 -0.07,3.89 2.62,0.06 0.46,-1.03 1.68,1.15 -0.35,-1.48 2.55,1.19 4.22,-1.08 1.22,0.78 1.56,-4.28 4.31,-0.49 2.25,3.02 0.61,-0.71 2.57,1.47 -0.24,1.72 0.84,-0.83 2.32,0.85 1.85,-2.32 2.43,0.86 -0.67,-2.99 1.85,2.32 1.49,-1.01 1.92,2.46 1.15,-1.99 7.5,1.99 2.62,-1.77 -0.65,3.56 4.69,-0.17 1.14,2.22 0.29,-2.16 2.95,-2.68 4.8,-1.43 -1.27,-2.63 0.7,-4.13 1.52,0.28 -0.33,-1.39 1.8,-0.64 0.44,-1.65 1.08,2.27 0,0 0.7,0 0,0 2.38,0.41 2.89,3.72 0.94,-1.76 1.92,0.21 1.28,4.65 2.35,1.27 0,0 0.89,-0.27 0,0 0.48,-0.57 0,0 0.92,3.59 -3.29,-0.03 -0.51,1.33 2.96,4.36 -1.33,1.25 0.71,2.48 -2.34,3.97 1.26,0.47 -2.37,6.67 4.08,2.89 -2.64,3.15 6.77,8.02 1.14,0.24 3.47,-3.19 2.94,3.44 3.79,0.3 -0.34,2.83 -2.3,-0.56 2.15,1.68 2.21,-0.91 1.46,3.59 0,0 0.87,0 0,0 1.49,0.7 2.26,-2.77 5.92,2.53 -0.36,1.74 1.29,-1.36 6.8,-0.19 0.8,3.24 -1.25,3.68 7.9,6.7 1.55,-2.06 2.39,1.87 3.17,0.03 1.28,-1.64 1.68,0.81 0.76,-1.43 2.09,0.93 0.5,1.74 -1.5,0.12 3.26,1.45 -0.81,0.77 1.7,1.64 -1.04,0.38 0.57,1.3 -3.93,-0.25 0.11,2.13 -1.26,0.44 0.72,2.07 -2.05,0.75 0.75,1.65 -4.18,3.85 0.6,1.13 1.28,-1.25 1.4,0.58 0.04,2.47 5.01,1.4 -0.58,1.36 1.14,1.02 0,0 -1.7,0.89 -0.69,1.86 0.95,0.13 -1.79,0.55 -0.86,2.14 0,0 -2.35,-0.7 -1.22,-3.17 -2.96,-2.13 -1.12,0.91 -2.78,-0.86 -5.29,-4.16 -6.28,0.2 -1.67,-2.01 -1.56,5.67 -3.34,-0.9 -3.18,2.33 -2.61,0.1 0.79,-2.61 -1.73,-2.63 0.53,-1.73 -8.02,-0.85 -0.64,-2.24 -5.83,0.07 0.14,3.22 -1.94,3.07 1.41,8.92 -0.7,4.05 -1.16,0.2 1.19,4.24 -1.12,0.05 -1.69,6.06 2.42,2.58 -0.36,1.41 -1.86,1.44 -6.11,-1.64 -0.67,-1.4 -6.43,0.19 -0.12,6.18 -7.34,6.38 -1.33,5 0.79,6.74 -1.78,2.57 -3.32,0.07 -1.48,-3.82 -2.18,0.45 -1.16,-3.02 -4.52,3.32 -1.48,-1.43 -3.83,-0.3 -2.96,-4.24 -2.35,0.71 1.05,2.47 -2.28,4.95 -3.9,-0.64 0.18,2.86 -2.84,-0.33 -2.15,3.08 -0.85,-1.62 -4.77,-2.37 -2.69,0.53 -4.56,-2.13 -5.41,-0.65 -1.42,1.16 -1.82,-0.41 0.05,-1.04 -2.66,0.64 0.15,-1.58 -2.43,-0.86 0.49,-2.1 -1.6,0.26 -1.72,-1.73 1.3,-1.88 2.54,0.01 0.61,-2.91 -2.3,-0.34 -2.8,-4.33 -4.24,-0.69 -7.45,-7.37 -5.56,-0.93 0.18,-3.22 -1.98,-4.35 -2.6,-0.77 -2.33,-6.95 -2,1.14 -3.99,-0.31 -4.43,-8.05 0.65,-1.38 -1.92,1.51 -2.54,-4.47 -2.68,0.35 0,0 -1.28,-2.47 0.68,-4.62 2.51,-4.29 1.47,0.8 1.45,-1.54 -0.54,-4.51 -1.64,-2.28 1.57,-0.48 -0.76,-2.52 0.96,-1.97 -1.01,-0.71 3.77,1.4 2.52,-3.21 3.25,-0.55 -0.85,-0.33 0.65,-2.97 2.47,-1.14 -2.45,-3.4 0,0 0,-0.58 0,0 0.59,-1.93 1,0.3 -0.4,-1.16 1.8,0.21 0.32,-2.03 -1.97,-0.04 -0.64,-2.96 2.44,0.2 0.74,-1.98 -1.38,-0.89 0.23,-1.66 4.51,-1.95 -0.28,-2.32 1.92,-3.18 -2.86,-4.77 0.44,-3.21 2.14,-1.67 -2.02,-2.5 0.42,-4.44 -1.87,-0.3 0.33,-1.05 0,0 0,-0.5 0,0 z"
                  title="Jihočeský"
                  id="CZ-JC"
                />
              </a>
              <a>
                <path
                  d="m 502.72116,309.14819 -4.38,2.01 -0.72,1.92 -4.05,1.29 -2.77,0.16 -5.74,-4.19 -5.07,4.31 -2.94,0.08 -3.91,-4.23 -1.39,0.38 -2.45,-2.44 -7.53,-2.26 -3.68,4.14 -3.95,2.04 -1.99,6.08 -4.03,2.75 -3.96,7.35 0.88,2.05 -3.62,3.62 0.47,2.87 -3.12,4.27 -2.03,-0.85 0.79,-2.71 -2.28,-10.27 -2.03,-0.75 -1.12,1.58 -3.04,-0.72 -3.01,1.52 -3.86,-1.39 -0.95,-2.23 -2,-0.75 -3.88,1.34 -1.65,-7.23 -6.32,-0.15 -4.82,-4.35 -1.92,2.05 -4.54,-1.03 -1.8,0.89 -1.29,4.64 -5.02,5.03 -1.76,0.19 -1.66,-2.61 -0.9,2.08 -4.95,-1.35 -15.74,-0.52 -9.9,-4.58 -3.89,-3.63 0.61,-2.46 -1.36,-0.62 -0.85,1.14 -1.27,-2.67 -2.3,0.58 -0.06,-1.11 1.12,0.55 -0.66,-1.3 -1.09,0.89 -0.95,-2.49 -0.9,1.04 -2.06,-0.97 0.86,-1.08 -1.14,-1.36 -5.47,0.37 -2.42,3.18 -3.86,-1.26 -1.56,0.73 -6.74,-5.59 -3.55,0 -3.38,-1.63 0,0 0.86,-2.14 1.79,-0.55 -0.95,-0.12 0.69,-1.87 1.71,-0.89 0,0 0.02,-0.97 2.36,-0.4 1.09,2.32 2.19,0.51 1.15,-3.53 4.05,-0.55 2.09,2.88 2.61,-4.64 3.21,-0.59 2.17,-3.56 5.14,0.23 0.89,-4.1 2.93,1.32 1.48,-1.32 -0.2,-1.66 2.61,-0.73 0.73,2.43 2.48,1.62 2.34,-0.61 0.98,-2.3 4.82,2.31 0.23,-1.16 5.32,-0.96 -1.63,-1.68 0.88,-1.11 6.38,-0.58 1.25,-3.66 2.18,-0.34 1.76,-2.16 0.24,-1.83 -1.55,-0.68 0.63,-1.45 -2.21,1.05 0.3,-2.65 -1.17,-1.13 0.6,-1.37 3.72,-1.48 0.04,-2.11 -3.28,-1.63 1.37,-5.55 3.18,-0.69 -2.69,-2.54 0.11,-2.13 1.93,-0.87 0.8,-3.76 6.12,-3 0,0 0.8,0 0,0 1.88,-1.77 -1.36,-3.59 1.15,-4.06 -1.32,-0.28 -0.43,-3.71 2.23,-4.54 -3.23,-3.25 2.89,0.89 2.96,-4.25 -0.81,-2.19 -1.98,0.06 -1.34,-1.76 1.69,-1.61 -0.05,-2.59 0,0 1.35,1.2 0.98,-3.06 2.28,-0.63 0.34,1.68 3.87,-1.82 1.56,1.4 3.17,0.04 1.36,-5.65 4.5,1.38 1.63,-1.53 2.48,1.73 1.32,-1.1 3.12,0.54 6.93,3.71 2.54,-0.36 0,0 -1.43,1.15 0.61,2.36 -4.5,-1.1 -0.81,5.42 8.72,1.6 -2.02,0.07 -0.52,2.57 -1.56,0.42 0.83,7.3 1.92,0.79 0.9,2.09 -2.54,1.07 -0.33,2.25 5.7,4.27 2.93,-2.92 1.77,-4.35 -2.78,-6.38 2.03,-2.01 3.28,0.74 4.08,9.03 1.27,0.5 0.06,3.71 3.73,1.05 0.94,-2.52 0.64,1.72 -2.66,2.08 0.24,1.94 9.72,5.26 1.76,6.94 0,0 -2.66,4.08 1.62,1.97 -0.92,2.22 2.63,3.34 -1.83,2.1 3.54,0.23 1.09,-1.37 0.46,1.27 -1.38,5 -3.24,0.68 -0.81,4.09 -2.48,0.11 -0.34,3.47 3.09,0.5 6.31,-2.55 1.58,3.76 -0.89,4.47 2.58,-0.87 0.09,1.06 1.37,-0.41 0.84,2.74 5.36,-0.15 2.24,1.29 -0.58,3.82 2.08,0.51 1.6,-1.08 3.49,4.38 2.97,-1.66 1.51,0.75 1.38,-1.51 0.95,2.06 3.69,0.88 -0.9,3.4 5.65,1.67 4.22,7.86 z"
                  title="Jihomoravský"
                  id="CZ-JM"
                />
              </a>
              <a>
                <path
                  d="m 72.661157,89.24819 5.08,3.73 0,0 2.42,2.04 4.14,-0.62 2.4,1.74 1.52,-1.23 1.51,1.47 1.6,-0.26 -0.03,3.31 1.59,1.67 1.66,-1.75 4.48,1.38 2.340003,-1.58 2.48,3.59 -0.92,2.43 0,0 -0.22,0 0,0 0.8,2.99 -1.62,3.2 1.68,0.38 0.2,3.26 -1.34,0.85 3.05,2.21 -1.97,2.71 2.53,0.34 1.26,5.26 1.08,0.04 -0.33,1.55 -1.62,-0.04 1.54,2.81 -4.14,-0.64 0,0 -0.05,0.11 0,0 -0.62,1.04 1.44,1.15 2.56,-0.3 2.54,3.99 0,0 -1.79,0.04 -0.37,3.09 1.89,0.35 -1.55,3.15 -4.4,0.42 0.06,7.31 -2.85,-0.76 -1.440003,-2.06 -0.52,0.96 -1.81,-2.07 -4.74,0.09 -0.94,-1.48 -7.14,6.75 -1.19,-0.46 -0.49,1.61 -3.62,0.68 0,0 0,1.09 0,0 0.55,3.19 -2.74,2.64 -1.05,-0.38 0.32,0.87 -2.84,-1.86 -3.96,1.45 -3.86,-2.2 -1.96,-0.11 -1.35,1.58 -1.07,-0.67 0,0 0.03,0.18 0,0 -1.69,-0.18 -1.17,1.51 -2.42,-0.44 0.84,1.98 -3.58,0.44 0.71,2.41 -3.11,-3.49 -2.28,0.49 -2.38,2.7 -3.93,-1.66 0,0 -0.56,-2.36 -6.65,-2.98 2.5,-3.97 -0.83,-1.29 -2.67,-1.95 -2.56,1.48 -0.09,-2.5 -2.61,-0.35 -0.14,-1.53 -2.97,-0.21 -2.71,-3.12 -0.91,0.99 -0.95,-2.85 -5.1,-0.78 1.26,-2.54 -2.44,-2.95 -1.5,0.44 -2.88,-2.11 -0.4900002,-4.63 1.9500002,-3.71 -2.4200002,-3.64 0.73,-0.63 -1.28,-0.07 -0.77,-2.02 -1.32,0.38 -0.87,-3.49 -2.08,0.39 -3.21000002,-2.32 0.56,-1.84 3.82000002,-1.87 -1.9,-3.04 0.56,-1.29 -2.2,-1.64 7.54,-0.58 1.3800002,2.29 0.1,4.74 4.89,0.25 1.01,2.87 -1.88,-1.15 -0.52,1.79 4.89,3.54 -1.7,3.41 1.36,2.8 4.25,0.57 -1.22,-1.23 1.38,-1.52 -1.38,-2.08 1.06,-1.67 -0.39,-3.22 2.64,-0.05 -0.65,-2.87 1.67,-3.21 2.53,-1.1 0.02,-4.1 2.88,-0.1 0.95,-2.69 2.45,-1.88 1.88,0.77 -0.23,-3.03 2.28,-3.68 14.5,-2.82 3.05,2.77 2.6,-4.98 5.41,-2.4 1.36,2.55 0.82,-4.03 z"
                  title="Karlovarský"
                  id="CZ-KA"
                />
              </a>
              <a>
                <path
                  d="m 313.93116,40.15819 3.96,0.09 6.82,3.03 2.34,2.57 6.6,-0.79 3.3,-1.81 3.32,6.64 0.83,4.86 2.1,0.49 6.64,-2.93 2.93,1.04 1.02,5.64 1.83,2.06 -3.19,2.37 3.3,2.06 1.79,-2.13 1.36,0.5 0.85,-4.1 3.18,-3.4 6.08,2.51 1.55,2.54 2.83,-0.96 1.45,-5.27 3.86,0.44 0.72,1.11 5.2,-0.24 7.15,7.84 2.06,4 -3.59,1.45 0.56,2.92 -2.07,0.86 1.17,1.97 -3.62,3.78 -1.43,0.83 -2.89,-1.55 -1.62,3.83 -3.29,-0.03 -0.31,1.78 -2.98,1.12 0.82,2.3 -1.62,-1.22 -1.56,2.69 1.38,3.1 2.41,-0.45 1.4,1.28 -0.53,1.21 1.46,0.56 1.47,3.59 2.28,-2.23 5.09,0.49 0.12,4.33 1.87,2.8 1.47,1.35 3.3,-0.24 4.77,7.96 6.33,6.09 -0.01,7.13 2.49,2.38 -0.33,1.48 0,0 -1.11,0.64 -7.35,-3.81 -1.57,4.05 -4.29,2.53 -2.73,0.14 -1.53,2.28 -3.12,1.13 1.09,2.26 -3.98,2.28 1.95,2.94 -4.57,-1.48 -3.05,1.18 -0.09,-1.8 -0.65,1.3 -3.94,1.01 -2.55,-3.2 -2.69,-0.11 -2.46,-2.99 -3.25,-0.46 -1,-3.55 -4.81,0.05 0.01,-4.65 -1.74,-0.12 -0.01,-1.64 -4.62,-0.32 -2.04,-1.58 -0.01,0.95 -2.67,0.28 -0.16,2.15 -2.91,-0.05 -1.67,2.33 -2.76,-1.24 0.5,-2.85 -3.21,-2.1 -3.07,1.94 -0.08,2.6 -1.31,1.13 -1.86,-0.65 -1.49,1.93 -3.68,-2.12 -0.21,1.09 -4.46,-0.9 0.48,0.88 -1.43,-0.07 -1.64,-2.37 -1.43,2.21 -1.31,-0.91 -1.38,0.76 -0.05,2.58 -2.97,0.41 0,0 0,0.63 0,0 -3.2,1.92 -1.01,-1.31 0,0 0.3,-2.55 -2.73,-2.25 -1.25,0.76 -1.76,-1.52 -3.07,-0.05 2.33,-1.42 -1.62,-1.55 3.63,-4.04 -0.46,-3.13 -1.75,-1.4 -0.31,-2.8 1.44,-1.06 -0.6,-4.18 -2.43,-2.24 -4.01,2.63 -3.72,-1.75 -2.55,1.1 -2.74,-1.32 0.85,-3.31 -3.13,-1.33 0.64,-1.58 -5.23,-0.81 -0.77,-1.65 0.92,-0.91 -2.66,-1.96 1.28,-1.74 2.23,0.25 -0.48,-2.23 1.85,-0.68 -0.19,-4.25 -2.18,-1.75 1.25,-3.34 -2.82,-4.03 2.8,-2.82 0,0 7.07,4.01 1.71,-0.42 -0.36,-1.35 2.56,-2.74 4.18,2.14 2.2,-0.25 2.95,2.51 0.98,-1.83 1.13,4.01 4.5,-1.25 0.92,-1.54 -1.42,-3.11 3.73,-1.61 -0.06,-1.91 1.66,1.05 -0.18,2.06 0.46,-1.01 3.36,2.54 2.39,-1.77 2.83,2.31 -0.39,-1.53 3.88,-0.3 -1.99,-3.88 -1.73,-0.88 1,-0.4 -1.49,-1.11 0.71,-1.05 -2.04,-0.97 2.79,-4.74 -3.33,-3.25 1.53,-2.21 -2.21,-8.45 1.46,-3.35 -3.2,-3.19 -0.41,-3.05 0,0 z"
                  title="Královéhradecký"
                  id="CZ-KR"
                />
              </a>
              <a className="cursor-pointer">
                <path
                  d="m 265.09116,4.83819 1.75,1.68 1.45,-0.03 0.5,-1.46 3.95,1.69 -0.01,3.08 3.35,-0.31 0.04,-2.75 2.42,-1.29 0.19,4.8 1.65,0.91 4.63,-2.62 -0.17,1.89 3.18,0.82 0.05,2.55 1.57,1.14 -2.16,3.12 0.83,6 2.89,4.12 4.07,1.53 1.21,2.17 0.48,8.14 1.98,0.34 3.84,-4.62 8.73,4.01 0,0 0.41,3.05 3.2,3.19 -1.46,3.35 2.21,8.45 -1.53,2.21 3.33,3.25 -2.79,4.74 2.04,0.97 -0.71,1.05 1.49,1.11 -1,0.4 1.73,0.88 1.99,3.88 -3.88,0.3 0.39,1.53 -2.83,-2.31 -2.39,1.77 -3.36,-2.54 -0.46,1.01 0.18,-2.06 -1.66,-1.05 0.06,1.91 -3.73,1.61 1.42,3.11 -0.92,1.54 -4.5,1.25 -1.13,-4.01 -0.98,1.83 -2.95,-2.51 -2.2,0.25 -4.18,-2.14 -2.56,2.74 0.36,1.35 -1.71,0.42 -7.07,-4.01 0,0 -3.99,-1.36 -0.55,-3.12 -2.7,-2.35 -2.31,0.86 -3.07,-5.62 -2.71,0.3 -0.69,1.51 -3.93,-3.85 -1.49,0.27 0.68,1.38 -1.73,0.74 0.58,2.03 -5.31,2.4 0.3,1.97 -1.84,3.12 -1.64,1.25 -0.92,-0.78 -1.12,2.99 -5.48,-1.24 -0.66,2.79 -2.38,0.98 -0.14,1.63 -3.21,-0.63 -0.8,0.91 -1.25,-1.08 -1.87,1.99 -1.96,-0.2 -1.12,-5.23 -2.74,2.11 -3.3,-1.91 -0.88,2.43 -1.55,-1.84 0,0 -1.12,-3 -2.74,-0.42 -3.16,-8.3 -2.35,-1.7 -1.82,-3.98 0.2,-4.03 -1.75,-0.15 0.57,-2.55 2.66,-2.19 -0.05,-4.14 1.38,-0.53 0,0 0.79,-0.29 0,0 1.01,-1.93 0.22,0.98 1.32,-0.46 -1.16,-0.95 0.95,-3.34 2.69,-2.05 -0.86,-0.78 0.88,-2.87 -1.25,-0.77 2.87,-0.7 4.37,2.84 2.55,-0.2 1.48,-5.73 3.14,-0.45 1.49,-2.47 0,0 6.28,2.83 1.66,-0.43 0.98,2.62 2.31,-0.87 2.28,1.42 2.67,-0.4 3.03,-7.32 1.71,0.52 1.86,-1.19 2.29,1.49 0.32,-1.19 5.31,1.96 3.87,-0.66 -0.7,-3.58 1.11,-1.93 -1.53,-2.51 2.22,-2.29 0.71,-4.02 -1.34,-2.63 -1.7,1.06 -1.79,-1.77 1.51,-2.93 z"
                  title="Liberecký"
                  id="CZ-LI"
                />
              </a>
              <a>
                <path
                  d="m 510.79116,107.63819 1.3,0.28 -2.48,5.91 3.59,2.96 -0.58,4.17 -3.56,0.1 -1.14,2.96 -9.4,2.07 -0.87,1.46 4.6,4.52 0.58,2.32 2.4,1.06 0.59,-1.83 1.28,0 2.98,2.67 3.67,6.94 0.6,4.04 4.58,1.24 -0.12,2.31 3.87,3.04 4.57,-0.75 3.03,-3.76 2.64,-0.04 1.98,-1.86 0.3,1.11 3.37,0.77 -0.06,-4.39 -1.78,-0.36 -1.33,1.22 -0.52,-1.17 0.06,-2.05 2.59,-1.78 5.03,3.1 -0.33,1.53 1.54,1.35 -0.81,1.22 2.01,2.79 1.56,-0.46 1.89,2.17 1.61,-1.06 -0.36,-1.19 3.5,0.05 0.74,3.66 5.66,1.04 0.41,4.13 3.36,2.8 1.02,-2.17 0.93,0.72 1.06,-1.26 -1.69,-1.99 3.21,1.71 5.5,-0.23 0.26,1.38 5.08,3.38 3.97,0.4 1.26,-1.03 -0.64,-2.42 2.97,0.63 0.6,2.3 -1.23,3.46 3.56,2.62 -1.96,1.29 -1.16,3.41 5.28,11.26 -0.32,3.43 3.9,2.69 3.66,-0.18 0.83,2.98 2.14,0.99 3.66,-1.28 2.53,1.62 -0.36,3.09 1.77,7.49 1.17,0.33 -0.05,4.74 1.87,1.55 -1.59,4.07 -5.14,1.86 -2.52,2.43 -6.9,-2.52 -5.41,1.63 -1.61,-0.25 -0.52,-1.68 -2.76,0.32 -2.76,2.26 0.95,3.43 -4.91,4.28 -1.42,3.75 -3.42,2.35 -2.99,-0.55 0,0 -3.58,-1.28 0.11,-3.7 -5.36,-4.49 -0.84,-3.64 -2.65,-0.26 -1.53,1.33 -4.58,-0.94 -3.35,-3.78 -2.6,1.08 -0.81,-1.57 -11.7,2.34 -2.21,-4.74 -5.23,-0.1 0,0 -0.98,-3.61 -2.04,-0.14 -1.67,2.82 -0.85,-0.86 -1.06,-1.72 1.88,-2.41 -4.42,-5.73 -3.29,-1.39 -0.41,-2.81 -2.56,-3.37 -2.15,1.54 -2.66,-1.59 -0.92,-3.93 1.32,-4.21 0,0 -0.22,0 0,0 -0.65,0.87 -3.16,-2.58 0,0 -0.72,0.04 0,0 -0.95,-0.67 -3.43,2.57 -5.48,-3.81 -1.35,2.89 -2.29,-0.55 -1.05,-2.02 -4.89,0.39 -5.17,-7.02 -1.28,-0.86 -1.72,0.87 0,0 -0.46,0 0,0 -0.87,1.14 -0.17,-1.15 -6.43,-2.76 -3.16,1.09 0.78,-5.74 -3.49,2 -3.47,-4.67 0.21,-1.54 0,0 0.45,0.04 0,0 1.87,-3.04 -1.22,-1.44 1.92,-1.6 0,0 0.4,0 0,0 1.13,-3.61 -4.08,-3.49 1.51,-0.87 -0.03,-3.44 5.8,-6.87 -1.17,-5.76 2.61,-2.63 -0.8,-2.98 3.86,-4.15 1.71,0.01 0.64,-2.09 2.7,0.43 3.47,-5.34 3.55,1.85 1.2,-6.34 0,0 2.18,-0.37 0.18,-1.85 3.39,-0.72 4.61,0.75 4.12,-1.28 2.1,1.76 6.6,-4.85 -0.02,-3.84 2.7,1.01 z"
                  title="Moravskoslezský"
                  id="CZ-MO"
                />
              </a>
              <a>
                <path
                  d="m 436.58116,87.34819 5.19,3.68 2.11,-1.32 4.93,2.95 5.2,0.25 0.08,1.64 2.94,1.76 5.46,-0.68 -0.26,3.01 4.32,4.52 3.97,2.06 5.22,-1.44 -1,2.09 1.36,0.68 -1.22,3.49 0.91,2.65 1.25,-0.06 0.18,-2.31 2.25,-0.13 2.81,0.79 0.84,3.25 0,0 -1.2,6.34 -3.55,-1.85 -3.47,5.34 -2.7,-0.43 -0.64,2.09 -1.71,-0.01 -3.86,4.15 0.8,2.98 -2.61,2.63 1.17,5.76 -5.8,6.87 0.03,3.44 -1.51,0.87 4.08,3.49 -1.13,3.61 0,0 -0.4,0 0,0 -1.92,1.6 1.22,1.44 -1.87,3.04 0,0 -0.45,-0.04 0,0 -0.21,1.54 3.47,4.67 3.49,-2 -0.78,5.74 3.16,-1.09 6.43,2.76 0.17,1.15 0.87,-1.14 0,0 0.46,0 0,0 1.72,-0.87 1.28,0.86 5.17,7.02 4.89,-0.39 1.05,2.02 2.29,0.55 1.35,-2.89 5.48,3.81 3.43,-2.57 0.95,0.67 0,0 0.72,-0.04 0,0 3.16,2.58 0.65,-0.87 0,0 0.22,0 0,0 -1.32,4.21 0.92,3.93 2.66,1.59 2.15,-1.54 2.56,3.37 0.41,2.81 3.29,1.39 4.42,5.73 -1.88,2.41 1.06,1.72 0.85,0.86 1.67,-2.82 2.04,0.14 0.98,3.61 0,0 -1.35,3.78 -5.24,-1.61 -0.31,2.61 -4.68,2.25 1.12,2.4 -2.01,1.64 -0.07,2 0,0 0,0 0,0 -0.4,0.94 -4.7,-0.04 -2.51,-3.48 -2.44,0.9 -0.13,2.38 -1.41,-1.68 -2.29,0.31 2.48,4.66 -1.92,2.23 -3.52,0.28 -0.86,-1.39 -4.76,1.53 -2.2,-0.73 1.06,2.51 -3.79,3.95 -2.31,-3.3 -1.7,0.5 -3.46,-1.74 -1.52,1.05 1.02,-3.44 -1.46,-1.27 -3.25,4.26 2.02,5.53 -3.07,1.69 -2.52,4.08 -1.97,1.03 -3.86,-0.55 -1.53,1.3 -1.67,-1.06 -1.49,3.96 -1.71,-0.94 0,0 0,0 0,0 -1.77,-6.94 -9.72,-5.26 -0.24,-1.93 2.66,-2.08 -0.64,-1.72 -0.94,2.52 -3.73,-1.05 -0.06,-3.71 -1.27,-0.5 -4.08,-9.03 -3.28,-0.74 -2.03,2.01 2.77,6.38 -1.77,4.36 -2.93,2.92 -5.69,-4.27 0.33,-2.24 2.54,-1.07 -0.9,-2.1 -1.92,-0.79 -0.83,-7.3 1.55,-0.41 0.52,-2.57 2.02,-0.07 -8.72,-1.6 0.81,-5.42 4.5,1.1 -0.6,-2.36 1.43,-1.16 0,0 0.29,-3.16 1.09,-0.14 -1.7,-2.08 0.22,-2.44 3.88,-3.53 0.11,-4.9 -1.4,-1.87 -3.86,0.36 2.03,-2.93 -1.78,-1.45 1.1,-1.31 -3.98,-4.08 0.04,-2.99 -2.23,-1.54 0.19,-4.4 2.67,-2.06 -5.02,-17.3 3.17,-0.31 0.15,0.9 0,0 0.43,-0.66 0,0 1.28,-2.47 4.01,-2.05 0.25,-3.83 -1.44,-1.45 2.2,-2.27 -1.62,-3.21 1.98,-1.15 3.57,-8.61 -0.11,-2.97 0,0 1.67,-0.23 1.46,-3.25 5.14,0.05 1.76,-3.07 2.1,4 2.63,-1.91 -2.35,-3.73 1.63,-3.01 -1.53,-3.45 -5.06,-1.86 -3.41,-10.44 -4.58,-2.59 2.02,-4.99 z"
                  title="Olomoucký"
                  id="CZ-OL"
                />
              </a>
              <a>
                <path
                  d="m 431.81116,122.05819 0.14,0.02 0,0 0.11,2.97 -3.57,8.61 -1.98,1.15 1.62,3.21 -2.2,2.27 1.44,1.45 -0.25,3.83 -4.01,2.05 -1.28,2.47 0,0 -0.43,0.66 0,0 -0.15,-0.9 -3.17,0.31 5.02,17.3 -2.67,2.06 -0.19,4.4 2.23,1.54 -0.04,2.99 3.98,4.08 -1.1,1.31 1.78,1.45 -2.03,2.93 3.86,-0.36 1.4,1.87 -0.11,4.9 -3.88,3.53 -0.22,2.44 1.7,2.08 -1.09,0.14 -0.29,3.16 0,0 -2.54,0.36 -6.93,-3.71 -3.12,-0.55 -1.32,1.1 -2.48,-1.72 -1.62,1.53 -4.51,-1.38 -1.35,5.65 -3.18,-0.04 -1.55,-1.41 -3.87,1.83 -0.34,-1.69 -2.28,0.63 -0.98,3.06 -1.35,-1.2 0,0 -3.83,-4.32 -4.15,-1.59 -1.42,0.61 -1.56,-1.31 0.29,-1.54 -7.08,-5.46 -4.12,0.15 -0.69,-1.59 -3.37,0.88 -2.23,-3.69 -1.88,-0.82 0,0 -0.58,0 0,0 -3.08,-0.27 -1.5,-2.93 -2.83,3.22 0,0 0,0.7 0,0 0.16,1.03 -1.63,0.42 0.7,1.38 -3.78,0.78 -6.47,-4.61 1.43,-3.67 -1.27,1.02 -3.86,-2.96 -2.89,0.31 0.64,-3.37 -4.03,0.2 -2.64,-3.38 -1.77,0.4 -0.16,-1.49 -1.93,-0.63 -1.69,1.27 -0.79,-1.38 -4.12,1.16 -1.66,-2.98 -7.01,-4.53 0,0 -0.01,-5.15 2.14,-0.62 1.49,-3.54 -1.87,-2 1.35,-2.83 -6.07,-3.18 0.97,-2.36 -1.41,0.6 -0.03,-1.79 -2.86,0.26 0.27,-1.12 -2.75,-0.28 -2.8,-2.82 0.95,-1.31 2.09,0.1 -1.96,-1.84 2.98,-0.38 -0.92,-3.44 2.2,-0.15 -2.55,-1.09 0.68,-1.23 2.86,0.81 0.3,-0.91 0,0 1.01,1.31 3.2,-1.92 0,0 0,-0.63 0,0 2.97,-0.41 0.05,-2.58 1.38,-0.76 1.31,0.91 1.43,-2.21 1.64,2.37 1.43,0.07 -0.48,-0.88 4.46,0.9 0.21,-1.09 3.68,2.12 1.49,-1.93 1.86,0.65 1.31,-1.13 0.08,-2.6 3.07,-1.94 3.21,2.1 -0.5,2.85 2.76,1.24 1.67,-2.33 2.91,0.05 0.16,-2.15 2.67,-0.28 0.01,-0.95 2.04,1.58 4.62,0.32 0.01,1.64 1.74,0.12 -0.01,4.65 4.81,-0.05 1,3.55 3.25,0.46 2.46,2.99 2.69,0.11 2.55,3.2 3.94,-1.01 0.65,-1.3 0.09,1.8 3.05,-1.18 4.57,1.48 -1.95,-2.94 3.98,-2.28 -1.09,-2.26 3.12,-1.13 1.53,-2.28 2.73,-0.14 4.29,-2.53 1.57,-4.05 7.35,3.81 1.11,-0.64 0,0 4.68,4.39 6.54,2.1 3.69,-5.38 3.37,-1.42 2.66,-6.56 0.93,0.41 2.2,-2.62 z"
                  title="Pardubický"
                  id="CZ-PA"
                />
              </a>
              <a>
                <path
                  d="m 571.16116,234.21819 0,0 -3.58,-1.28 0.11,-3.7 -5.36,-4.49 -0.84,-3.64 -2.65,-0.26 -1.53,1.33 -4.58,-0.94 -3.35,-3.78 -2.6,1.08 -0.81,-1.57 -11.7,2.34 -2.21,-4.74 -5.23,-0.1 0,0 -1.35,3.78 -5.24,-1.61 -0.31,2.61 -4.68,2.25 1.12,2.4 -2.01,1.64 -0.47,2.94 -4.7,-0.04 -2.51,-3.48 -2.44,0.9 -0.13,2.38 -1.41,-1.68 -2.16,0.25 2.35,4.72 -1.92,2.23 -3.52,0.28 -0.86,-1.39 -4.76,1.53 -2.2,-0.73 1.06,2.51 -3.79,3.95 -2.31,-3.3 -1.7,0.5 -3.46,-1.74 -1.52,1.05 1.02,-3.44 -1.46,-1.27 -3.25,4.26 2.02,5.53 -3.07,1.69 -2.52,4.08 -1.97,1.03 -3.86,-0.55 -1.53,1.3 -1.67,-1.06 -1.49,3.96 -1.71,-0.94 0,0 -2.66,4.08 1.62,1.97 -0.93,2.23 2.64,3.33 -1.83,2.1 3.54,0.24 1.1,-1.37 0.46,1.27 -1.38,5 -3.24,0.68 -0.82,4.09 -2.47,0.11 -0.35,3.47 3.1,0.49 6.31,-2.54 1.58,3.76 -0.9,4.47 2.58,-0.87 0.09,1.06 1.37,-0.41 0.84,2.73 5.36,-0.15 2.24,1.29 -0.58,3.82 2.08,0.51 1.6,-1.09 3.49,4.39 2.98,-1.67 1.51,0.76 1.37,-1.51 0.95,2.06 3.69,0.88 -0.9,3.4 5.65,1.67 4.21,7.89 0,0 5,-0.81 7.14,-8.79 9.08,-0.48 2.62,-11.3 1.67,-1.63 8.5,-0.15 4.13,-2.02 2.6,-3.04 1.59,-4.77 -0.5,-5.64 2.26,-3.74 -0.45,-3.62 2.18,-4.04 -0.73,-4.16 3.5,-3.38 -0.03,-2.14 7.27,-1.37 9.08,-3.83 3.44,-3.72 0.67,-4.38 z"
                  title="Zlínský"
                  id="CZ-ZL"
                />
              </a>
              <a>
                <path
                  d="m 109.70116,136.07819 2.05,-0.56 0.91,2.25 1.92,-2.1 1.49,3.36 3.39,-1.6 0,0 1.88,3.83 -1.51,0.13 -1.32,4.1 3.21,0.63 1.08,-1.92 2.6,-0.14 1.06,1.49 2.49,-1.38 1.92,1.43 -3.05,0.63 1.82,2 2.76,0.47 1.5,2.08 5.05,-0.14 0,0 0.51,0 0,0 1.31,-0.88 2,0.71 2.99,4.57 4.24,-0.12 -0.36,3.51 3.57,-0.18 2.52,2.05 1.87,-0.09 -1.24,2.55 1.47,5.75 -2.37,0.03 -0.89,5.15 1.07,2.75 -1.79,1.48 0.83,2.83 -1.49,2.71 1.69,-0.57 1.58,1.56 -3.42,1.58 -1.79,3.39 -2.22,-1.88 -3.68,2.03 -2.15,2.9 0.77,2.85 1.77,-1.37 2.47,0.95 -3.46,0.88 -0.2,1.46 2.72,2.34 -1.68,0.93 1.54,0.39 -0.71,0.98 4.15,1.15 -1.5,10.47 0.65,-0.87 1.78,0.82 0.16,4.43 0,0 -1.19,2.22 0,0 0,0.5 0,0 -0.33,1.05 1.87,0.3 -0.42,4.44 2.02,2.5 -2.14,1.67 -0.44,3.21 2.86,4.77 -1.92,3.18 0.28,2.32 -4.51,1.95 -0.23,1.66 1.38,0.89 -0.74,1.98 -2.44,-0.2 0.64,2.96 1.97,0.04 -0.32,2.03 -1.8,-0.21 0.4,1.16 -1,-0.3 -0.59,1.93 0,0 0,0.58 0,0 2.45,3.4 -2.47,1.14 -0.65,2.97 0.85,0.33 -3.25,0.55 -2.52,3.21 -3.77,-1.4 1.01,0.71 -0.96,1.97 0.76,2.52 -1.57,0.48 1.64,2.28 0.54,4.51 -1.45,1.54 -1.47,-0.8 -2.51,4.29 -0.68,4.62 1.28,2.47 0,0 -3.89,-0.2 0,3.65 -1.09,0.18 -8.37,-6.25 -0.91,-9.21 -9.41,-8.93 -4.86,0.64 -5.140003,-3.19 -0.62,-4.9 -5.45,-4.11 0.25,-2.18 -2.36,-1.34 -0.62,-2.61 -1.82,-0.55 -0.66,-1.81 -1.84,-0.11 -0.43,-5.47 -2.05,-0.25 -3.1,-3.89 -7.5,-2.35 -0.61,2.96 -3.08,-2.09 -6.05,-0.29 -2.16,-6.66 -4.42,-4.14 -4.62,-1.36 -0.05,-2.62 -2.1,-3.3 0.95,-6.46 -0.7,-1.24 -1.34,0.82 -2.87,-1.58 -2.66,-11.35 -2.92,0.21 -0.57,-9.49 -3.1,-0.1 -4.11,-2.29 -3.46,-5.44 -0.16,-2.54 6.4,-3.6 -0.71,-3.38 0.92,-3.49 2.11,-0.34 -0.05,-2.56 1.26,-0.35 3.59,-6.5 0,0 3.93,1.66 2.38,-2.7 2.28,-0.49 3.11,3.49 -0.71,-2.41 3.58,-0.44 -0.84,-1.98 2.42,0.44 1.17,-1.51 1.69,0.18 0,0 -0.03,-0.18 0,0 1.07,0.67 1.35,-1.58 1.96,0.11 3.86,2.2 3.96,-1.45 2.84,1.86 -0.32,-0.87 1.05,0.38 2.74,-2.64 -0.55,-3.19 0,0 0,-1.09 0,0 3.62,-0.68 0.49,-1.61 1.19,0.46 7.14,-6.75 0.94,1.48 4.74,-0.09 1.81,2.07 0.52,-0.96 1.440003,2.06 2.85,0.76 -0.06,-7.31 4.4,-0.42 1.55,-3.15 -1.89,-0.35 0.37,-3.09 z"
                  title="Plzeňský"
                  id="CZ-PL"
                />
              </a>
              <a>
                <path
                  d="m 220.88116,126.08819 0.17,0.32 0,0 1.82,0.57 0,0 0.84,1.07 0,0 -1.46,1.46 4.19,-1.1 0.57,3.38 4.92,1.05 0.69,2.94 3.79,1.31 -0.44,2.85 -5.38,2.15 0.32,2.04 1.48,-0.49 0,0 -0.45,2.27 1.15,1.56 -0.99,1.92 0,0 -1.02,-0.69 -0.48,2.29 -5.22,-3.14 -0.91,0.92 -1.41,-0.83 -1.05,1.35 -1.47,-0.67 0,0 -0.02,0.17 0,0 -0.08,1.44 -2.67,-0.11 -3.31,3.86 -3.48,1.13 -1.99,-0.71 -0.43,3.88 -1.32,-1.4 -4.02,0.5 -1.14,-1.54 1.72,-1.33 -1.5,-0.39 1.46,-2.82 -3.17,-0.68 -0.38,-4.77 -2.43,-0.21 -0.64,-3.28 -1.98,-0.72 0.96,-1.6 3.2,-0.9 -4.11,-3.33 -2.32,-0.14 3.11,-1.78 2.37,0.15 1.94,-2.21 1.07,0.13 -0.45,1.94 4.56,-0.24 -0.65,-2.98 1.08,-1.51 2.54,0.99 3.02,-2.31 3.72,0.59 -0.35,-0.9 0,0 -0.03,-0.73 0,0 4.61,-1.24 0,0 1.41,-0.32 0,0 -0.07,0.62 0,0 z"
                  title="Prague"
                  id="CZ-PR"
                />
              </a>
              <a>
                <path
                  d="m 216.54116,78.71819 1.55,1.84 0.88,-2.44 3.3,1.91 2.74,-2.11 1.12,5.23 1.96,0.2 1.87,-1.98 1.25,1.08 0.8,-0.91 3.21,0.62 0.14,-1.63 2.38,-0.98 0.66,-2.79 5.48,1.25 1.12,-2.99 0.92,0.78 1.64,-1.25 1.84,-3.12 -0.3,-1.97 5.31,-2.4 -0.58,-2.03 1.73,-0.74 -0.68,-1.38 1.49,-0.27 3.92,3.85 0.7,-1.51 2.7,-0.3 3.07,5.61 2.31,-0.85 2.69,2.34 0.55,3.12 3.99,1.36 0,0 -2.8,2.82 2.82,4.03 -1.25,3.34 2.18,1.76 0.19,4.25 -1.84,0.68 0.48,2.23 -2.23,-0.25 -1.28,1.74 2.67,1.96 -0.92,0.9 0.77,1.65 5.23,0.81 -0.64,1.58 3.13,1.33 -0.85,3.32 2.74,1.31 2.55,-1.1 3.72,1.75 4.01,-2.63 2.43,2.24 0.6,4.18 -1.44,1.06 0.31,2.81 1.75,1.4 0.46,3.13 -3.63,4.04 1.62,1.55 -2.32,1.42 3.07,0.06 1.76,1.52 1.25,-0.76 2.73,2.25 -0.3,2.54 0,0 -0.3,0.91 -2.87,-0.82 -0.68,1.24 2.55,1.08 -2.2,0.15 0.91,3.44 -2.97,0.38 1.96,1.84 -2.1,-0.1 -0.95,1.31 2.8,2.82 2.75,0.28 -0.26,1.12 2.86,-0.27 0.03,1.8 1.41,-0.6 -0.97,2.36 6.07,3.18 -1.35,2.84 1.86,2 -1.48,3.54 -2.14,0.62 0.01,5.15 0,0 -2.83,3.33 -1.82,-1.16 -2.28,1.89 -0.47,1.71 2.02,2.24 -1.45,1.63 0,0 -0.52,-0.04 0,0 -3.04,-0.99 -1.33,3.24 -1.82,1.03 -5.63,0.47 -1.88,2.11 -1.21,-0.53 0.37,-1.17 -1.53,0.82 0,0 -0.38,-0.01 0,0 -1.13,0.63 -0.49,3.59 -3.13,2.37 -0.31,3.05 0.7,2.76 4.4,0.54 1.29,2.83 -0.61,2.95 -1.84,1.28 -2.93,-1 -0.52,1.36 -1.18,-0.38 -0.8,3.39 -4.05,-2.99 -1.57,1.61 -4.01,0.71 -2.05,-1.39 -0.93,1.04 -1.7,-1.64 -2.2,0.33 -0.92,1.42 1.53,2.18 -4.18,0.11 0.45,2.99 -1.1,0.07 0,0 0.03,0.74 0,0 -0.03,0.22 0,0 -0.48,0.57 0,0 -0.9,0.26 0,0 -2.34,-1.26 -1.28,-4.66 -1.92,-0.21 -0.94,1.77 -2.89,-3.73 -2.38,-0.4 0,0 -0.71,0 0,0 -1.08,-2.27 -0.44,1.64 -1.8,0.64 0.33,1.39 -1.53,-0.28 -0.7,4.13 1.27,2.63 -4.8,1.43 -2.96,2.68 -0.29,2.17 -1.14,-2.22 -4.68,0.17 0.64,-3.56 -2.61,1.76 -7.5,-1.99 -1.15,1.99 -1.92,-2.46 -1.49,1.01 -1.85,-2.32 0.67,2.99 -2.42,-0.86 -1.85,2.32 -2.32,-0.85 -0.83,0.83 0.24,-1.72 -2.57,-1.47 -0.61,0.71 -2.25,-3.02 -4.3,0.49 -1.56,4.28 -1.22,-0.78 -4.21,1.08 -2.55,-1.19 0.34,1.49 -1.68,-1.15 -0.45,1.03 -2.62,-0.06 0.06,-3.89 -3.07,-0.44 -1.41,1.6 -1.27,-0.32 0.46,1.6 -1.52,2.88 -1.4,-0.76 -0.58,1.78 -2.31,-0.93 -1.6,2.36 -3.67,-0.85 0.68,-0.99 -1.68,0.18 -0.76,-1.63 -2.79,2.01 -1.69,-2.29 -3.63,2.53 -1.54,-0.75 0,0 -0.16,-4.43 -1.78,-0.82 -0.65,0.88 1.5,-10.47 -4.15,-1.16 0.71,-0.97 -1.55,-0.39 1.68,-0.93 -2.72,-2.34 0.21,-1.46 3.45,-0.88 -2.47,-0.95 -1.77,1.37 -0.77,-2.84 2.15,-2.9 3.68,-2.04 2.22,1.88 1.79,-3.39 3.43,-1.58 -1.58,-1.56 -1.69,0.57 1.49,-2.71 -0.83,-2.83 1.79,-1.48 -1.07,-2.75 0.89,-5.15 2.37,-0.03 -1.46,-5.75 1.24,-2.55 -1.87,0.08 -2.52,-2.04 -3.57,0.18 0.36,-3.52 -4.24,0.13 -2.98,-4.57 -2.01,-0.71 -1.3,0.88 0,0 -0.52,0 0,0 -5.05,0.14 -1.5,-2.08 -2.77,-0.48 -1.82,-1.99 3.06,-0.63 -1.93,-1.43 -2.49,1.38 -1.06,-1.49 -2.6,0.14 -1.08,1.92 -3.21,-0.63 1.32,-4.1 1.51,-0.13 -1.88,-3.84 0,0 -0.35,-1.21 1.76,-1.42 3.36,0.35 0.71,-3.66 1.8,0.69 -0.92,-2.11 1.17,-0.84 -0.46,-2.53 1.17,0.08 0,0 0.33,0 0,0 3.79,-3.66 2.08,0.89 3.47,-0.97 0.73,-2.54 1.5,0.03 3.42,-3.33 0.01,1.47 7.18,-0.11 0.3,-1.48 1.59,0.34 3.81,-4.4 2.57,3.19 2.16,-0.34 1.13,-3.79 3.76,-0.39 3.32,-2.64 -0.33,-2.19 3.56,0.51 -0.86,-4.26 2.31,-1.81 12.11,2.25 3.44,-0.41 0.23,-1.64 5.92,2.29 0.52,-0.97 0,0 0.16,0.03 0,0 1.73,-2.67 1.83,0.75 0,0 0.75,-0.47 0,0 1.86,-0.82 3.79,0.96 1.23,-6.3 -1.82,-4.7 1.74,-0.93 3.86,1.92 -1,-1.29 1.42,-1.25 -0.26,-1.87 4.48,0.54 -1.49,-6.73 1.65,-0.41 -0.35,-1.39 1.19,0.53 z m -1.69,48.82 0,0 0.34,0.9 -3.72,-0.59 -3.02,2.31 -2.54,-0.98 -1.08,1.5 0.64,2.98 -4.56,0.24 0.45,-1.94 -1.07,-0.13 -1.94,2.21 -2.37,-0.15 -3.11,1.79 2.31,0.14 4.11,3.33 -3.2,0.9 -0.96,1.6 1.98,0.72 0.64,3.29 2.42,0.21 0.38,4.77 3.17,0.67 -1.46,2.82 1.5,0.39 -1.73,1.33 1.14,1.54 4.02,-0.5 1.32,1.4 0.42,-3.88 2,0.71 3.47,-1.14 3.32,-3.86 2.67,0.11 0.08,-1.44 0,0 0.02,-0.17 0,0 1.46,0.67 1.06,-1.35 1.41,0.83 0.9,-0.93 5.23,3.14 0.48,-2.29 1.02,0.69 0,0 0.99,-1.92 -1.18,-1.81 0.48,-2.02 0,0 -1.47,0.49 -0.32,-2.04 5.37,-2.15 0.44,-2.85 -3.79,-1.31 -0.69,-2.94 -4.92,-1.05 -0.58,-3.38 -4.19,1.1 1.46,-1.46 0,0 -0.84,-1.07 0,0 -1.83,-0.56 0,0 -0.28,-0.55 0,0 0.07,-0.62 0,0 -1.41,0.32 0,0 -4.61,1.24 0.1,0.74 z"
                  title="Středočeský"
                  id="CZ-ST"
                />
              </a>
              <a>
                <path
                  d="m 203.16116,2.57819 2.48,-0.76 2.22,2.78 2.79,0.98 3.26,-2.48 3.45,1.8 0.71,-3.34 -0.18,3.53 2.96,0.77 0.31,1.89 2.69,-0.88 3.28,4.24 -3.15,8.81 1.58,0.73 6.04,-2.59 0.23,3.74 -1.42,1.13 -1.56,5.63 0,0 -1.49,2.47 -3.14,0.45 -1.48,5.73 -2.55,0.2 -4.37,-2.84 -2.87,0.7 1.25,0.77 -0.88,2.87 0.86,0.78 -2.69,2.05 -0.95,3.34 1.16,0.95 -1.32,0.46 -0.22,-0.98 -1.01,1.93 0,0 -0.79,0.29 0,0 -1.38,0.53 0.05,4.14 -2.66,2.19 -0.57,2.55 1.75,0.15 -0.2,4.03 1.82,3.98 2.35,1.7 3.16,8.3 2.74,0.42 1.12,3 0,0 -1.23,-0.55 0.35,1.39 -1.65,0.41 1.49,6.73 -4.47,-0.54 0.26,1.87 -1.42,1.25 1,1.28 -3.86,-1.92 -1.73,0.93 1.82,4.7 -1.23,6.31 -3.79,-0.97 -1.87,0.82 0,0 -0.75,0.47 0,0 -1.82,-0.75 -1.73,2.67 0,0 -0.16,-0.03 0,0 -0.52,0.98 -5.92,-2.29 -0.23,1.64 -3.44,0.41 -12.11,-2.25 -2.3,1.81 0.86,4.27 -3.57,-0.51 0.33,2.19 -3.32,2.63 -3.76,0.4 -1.13,3.79 -2.16,0.34 -2.57,-3.19 -3.81,4.4 -1.59,-0.34 -0.3,1.49 -7.17,0.11 -0.01,-1.47 -3.42,3.33 -1.5,-0.03 -0.73,2.54 -3.48,0.97 -2.08,-0.89 -3.78,3.66 0,0 -0.34,0 0,0 -1.17,-0.08 0.47,2.53 -1.17,0.84 0.92,2.11 -1.8,-0.69 -0.71,3.66 -3.37,-0.35 -1.76,1.42 0.35,1.21 0,0 -3.39,1.6 -1.49,-3.36 -1.92,2.1 -0.91,-2.25 -2.05,0.56 0,0 -2.54,-3.99 -2.56,0.3 -1.44,-1.15 0.62,-1.04 0,0 0.05,-0.11 0,0 4.14,0.64 -1.54,-2.81 1.62,0.04 0.33,-1.55 -1.08,-0.04 -1.26,-5.26 -2.53,-0.34 1.97,-2.71 -3.05,-2.21 1.34,-0.85 -0.2,-3.26 -1.68,-0.38 1.62,-3.2 -0.8,-2.99 0,0 0.22,0 0,0 0.92,-2.43 -2.48,-3.59 -2.340003,1.58 -4.48,-1.38 -1.66,1.75 -1.59,-1.67 0.03,-3.31 -1.6,0.26 -1.51,-1.47 -1.52,1.23 -2.4,-1.74 -4.14,0.62 -2.42,-2.04 0,0 -0.59,-1.07 3.49,-0.96 3.66,-4.18 1.01,-8.69 4.85,1.44 4.17,-2.67 0.59,1.67 5.150003,0.47 4.7,-12.57 2.82,-0.03 1.12,2.49 2.89,-0.7 0.23,-3.91 4.65,-2.85 -0.42,-3.22 1.68,0.5 2.24,4.28 4.65,1.85 2.66,-3.84 2.58,-1.27 -1.02,-2.03 2.67,-3.36 -1.49,-4.02 2.89,-1.3 4,0.64 5.61,-3.06 3.86,2.05 1.77,-2.35 1.24,0.95 3.33,-1.24 7.12,1.17 0.51,-2.15 3.27,-0.27 -1.02,-3.46 1.2,-3.48 3.36,0.41 1.53,-2.47 3.2,-1.71 3.64,2.24 4.26,-1.14 1.05,-2 12.24,-4.85 0.85,-3.89 3.01,-1.1 3.35,1.58 4.12,-1.24 0.06,-1.3 3.36,0.51 0.92,-5.43 -7.8,-2.66 0.57,-0.75 -1.26,-0.84 2.29,-1.09 -0.3,-1.63 -3.73,1.13 -2.21,-1.58 0.09,-2.93 1.84,-0.88 0.45,-1.83 -1.11,-1.71 3.72,-2.32 z"
                  title="Ústecký"
                  id="CZ-US"
                />
              </a>
              <a>
                <path
                  d="m 308.21116,169.44819 7.01,4.53 1.66,2.98 4.12,-1.16 0.79,1.38 1.69,-1.27 1.93,0.63 0.16,1.49 1.77,-0.4 2.64,3.38 4.03,-0.2 -0.64,3.37 2.89,-0.31 3.86,2.96 1.27,-1.02 -1.43,3.67 6.47,4.61 3.78,-0.78 -0.7,-1.38 1.63,-0.42 -0.16,-1.03 0,0 0,-0.7 0,0 2.83,-3.22 1.5,2.93 3.08,0.27 0,0 0.58,0 0,0 1.88,0.82 2.23,3.69 3.37,-0.88 0.69,1.59 4.12,-0.15 7.08,5.46 -0.29,1.54 1.56,1.31 1.42,-0.61 4.15,1.59 3.83,4.32 0,0 0.06,2.59 -1.69,1.61 1.33,1.77 1.98,-0.06 0.82,2.19 -2.96,4.25 -2.89,-0.89 3.23,3.25 -2.24,4.54 0.44,3.71 1.32,0.28 -1.15,4.06 1.36,3.59 -1.89,1.77 0,0 -0.79,0 0,0 -6.12,3 -0.81,3.76 -1.92,0.87 -0.11,2.13 2.68,2.54 -3.18,0.69 -1.37,5.55 3.28,1.63 -0.04,2.11 -3.72,1.48 -0.6,1.36 1.17,1.13 -0.3,2.65 2.21,-1.05 -0.64,1.45 1.55,0.68 -0.25,1.83 -1.76,2.16 -2.18,0.34 -1.25,3.67 -6.38,0.57 -0.88,1.12 1.63,1.68 -5.32,0.96 -0.23,1.15 -4.82,-2.31 -0.98,2.3 -2.34,0.61 -2.47,-1.63 -0.74,-2.43 -2.61,0.73 0.2,1.66 -1.48,1.32 -2.93,-1.32 -0.89,4.1 -5.14,-0.24 -2.17,3.56 -3.21,0.59 -2.62,4.65 -2.09,-2.89 -4.05,0.55 -1.15,3.53 -2.18,-0.51 -1.1,-2.32 -2.36,0.4 -0.02,0.98 0,0 -1.14,-1.02 0.58,-1.36 -5.01,-1.4 -0.04,-2.47 -1.4,-0.58 -1.28,1.25 -0.6,-1.13 4.18,-3.85 -0.75,-1.65 2.05,-0.75 -0.72,-2.07 1.26,-0.44 -0.11,-2.13 3.93,0.25 -0.57,-1.3 1.04,-0.38 -1.7,-1.64 0.81,-0.77 -3.26,-1.45 1.5,-0.12 -0.5,-1.74 -2.09,-0.93 -0.76,1.43 -1.68,-0.81 -1.28,1.64 -3.17,-0.03 -2.39,-1.87 -1.55,2.06 -7.9,-6.7 1.25,-3.68 -0.8,-3.24 -6.8,0.19 -1.29,1.36 0.36,-1.74 -5.92,-2.53 -2.26,2.77 -1.49,-0.7 0,0 -0.87,0 0,0 -1.46,-3.59 -2.21,0.91 -2.15,-1.68 2.3,0.56 0.34,-2.83 -3.79,-0.3 -2.94,-3.44 -3.47,3.19 -1.14,-0.24 -6.77,-8.02 2.64,-3.15 -4.08,-2.89 2.37,-6.67 -1.26,-0.47 2.34,-3.97 -0.71,-2.48 1.33,-1.25 -2.96,-4.36 0.51,-1.33 3.29,0.03 -0.92,-3.59 0,0 0.03,-0.22 0,0 -0.03,-0.74 0,0 1.1,-0.06 -0.45,-2.99 4.18,-0.12 -1.53,-2.18 0.92,-1.42 2.2,-0.33 1.7,1.64 0.93,-1.04 2.05,1.39 4.01,-0.71 1.57,-1.62 4.05,3 0.81,-3.4 1.18,0.38 0.52,-1.37 2.93,1.01 1.83,-1.29 0.62,-2.95 -1.3,-2.82 -4.4,-0.55 -0.69,-2.76 0.3,-3.05 3.13,-2.37 0.49,-3.58 1.13,-0.63 0,0 0.38,0.01 0,0 1.53,-0.82 -0.37,1.17 1.21,0.53 1.88,-2.11 5.63,-0.47 1.82,-1.03 1.33,-3.24 3.04,0.99 0,0 0.51,0.04 0,0 1.45,-1.64 -2.02,-2.23 0.47,-1.71 2.28,-1.88 1.82,1.16 z"
                  title="Vysočina"
                  id="CZ-VY"
                />
              </a>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Body;
