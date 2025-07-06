
 console.log('я открывалась');

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend)

    async function formSend(e){
        e.preventDefalt()

        let error = formValoidate(form);

        let formData = new formData(form);


        if (error === 0){
            let response = await fetch('./php/send.php',{
                method: 'POST',
                body: formData
            });
            if (response.ok){
                let result = await response.json();
                alert('Заявка успешно отправлена');
                formPreview.innerHTML = '';
                form.reset();
            }else{
                alert('Ошибка отправки');
            }
        }else{
            alert('Заполните все поля');
        }

    }


    function formValoidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);

            if (input.value === ''){
                formAddError(input);
                error++;
            }
        }
            
        return error;


    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

});