function getData(){

  var codeRCS = $("#RCS").val().replace(/\s+/g, '');
  console.log(codeRCS)

  $.getJSON("https://entreprise.data.gouv.fr/api/rncs/v1/fiches_identite/" + codeRCS,function(dataRCS){

  var NAMESOC = dataRCS.dossier_entreprise_greffe_principal.personne_morale.denomination;
  var TYPSOC = dataRCS.dossier_entreprise_greffe_principal.personne_morale.forme_juridique;
  var CAPITAL = Math.round(dataRCS.dossier_entreprise_greffe_principal.personne_morale.capital);
  var ADRESSSOC = dataRCS.dossier_entreprise_greffe_principal.etablissement_principal.adresse_ligne_1 + " - " + dataRCS.dossier_entreprise_greffe_principal.etablissement_principal.adresse_code_postal + " - " + dataRCS.dossier_entreprise_greffe_principal.etablissement_principal.adresse_ville;
  var VILLESOC = dataRCS.dossier_entreprise_greffe_principal.nom_greffe;

  $("#NAMESOC").val(NAMESOC);
  $("#TYPSOC").val(TYPSOC);
  $("#VILLESOC").val(VILLESOC);
  $("#CAPITAL").val(CAPITAL);
  $("#ADRESSSOC").val(ADRESSSOC);

})
.fail(
function(){
  console.log("error noooon");
  alert("Le code RCS entré n'est pas reconnu, veuillez complétez les champs manuellement");

})
.always(
  function(){
  $("#NAMESOC").prop("disabled", false)
  $("#TYPSOC").prop("disabled", false)
  $("#VILLESOC").prop("disabled", false)
  $("#CAPITAL").prop("disabled", false)
  $("#ADRESSSOC").prop("disabled", false)
})
}

$(document).ready(function(){
    $('#Materiel').change(function(){
        if(this.checked)
            $('#Livraison').show(),
            document.forms["FormGlobal"]["Livraison_1"].required = true ;
        else
            $('#Livraison').hide(),
            document.forms["FormGlobal"]["Livraison_1"].required = false ;
    });
    $('#DomTom').change(function(){
        if(this.checked)
            $('#livraison_inter').show();
        else
            $('#livraison_inter').hide();
    });
    $('#UE').change(function(){
        if(this.checked)
            $('#livraison_inter').show();
        else
            $('#livraison_inter').hide();
    });
    $('#Boutique').change(function(){
        if(this.checked)
            $('#boutique_hide').fadeIn('fast'),
            document.forms["FormGlobal"]["H1"].required = true,
            document.forms["FormGlobal"]["H2"].required = true;

        else
            $('#boutique_hide').fadeOut('fast'),
            document.forms["FormGlobal"]["H1"].required = false,
            document.forms["FormGlobal"]["H2"].required = false;
    });
    $('#Materiel').change(function(){
        if(this.checked)
        document.forms["FormGlobal"]["Immateriel"].required = false;
      else
        document.forms["FormGlobal"]["Immateriel"].required = true;
    });
    $('#Immateriel').change(function(){
        if(this.checked)
        document.forms["FormGlobal"]["Materiel"].required = false;
      else
        document.forms["FormGlobal"]["Materiel"].required = true;
    });
    $('#Paypal').change(function()||$('#CB').change(function()||$('#Virement').change(function()||$('#Chèque').change(function()  {
        if(this.checked)
        document.forms["FormGlobal"]["Paypal"].required = false,
        document.forms["FormGlobal"]["CB"].required = false,
        document.forms["FormGlobal"]["Chèque"].required = false,
        document.forms["FormGlobal"]["Virement"].required = false;
      else
      document.forms["FormGlobal"]["Paypal"].required = true,
      document.forms["FormGlobal"]["CB"].required = true,
      document.forms["FormGlobal"]["Chèque"].required = true,
      document.forms["FormGlobal"]["Virement"].required = true;
    });
    $("#RCS").focusout(function(){
      getData();
    })
});
$(document).keypress(
  function(event){
    if (event.which == '13') {
      event.preventDefault();
    }
});
