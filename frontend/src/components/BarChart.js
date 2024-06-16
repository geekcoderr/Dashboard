// src/components/BarChart.js
import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data.length > 0) {
      drawChart();
    }
  }, [data]);

  const drawChart = () => {
    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const x = d3.scaleBand()
      .domain(data.map(d => d.quarter))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.acv)]).nice()
      .range([height - margin.bottom, margin.top]);

    const color = d3.scaleOrdinal()
      .domain(['Existing Customer', 'New Customer'])
      .range(['#00bcd4', '#ff9800']);

    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));

    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    const barGroups = svg.selectAll(".bar-group")
      .data(data)
      .enter().append("g")
      .attr("class", "bar-group")
      .attr("transform", d => `translate(${x(d.quarter)},0)`);

    barGroups.append("rect")
      .attr("x", 0)
      .attr("y", d => y(d.acv))
      .attr("width", x.bandwidth())
      .attr("height", d => y(0) - y(d.acv))
      .attr("fill", d => color(d.type));

    barGroups.append("text")
      .attr("x", x.bandwidth() / 2)
      .attr("y", d => y(d.acv) - 5)
      .attr("dy", ".75em")
      .attr("text-anchor", "middle")
      .text(d => `$${d.acv} (${d.percentage})`)
      .attr("fill", "black")
      .style("font-size", "0.75rem"); // Small font size for text inside bars
  };

  return (
    <svg ref={chartRef} width="100%" height="400"></svg>
  );
};

export default BarChart;
