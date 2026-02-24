const jobsContainer = document.getElementById('jobs-container');

jobsContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const jobs = event.target.closest('.job-card');
    if (jobs) jobs.remove();

    // Update total count
    const totalJob = document.getElementById('total-count');
    if (totalJob) totalJob.textContent = document.querySelectorAll('.job-card').length;
  }
});