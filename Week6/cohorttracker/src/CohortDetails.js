import React from 'react';
import styles from './CohortDetails.module.css'; // Import the CSS Module

function CohortDetails(props) {
    // Define the style for <h3> element based on cohort status
    const cohortTitleStyle = {
        color: props.cohort.currentStatus === "Ongoing" ? "green" : "blue"
    };

    return (
        // Apply the box class to the container div
        <div className={styles.box}>
            <h3 style={cohortTitleStyle}> {/* Apply dynamic style here */}
                {props.cohort.cohortCode} -
                <span>{props.cohort.technology}</span>
            </h3>
            <dl>
                <dt>Started On</dt>
                <dd>{props.cohort.startDate}</dd>
                <dt>Current Status</dt>
                <dd>{props.cohort.currentStatus}</dd>
                <dt>Coach</dt>
                <dd>{props.cohort.coachName}</dd>
                <dt>Trainer</dt>
                <dd>{props.cohort.trainerName}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;
