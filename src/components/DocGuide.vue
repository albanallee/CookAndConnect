<template>
    <div class="stape">
        <h3>Les étapes de l'installation</h3>
            <ul>
            <li>Accédez a cette page avec votre téléphone</li>
            <li>Cliquez "Télécharger l'application"</li>
            <li>Lancez le fichier téléchargé</li>
            <li>Si une pop up "Installation depuis source inconnue" apparait : Selectionnez "Parametres" sur la pop up > Puis cocher la case "Activer sources inconnues"</li>
            <img :src="require('@/assets/source_inconnue.jpg')" />
            <li>Cliquez "Installer"</li>
            <li>Votre application apparait désormais dans votre menu et vous pouvez désormais en profiter</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'DocGuide',
    data () {
        return {

        }
    }
}
</script>

<style scoped lang="less">
.stape {
    margin: 4rem 0rem;
}
</style>