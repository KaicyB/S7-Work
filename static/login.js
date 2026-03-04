document.getElementById('form id')?.addEventListener('submit', (event) => {
        event.preventDefault(); // this prevents the standard action that is taken when certain things happen. 
                                // Forms automatically send stuff to the server when submitted, and redirect to a new page.
                                // We don't want that.

        let form = document.getElementById('form id');
        let formData = new FormData(form);                   // find the form, and transform the data inside of it.

        fetch('/api/TODO', {
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

    function loadStuff(arg1) {
    fetch(`/api/TODO?arg_name=${arg1}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // do whatever needs doing witht the returned data.
                // it should be in data.#, where you replace # with the name you gave it in app.py
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}