<template>
    <div>
        <nav class="footer-nav">
            <router-link v-for="(item, index) in navRoutes" :key="index" :class="{'footer-nav-item': true, 'active': index === selected}" :to="item.path" v-text="item.text" tag="li">
            </router-link>
        </nav>
        <transition name="slide-left">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'FooterNav',
        props: [
            'selected',
            'navRoutes'
        ],
        data: () => ({

        }),
        mounted: function() {
            this.$nextTick(function() {
                const thisPath = this.$route.path;
                this.navRoutes.map((item, index) => {
                    if(item === thisPath) {
                        this.currentIndex = index;
                    }
                });
            });
        },
        computed: mapState({
            count () {
                return this.$store.state.count;
            }
        }),
        methods: {
            mounted () {
                console.log(lib); // eslint-disable-line
            },
            increment () {
                this.fechData();
                this.$store.commit('increment');
            },
            decrement () {
                this.$store.commit('decrement');
            },
            fechData () {
                this.axios.get('//www.douban.com/j/app/radio/channels').then((response) => {
                    console.log(response.data);
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .footer-nav{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
    }
    .footer-nav-item{
        flex: 1;
        cursor: pointer;
    }
</style>
