(function(){
	// Mobile nav toggle
	const toggle = document.querySelector('.nav-toggle');
	const nav = document.querySelector('.main-nav');
	if(toggle && nav){
		toggle.addEventListener('click', ()=>{
			const shown = nav.style.display === 'flex';
			nav.style.display = shown ? 'none' : 'flex';
		});
	}

	// Year in footer
	const yearEl = document.getElementById('year');
	if(yearEl) yearEl.textContent = new Date().getFullYear();

	// Contact form handling (demo only)
	const form = document.getElementById('contactForm');
	const formMsg = document.getElementById('formMsg');
	if(form){
		form.addEventListener('submit', (e)=>{
			e.preventDefault();
			formMsg.textContent = 'Thanks! Your message has been received. I will reply soon.';
			form.reset();
		});
	}

	// Booking forms on service pages
	const bookings = document.querySelectorAll('.bookingForm');
	bookings.forEach((bf)=>{
		bf.addEventListener('submit', (e)=>{
			e.preventDefault();
			const msgEl = bf.querySelector('.form-msg');
			const formData = new FormData(bf);
			const service = formData.get('service');
			// Demo: show confirmation message. Replace with real submission endpoint as needed.
			if(msgEl) msgEl.textContent = `Thanks! Your ${service} booking request was received. I'll follow up by email.`;
			bf.reset();
		});
	});
})();
