import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

const DoughnutChart = ({ data }) => {
 const chartRef = useRef(null);

 useEffect(() => {
   if (data.length > 0) {
     drawChart();
   }
 }, [data]);

 const drawChart = () => {
   const svg = d3.select(chartRef.current);
   svg.selectAll("*").remove();

   const width = svg.node().clientWidth;
   const height = svg.node().clientHeight;
   const radius = Math.min(width, height) / 2;

   const color = d3.scaleOrdinal()
     .domain(data.map(d => d.type))
     .range(['#00bcd4', '#ff9800']);

   const arc = d3.arc()
     .outerRadius(radius - 10)
     .innerRadius(radius - 70);

   const pie = d3.pie()
     .sort(null)
     .value(d => d.value);

   const g = svg.append("g")
     .attr("transform", `translate(${width / 2},${height / 2})`);

   const arcs = g.selectAll(".arc")
     .data(pie(data))
     .enter().append("g")
     .attr("class", "arc");

   arcs.append("path")
     .attr("d", arc)
     .attr("fill", d => color(d.data.type));

   const total = data.reduce((acc, cur) => acc + cur.value, 0);

   g.append("text")
     .attr("text-anchor", "middle")
     .attr("dy", "-1em") 
     .text("Total")
     .style("font-size", "1rem")
     .attr("fill", "black");

   g.append("text")
     .attr("text-anchor", "middle")
     .attr("dy", "0.35em")
     .text(`$${total.toFixed(2)}K`) 
     .style("font-size", "1.5rem")
     .attr("fill", "black");
 };

 return (
   <svg ref={chartRef} width="100%" height="400"></svg>
 );
};

export default DoughnutChart;