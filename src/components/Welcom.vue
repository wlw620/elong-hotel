
<style media="screen">

.hide-welcome {
    opacity:0;
    position: absolute;
    animation:mymove 1s infinite;
    -webkit-animation:mymove 1s infinite;
    animation-iteration-count:1;
    -webkit-animation-iteration-count:1; /* Safari 和 Chrome */
}

@keyframes mymove {
    from {opacity:100;}
    to {opacity:0;}
}

@-webkit-keyframes mymove {
    from {opacity:100;}
    to {opacity:0;}
}
</style>

<template lang="html">

<div class="welcome" v-bind:class="{'hide-welcome':!isShow}" @click="hideWelcom">
    <div class="from-text">
        <p class="tips">海量库存来自众多供应商，包括：</p>
        <p>艺龙、携程、去哪儿</p>
        <p>Booking、Agoda、Expedia…</p>
    </div>
    <div class="copy">
        <p>本服务由艺龙提供，相关服务和责任将由艺龙承担，</p>
        <p>如有问题请咨询该公司客服。</p>
    </div>
</div>

</template>

<script>



export default {
    data: function() {
        return {
            timer: null,
            isShow: true
        }
    },
    methods: {
        hideWelcom: function(){
            clearTimeout(this.timer);
            this.isShow = false;
        }
    },
    ready: function() {
        var _this = this;
        this.timer = setTimeout(function(){_this.isShow = false;},5000);
    }
}

</script>
