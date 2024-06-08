const formData = {
    email: '',
    message: '',
  };

  const STORAGE_KEY = 'feedback-form-state';
  const form = document.querySelector('.feedback-form'); 
  const emailInput = document.querySelector('input');
  const textInput = document.querySelector('textarea');

  
  function saveToLS(STORAGE_KEY, value) {
      const jsonData = JSON.stringify(value);
      localStorage.setItem(STORAGE_KEY, jsonData);
    }
    
     function loadFromLS(STORAGE_KEY) {
        const json = localStorage.getItem(STORAGE_KEY);
        try {
            const data = JSON.parse(json);
            return data;
        } catch {
            return json;
        }
    }    
    
    form.addEventListener('input', () => {
      const formData = new FormData(form);
      const email = formData.get('email');
      const message = formData.get('message');
      const userData = { email, message };
    

      saveToLS(STORAGE_KEY, userData);
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
      
        const formData = new FormData(form);
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();
        const data = { email, message };
      
        if (email === '' || message === '') {
            alert('Fill please all fields');
            return;
        } else {
            console.log(data);
        } 
        
        form.reset();
      
        localStorage.removeItem(STORAGE_KEY);
      
      });

      window.addEventListener('DOMContentLoaded', () => {
        const data = loadFromLS(STORAGE_KEY);
      
        form.elements.email.value = data?.email ?? '';
        form.elements.message.value = data?.message ?? '';
      });
    
  