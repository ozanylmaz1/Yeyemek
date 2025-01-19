document.querySelectorAll('.change-link').forEach(link => {
    link.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const inputField = document.getElementById(targetId);

        if (targetId === 'username') {
            const nick = document.getElementById('nick');
            nick.value = inputField.value;
        }

        if (targetId === 'userphone') {
            const nick = document.getElementById('phones');
            nick.value = inputField.value;
        }

        if (targetId === 'useremail') {
            const nick = document.getElementById('mail');
            nick.value = inputField.value;
        }

        if (this.textContent === 'Kaydet') {
            inputField.setAttribute('readonly', true);
            this.textContent = 'Değiştir';
        } else {
            inputField.removeAttribute('readonly');
            inputField.focus();
            this.textContent = 'Kaydet';
        }

        inputField.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                inputField.setAttribute('readonly', true);
                this.textContent = 'Değiştir';

                if (targetId === 'username') {
                    const nick = document.getElementById('nick');
                    nick.value = inputField.value;
                }

                if (targetId === 'userphone') {
                    const nick = document.getElementById('phones');
                    nick.value = inputField.value;
                }

                if (targetId === 'useremail') {
                    const nick = document.getElementById('mail');
                    nick.value = inputField.value;
                }
            }
        });
    });
});
