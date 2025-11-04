function calculateAttendance() {
    let subject = document.getElementById("subject").value;
    let totalSessions = parseInt(document.getElementById("totalSessions").value);
    let attended = parseInt(document.getElementById("attended").value);
    let absent = parseInt(document.getElementById("absent").value);

    if (isNaN(totalSessions) || isNaN(attended) || isNaN(absent) || subject === "") {
        document.getElementById("result").innerText = "⚠️ Please enter all values correctly.";
        return;
    }
    
    let percentage = (attended / totalSessions) * 100;
    let requiredAttendance = Math.ceil(0.75 * totalSessions);
    let moreClassesNeeded = requiredAttendance - attended;
    let remainingSessions = totalSessions - (attended + absent);
    
    let message = `Current ${subject} percentage :  ${percentage.toFixed(2)}%\n`;
    
    if (percentage >= 75) {
        message += "You are already eligible! ✅";
    } else if (moreClassesNeeded <= remainingSessions) {
        message += `⚠️ Attend ${moreClassesNeeded} more ${subject} classes to reach 75%`;
    } else {
        message += "❌ Not Eligible for exams. Even if you attend all remaining classes, you can't reach 75%.";
    }
    
    document.getElementById("result").innerText = message;
}


