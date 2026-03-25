document.getElementById('mform')?.addEventListener('submit', (event) => {
        event.preventDefault(); // this prevents the standard action that is taken when certain things happen. 
                                // Forms automatically send stuff to the server when submitted, and redirect to a new page.
                                // We don't want that.

        let form = document.getElementById('mform');
        let formData = new FormData(form);                   // find the form, and transform the data inside of it.

        fetch('/mForm', {
            method: 'POST',
            body: formData,
        }) 
        .then(response => response.json())
        .then(data => {
            if (data.status == 'success') {
              console.log(data.message);
            }
            else {
              console.error(data.message);
            }
        })
        .catch(error => {
            console.error(error);
        })
    });