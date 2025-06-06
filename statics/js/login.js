 // Toggle password visibility
        document.getElementById('togglePassword').addEventListener('click', function() {
            const passwordInput = document.getElementById('password');
            const eyeIcon = document.getElementById('eyeIcon');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                `;
            } else {
                passwordInput.type = 'password';
                eyeIcon.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                `;
            }
        });

        // Form submission handling
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const submitBtn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const loadingSpinner = document.getElementById('loadingSpinner');
            const successMessage = document.getElementById('successMessage');
            const form = document.getElementById('loginForm');
            
            // Basic validation
            if (!email || !password) {
                form.classList.add('shake');
                setTimeout(() => form.classList.remove('shake'), 500);
                return;
            }
            
            // Show loading state
            btnText.textContent = 'Signing In...';
            loadingSpinner.classList.remove('hidden');
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Hide loading state
                loadingSpinner.classList.add('hidden');
                
                // Show success animation
                form.style.display = 'none';
                successMessage.classList.remove('hidden');
                successMessage.querySelector('.success-checkmark').style.display = 'block';
                
                // Simulate redirect after 2 seconds
                setTimeout(() => {
                    alert('Login successful! In a real application, you would be redirected to the dashboard.');
                    
                    // Reset form for demo purposes
                    form.style.display = 'block';
                    successMessage.classList.add('hidden');
                    successMessage.querySelector('.success-checkmark').style.display = 'none';
                    btnText.textContent = 'Sign In';
                    submitBtn.disabled = false;
                    form.reset();
                }, 2000);
                
            }, 2000);
        });

        // Add input focus effects
        const inputs = document.querySelectorAll('input[type="email"], input[type="password"]');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateY(-2px)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
            });
        });

        // Add smooth scroll and fade-in effects on load
        window.addEventListener('load', function() {
            const slideUpElements = document.querySelectorAll('.slide-up');
            const fadeInElements = document.querySelectorAll('.fade-in');
            
            slideUpElements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.animationDelay = `${index * 0.1}s`;
                }, 100);
            });
            
            fadeInElements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.animationDelay = `${index * 0.2}s`;
                }, 200);
            });
        });