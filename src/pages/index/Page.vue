<template>
    <div id="page" class="page help">
        <!--<h1 class="title">首页</h1>-->
        <!--<p class="content">这是首页，测试一下</p>-->

        <!--&lt;!&ndash; 从而把每一个单页组织起来，形成一个多个单页组成的多页应用 &ndash;&gt;-->
        <!--<a class="link" href="//www.test.com/help">help</a>-->
        <!--<a class="link" href="//www.test.com/wallet">wallet</a>-->

        <footer-nav :selected="selected" :nav-routes="navRoutes"></footer-nav>
    </div>
</template>

<script>
    import FooterNav from "@/commonComponents/FooterNav/main.vue"
    export default {
        name: 'Page',
        components: {
            FooterNav
        },
        data() {
            return {
                selected: 0,
                navRoutes: [
                    {
                        path: '/addUser',
                        text: '添加用户'
                    },
                    {
                        path: '/publishStatus',
                        text: '发布状态'
                    }
                ]
            }
        }
    }
</script>

<style lang="less">
    @import '../../styles/common.less';

    .page {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0;
    }

    .title {
        padding: 20px;
        text-align: center;
        font-size: 18px;
    }

    .content {
        padding: 0;
        font-size: 14px;
    }

    .link {
        display: block;
        padding: 5px;
        align-items: center;
        justify-content: center;

    }
</style>
