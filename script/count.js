let rejectCount = 0;
let interviewCount = 0;

const interviewButtons = document.querySelectorAll(".interview-btn");
const rejectButtons = document.querySelectorAll(".reject-btn");

for (const button of interviewButtons)
     {
    button.addEventListener("click", function() {
        const jobCard = button.closest(".job-card");
        
   
        if (jobCard.classList.contains("interview")) 
            return;

     
        if (jobCard.classList.contains("rejected"))
             {
            rejectCount--;
            jobCard.classList.remove("rejected");
        }

       
        jobCard.classList.add("interview");
        interviewCount++;

       
        document.getElementById("interview-count").innerText = interviewCount;
        document.getElementById("rejected-count").innerText = rejectCount;
    });
}

  // Reject count
for (const button of rejectButtons)
     { 
    button.addEventListener("click", function() 
     {
        const jobCard = button.closest(".job-card");
        
      
        if (jobCard.classList.contains("rejected")) 
            return;
        
       
        if (jobCard.classList.contains("interview"))
             {
            interviewCount--;
            jobCard.classList.remove("interview");
        }
        
    
        jobCard.classList.add("rejected");
        rejectCount++;
        
       
        document.getElementById("interview-count").innerText = interviewCount;
        document.getElementById("rejected-count").innerText = rejectCount;
    });
     }