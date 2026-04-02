"use client";
import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import SelectionBar from "../Components/SelectionBar/selectionBar";
import "./university.css";

// Register Plugin
Chart.register(annotationPlugin);

export default function UniversityResults() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [selectedSemester, setSelectedSemester] = useState("All Semesters");

  const studentGrades = {
    "All Semesters": [
        { name: "HS23", grade: 4.88 },
        { name: "FS24", grade: 4.75 },
        { name: "HS24", grade: 5.35 },
      { name: "FS25", grade: 5.3 },
      { name: "HS25", grade: 5.5 },
    ],
    HS25: [
        { name: "Computer Networks and Distributed Systems", grade: 6.0 },
        { name: "Foundations of Computing II", grade: 6.0 },
        { name: "Foundations of Cybersecurity", grade: 5.5 },
        { name: "Seminar: Digital Platforms for Resilience in Crisis", grade: 4.75 },
        { name: "Business Informatics II", grade: 5.25 },
    ],
    FS25: [
      { name: "Business Informatics I", grade: 5.25 },
      { name: "Database Systems", grade: 5.25 },
      { name: "Effective Software Testing", grade: 5.75 },
      { name: "Introduction to Artificial Intelligence", grade: 4.75 },
      { name: "Software Engineering", grade: 5.5 },
    ],
    HS24: [
      { name: "Banking and Finance I", grade: 5.25 },
      { name: "Business Administration III", grade: 4.25 },
      { name: "Financial Accounting", grade: 6.0 },
      { name: "Numerical Methods in Informatics", grade: 5.75 },
      { name: "Software Construction", grade: 5.5 },
    ],
    FS24: [
      { name: "Business Administration II", grade: 5.25 },
      { name: "Foundations of Computing I", grade: 5.25 },
      { name: "Informatics II", grade: 4.5 },
      { name: "Mathematik II", grade: 4.0 },
      { name: "Statistics", grade: 4.75 },
    ],
    HS23: [
      { name: "Mathematics 1", grade: 5.0},
        { name: "Informatics 1", grade: 4.5 },
        { name: "Business Administration I", grade: 5.0 },
        { name: "Informatics and the Economy", grade: 5.75 },
        { name: "Microeconomics for Informatics", grade: 4.5 },
        { name: "People-Oriented Computing", grade: 4.5 },
    ]
  };

  const grades = studentGrades[selectedSemester];
  const average = grades.reduce((sum, item) => sum + item.grade, 0) / grades.length;
  const isAllSemesters = selectedSemester === "All Semesters";

  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: isAllSemesters ? "line" : "bar",
      data: {
        labels: grades.map((g) => g.name),
        datasets: [
          {
            label: "Grade",
            data: grades.map((g) => g.grade),
            backgroundColor: isAllSemesters ? "rgba(30, 58, 138, 0.1)" : "rgba(30, 58, 138, 0.7)",
            borderColor: "rgba(30, 58, 138, 1)",
            borderWidth: isAllSemesters ? 3 : 1,
            borderRadius: isAllSemesters ? 0 : 6,
            barThickness: "flex",
            maxBarThickness: 50,
            pointRadius: isAllSemesters ? 6 : 0,
            pointHoverRadius: isAllSemesters ? 8 : 0,
            pointBackgroundColor: "rgba(30, 58, 138, 1)",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            tension: 0,
            fill: isAllSemesters,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            backgroundColor: "rgba(15, 23, 42, 0.9)",
            titleFont: { size: 14, weight: "bold" },
            bodyFont: { size: 13 },
            padding: 12,
            cornerRadius: 8,
            displayColors: false,
            callbacks: {
              label: (context) => `Grade: ${context.parsed.y.toFixed(2)}`,
            },
          },
          annotation: {
            annotations: {
              line1: {
                type: "line",
                yMin: average,
                yMax: average,
                borderColor: "rgba(30, 58, 138, 0.8)",
                borderWidth: 3,
                borderDash: [6, 6],
              },
            },
          },
        },
        scales: {
          y: {
            min: 1,
            max: 6,
            ticks: { stepSize: 1 },
            title: { display: true, text: "Grade (1-6)", font: { weight: "bold" } },
            grid: { color: "rgba(0, 0, 0, 0.05)" },
          },
          x: {
            grid: { display: false },
            ticks: {
              autoSkip: false,
              maxRotation: isAllSemesters ? 0 : 45,
              minRotation: isAllSemesters ? 0 : 45,
            }
          },
        },
      },
    });
  }, [selectedSemester, grades, average]);

  return (
    <div className="university-page">
      <header className="university-header">
        <h1 className="university-title">University Results</h1>
        <p className="university-subtitle">Academic performance overview</p>
      </header>

      <div className="selection-area">
        <button 
          className={`overview-btn ${selectedSemester === "All Semesters" ? "active" : ""}`}
          onClick={() => setSelectedSemester("All Semesters")}
        >
          All Semesters
        </button>
        
        <SelectionBar
          options={Object.keys(studentGrades).filter(s => s !== "All Semesters")}
          selected={selectedSemester}
          setSelected={setSelectedSemester}
        />
      </div>

      <div className="stats-grid">
        <div className="stat-card average-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-label">{isAllSemesters ? "Overall Average" : "Semester Average"}</span>
            <span className="stat-value">{average.toFixed(2)}</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-label">{isAllSemesters ? "Semesters" : "Courses"}</span>
            <span className="stat-value">{grades.length}</span>
          </div>
        </div>
      </div>

      <div className="chart-section">
        <div className="chart-container" role="img" aria-label={`Bar chart showing grades for ${selectedSemester}`}>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>

      <section className="table-section">
        <h2 className="section-title">Grade Details</h2>
        <div className="table-wrapper">
          <table className="grades-table">
            <thead>
              <tr>
                <th>{isAllSemesters ? "Semester" : "Course Name"}</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td className="grade-cell">
                    <span className={`grade-pill ${item.grade >= 4 ? 'pass' : 'fail'}`}>
                      {item.grade.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
