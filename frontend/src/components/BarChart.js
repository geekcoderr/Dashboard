// src/components/BarChart.js
import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

const BarChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', 800)
      .attr('height', 400)
      .style('overflow', 'visible')
      .style('margin-top', '50px');

    const x = d3.scaleBand()
      .domain(data.map(d => d.quarter))
      .range([0, 800])
      .padding(0.4);

    const y = d3.scaleLinear()
      .domain([0, 2400])
      .range([400, 0]);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    svg.append('g')
      .call(xAxis)
      .attr('transform', 'translate(0, 400)')
      .selectAll("text")
      .attr("transform", "translate(-10,10)rotate(-45)")
      .style("text-anchor", "end");

    svg.append('g').call(yAxis);

    svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.quarter))
      .attr('y', d => y(d.acv))
      .attr('width', x.bandwidth())
      .attr('height', d => 400 - y(d.acv))
      .attr('fill', '#69b3a2');
  }, [data]);

  return (
    <svg ref={ref}></svg>
  );
}

export default BarChart;
