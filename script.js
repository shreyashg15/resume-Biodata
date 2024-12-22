function closeModal() {
    document.getElementById('profileModal').style.display = 'none';
}

function showAssignmentInfo() {
    document.getElementById('assignmentModal').style.display = 'block';
}

function closeAssignmentModal() {
    document.getElementById('assignmentModal').style.display = 'none';
}
function showProfile(profileIndex) {
    switch (profileIndex) {
        case 0:
            window.location.href = "ksl.html";
            break;
        case 1:
            window.location.href = "tejas.html";
            break;
        case 2:
            window.location.href = "sur.html";
            break;
        case 3:
            window.location.href = "sri.html";
            break;
        case 4:
            window.location.href = "shre.html";
            break;
        case 5:
            window.location.href = "sid.html"; 
            break;
        default:
            alert("Profile not available!");
            break;
    }
}


