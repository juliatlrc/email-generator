 function gerar() {
        
        var opcoes = ["!", "#", "_", "#", "%", "&", "*"];
        var escolha = Math.floor(Math.random() * opcoes.length);
        var sorteia = Math.floor(Math.random() * 100);

        let campo = document.getElementById("campo").value;
        let campo2 = document.getElementById("campo2").value;
        
        if (campo.length != 0) {
        
            if (escolha == 0) {
                document.getElementById("resultado").innerHTML = "O email gerado foi " + campo + "!" + campo2 + sorteia + "@example.com";
            } else if (escolha == 1) {
                document.getElementById("resultado").innerHTML = "O email gerado foi " + campo + "#" + campo2 + sorteia + "@example.com";
            } else if (escolha == 2) {
                document.getElementById("resultado").innerHTML = "O email gerado foi " + campo + "_" + campo2 + sorteia + "@example.com";
            } else if (escolha == 3) {
                document.getElementById("resultado").innerHTML = "O email gerado foi " + campo + "#" + campo2 + sorteia + "@example.com";
            } else if (escolha == 4) {
                document.getElementById("resultado").innerHTML = "O email gerado foi " + campo + "&" + campo2 + sorteia + "@example.com";
            } else {
                document.getElementById("resultado").innerHTML = "O email gerado foi " + campo + "*" + campo2+sorteia + "@example.com";
            }
        
        } else {
            document.getElementById("resultado").innerHTML = "ERRO: Os campos precisam ser preenchidos corretamente";
        }
    }