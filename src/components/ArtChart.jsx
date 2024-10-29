import React, { Component, useEffect, useState } from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Label
  } from "recharts";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const ArtChart = ({ id }) => {
    const [yearData, setYearData] = useState(null);

    useEffect(() => {
        const getArtHist = async () => {
          const response = await fetch(
          `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getOnDisplay&access_token=${API_KEY}`
          );
      
          const json = await response.json();
          setHistData(art);
        };
        getArtHist().catch(console.error);
      }, [year_end]);

      return (
        <div>
          {histData ? (// rendering only if API call actually returned us data
            <div>
              
            </div>
          ) : null}

            <br></br>
            <h2>30-Day Price Data for {symbol}</h2>

            <LineChart
                width={1300}
                height={400}
                data={cleanData(histData)}
                margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 30,
                }}
            >
                <Line
                type="monotone"
                dataKey="open price"
                stroke="#8884d8"
                activeDot={{ r: 5 }}
                />
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="time" interval={2} angle={20} dx={20}>
                <Label value="Date and Time" offset={0} position="insideBottom" />
                </XAxis>

                <YAxis
                label={{
                    value: "Price",
                    angle: -90,
                    position: "insideLeft",
                    textAnchor: "middle",
                }}
                />
                <Tooltip />
            </LineChart>

            <CoinChart
                symbol={params.symbol}
                market={fullDetails.numbers[params.symbol].USD.MARKET}
                />

          
        </div>
      );
    
  };

export default ArtChart;