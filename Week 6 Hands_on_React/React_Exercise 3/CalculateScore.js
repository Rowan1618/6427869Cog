import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
    const name = "Steeve";
    const school = "DNV Public School";
    const totalMarks = 284;
    const scorePercent = ((totalMarks / 300) * 100).toFixed(2); // Assuming total is out of 300

    return (
        <div className="details-container">
            <h1>Student Details:</h1>
            <p><span className="label name">Name:</span> <span className="value name">{name}</span></p>
            <p><span className="label school">School:</span> <span className="value school">{school}</span></p>
            <p><span className="label total">Total:</span> <span className="value total">{totalMarks} Marks</span></p>
            <p><span className="label score">Score:</span> <span className="value score">{scorePercent}%</span></p>
        </div>
    );
}

export default CalculateScore;