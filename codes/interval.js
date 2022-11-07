const check = document.getElementsByName('check');
        const qs = document.getElementsByClassName('Q');
        setInterval(function(){
            for(let i = 0; i < 4; i++){
                if(check[i].checked == true){
                    qs[i].style.display = 'block';
                }else{
                    qs[i].style.display = 'none';
                }
            }
            if($('#w').prop('checked') == true){
                $('#w').click(function(){
                    $('#w').prop('checked', false);
                });
            }else{
                $('#w').click(function(){
                    $('#w').prop('checked', true);
                });
            }
            if($('#m').prop('checked') == true){
                $('#m').click(function(){
                    $('#m').prop('checked', false);
                });
            }else{
                $('#m').click(function(){
                    $('#m').prop('checked', true);
                });
            }
            if($('#w').prop('checked') == true){
                $('#m').prop('disabled', true);
            }else{
                $('#m').prop('disabled', false);
            }
            if($('#m').prop('checked') == true){
                $('#w').prop('disabled', true);
            }else{
                $('#w').prop('disabled', false);
            }
        }, 200);