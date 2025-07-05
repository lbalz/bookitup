<script setup>
    import '../assets/styles/_variables.css';
    import { useI18n } from 'vue-i18n';
    const { locale } = useI18n();

    const currentLocale = locale.value;

    function changeLocale(event) {
        locale.value = event.target.value;
    }
</script>

<template>
    <header>
        <h3>Bookitup</h3>

        <nav>
            <a href="">{{ $t('header.aboutUs') }}</a>
        </nav>
    </header>

    <!--TODO: Von select in DE | EN ändern -->
    <!--TODO: Ein paar farben und schriftart raussuchen -->
    <select v-model="currentLocale" @change="changeLocale">
        <option value="de">Deutsch</option>
        <option value="en">English</option>
    </select>
</template>

<style scoped>
    

</style>
