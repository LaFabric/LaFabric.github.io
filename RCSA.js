function getData(){
  var codeRCS =   $("#RCS").val();

  $.getJSON("https://entreprise.data.gouv.fr/api/rncs/v1/fiches_identite/" + codeRCS,function(dataRCS){

  var NAMESOC = dataRCS.dossier_entreprise_greffe_principal.etablissements[1].nom_commercial;
  var TYPSOC = dataRCS.dossier_entreprise_greffe_principal.personne_morale.forme_juridique;
  var CAPITAL = Math.round(dataRCS.dossier_entreprise_greffe_principal.personne_morale.capital);
  var ADRESSSOC = dataRCS.dossier_entreprise_greffe_principal.etablissements[0].adresse_ligne_1 + " - " + dataRCS.dossier_entreprise_greffe_principal.etablissements[0].adresse_code_postal + " - " + dataRCS.dossier_entreprise_greffe_principal.etablissements[0].adresse_ville;
  var VILLESOC = dataRCS.dossier_entreprise_greffe_principal.nom_greffe;

  $("#NAMESOC").val(NAMESOC);
  $("#TYPSOC").val(TYPSOC);
  $("#VILLESOC").val(VILLESOC);
  $("#CAPITAL").val(CAPITAL);
  $("#ADRESSSOC").val(ADRESSSOC);

})
.fail(
function(){
  console.log("error noooon")

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
            $('#Livraison').show();
        else
            $('#Livraison').hide();
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
            $('#boutique_hide').fadeIn('fast');
        else
            $('#boutique_hide').fadeOut('fast');
    });
    $("#RCS").focusout(function(){
      getData();
    })
    $("#RCS").keypress(
      function(event){
        if (event.which == '13') {
      getData();
      }
    })
});
$(document).keypress(
  function(event){
    if (event.which == '13') {
      event.preventDefault();
    }
});
