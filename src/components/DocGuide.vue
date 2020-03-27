<template>
        <div class="stape">
            <h1>Cook&Connect</h1>
            <div class="real-stape">
            <h3>Les étapes de l'installation</h3>
                <ul>
                    <li>Accédez a cette page avec votre téléphone</li>
                    <li>Cliquez "Télécharger l'application"</li>
                    <li>Lancez le fichier téléchargé</li>
                    <li>Si une pop up "Installation depuis source inconnue" apparait : Selectionnez "Parametres" sur la pop up > Puis cocher la case "Activer sources inconnues"
                        <a href="#"  data-toggle="popover" data-img="" title="Source inconnue" >Exemple en image</a>
                    </li>
                    <li>Cliquez "Installer"</li>
                    <li>Votre application apparait désormais dans votre menu et vous pouvez désormais en profiter</li>
                </ul>
            </div>
            
        </div>
</template>

<script>
$(document).ready(function(){
	 $('[data-toggle="popover"]').popover({
          //trigger: 'focus',
		  trigger: 'hover',
          html: true,
          content: function () {
				return '<img class="img-fluid" :src=" require(\'@/assets/source_inconnue.jpg\')" />';
          },
          title: 'Toolbox'
    }) 
});
export default {
    name: 'DocGuide',
    data () {
        return {
        }
    }
}
</script>

<style scoped lang="less">
h1 {
    text-align: center;
	font-size: 64px;
  font-weight: normal;
  padding: 1rem 0rem;
  background-color: #c4ad99;
  color: #ecedf1;
}
.real-stape {
    padding-top: 2rem;
    text-align: left;
    > h3 {
        text-align: center;
    }
    > ul {
        list-style: circle;
    } 
}
</style>