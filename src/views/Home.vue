<template>
    <div class="app">
        <div class="header">
            Header
            <div class="test-i18n">
                {{$t('I18NCommon.Test')}}
            </div>
            <div class="test-vuex">
                State: {{testVuex}}
                Getters: {{}}
            </div>
            <GlobalComponent />
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
        <div class="footer">
            Footer
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters,
        testVuex() {
            return this.$store.state.test;
        }
    },
    methods: {
        ...mapGetters
    }
}
</script>

<style lang="scss" scoped>

</style>
