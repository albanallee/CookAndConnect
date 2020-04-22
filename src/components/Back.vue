<template>
    <div style="display: flex;">
        Bam !{{password}}
    </div>
</template>

<script>
export default {
    name: 'Back',
    computed: {
        password () {
        return this.$store.state.password
        }
    },
    methods: {
        setPassword(password) {
        console.log(password);
        this.$store.commit('setPassword', password)
        }
    }
};
</script>

<style>

</style>