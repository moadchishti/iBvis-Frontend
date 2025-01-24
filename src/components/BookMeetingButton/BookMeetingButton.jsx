import React from "react";

const BookMeetingButton = () => {
  const handleClick = () => {
    const meetingTitle = "AI Meeting";
    const meetingDescription = "Discuss AI-powered solutions";
    const meetingLocation = "Online";
    const startTime = "20250125T100000Z"; // Example start time (UTC)
    const endTime = "20250125T110000Z";   // Example end time (UTC)

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(meetingTitle)}&details=${encodeURIComponent(meetingDescription)}&location=${encodeURIComponent(meetingLocation)}&dates=${startTime}/${endTime}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <button onClick={handleClick} className={styles.bookMeetingButton}>
      Book a Meeting
    </button>
  );
};

export default BookMeetingButton;
