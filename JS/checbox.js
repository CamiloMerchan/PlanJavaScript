$(document).ready(function () {
    $("#formposicionjugadores").validate({
            rules: {
                "filtros[]": {required: true}
            },
            messages: {
                "filtros[]": "Debe escoger un sector obligatoriamente."
            },
            errorLabelContainer: $('#consolaerror')
    });
});