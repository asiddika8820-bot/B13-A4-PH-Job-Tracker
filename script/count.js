let interviewCount = 0;
let rejectedCount = 0;
let totalJobs = 8;


// Interview buttons
const interviewButtons = document.querySelectorAll(".interview-btn");

interviewButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const jobCard = button.closest(".px-4");

        // যদি already interview না হয়
        if(jobCard.dataset.status !== "interview"){

            // যদি আগে rejected থাকে, rejectedCount কমাও
            if(jobCard.dataset.status === "rejected"){
                rejectedCount--;
            }

            jobCard.dataset.status = "interview";

            interviewCount++;

            document.getElementById("interview-count").innerText = interviewCount;
            document.getElementById("rejected-count").innerText = rejectedCount;

        }

    });

});




// Rejected buttons
const rejectButtons = document.querySelectorAll(".reject-btn");

rejectButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const jobCard = button.closest(".px-4");

        if(jobCard.dataset.status !== "rejected"){

            // যদি আগে interview থাকে, interviewCount কমাও
            if(jobCard.dataset.status === "interview"){
                interviewCount--;
            }

            jobCard.dataset.status = "rejected";

            rejectedCount++;

            document.getElementById("interview-count").innerText = interviewCount;
            document.getElementById("rejected-count").innerText = rejectedCount;

        }

    });

});

