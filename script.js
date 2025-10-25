// Simple interactivity for contact form and mobile menu
function submitForm(e){
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = 'Thanks — your message has been recorded. Please call +91 97958 20448 for faster response.';
  e.target.reset();
  setTimeout(()=> status.textContent = '', 6000);
}

document.addEventListener('click', function(e){
  if(!e.target.matches('.menu-btn')) return;
  const nav = document.querySelector('.nav');
  if(!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
