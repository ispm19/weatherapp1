import {NextUIProvider} from "@nextui-org/react";
import { Input,  Button} from "@nextui-org/react";
import './App.css';
import { useState } from "react";


function App() {
  const [weatherData, setweatherData] = useState(null);
  let myKey = "a7e0c0c9a8e172a634dd12b5bff71ef6";

  const search = async () => {
    const element = document.getElementById('city');
    if (!element || element.value === "") {
      return 0;
    } 

let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=metric&appid=${myKey}`
try {
  const response = await fetch(url);
  const data = await response.json();
  setweatherData(data);
} catch (error) {
  console.error("Error fetching weather data:", error);
}

}

  return (
    <NextUIProvider>
      <div className="container-sm max-w-sm mx-auto mt-44 ">
        <div className="grid grid-cols-1 gap-4 mt-11">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input type="text" label="Search city" id="city"/>
            <Button color="default" className="mt-1 mx-auto" size="lg" onClick={search}>
          Search
        </Button>  
          </div>
          <div className="container grid grid-cols-1 bg-[#3b82f6] bg-opacity-70 h-full p-5 rounded-lg hover:bg-[#3b82f6]">
                    <div className="flex mx-auto ">
                                    <svg
                                    width="80px"
                                    height="80px"
                            viewBox="0 0 1024 1024"
                            className="icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                              <path
                                d="M729.6 626.56S666.24 481.28 536.96 490.24c-1.28 0-152.96-4.48-179.84 189.44 0-1.28-161.28-15.36-172.16 106.24 1.28 0.64-12.8 156.8 190.72 143.36l445.44 0.768s179.84-75.264 106.88-220.16-198.4-83.328-198.4-83.328z"
                                fill="#FFFFFF"
                              />
                              <path
                                d="M739.968 413.184c0 47.872-9.856 93.568-27.648 134.912-6.144 14.336-13.312 28.16-21.248 41.472-29.184-49.28-82.944-82.432-144.128-82.432-90.368 0-164.096 71.936-167.296 161.408-0.128 2.048-0.128 3.968-0.128 6.016v0.512c0 2.048 0 4.096 0.128 6.144 0.64 14.592-13.952 25.088-27.52 20.224-1.792-0.64-3.328-1.28-5.12-1.792h-0.256c-0.512-0.256-1.024-0.256-1.664-0.512s-1.28-0.256-1.792-0.512c-1.28-0.256-2.304-0.64-3.584-0.896-7.168-1.664-14.592-2.56-22.144-2.816-26.88-0.512-51.712 8.832-71.04 24.704-12.928-6.4-25.344-13.568-37.248-21.504C116.992 637.056 56.192 532.352 56.192 413.184c0-188.8 153.088-341.76 341.888-341.76 188.8 0 341.888 152.96 341.888 341.76z m0 0"
                                fill="#FFBC00"
                              />
                              <path
                                d="M787.712 598.528c-15.488 0.128-30.464 2.176-44.672 5.888-13.184 3.456-25.856 8.448-37.632 14.848-0.256 0.128-0.256 0.384-0.256 0.64 0.256 0.768 0.512 1.664 0.768 2.432 0.256 0.512 0.256 1.024 0.512 1.536 0.256 0.768 0.512 1.792 0.768 2.56 4.864 16.128 22.016 25.344 38.144 19.968 0.64-0.256 1.28-0.384 1.792-0.64 1.024-0.256 2.048-0.64 2.944-0.896 1.024-0.256 1.92-0.64 2.944-0.768 9.216-2.432 18.816-3.968 28.672-4.48 81.664-3.968 149.12 65.152 142.976 146.688-4.864 63.744-53.504 115.328-115.712 124.672-6.656 1.024-13.568 1.536-20.48 1.536h-111.872c-0.512 0-0.768 0.64-0.256 0.896 29.44 24.064 66.688 38.784 107.264 39.936 1.664 0.128 3.328 0.128 4.864 0.128 6.912 0 13.696-0.384 20.48-1.152 88.576-10.24 157.44-85.888 157.056-177.28-0.384-97.536-80.64-176.896-178.304-176.512zM335.872 912.64h-20.48c-6.912 0-13.824-0.64-20.48-1.92-51.072-9.856-89.6-55.424-88.32-109.696 0.768-32.768 16.256-61.824 39.936-81.152 19.328-15.872 44.288-25.216 71.04-24.704 7.552 0.256 14.976 1.152 22.144 2.816 1.28 0.256 2.304 0.64 3.584 0.896 0.64 0.128 1.28 0.256 1.792 0.512 0.512 0.128 1.024 0.256 1.664 0.512h0.256c16.256 4.992 32.64-7.424 32.512-24.576v-0.512c0-2.048 0-4.096 0.128-6.016-12.544-6.016-26.112-10.24-40.192-12.544-7.808-1.28-15.744-1.92-23.936-1.92-41.344 0-78.976 16.896-106.112 44.16-26.88 27.136-43.648 64.384-43.648 105.6 0 75.52 56.32 138.368 129.28 148.224 5.248 0.768 10.496 1.152 15.744 1.28h0.256c1.408 0.128 2.944 0.128 4.352 0.128 1.536 0 3.072 0 4.608-0.128 37.888-1.152 72.448-16.512 98.176-40.832h-82.304z m0 0"
                                fill="#6D6D6D"
                              />
                              <path
                                d="M743.04 604.416c-7.424-20.352-17.664-39.296-30.72-56.192-38.144-49.792-98.048-81.92-165.504-81.92-108.672 0-198.144 83.584-207.616 189.696-0.512 6.144-0.768 12.416-0.768 18.688 0 7.808 0.384 15.616 1.28 23.168 1.28 0.256 2.304 0.64 3.584 0.896 0.64 0.128 1.28 0.256 1.792 0.512 0.512 0.128 1.024 0.256 1.664 0.512h0.256c1.792 0.512 3.328 1.152 5.12 1.792 13.696 4.864 28.16-5.632 27.52-20.224-0.128-2.048-0.128-4.096-0.128-6.144v-0.512c0-2.048 0-4.096 0.128-6.016 3.2-89.472 77.056-161.408 167.296-161.408 61.312 0 114.944 33.024 144.128 82.432 5.504 9.472 10.24 19.328 13.952 29.824 0 0.128 0.128 0.256 0.128 0.384 0.256 0.768 0.512 1.664 0.768 2.432 0.256 0.512 0.256 1.024 0.512 1.536 0.128 0.256 0.256 0.512 0.256 0.768 5.376 17.024 23.424 26.752 40.448 21.248 1.024-0.256 2.048-0.64 2.944-0.896 1.024-0.256 1.92-0.64 2.944-0.768-2.048-13.824-5.376-27.136-9.984-39.808zM788.48 912.64c-6.912 0-13.824 1.024-20.48 0H335.872c-2.304 0.384-4.352 0.512-6.656 0.512-4.48 0-9.088-0.512-13.824-0.512-6.912 0-13.824-0.64-20.48-1.92l15.744 42.752h478.72l19.712-42.368c-6.784 1.024-13.568 1.536-20.608 1.536z m0 0"
                                fill="#6D6D6D"
                              />
                            </g>
                          </svg>
             </div>
             {weatherData && weatherData.main && (
              <article className="grid grid-cols-1 mx-auto">
                <h1 className="text-2xl mx-auto text-white">{weatherData.name}</h1>
                <h2 className="text-5xl mx-auto text-white">{weatherData.main.temp}ºC</h2>
                <h2 className="text-sm mx-auto text-white">{weatherData.weather[0].main}</h2>
                <div className="flex justify-between mt-2 mx-auto gap-2 p-2">
                <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3"
                        stroke="#ffffff"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{" "}
                    </g>
                  </svg>

                    <h2 className="mt-1 text-white">{weatherData.main.humidity}</h2>
                  <svg
                      width="32px"
                      height="32px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3"
                          stroke="#ffffff"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />{" "}
                      </g>
                  </svg>
                    <h2 className="mt-1 text-white ">{weatherData.wind.speed}</h2>
                </div>
              </article>
            )};
          </div>
                
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
